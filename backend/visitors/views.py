from rest_framework.response import Response
from rest_framework.decorators import *
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token
from rest_framework.permissions import *
from django.utils import timezone

from .models import *
from users.models import *


@api_view(['post'])
def VisitorEnterView(req):
    data = JSONParser().parse(req)
    visitor = User.objects.get(pk=data.get("vid"))

    visitor = Visitor.objects.create(
        visitor_name=visitor.username,
        visitor_id=visitor.id,
        enter_r_exit='enter',
        time=timezone.now(),
        by=req.user.id
    )
    sv = VisitorSerializer(visitor)
    return Response(sv.data)


@api_view(['post'])
def VisitorExitView(req):
    data = JSONParser().parse(req)
    visitor = User.objects.get(pk=data.get("vid"))

    visitor = Visitor.objects.create(
        visitor_name=visitor.username,
        visitor_id=visitor.id,
        enter_r_exit='exit',
        time=timezone.now(),
        by=req.user.id
    )
    sv = VisitorSerializer(visitor)
    return Response(sv.data)


@api_view(['get'])
def VisitorListView(req):
    visitor = Visitor.objects.all()[::-1]

    sv = VisitorSerializer(visitor, many=True)
    return Response(sv.data)
