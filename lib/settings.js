Settings = new Mongo.Collection('settings');

Settings.schema = new SimpleSchema({
  title: {
    type: String,
    label: "Site Title",
    optional: true,
    autoform: {
      placeholder: "Center for Asia Leadership",
    }
  },
  siteUrl: {
    type: String,
    label: "Site URL",
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    autoform: {
      placeholder: "Site URL",
    }
  },
  tagline: {
    type: String,
    label: "Site Tagline",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  description: {
    type: String,
    label: "Site Description",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  siteImage: {
    type: String,
    label: "Site Image Link",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  navLayout: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  defaultEmail: {
    type: String,
    label: "Default Email",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
      type: "email"
    }
  },
  mailUrl: {
    type: String,
    label: "",
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  defaultView: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  postsLayout: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  postsView: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  RSSLinksPointTo: {
    type: String,
    label: "",
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  postsPerPage: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  logoUrl: {
    type: String,
    label: "",
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  logoHeight: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  logoWidth: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  faviconUrl: {
    type: String,
    label: "",
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  language: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  backgroundCSS: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  primaryColor: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  secondaryColor: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  fontUrl: {
    type: String,
    label: "",
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  fontFamily: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  twitterAccount: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  facebookPage: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  googleAnalyticsId: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  mixpanelId: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  footerCode: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  notes: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
  authMethods: {
    type: String,
    label: "",
    optional: true,
    autoform: {
      placeholder: "schemaLabel",
    }
  },
});

Settings.attachSchema(Settings.schema);

