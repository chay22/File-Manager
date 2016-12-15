var elixir = require('laravel-elixir')

elixir(mix => {
   mix.scripts([
     './src/js/manifest.js',
     './src/js/vendor.js',
     './src/js/app.js',
   ], './src/js/index.js')
})
