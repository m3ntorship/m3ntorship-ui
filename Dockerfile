FROM node:14-alpine3.15
WORKDIR /app
COPY storybook-static .
RUN yarn global add serve
EXPOSE 3000
CMD ["serve", "."]