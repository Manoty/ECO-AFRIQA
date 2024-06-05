from django.contrib import admin
from django.urls import path, include
from . import views as my_views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("main.urls"), name='home'),
    path('auth/', include('auth.urls')),
    path("__debug__/", include("debug_toolbar.urls")),
    
]
