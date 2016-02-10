if (Meteor.isClient) {
  // Autorun is a must
  Tracker.autorun(function () {
    Meteor.subscribe('settings');
    Meteor.subscribe('userPersonalInfo');
    Meteor.subscribe('applications');
    Meteor.subscribe('programs');
  });
}
