Accounts.onCreateUser(function (options, user) {
  if (options.first_name && options.last_name && options.terms || options.newsletter) {
    user.personalInfo = {
      first_name: options.first_name,
      last_name: options.last_name,
      newsletter: options.newsletter,
      terms: options.terms,
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
    };
  }
  user.isAdmin = false;
  // Roles.addUsersToRoles(this.userId, ['normal-user', 'subscriber']);
  return user;
});