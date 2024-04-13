FROM nginx:1.25.4

RUN mkdir app
# COPY app /app

COPY transcendence.conf /etc/nginx/nginx.conf
RUN rm -rf /etc/nginx/sites-enabled/default

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
-keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt \
-subj "/CN=pong.42.fr"

CMD ["nginx", "-g", "daemon off;"]
