release: npm install --production=false && npm run build && php artisan migrate --force && npm prune --production
web: vendor/bin/heroku-php-apache2 public/
