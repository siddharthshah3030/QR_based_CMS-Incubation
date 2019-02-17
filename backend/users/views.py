from rest_framework.response import Response
from rest_framework.decorators import *
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token
from rest_framework.permissions import *

from django.contrib.auth import authenticate
from .serializers import *
import json
from .models import *

@api_view(['POST'])
@permission_classes([AllowAny])
def SignupView(req):
    data = JSONParser().parse(req)
    data['user'] = '1'

    user = UserSerializer(data=data)
    profile = ProfileSerializer(data=data)

    uvalid = user.is_valid()
    pvalid = profile.is_valid()
    valid = uvalid and pvalid

    if valid:
        user = User.objects.create_user(
            username=data.get('username'),
            password=data.get('password'),
            email=data.get('email')
        )
        profile = Profile.objects.create(
            user=user.id,
            phone=data.get('phone'),
            user_type=data.get('user_type')
        )

        token = Token.objects.get_or_create(user=user)
        return Response({
            "token": "Token {}".format(token[0].key),
            'id': user.id,
            "user_type": profile.user_type
        })
    else:
        return Response({
            "error": True,
            **user.errors,
            **profile.errors
        })


@api_view(['post'])
@permission_classes([AllowAny])
def LoginView(req):
    data = JSONParser().parse(req)

    user = authenticate(
        username=data.get('username'),
        password=data.get('password')
    )
    
    if user:
        profile = Profile.objects.get(user=user.id)
        token = Token.objects.get_or_create(user=user)
        return Response({
            "token": "Token {}".format(token[0].key),
            "user": profile.user_type,
            'id': user.id
        })

    return Response({
        'error': True
    })