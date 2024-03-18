# USING NODE 20.11.1 LTS
FROM node:20.11.1-alpine3.19

# SET WORKDIR
WORKDIR /srv/app

# COPY SOURCE FILES
COPY . .

# RUN ENTRYPOINT
ENTRYPOINT [ "sh", "/srv/app/dev.entrypoint.sh" ]
