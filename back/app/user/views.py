from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import get_token, ensure_csrf_cookie
# from django.views.decorators.csrf import ensure_csrf_cookie
import os
import json
import psycopg2

# Create your views here.

@ensure_csrf_cookie
def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrf_token': csrf_token})

def login(request):
    print(request.body)
    response = HttpResponse("OK")
    print(response.content)
    return(response)

def register(request):
    form = json.loads(request.body)
    print(form)
    conn = psycopg2.connect(host="database", port="5432", dbname="postgres", user="postgres", password=os.environ['POSTGRES_PASSWORD'])
    with conn.cursor() as curs:
        curs.execute(f"""
                     INSERT INTO users VALUES ('{form['username']}', '{form['password']}')
                     """)
    print("username and password added")
    conn.commit()
    conn.close()
    return HttpResponse("OK")
