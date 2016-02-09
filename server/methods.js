Meteor.methods({
  registerNewUser: function (user) {
    // Accounts.createUser(user, function (error) {
    //   console.log(error);
    // });
  },
  pullInfoFromFacebook: function() {
    var user = Meteor.user();
    var facebookData = user.services.facebook;
    // console.log(Meteor.user().services.facebook);
    Meteor.users.update(user._id, {$set: {
      personalInfo: {
        first_name: facebookData.first_name,
        last_name: facebookData.last_name,
        gender: facebookData.gender,
        age_range: facebookData.age_range,
        terms: true,
        newsletter: true
      }
    }}, function(error){
      if (error) console.log(error);
    });
  }
});