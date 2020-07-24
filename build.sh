# docker stop $(docker ps -a -q) &&
docker build -t terry/docker-nextjs:0.2 . &&
docker run --name=my-next-js --rm -p 8080:3000 terry/docker-nextjs:0.2
