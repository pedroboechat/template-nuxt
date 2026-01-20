# USING NODE 24.13.0 LTS
FROM node:24.13.0-trixie

# SET WORKDIR
WORKDIR /srv/app

# COPY SOURCE FILES
COPY . .

# RUN ENTRYPOINT
ENTRYPOINT [ "sh", "/srv/app/dev.entrypoint.sh" ]
