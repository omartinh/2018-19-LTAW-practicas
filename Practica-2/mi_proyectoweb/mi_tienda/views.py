# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import Shirts
from mi_tienda.models import Hoodies
from mi_tienda.models import Accessories

# Create your views here.
def home_view (request):
    return render(request, "index.html", {'user':'client'})

def shirts_view(request):
    shirt = Shirts.objects.all()
    return render(request,"shirts.html", {'products': shirt})

def hoodies_view(request):
    hoodies = Hoodies.objects.all()
    return render(request,"hoodies.html", {'products': hoodies})

def accessories_view(request):
    accessories = Accessories.objects.all()
    return render(request,"accessories.html", {'products': accessories})
