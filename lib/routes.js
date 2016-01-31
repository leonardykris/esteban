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