from django.db import models
from datetime import datetime

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    content = models.TextField(blank=True)
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    content_1 = models.TextField(blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    content_2 = models.TextField(blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    content_3 = models.TextField(blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    content_4 = models.TextField(blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    content_5 = models.TextField(blank=True)
    photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    content_6 = models.TextField(blank=True)
    submit_date = models.DateField(blank=True)
    url = models.URLField(max_length=200, blank=True)
    def __str__(self):
        return self.title