release: npm install --production=false && npm run build && php artisan migrate --force && npm prune --production
web: vendor/bin/heroku-php-nginx /public
