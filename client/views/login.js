Template.login.events({
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
        FlowRouter.go("generalForm");
      }
    });
  }
});