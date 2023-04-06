from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework.generics import ListAPIView
from .models import User
from django.db import connection
from django.shortcuts import render
import requests
from django.http import HttpResponse
from . import models
from sqlite3 import Cursor
import snowflake.connector
import os
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import rsa 
from cryptography.hazmat.primitives.asymmetric import dsa
from cryptography.hazmat.primitives import serialization
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


class UserList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@csrf_exempt
def establishConn(request):
    if request.method == "POST":
        details = request.POST
        user = details['username']
        account = details['account']
        warehouse = details['warehouse']
        database = details['database']
        role = details['role']
        schema = details['schema']
        # auth = details['auth']
    with open("D:/CDK/Final_Project/bk/RESTAPI/rsa_key.p8", "rb") as key:

            p_key = serialization. load_pem_private_key(
                key.read(),
                password ="chaitanyapv".encode(),
                backend=default_backend()
            )

    pkb = p_key.private_bytes(

            encoding =serialization.Encoding.DER,
            format =serialization.PrivateFormat.PKCS8,
            encryption_algorithm= serialization. NoEncryption())

    ctx = snowflake.connector.connect(
                    user= user, 
                    account= account,
                    private_key=pkb, 
                    warehouse = warehouse,
                    database = database,
                    role = role,
                    schema = schema)

    return ctx

def dictfetchall(cursor):
    desc = cursor.description
    return[
            dict(zip([col[0] for col in desc], row ))
            for row in cursor.fetchall()
    ]
 
def column_names(request):

    ctx = establishConn(request)
    result = ctx.cursor().execute('show columns')
    a = dictfetchall(result)
    col_names = []
    for item in a: 
        init_colname = item['column_name']
        col_names.append(init_colname)
    return col_names


def table_names(request):
    
    ctx = establishConn(request)
    result1 = ctx.cursor().execute('show tables')
    tab = dictfetchall(result1)
    tab_names = []
    for item in tab: 
        init_tabname = item['name']
        tab_names.append(init_tabname)
    return tab_names

def snowflakeconn(request):
        ctx = establishConn(request)
        cs = ctx.cursor()
        col_names = column_names()
        tab_names = table_names()
        
        context = {
            'columns' : col_names,
            'tables' : tab_names
        }
        return JsonResponse(context)

@csrf_exempt
def getreq(request):
        if request.method == 'POST':
            details = request.POST
            if details['columns'] == '':
                if details['where'] == '':
                    ctx = establishConn(request)
                    query = 'select * from movie'
                    result = ctx.cursor().execute(query)

                    datas = dictfetchall(result)
                    data = { 
                    'result' : datas
                    }
                    return JsonResponse(data)
                    
                else:                
                    ctx = establishConn(request)
                    str1 = details['where']
                    seprated = str1.split(",")
                    colname = seprated[0]
                    operator = seprated[1]
                    value = seprated[2]
                    query1 = 'select * from movie where'+' ' +colname+' ' + operator+' ' + value
                    print(query1)
                    result1 = ctx.cursor().execute(query1)
                    datas = dictfetchall(result1)
                    data = { 
                    'result' : datas
                    }
                    return JsonResponse(data)
            else:
                ctx = establishConn(request)
                columnNames = details['columns']
                seprated1 = columnNames.split(",")
                print('\n\n\n')
                print(seprated1)
                # n = len(seprated1)
                for names in seprated1:
                     print(names)
                     query2 = 'select '+' ' +names
                query3 = query2 + ' from movie'
                print(query3)
                result2 = ctx.cursor().execute(query3)
                datas = dictfetchall(result2)
                data = { 
                    'result' : datas
                    }
                return JsonResponse(data)

                 
            

