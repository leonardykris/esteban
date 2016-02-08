Template.landing.onRendered(function() {
  // Run holder
  // window.Holder.run();

});

Template.landing.events({
  'click #showSignInModal': function () {
    $('#signUpModal').addClass('hidden');
    $('#signInModal').removeClass('hidden');
  },
  'click #showSignUpModal': function () {
    $('#signInModal').addClass('hidden');
    $('#signUpModal').removeClass('hidden');
  },
  'click .showAttendance': function() {
    $('.showAttendance').addClass('hideAttendance').removeClass('showAttendance');
    $('#attendance').removeClass('hidden');
  },
  'click .showCountries': function() {
    $('.showCountries').addClass('hideCountries').removeClass('showCountries');
    $('#countries').removeClass('hidden');
  },
  'click .hideAttendance': function() {
    $('.hideAttendance').addClass('showAttendance').removeClass('hideAttendance');
    $('#attendance').addClass('hidden');
  },
  'click .hideCountries': function() {
    $('.hideCountries').addClass('showCountries').removeClass('hideCountries');
    $('#countries').addClass('hidden');
  },
});