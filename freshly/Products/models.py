from django.db import models
from PIL import Image


class Product(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    qtty = models.CharField(max_length=100, blank=False, null=False)
    price = models.CharField(max_length=100, blank=False, null=False)
    desc = models.CharField(max_length=250, blank=False, null=False)
    image = models.ImageField(upload_to="static/images/Products")

    def save(self, *args, **kwargs):
        super(Product, self).save(*args, **kwargs)
        img = Image.open(self.image.path)

        if img.height < 460 or img.width < 340:
            output_size = (460, 340)
            img.thumbnail(output_size)
            img.save(self.image.path)

    def __str__(self):
        return self.name
    
# farmers to keep the database of them 
class Farmer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.name
