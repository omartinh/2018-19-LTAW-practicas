from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^shirts', views.shirts_view),
    url(r'^hoodies', views.hoodies_view),
    url(r'^accessories', views.accessories_view),
    url(r'^index', views.home_view),
]
