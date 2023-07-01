FROM ubuntu:20.04

RUN apt-get update
RUN apt-get install -y nginx

COPY ./fe/build /usr/share/nginx/html

RUN rm /etc/nginx/nginx.conf   
COPY ./nginx/default.conf /etc/nginx/nginx.conf

ENTRYPOINT [ "nginx", "-g", "daemon off;" ] 