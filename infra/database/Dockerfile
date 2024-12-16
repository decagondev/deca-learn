FROM postgres:latest

ENV POSTGRES_USER=devuser
ENV POSTGRES_PASSWORD=devpassword
ENV POSTGRES_DB=devdb
COPY schema.sql /docker-entrypoint-initdb.d/schema.sql

EXPOSE 5432
