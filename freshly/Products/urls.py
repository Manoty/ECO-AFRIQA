from django.urls import path
from . import views as my_views

urlpatterns = [
    path("", my_views.products, name="products-url"),
    path("add-products/", my_views.add_products, name="add-products-url"),
]
