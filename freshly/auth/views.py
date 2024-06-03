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
            return redirect("registration-url")
    else:
        form = RegistrationForm()
    return render(request, "auth/register.html", {"form":form})
