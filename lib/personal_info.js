Meteor.users.personalInfoSchema = new SimpleSchema ({
  first_name: {
    type: String,
    label: "First Name",
    optional: false,
    autoform: {
      placeholder: "John",
    }
  },
  last_name: {
    type: String,
    label: "Last Name",
    optional: false,
    autoform: {
      placeholder: "Last Name",
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
      placeholder: "John",
    }
  },
  gender: {
    type: String,
    label: "Gender",
    optional: true,
    autoform: {
      placeholder: "Select Gender",
      options: [
        {label: "Male", value: "Male"},
        {label: "Female", value: "Female"},
        {label: "Other", value: "Other"},
      ],
    }
  },
  dob_date: {
    type: Number,
    label: "Day",
    optional: true,
    autoform: {
      placeholder: "Select Date"
    }
  },
  dob_month: {
    type: String,
    label: "Month",
    optional: true,
    autoform: {
      placeholder: "Select Month"
    }
  },
  dob_year: {
    type: Number,
    label: "Year",
    optional: true,
    autoform: {
      placeholder: "Select Year",
    }
  },
  phone_number: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  // Education Information
  education_level: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  university_name: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  university_year_attended: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  language_proficiency: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  // Travel Information
  passport_country: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  passport_num: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  passport_expiry_Date: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  // Address
  country: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  state: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  city: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  street: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  zip_code: {
    type: String,
    label: "Label",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  }
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
  }
});

Meteor.users.attachSchema(Meteor.users.schema);



