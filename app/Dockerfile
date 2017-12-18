FROM php:7.1-fpm

RUN apt-get update && \
    apt-get install -y git sqlite3 unzip wget zip

RUN apt-get update \
        && apt-get install -y libicu-dev libpcre3-dev \
        && apt-get install -y libicu-dev build-essential chrpath libssl-dev libxft-dev libfreetype6 libfreetype6-dev \
        && apt-get install -y libfontconfig1 libfontconfig1-dev \
        && docker-php-ext-configure intl \
        && docker-php-ext-install pdo_mysql \
        && docker-php-ext-install opcache \
        && docker-php-ext-install intl

RUN pecl install xdebug
RUN docker-php-ext-enable xdebug

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN apt-get -y autoremove \
    && apt-get clean

COPY php.ini /usr/local/etc/php/php.ini

WORKDIR /var/www/html

EXPOSE 9000

CMD ["php-fpm"]