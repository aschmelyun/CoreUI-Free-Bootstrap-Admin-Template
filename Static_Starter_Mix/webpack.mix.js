let mix = require('laravel-mix').mix;

mix.js('assets/js/app.js', 'dist/js')
   .sass('assets/sass/app.scss', 'dist/css');

mix.browserSync({
    proxy: 'http://acura-product-app.dev',
    host: 'acura-product-app.dev',
    open: 'external',
    ghostMode: false,
    injectChanges: false,
    files: [
        'dist/css/app.css',
        '*.html'
    ]
});
