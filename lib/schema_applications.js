Applications.schema = new SimpleSchema ({
  user_id: {
    type: String,
    label: "User ID",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  program_id: {
    type: String,
    label: "Program ID",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  discoverable: {
    type: String,
    label: "Discoverable",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  discoverable_other: {
    type: String,
    label: "Other Discoverable",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  apply_factor: {
    type: String,
    label: "Applying Factors",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  apply_factor_other: {
    type: String,
    label: "Other Applying Factors",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  preferred_mail_address: {
    type: String,
    label: "Preferred Mailing Address",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  leadership_roles: {
    type: String,
    label: "Leadership Roles",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  prof_exp_years: {
    type: String,
    label: "Professional Experience Years",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  aff_description: {
    type: String,
    label: "Affiliation Description",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  expectations: {
    type: String,
    label: "Goals and Expectations",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  valuable_skills: {
    type: String,
    label: "Valuable skills that can be learned by other people",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  ted_talks: {
    type: String,
    label: "TED-styled talks",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  destination_group: {
    type: String,
    label: "Destination Group",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  biography_points: {
    type: String,
    label: "Biography in points form",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  biography_sentence: {
    type: String,
    label: "Biography in sentences form",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  ack_payment: {
    type: String,
    label: "Payment Acknowledgment",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  ack_productive: {
    type: String,
    label: "Productivity Acknowledgment",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  ack_behaviour: {
    type: String,
    label: "Behaviour Acknowledgment",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  ack_comments: {
    type: String,
    label: "Comments",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  ack_self: {
    type: String,
    label: "This form is filled by myself",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  isCanceled: {
    type: Boolean,
    optional: true,
  },
  hasInterviewed: {
    type: Boolean,
    optional: true
  },
  hasPaid: {
    type: Boolean,
    optional: true
  },
  isAccepted: {
    type: Boolean,
    optional: true
  },
});

Applications.attachSchema(Applications.schema);