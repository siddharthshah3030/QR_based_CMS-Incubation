from rest_framework.response import Response
from rest_framework.decorators import *
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token
from rest_framework.permissions import *

from django.contrib.auth import authenticate
import json
from .models import *
from django.utils import timezone
from datetime import timedelta


@api_view(['get'])
def ListResourcesView(req):
    resources = Resource.objects.all()
    resources = ResourceSerializer(data=resources, many=True)

    resources.is_valid()
    return Response(resources.data)


@api_view(['post'])
def BookItemView(req):
    data = JSONParser().parse(req)

    offset = data.get('offset')
    rid = data.get('rid')
    days = data.get('days')
    start_time = timezone.now() + timedelta(days=offset)
    end_time = start_time + timedelta(days=days)

    try:
        item = Item.objects.get(pk=rid)
        item.start_time = start_time
        item.end_time = end_time
        item.authorised = True
        item.user = req.user.id
        item.save()

        sitem = ItemSerializer(item)
        # sitem.is_valid()

        return Response(sitem.data)
    except:
        return Response({
            'error': True
        })
