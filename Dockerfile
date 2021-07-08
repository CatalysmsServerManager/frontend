# pull official base image
FROM node:16-alpine as builder


# set working directory
WORKDIR /app
RUN chown node:node /app
USER node


ARG package_name
RUN echo "Buildingg $package_name"
ARG REACT_APP_API

COPY --chown=node:node package*.json ./
COPY --chown=node:node lerna.json ./
COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node .eslintrc.js ./


RUN mkdir ./packages
# Copy the shared lib package for every build
COPY --chown=node:node ./packages/ui ./packages/ui
# Copy only the package we want to build
COPY --chown=node:node ./packages/${package_name} ./packages/${package_name}

RUN npx lerna bootstrap --hoist

WORKDIR /app/packages/${package_name}

ENV SKIP_PREFLIGHT_CHECK=true
ENV REACT_APP_API="$REACT_APP_API"

RUN npm run build

# Place build files in an easy to find location :)
RUN cp -r ./build /app/build

FROM node:16-alpine as runtime

RUN npm i -g serve
USER node

WORKDIR /app

COPY --from=builder /app/build .

EXPOSE 5000

# TODO: pm2 ?
CMD [ "serve", "--single" ]