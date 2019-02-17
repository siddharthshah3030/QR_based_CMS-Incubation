from rest_framework import serializers
from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='genre', null=True)
    description = models.TextField(default='')

    def __str__(self):
        return self.name


class Book(models.Model):
    genre = models.ForeignKey(
        Genre,
        related_name='books',
        on_delete=models.CASCADE
    )
    name = models.CharField(max_length=500)
    author = models.CharField(max_length=500)
    isbn = models.CharField(max_length=500)
    img = models.ImageField(upload_to='books', null=True)
    description = models.TextField(default='')
    rented = models.BooleanField(default=False)
    approved = models.BooleanField(default=False)
    reader = models.IntegerField(default=0)
    

    def __str__(self):
        return self.name


class BookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = '__all__'


class GenreSerializer(serializers.ModelSerializer):
    books = BookSerializer(many=True)

    class Meta:
        model = Genre
        fields = '__all__'
