from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'blogs/index.html')

def blog(request):
    return render(request, 'blogs/blog.html')

def search(request):
    return render(request, 'blogs/search.html')