let mix = require('laravel-mix').mix;

mix.js('js/app.js', 'dist/js')
    .sass('scss/style.scss', 'dist/css');

mix.browserSync();
