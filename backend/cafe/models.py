from rest_framework import serializers
from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='cafe_category', null=True)
    description = models.TextField(default='')

    def __str__(self):
        return self.name


class Item(models.Model):
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='cafe_item', null=True)
    price = models.FloatField()
    description = models.TextField(default='')
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE,
        related_name='items')
    onstock = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Order(models.Model):
    paid = models.BooleanField(default=False)
    user = models.IntegerField(default=0)


class Order_items(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name='items'
    )
    item_id = models.IntegerField()
    no_of_items = models.IntegerField()


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)

    class Meta:
        model = Category
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class OrderItemsSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)

    class Meta:
        model = Order_items
        fields = '__all__'
