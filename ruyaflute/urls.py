from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('works.urls')),
    path('blogs/', include('blogs.urls')),
    path('projects/', include('projects.urls')),
    path('admin/', admin.site.urls),
]