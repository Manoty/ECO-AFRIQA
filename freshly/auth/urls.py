from django.urls import path
from . import views as my_views

urlpatterns = [
    path('register/', my_views.register, name='registration-url'),
]
