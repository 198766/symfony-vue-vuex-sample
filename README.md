# Symfony + Vue.js + Vuex sample

## Requirements

* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Node.ss and npm](https://nodejs.org/en/)

## Local installation

* Clone source code to local computer: `git clone https://github.com/umbrella-web/symfony-vue-vuex-sample.git symfony-vue-vuex-sample`
* Start application in docker: `cd symfony-vue-vuex-sample && docker-compose up -d`
* Install vendors packages vie Composer: `docker-compose exec app bash -c "cd src/vuesmf/ && composer install"`
* Install nodejs modules: `cd src/vuesmf/src/AppBundle/Resources/frontend/ && npm install`
* Build front-end application: `npm run build`
* Return to base project folder: `cd ../../../../../../`
* Install assets for Symfony: `docker-compose exec app bash -c "cd src/vuesmf/ && php app/console assets:install"`
* Clear cache for Symfony: `docker-compose exec app bash -c "cd src/vuesmf/ && php app/console cache:clear --env=prod"`
* Open application in browser: [http://localhost:8080/](http://localhost:8080/)

## Basic commands

* Start application: `docker-compose up -d`
* Stop application: `docker-compose down`

## Additional commands

* Install vendors packages vie Composer: `docker-compose exec app bash -c "cd src/vuesmf/ && composer install"`
* Install assets: `docker-compose exec app bash -c "cd src/vuesmf/ && php app/console assets:install"`
* Cache clear: `docker-compose exec app bash -c "cd src/vuesmf/ && php app/console cache:clear --env=prod"`

## Additional information

Local URL for testing: http://localhost:8080/

You can change ports or other configuration in `docker-compose.yml` file