from rest_framework import serializers
from django.db import models


class Resource(models.Model):
    category = models.CharField(max_length=100)
    img = models.ImageField(null=True)
    description = models.TextField()

    def __str__(self):
        return self.category


class Item(models.Model):
    resource = models.ForeignKey(
        Resource,
        on_delete=models.CASCADE,
        related_name='items'
    )
    name = models.CharField(max_length=100)
    user = models.IntegerField(default=0)
    price = models.FloatField(default=10)
    booked = models.BooleanField(default=False)
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(auto_now_add=True)
    description = models.TextField(default='')
    instructions = models.TextField(default='')
    img = models.ImageField(null=True, upload_to='item')
    authorised = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class ResourceSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)

    class Meta:
        model = Resource
        fields = '__all__'
