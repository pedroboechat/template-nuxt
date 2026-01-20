# USING NODE 24.13.0 LTS
FROM node:24.13.0-trixie

# SET WORKDIR
WORKDIR /srv/app

# COPY PACKAGE.JSON
COPY package.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .

# INSTALL DEPENDENCIES
RUN pnpm install

# COPY SOURCE FILES
COPY . .

# RUN ENTRYPOINT
ENTRYPOINT [ "sh", "/srv/app/prod.entrypoint.sh" ]
