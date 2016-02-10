Template.applicationForm.helpers({
  applicationDoc: function () {
    // return Meteor.call('getApplication', Session.get("application_id"), function (error, result) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(result);
    //     return result;
    //   }
    // });
    // return {
    //   "_id": "owAwJP4eS6TGFk4Di",
    //   "user_id": "Kmrw35qEsARHS8ouz",
    //   "program_id": "vTga5MgzF4DtXgLip"
    // };
    program_code = "AIT2016";
    // applicationDoc = {};

    Meteor.call('getProgramId', program_code, function (error, result) {
      if (error) {console.log(error);}
      else {
        Meteor.call('startApplication', Meteor.userId(), result, function (error, result) {
          if (error) {console.log(error);}
          else {
            doc = Meteor.call('getApplication', result, function (error, result) {
              if (error) {console.log(error);}
              else {
                console.log(result);
                return result;
              }
            });
          }
        });
      }
    });

    console.log(doc);
  },

});