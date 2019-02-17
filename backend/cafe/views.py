from rest_framework.response import Response
from rest_framework.decorators import *
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token
from rest_framework.permissions import *
from django.utils import timezone

from .models import *
from users.models import *
from rest_framework.viewsets import ModelViewSet


class ItemViewset(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class CategoryViewset(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class OrderViewset(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderItemsViewset(ModelViewSet):
    queryset = Order_items.objects.all()
    serializer_class = OrderItemsSerializer