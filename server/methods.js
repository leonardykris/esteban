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
  },
  // getProgramId: function(program_code) {
  //   return Programs.findOne({program_code: program_code})._id;
  // },
  // startApplication: function(user_id, program_id) {
  //   existingApplication = Applications.findOne({
  //     user_id: user_id,
  //     program_id: program_id
  //   });
  //   // console.log(existingApplication);

  //   if (existingApplication === undefined || existingApplication.user_id === null || existingApplication.program_id === null) {
  //     // If there's no existing application, then create one
  //     return Applications.insert({
  //       user_id: user_id,
  //       program_id: program_id
  //     }, function(error) {
  //       if (error) console.log(error);
  //     });
  //   } else {
  //     return existingApplication._id;
  //   }
  // },
  // getApplication: function(application_id) {
  //   applicationDoc = Applications.findOne({_id: application_id});
  //   // console.log(applicationDoc);
  //   return applicationDoc;
  // }
  getApplication: function(user_id, program_code) {
    program_id = Programs.findOne({program_code: program_code})._id;
    existingApplication = Applications.findOne({
      user_id: user_id,
      program_id: program_id
    });

    if (existingApplication === undefined || existingApplication.user_id === null || existingApplication.program_id === null) {
      // If there's no existing application, then create one
      Applications.insert({
        user_id: user_id,
        program_id: program_id
      }, function(error, doc_id) {
        if (error) {console.log(error);}
        else {
          console.log(doc_id);
          return Applications.findOne({_id: doc_id});
        }
      });
    } else {
      console.log(existingApplication);
      return existingApplication;
    }


  }
});