from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import get_token, ensure_csrf_cookie
# from django.views.decorators.csrf import ensure_csrf_cookie
import os
import psycopg2

# Create your views here.

def leaderboard(request):

    conn = psycopg2.connect(host="database", port="5432", dbname="postgres", user="postgres", password=os.environ['POSTGRES_PASSWORD'])
    usernames = []
    with conn.cursor() as curs:
        curs.execute("""
                     SELECT username FROM users
                     """)
        for username in curs.fetchall():
            usernames.append(username[0])
        print(usernames)
    response_json = {}
    response_json['users'] = []
    nb_users = len(usernames)
    for i, user in enumerate(usernames):
        # user_id = i
        i += 1
        game_count = i * 3
        game_won = i * (i-1)
        win_rate = int(game_won / game_count * 100)
        response_json['users'].append(
            {
                'username': f"user {user}",
                'game_count': f"{game_count}",
                'winrate': f"{game_won} ({win_rate}%)"
            }
        )
    for i in range(5 - nb_users):
        response_json['users'].append(
            {
                'username': "-",
                'game_count': "-",
                'winrate': "-"
            }
        )
    response = JsonResponse(response_json)
    return(response)

