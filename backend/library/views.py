from rest_framework.response import Response
from rest_framework.decorators import *
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token
from rest_framework.permissions import *
from django.utils import timezone

from .models import *
from users.models import *


@api_view(['get'])
def BooksListView(req):
    genres = Genre.objects.all()
    genres = GenreSerializer(genres, many=True).data

    return Response(genres)


@api_view(['post'])
def BooksRentView(req):
    data = JSONParser().parse(req)
    books = data.get('books')
    for x in books:
        book = Book.objects.get(pk=x)
        # book.rented = Book.objects.get(k=)

    return Response(genres)
