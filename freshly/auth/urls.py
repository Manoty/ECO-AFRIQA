from django.urls import path
from . import views as my_views
from django.contrib.auth import logout
from django.contrib.auth import views as auth_views


urlpatterns = [
    path("register/", my_views.register, name="registration"),
    path(
        "login/",
        auth_views.LoginView.as_view(template_name="auth/login.html"),
        name="login",
    ),
    path("logout/", my_views.custom_logout_view, name="logout"),
]
