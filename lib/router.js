// ============================================================================
// Pages
//
// Landing page
FlowRouter.route('/', {
  name: "landing",
  action: function(params, queryParams) {
    BlazeLayout.render("mainLayout", {content: "landing"});
  }
});

// About page
FlowRouter.route('/about', {
  name: "about",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "about"});
  }
});

// Settings page
FlowRouter.route('/settings', {
  name: "settings",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "settings"});
  }
});
//
// ============================================================================
// Accounts related routes
//
// Sign in as a user to our site
FlowRouter.route('/login', {
  name: "login",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "login"});
  }
});

// Register for a new account in our site
FlowRouter.route('/register', {
  name: "register",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "register"});
  }
});
//
// ============================================================================
// FlowRouter group for forms
//
// Create a group to /form
var forms = FlowRouter.group({
  prefix: "/form"
});

// General information form that users need to fill up
forms.route('/personal_info', {
  name: "personalInfo",
  action: function() {
    // Check if user is logged in
    if (Meteor.userId()) {
      // Only then render the form
      BlazeLayout.render("mainLayout", {content: "personalInfo"});
    } else {
      // Else users have to register for a new account
      FlowRouter.go('register');
    }

  }
});

// Detailed user form
forms.route('/affiliation', {
  name: "affiliation",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "affiliation"});
  }
});

// Program specific form
forms.route('/application', {
  name: "application",
  action: function() {
    BlazeLayout.render("mainLayout", {content: "application"});
  }
});
//
// ============================================================================
