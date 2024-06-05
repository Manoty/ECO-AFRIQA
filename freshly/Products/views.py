from django.shortcuts import render

def products(request):
    return render(request, 'Products/products.html')

def add_products(request):
    return render (request, 'Products/add_products.html')

def update_products(request):
    return render(request, 'Products/update_products.html')
