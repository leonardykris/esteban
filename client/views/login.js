Template.signInForm.events({
  'submit form': function (event) {
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    Meteor.loginWithPassword(email, password, function(error){
      if (error) {
        // Accounts.onLoginFailure()
        // switch (error) {
        //   case 403:
        //     alert("Sorry, there's no existing record of that user.");
        //     break;
        // }
        console.log(error);
        alert(error.reason);
      } else {
        // Accounts.onLogin()
        $('#accountConfirmationModal').modal('hide');
        // FlowRouter.go("generalForm");
      }
    });
  }
});

Template.login.events({
  'click #facebook-login': function() {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'user_friends', 'email']
      // public_profile and email do not require special permissions
      // For user_friends, you have to query it through HTTP using Facebook's Graph API to graph.facebook.com, it's just that through this we allow our app to query the user info
      // Permissions to consider:
      // user_education_history -> to fill up university field
      // user_birthday -> to fill up birth date
      // user_hometown OR user_location
      // user_work_history
    }, function(error){
      if (error) {
        throw new Meteor.Error('Facebook login failed');
      } else {
        // Pull the info obtained from Facebook and store them to personalInfo
        Meteor.call('pullInfoFromFacebook', function (error, result) {
          if (!error) {
            // console.log(result);
          } else {
            console.log(error);
          }
        });
      }
    });
  }
});