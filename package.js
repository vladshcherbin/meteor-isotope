Package.describe({
  name: 'shcherbin:isotope',
  version: '2.1.1',
  summary: 'Isotope js wrapper for meteor. Different layouts: masonry, packery, fit columns / rows, etc. Filtering and sorting.',
  git: 'https://github.com/VladShcherbin/isotopejs',
  documentation: 'readme.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('jquery', 'client');
  api.addFiles([
    'vendor/dist/isotope.pkgd.js'
  ], 'client');
});