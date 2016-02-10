Meteor.startup(function() {
  if (Programs.find().count() === 0) {
    // Create sample program
    programSample = {
      program_code: "AIT2016",
      program_name: "Asia Innovation Trek 2016",
      program_start_date: "",
      program_end_date: "",
      program_coordinator: ["John Lim", "Samuel Kim"],
      program_fee: 8000,
      program_currency: "USD"
    };

    // Insert sample program to empty Program collection
    Programs.insert(programSample, function(error){
      if (error) console.log(error);
    });
  } else {
    console.log("Oh hey it's filled up. All good to go!");
  }
});
// console.log(Programs.find().fetch());

