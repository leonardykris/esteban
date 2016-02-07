// Publish settings
Meteor.publish('settings');

// Publish limited user data
Meteor.publish('userBasicInfo', function(){
  if (!this.userId) {
    // It has to do something about logging out
    return this.ready();
  }

  // Check this.userId to verify that the user is logged in
  return Meteor.users.find(this.userId, {
    fields: {
      // Custom published fields
      // Strictly only allows First Name and Last Name to be read
      first_name: 1,
      last_name: 1,
    }
  });
});