from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('', include('works.urls')),
    path('blogs/', include('blogs.urls')),
    path('projects/', include('projects.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('blogs.api.urls'))
]