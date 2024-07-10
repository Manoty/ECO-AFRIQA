from rest_framework import viewsets
from django.shortcuts import render, redirect
from .forms import ProductForm
from .models import Farmer
from django.contrib import messages
from .serializers import FarmerSerializer


def products(request):
    return render(request, "Products/products.html")


def add_products(request):
    if request.method == "POST":
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, "Product saved succesfuly")
            return redirect("add-products-url")
        else:
            messages.error(request, "Product saving error")
            return redirect("add-products-url")

    else:
        form = ProductForm()

    return render(request, "Products/add_products.html", {"form": form})


def update_products(request):
    return render(request, "Products/update_products.html")


class FarmerViewSet(viewsets.ModelViewSet):
    queryset = Farmer.objects.all()
    serializer_class = FarmerSerializer
