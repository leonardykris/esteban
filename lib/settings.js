Settings = new Mongo.Collection('settings');

Settings.schema = new SimpleSchema({
  title: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  siteUrl: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  tagline: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  description: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  siteImage: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  navLayout: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  defaultEmail: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  mailUrl: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  defaultView: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  postsLayout: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  postsView: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  RSSLinksPointTo: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  postsPerPage: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  logoUrl: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  logoHeight: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  logoWidth: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  faviconUrl: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  language: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  backgroundCSS: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  primaryColor: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  secondaryColor: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  fontUrl: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  fontFamily: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  twitterAccount: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  facebookPAge: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  googleAnalyticsId: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  mixpanelId: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  footerCode: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  notes: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },
  authMethods: {
    type: String,
    optional: true,
    autoform: {
      group: "",
      instructions: "",
    }
  },


});

