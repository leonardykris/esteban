/*
  Single Route
  ============================================================
  FlowRouter.route('/', {
   name: "index",
   action: function(params, queryParams) {
     BlazeLayout.render(layout, {content: sub_layout});
   }
  });

  so if the actual path is
  /blog/kadira/getting-started?comments=show
  the params and queryParams objects will look like this:

  params = {
    category: "kadira",
    postID: "getting-started"
  };
  queryParams = {
    comments: "show"
  };

  Group Route
  ============================================================
  var adminSection = FlowRouter.group({
     prefix: "/admin"
  });

  for the /admin page
  adminSection.route('/', {
     action: function() {}
  });

  for the /admin/new-post page
  adminSection.route('/new-post', {
     action: function() {}
  });

  OR

  var superAdminSection = adminSection.group({
     prefix: "/super"
  });
  superAdminSection.route('/access-control', {
     action: function() {}
  })
*/

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