from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings

from visitors.views import *
from library.views import *
from cafe.views import *

from rest_framework.routers import DefaultRouter
cafe_router = DefaultRouter()
cafe_router.register('item', ItemViewset)
cafe_router.register('category', CategoryViewset)
cafe_router.register('order', OrderViewset)
cafe_router.register('order_items', OrderItemsViewset)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('users.urls')),
    path('api/resources/', include('booking.urls')),
    # visitors
    path('api/visitors/enter/', VisitorEnterView),
    path('api/visitors/exit/', VisitorExitView),
    path('api/visitors/list/', VisitorListView),
    # library
    path('api/library/list/', BooksListView),
    path('api/visitors/rent/', BooksRentView),
    path('api/visitors/list/', VisitorListView),
    # cafe
    path('api/cafe/', include(cafe_router.urls)),

    path('', TemplateView.as_view(template_name='index.html')),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
