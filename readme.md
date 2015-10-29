# Isotope JS Meteor Wrapper

**Table of contents**

- [About](#about)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

## About

[Isotope](http://isotope.metafizzy.co) wrapper for [Meteor](http://meteor.com).

The package includes only core js file of the latest package version.

## Demo

[DEMO with filtering and sorting](http://isotope.meteor.com)

## Installation

```sh
meteor add shcherbin:isotope
```

## Usage

You can view all available options on the [isotope website](http://isotope.metafizzy.co).

## Example

In the example directory you can find an example with filtering and sorting. Basically, what you need to do it to create a template and in a rendered callback to call isotope with options, you can also add events if needed.

### Blaze template

```html
<template name="example">
  <button class="filter-all">All</button>
  <button class="filter-orange">Orange</button>
  <button class="filter-green">Green</button>
  <ul class="isotope">
    <li>
      <div class="orange">1</div>
    </li>
    <li>
      <div class="orange">2</div>
    </li>
    <li>
      <div class="green">3</div>
    </li>
  </ul>
</template>
```

### Client js file

```js
// Init the isotope
Template.example.onRendered(function () {
  var self = this;

  self.selection = this.$('ul.isotope').isotope({
    itemSelector: 'div',
    layoutMode: 'fitRows'
  });
});

// Create some events
Template.example.events({
  'click button.filter-orange': function () {
    Template.instance().selection.isotope({filter: '.orange'});
  },
  'click button.filter-green': function () {
    Template.instance().selection.isotope({filter: '.green'});
  },
  'click button.filter-all': function () {
    Template.instance().selection.isotope({filter: '*'});
  }
});
```