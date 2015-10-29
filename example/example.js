if (Meteor.isClient) {
  Template.example.onRendered(function () {
    var self = this;

    self.selection = this.$('ul.isotope').isotope({
      itemSelector: 'div',
      layoutMode: 'fitRows',
      getSortData: {
        color: '[data-color]',
        number: '.number parseInt',
        letter: '.letter'
      }
    });
  });

  Template.example.events({
    // Filtering
    'click button.filter-orange': function () {
      Template.instance().selection.isotope({filter: '.orange'});
    },
    'click button.filter-green': function () {
      Template.instance().selection.isotope({filter: '.green'});
    },
    'click button.filter-all': function () {
      Template.instance().selection.isotope({filter: '*'});
    },
    // Sorting
    'click button.sort-original': function () {
      Template.instance().selection.isotope({sortBy: 'original-order'});
    },
    'click button.sort-color': function () {
      Template.instance().selection.isotope({sortBy: 'color'});
    },
    'click button.sort-number': function () {
      Template.instance().selection.isotope({sortBy: 'number'});
    },
    'click button.sort-letter': function () {
      Template.instance().selection.isotope({sortBy: 'letter'});
    }
  });
}