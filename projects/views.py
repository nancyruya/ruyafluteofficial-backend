from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'projects/index.html')

def project(request):
    return render(request, 'projects/project.html')

def search(request):
    return render(request, 'projects/search.html')