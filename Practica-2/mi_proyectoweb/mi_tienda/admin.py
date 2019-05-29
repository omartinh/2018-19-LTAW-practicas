# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

#Import models
from mi_tienda.models import Shirts
from mi_tienda.models import Hoodies
from mi_tienda.models import Accessories

# Register your models here.
admin.site.register(Shirts)
admin.site.register(Hoodies)
admin.site.register(Accessories)
