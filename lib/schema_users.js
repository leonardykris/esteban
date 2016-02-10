Meteor.users.personalInfoSchema = new SimpleSchema ({
  first_name: {
    type: String,
    label: "First Name",
    optional: false,
    autoform: {
      placeholder: "e.g. John",
    }
  },
  last_name: {
    type: String,
    label: "Last Name",
    optional: false,
    autoform: {
      placeholder: "e.g. Green",
    }
  },
  newsletter: {
    type: Boolean,
    label: "Newsletter Subscription",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  terms: {
    type: Boolean,
    label: "Terms & Conditions",
    optional: false,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  prefix: {
    type: String,
    label: "Prefix",
    optional: true,
    autoform: {
      placeholder: "Select Prefix",
      options: [
        {label: "Mr.", value: "Mr"},
        {label: "Ms.", value: "Ms"},
        {label: "Mrs.", value: "Mrs"},
        {label: "Dr.", value: "Dr"},
      ],
    }
  },
  common_name: {
    type: String,
    label: "Preferred Common Name",
    optional: true,
    autoform: {
      placeholder: "e.g. John",
    }
  },
  gender: {
    type: String,
    label: "Gender",
    optional: true,
    autoform: {
      placeholder: "Select Gender",
      options: [
        {label: "Male", value: "male"},
        {label: "Female", value: "female"},
        {label: "Other", value: "other"},
      ],
    }
  },
  dob_date: {
    type: Number,
    label: "Date of Birth",
    optional: true,
  },
  dob_month: {
    type: String,
    label: "Month",
    optional: true,
  },
  dob_year: {
    type: Number,
    label: "Year",
    optional: true,
  },
  age_range: {
    type: Object,
    optional: true,
  },
  country_code: {
    type: String,
    label: "Contact Region",
    optional: true,
  },
  phone_number: {
    type: String,
    label: "Phone Number",
    optional: true,
    autoform: {
      placeholder: "e.g. 1234567",
    }
  },
  // Education Information
  education_level: {
    type: String,
    label: "Label",
    optional: true,
  },
  other_education: {
    type: String,
    label: "Other Education",
    optional: true,
    autoform: {
      placeholder: "If you selected (other), list it here",
    }
  },
  university_name: {
    type: String,
    label: "University Name",
    optional: true,
    autoform: {
      placeholder: "e.g. Yale University",
    }
  },
  university_year_attended: {
    type: String,
    label: "Year Attended",
    optional: true,
    autoform: {
      placeholder: "e.g. 2015",
    }
  },
  language_proficiency: {
    type: String,
    label: "Language Proficiency",
    optional: true,
    autoform: {
      placeholder: "You may include proof such as enrolment in an English-language program and/or a TOEFL exam result. The Admissions Committee may request documents and/or require an interview.",
    }
  },
  passport_country: {
    type: String,
    label: "Passport Issuing Country",
    optional: true,
  },
  passport_num: {
    type: String,
    label: "Passport Number",
    optional: true,
    autoform: {
      placeholder: "e.g. A1234567",
    }
  },
  passport_expiry_date: {
    type: String,
    label: "Passport Expiry Date",
    optional: true,
  },
  passport_expiry_month: {
    type: String,
    label: "Month",
    optional: true,
  },
  passport_expiry_year: {
    type: String,
    label: "Year",
    optional: true,
  },
  country: {
    type: String,
    label: "Country",
    optional: true,
  },
  state: {
    type: String,
    label: "State",
    optional: true,
    autoform: {
      placeholder: "e.g. California",
    }
  },
  city: {
    type: String,
    label: "City",
    optional: true,
    autoform: {
      placeholder: "e.g. San Francisco",
    }
  },
  street: {
    type: String,
    label: "Street",
    optional: true,
    autoform: {
      placeholder: "e.g. 001 California St",
    }
  },
  zip_code: {
    type: String,
    label: "Zip Code",
    optional: true,
    autoform: {
      placeholder: "e.g. 00000",
    }
  }
});

Meteor.users.affiliationSchema = new SimpleSchema ({
  aff_name: {
    type: String,
    label: "Affiliation Name",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_country: {
    type: String,
    label: "Country",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_state: {
    type: String,
    label: "State",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_city: {
    type: String,
    label: "City",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_street: {
    type: String,
    label: "Street",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_zip_code: {
    type: String,
    label: "Zip Code",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_website: {
    type: String,
    label: "Website",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_email: {
    type: String,
    label: "Affiliation Email",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_industry: {
    type: String,
    label: "Industry",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_other_industry: {
    type: String,
    label: "Other Industry",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_position: {
    type: String,
    label: "Position",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_other_position: {
    type: String,
    label: "Other Position",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
});

Meteor.users.schema = new SimpleSchema({
  username: {
    type: String,
    optional: true,
    regEx: /^[a-z0-9A-Z_]{3,15}$/
  },
  emails: {
    type: [Object],
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  personalInfo: {
    type: Meteor.users.personalInfoSchema,
    optional: true
  },
  affiliation: {
    type: Meteor.users.affiliationSchema,
    optional: true
  },
  payment: {
    type: Object,
    optional: true,
  },
  // When using alanning:roles, you have to update the schema to include the roles property and its array content too
  roles: {
    type: Array,
    optional: true
  },
  "roles.$": {
    type: String,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  isAdmin: {
    type: Boolean,
    optional: true
  }
});

Meteor.users.attachSchema(Meteor.users.schema);



