from django.urls import path
from .views import *

urlpatterns = [
    path('signup/', SignupView),
    path('login/', LoginView),
    # path('new_profile/', NewProfileView),
    # path('profile_pic/', ProfilePicView),
]