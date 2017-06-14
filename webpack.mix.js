let mix = require('laravel-mix').mix;

mix.js('assets/js/app.js', 'dist/js')
    .sass('assets/scss/style.scss', 'dist/css')
    .copyDirectory('assets/fonts', 'dist/fonts')
    .copyDirectory('assets/img', 'dist/img');

mix.browserSync();
