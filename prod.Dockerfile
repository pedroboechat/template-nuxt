# USING NODE 20.17.0 LTS
FROM node:20.17.0-alpine3.20

# SET WORKDIR
WORKDIR /srv/app

# COPY PACKAGE.JSON
COPY package.json .

# INSTALL DEPENDENCIES
RUN yarn install

# COPY SOURCE FILES
COPY . .

# RUN ENTRYPOINT
ENTRYPOINT [ "sh", "/srv/app/prod.entrypoint.sh" ]
