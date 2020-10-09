from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'works/index.html')

def about(request):
    return render(request, 'works/about.html')

def workwithme(request):
    return render(request, 'works/workwithme.html')