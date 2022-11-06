FROM node:14 AS front-builder

ENV NODE_ENV production

WORKDIR /client
COPY . .

RUN yarn && yarn build

FROM golang:1.17.3-alpine3.14 AS back-builder

WORKDIR /server
COPY ./server ./

RUN go build -o bin/main main.go

FROM alpine:latest

WORKDIR /root/

COPY --from=0 /client/build ./build
COPY --from=1 /server/bin/main .

EXPOSE 3000

CMD ["./main"]