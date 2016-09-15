import {
  Template
} from 'meteor/templating';

Template.login.events({
  "submit #loginForm": function(event) {
    event.preventDefault();
    //REMOVE ERRORS
    $('.warning').removeClass('warning');

    Meteor.loginWithPassword($('#email').val(), $("#password").val(), function(error) {
      if (error) {
        Meteor.call('displayErrors', error);
      }
      else {
        if(Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')){
          FlowRouter.go("student");
        }
        else if(Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')){
          FlowRouter.go("company");
        }
      }
    });
  }
});

Template.login.helpers({
  pathForStudentSignup: function() {
    return FlowRouter.path("studentSignup");
  },
  pathForCompanySignup: function() {
    return FlowRouter.path("companySignup");
  }
});