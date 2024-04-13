from django.http import JsonResponse, HttpResponse
from datetime import datetime

# Create your views here.

users = {}

def docs(request):
    return HttpResponse(
        """
        use the endpoint "/connection/<username>" to check the last connection of this user, and update its connection time.\n
        The response returned will contain a json object containing 2 fields:\n
         - is_first_connection: a boolean indicating true if it's the first time this user connected,\n
         - last_connection_time: a string indicating the last time this user connected\n
         """)

def	connection(request, username):
    is_first_connection = False
    last_connection_time = "never connected before"
    if username not in users.keys():
        is_first_connection = True
    else:
        last_connection_time = users[username]
    users[username] = str(datetime.now())

    return JsonResponse(
        {
        'is_first_connection': is_first_connection,
        'last_connection_time': last_connection_time
        }
    )
