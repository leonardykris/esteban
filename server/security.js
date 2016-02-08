/*
  Ongoworks: Security
  Documentation: https://atmospherejs.com/ongoworks/security

  Instead of calling allow or deny on your collections, call permit to begin a new rule chain. Then optionally call one or more restriction methods. When you've defined the entire rule, call apply.

  Key Syntax:
  Collection1.permit(['insert', 'update', 'remove'])...ruleChainMethods()...apply();

  Built-In Rule Chain Methods:
  - never()
  - ifLoggedIn()
  - ifHasUserId(userId)
  - ifHasRole(role)
  - onlyProps(props)
  - exceptProps(props)

  Checking System:
  Security.can(userId).insert(doc).for(MyCollection).throw();
  Security.can(userId).update(id, modifier).for(MyCollection).throw();

  Custom Method:
  Security.defineMethod('ownsDocument', {
    fetch: ['ownerId'],
    deny: function (type, arg, userId, doc) {
      return userId !== doc.ownerId;
    }
  });
  Posts.permit(['insert', 'update']).ownsDocument().apply();

  Which means:
  "A user can insert a post from a client if they set themselves as the author"
  "A user can update a post from a client if they are currently set as the author."
*/

// Allow logged in users to update the site settings
Settings.permit(['insert', 'update']).ifLoggedIn().apply();

// Allow logged in users to update their stored information
Meteor.users.permit(['update']).ifLoggedIn().apply();

Meteor.roles.permit(['insert', 'update']).apply();
