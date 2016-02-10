Programs.schema = new SimpleSchema ({
  program_code: {
    type: String,
    optional: true
  },
  program_name: {
    type: String,
    optional: true
  },
  program_start_date: {
    type: String,
    optional: true
  },
  program_end_date: {
    type: String,
    optional: true
  },
  program_coordinator: {
    type: Array,
    optional: true
  },
  "program_coordinator.$": {
    type: String,
    optional: true
  },
  program_fee: {
    type: Number,
    optional: true
  },
  program_currency: {
    type: String,
    optional: true
  },
});

Programs.attachSchema(Programs.schema);