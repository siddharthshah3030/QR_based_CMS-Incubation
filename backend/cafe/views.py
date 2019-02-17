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


@api_view(['post'])
def placeOrderView(req):
    data = JSONParser().parse(req)
    order = Order.objects.create(
        user=req.user.id,
    )
    for x in data.get('items'):
        item = Item.objects.get(pk=x.get('id'))
        Order_items.objects.create(
            order=order,
            item=item,
            no_of_items=x.get('amount')
        )

    return Response({})


@api_view(['get'])
def cafeHistoryView(req):
    orders = Order.objects.filter(user=req.user.id)
    orders = OrderSerializer(orders, many=True)
    return Response(orders.data)
