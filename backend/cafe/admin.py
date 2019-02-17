from django.contrib import admin
from .models import *

admin.site.register(Order)
admin.site.register(Item)
admin.site.register(Order_items)
admin.site.register(Category)
