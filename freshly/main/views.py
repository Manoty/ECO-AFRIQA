from django.shortcuts import render


def home(request):
    return render(request, "index.html")


def products(request):
    return render(request, "product.html")


def services(request):
    return render(request, "services.html")


def about(request):
    return render(request, "about_us.html")


def blogs(request):
    return render(request, "blog.html")


def contact(request):
    return render(request, "contact.html")


def installation(request):
    return render(request, "installation.html")


def team(request):
    return render(request, "team.html")


def kitchen(request):
    return render(request, "kitchen.html")


def hydroponics(request):
    return render(request, "hydroponics.html")


def Aquaponics(request):
    return render(request, "Aquaponics.html")


def chunnels(request):
    return render(request, "chunnels.html")


def balcon(request):
    return render(request, "balcon_garden.html")


def consultations(request):
    return render(request, "consultations.html")

def sales(request):
    return render(request, "sales.html")
