Accounts.onCreateUser(function (options, user) {
  if (options.first_name) user.first_name = options.first_name;
  if (options.last_name) user.last_name = options.last_name;
  if (options.newsletter) user.newsletter = options.newsletter;
  return user;
});