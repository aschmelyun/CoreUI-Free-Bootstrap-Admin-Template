let mix = require('laravel-mix').mix;

mix.js('js/app.js', 'dist/js');

mix.browserSync();
