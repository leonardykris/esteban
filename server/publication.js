Meteor.publish('userBasicInfo', function(){
  if (!this.userId) {
    // to do something about logging out
    return this.ready();
  }

  // this.userId is enough
  return Meteor.users.find(this.userId, {
    fields: {
      // custom published fields
      first_name: 1,
      last_name: 1,
    }
  });
});