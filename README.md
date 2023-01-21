# Pet Catalogue

A REST API built using Laravel and a Frontend application built using Angular.

# Installation and running for the Laravel API:

* Make sure you have PHP installed 
* Download composer https://getcomposer.org/download/
* Rename .env.example file to .envinside your project root and fill the database information (it will suit to use SQLite).
* Run cd to the API root directory
* Run composer install or php composer.phar install
* Run php artisan key:generate
* Run php artisan migrate
* Run php artisan db:seed to run seeders.
* Run php artisan serve

You can now access your API at http://localhost:8000

# Installation and running for the Angular Client:

* Make sure you have node.js and npm installed
* Install angular cli: npm install -g @angular/cli
* Run cd to the Client root directory.
* Run ng serve

You can now access your Client application at http://localhost:4200/
