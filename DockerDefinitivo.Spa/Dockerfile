FROM node:13-alpine AS build

ENV HOME=/app

RUN npm install -g @angular/cli@9.1.0


COPY package.json package-lock.json /app/
WORKDIR /app
#RUN ls 
RUN npm install
# --silent --progress=false
#RUN npm install
# --silent --progress=false
ADD ./ /app/
#ADD ./ /app/
RUN ng build  --prod --base-href /angular/
#RUN npm run ng build -- --deploy-url=/angular/ --prod




#RUN cd $HOME
 

FROM nginx:1.17-alpine as FINAL

ADD ./nginx.conf /etc/nginx/
COPY --from=build /app/dist/docker-defenitivo-spa/ /usr/share/nginx/html
#COPY --from=build /home/app/angular/dist/docker-defenitivo-spa/ /usr/share/nginx/html
