FlowRouter.route('/', {
  name: "landing",
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {content: "landing"});
  }
});

FlowRouter.route('/about', {
  name: "about",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "about"});
  }
});

FlowRouter.route('/login', {
  name: "login",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "login"});
  }
});

FlowRouter.route('/register', {
  name: "register",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "register"});
  }
});

var forms = FlowRouter.group({
  prefix: "/form"
});

forms.route('/general', {
  name: "generalForm",
  action: function() {
    if (Meteor.userId()) {
      // console.log(Meteor.userId());
      BlazeLayout.render("mainLayout", {content: "generalForm"});
    } else {
      FlowRouter.go('register');
    }

  }
});
forms.route('/details', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "detailsForm"});
  }
});
forms.route('/program', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "programForm"});
  }
});