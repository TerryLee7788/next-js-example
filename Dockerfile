# node image
FROM node:12

# 指定路徑
WORKDIR /usr/src/app

# copy 外部的檔案到裡面~
COPY package*.json ./

# 執行指令
# lets you execute commands inside of your Docker image.
# These commands get executed "once" at "build time" and get written into your Docker image as a new layer.
RUN npm install

# copy 外部的檔案到裡面~
COPY . .

# 對外開放的 port
EXPOSE 3000

# 執行指定
RUN npm run build

# docker container run 初始的指令
CMD node server.js
