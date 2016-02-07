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
*/

Settings.permit(['insert', 'update', 'remove']).ifLoggedIn().apply();