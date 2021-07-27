const mix = require('laravel-mix');

mix.js('scr/js/app.js', 'dist/js')
    .js('scr/js/main.js', 'dist/js')
    .js('scr/js/jquery.min.js', 'dist/js')
    .js('scr/js/chartjs.init.js', 'dist/js')
    .js('scr/js/chartjspen.init.js', 'dist/js')
    .js('scr/js/chartjdemok.init.js', 'dist/js')
    .js('scr/js/Chart.min.js', 'dist/js')    
    .sass('scr/sass/app.scss', 'dist/css')
    .sass('scr/sass/vilages.scss', 'dist/css')
    .sass('scr/sass/Village-Burai.scss', 'dist/css')
    .sass('scr/sass/Village-Meranjat.scss', 'dist/css')
    .sass('scr/sass/Village-Sako.scss', 'dist/css')
    .sass('scr/sass/Wisata-Village.scss', 'dist/css')
    .sass('scr/sass/Berita-Village.scss', 'dist/css')
    .sass('scr/sass/Produk-Village.scss', 'dist/css')
    .sass('scr/sass/Layanan-Village.scss', 'dist/css')
    .sass('scr/sass/About-Us.scss', 'dist/css')
    .sass('scr/sass/Surat-Online.scss', 'dist/css')
    .sass('scr/sass/Pengaduan-Desa.scss', 'dist/css')
    .sass('scr/sass/Daftar-Penerima-Bantuan.scss', 'dist/css')
    .sass('scr/sass/Map-Village.scss', 'dist/css')
    .sass('scr/sass/Health-Village.scss', 'dist/css')
    .sass('scr/sass/Pupulation-Village.scss', 'dist/css')
    .sass('scr/sass/Education-Village.scss', 'dist/css')
    .sass('scr/sass/bootstrap.min.scss', 'dist/css');


    