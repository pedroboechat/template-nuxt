# USING NODE 20.11.1 LTS
FROM node:20.11.1-alpine3.19

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
