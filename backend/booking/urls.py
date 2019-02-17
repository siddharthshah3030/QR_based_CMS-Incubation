from django.urls import path
from .views import *

urlpatterns = [
    path('list/', ListResourcesView),
    path('book/', BookItemView),
]