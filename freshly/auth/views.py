from django.contrib.auth import logout
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import RegistrationForm


# Create your views here.
def register(request):
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "user registered succesfuly")
            return redirect("registration")
    else:
        form = RegistrationForm()
    return render(request, "auth/register.html", {"form": form})


def custom_logout_view(request):
    if request.method == "POST" or request.method == "GET":
        logout(request)
        return render(request, "auth/logout.html")
    else:
        return redirect("login")
