from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("services/", views.services, name="services"),
    path("about/", views.about, name="about"),
    path("blogs/", views.blogs, name="blogs"),
    path("contact/", views.contact, name="contact"),
    path("installation/", views.installation, name="installation"),
    path("consultations/", views.consultations, name="consultations"),
    path("sales/", views.sales, name="sales"),
    path("team/", views.team, name="team"),
    path("hydroponics/", views.hydroponics, name="hydroponics"),
    path("kitchen/", views.kitchen, name="kitchen"),
    path("chunnels/", views.chunnels, name="chunnels"),
    path("balcon/", views.balcon, name="balcon"),
    path("Aquaponics/", views.Aquaponics, name="Aquaponics"),
]
