Start application: `docker-compose up -d`
Install assets: `docker-compose exec app bash -c "cd src/vuesmf/ && php app/console assets:install"`
Cache clear: `docker-compose exec app bash -c "cd src/vuesmf/ && php app/console cache:clear --env=prod"`
Stop application: `docker-compose down`