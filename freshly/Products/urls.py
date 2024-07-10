from django.urls import path
from . import views as my_views
from Products.views import FarmerViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'farmers', FarmerViewSet)

urlpatterns = [
    path("", my_views.products, name="products-url"),
    path("add-products/", my_views.add_products, name="add-products-url"),
]
