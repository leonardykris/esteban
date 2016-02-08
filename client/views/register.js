Template.signUpForm.events({
  'submit form': function(event){
    // Prevent default action of the form to execute
    // e.g. POST submission
    event.preventDefault();

    // Variables captured from the Sign Up form
    var email = $('[name=email').val();
    var first_name = $('[name=first_name').val();
    var last_name = $('[name=last_name').val();
    var password = $('[name=password').val();
    var newsletter = $('[name=newsletter').prop("checked");
    var terms = $('[name=terms').prop("checked");

    // We separated the variables (above) and the object construction for the matter of clarity because it's easier to look at it this way
    var options = {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      newsletter: newsletter,
      terms: terms,
    };

    // Call the createUser function available from Accounts object to create a new record in the Users collection securely
    Accounts.createUser(options, function (error) {
      if (error) {
        // If there are any errors, throw them here
        alert(error.reason);
      } else {
        // Add roles to registered users
        Roles.addUsersToRoles(Meteor.user(), ['normal-user', 'subscriber']);
        // console.log(Roles.getAllRoles());

        if (FlowRouter.current().route.name == "register") {
          // If the origin route for creating the account is the specialized page, then redirect to home
          FlowRouter.go("/");
        } else if (FlowRouter.current().route.group.name == "program") {

        } else {

        }
        // If there's any modal opened for the purpose of signing up, close them. This should go to the program group above later
        $('#accountConfirmationModal').modal('hide');

        // Use login if in the end we think that users have to verify their email
        // FlowRouter.go("login");
      }
    });
  }
});