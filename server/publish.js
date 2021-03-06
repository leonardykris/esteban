// Publish settings
Meteor.publish('settings');

// Publish limited user data
Meteor.publish('userPersonalInfo', function(){
  if (!this.userId) {
    // It has to do something about logging out
    return this.ready();
  }

  // Check this.userId to verify that the user is logged in
  return Meteor.users.find(this.userId, {
    fields: {
      // Custom published fields
      // Strictly only allows First Name and Last Name to be read
      "personalInfo": 1,
    }
  });
});

Meteor.publish(null, function (){
  return Meteor.roles.find({});
});

Meteor.publish('applications', function(){
  return Applications.find({"user_id": this.userId}, {
    // Supressed fields
    "isCanceled": 0,
    "isAccepted": 0,
    "hasInterviewed": 0,
    "hasPaid": 0,
  });
});
Meteor.publish('programs', function() {
  return Programs.find();
});