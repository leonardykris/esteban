Template.personalDetailForm.helpers({
  userDoc: function () {
    return Meteor.user();
  },
  dayOptions: function() {
    days = [];
    for (i = 1; i <= 25; i++) {
      days.push({label: "" + i, value: i});
    }
    return days;
  },
  monthOptions: function() {
    months = [
      {label: "January", value: 1},
      {label: "February", value: 2},
      {label: "March", value: 3},
      {label: "April", value: 4},
      {label: "May", value: 5},
      {label: "June", value: 6},
      {label: "July", value: 7},
      {label: "August", value: 8},
      {label: "September", value: 9},
      {label: "October", value: 10},
      {label: "November", value: 11},
      {label: "December", value: 12},
    ];
    return months;
  },
  yearOptions: function() {
    years = [];
    currentYear = 2016;
    for (i = 0; i < 120; i++) {
      years.push({label: currentYear - i, value: currentYear - i});
    }
    return years;
  }
});