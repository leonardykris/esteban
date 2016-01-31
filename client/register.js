Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var username = $('[name=username').val();
    var email = $('[name=email').val();
    var first_name = $('[name=first_name').val();
    var last_name = $('[name=last_name').val();
    var password = $('[name=password').val();
    var newsletter = $('[name=newsletter').prop("checked");

    var options = {
      username: username,
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      newsletter: newsletter
    };

    Accounts.createUser(options, function (error) {
      if (error) {
        alert(error.reason);
      } else {
        FlowRouter.go("/");
      }
    });

    // FlowRouter.go('/');
  }
});