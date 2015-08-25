if (Meteor.isClient) {
  Template.example.onRendered(function () {
    var self = this;

    self.selection = this.$('ul.isotope').isotope({
      itemSelector: 'div',
      layoutMode: 'fitRows'
    });
  });

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
}