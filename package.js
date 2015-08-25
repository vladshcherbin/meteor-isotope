Package.describe({
  name: 'shcherbin:isotope',
  version: '2.2.2',
  summary: 'Isotope js wrapper for meteor. Masonry, packery and other layouts. Filtering and sorting.',
  git: 'https://github.com/VladShcherbin/meteor-isotope',
  documentation: 'readme.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('jquery', 'client');
  api.addFiles([
    'vendor/dist/isotope.pkgd.js'
  ], 'client');
});