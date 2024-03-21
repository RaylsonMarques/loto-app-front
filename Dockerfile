FROM node:lts AS base
WORKDIR /usr/src/app

ENV ENVIRONMENT=prod

COPY ./frontend ./
COPY ./.env ./.env

RUN npm i -g @angular/cli
RUN npm i -g node-gyp
RUN npm i dsgov-latest.tgz
RUN npm install --legacy-peer-deps

RUN npm run build-prod

FROM nginx:stable-alpine AS nginx
COPY --from=base /usr/src/app/dist /usr/share/nginx/html

CMD ["/bin/sh", "-c", "envsubst '${NGINX_PROXY_HOST_API_CADASTRO} ${NGINX_PROXY_HOST_API_PDF}' < /nginx.conf > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
