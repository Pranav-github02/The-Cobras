from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.UserList.as_view()),
    path('u/', views.snowflakeconn , name = 'snowflakeconn'),
    path('get/', views.getreq , name = 'getreq'),
    path('establish/', views.establishConn , name = 'establish'),

    

]