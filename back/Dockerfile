FROM python:3.10.14

ENV PYTHONUNBUFFERED=1

# Allow to restart workers when code changes
# (for when using bind mount in development mode)
# https://docs.gunicorn.org/en/stable/settings.html#reload
# ENV GUNICORN_CMD_ARGS="--reload"

RUN mkdir /app
# COPY app /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /app

# CMD python3 manage.py runserver 0.0.0.0:8000
# CMD gunicorn --bind 0.0.0.0:8000 back.asgi -w 4 -k uvicorn.workers.UvicornWorker
CMD uvicorn --host 0.0.0.0 --port 8000 --workers 4 --reload back.asgi:application
