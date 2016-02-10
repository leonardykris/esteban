Accounts.onCreateUser(function (options, user) {
  // Oh by doing this you won't add the profile property to the user anymore
  // That property is published by default to the client, which is one of the reason you don't want to put anything inside there like isAdmin property
  if (options.first_name && options.last_name && options.terms || options.newsletter) {
    user.personalInfo = {
      first_name: options.first_name,
      last_name: options.last_name,
      newsletter: options.newsletter,
      terms: options.terms,
    };
  }
  user.isAdmin = false;
  // Roles.addUsersToRoles(this.userId, ['normal-user', 'subscriber']);
  return user;
});

// ============================================================================
// List of Personal Information created
// prefix: "",
// common_name: "",
// gender: "",
// date_of_birth: "",
// phone_number: "",
// // Education Information
// education_level: "",
// university_name: "",
// university_year_attended: "",
// language_proficiency: "",
// // Travel Information
// passport_country: "",
// passport_num: "",
// passport_expiry_Date: "",
// // Address
// country: "",
// state: "",
// city: "",
// street: "",
// zip_code: ""