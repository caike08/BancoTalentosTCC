Template.menubar.helpers({
  pathForCompanyPanel: function() {
    return FlowRouter.path("company");
  },
  pathForStudentPanel: function() {
    return FlowRouter.path("student");
  },
  pathForJobSearch: function() {
    if(Roles.userIsInRole(Meteor.userId(), 'student', 'default-group')){
      return FlowRouter.path("studentjobs");
    }
    else if(Roles.userIsInRole(Meteor.userId(), 'company', 'default-group')){
      return FlowRouter.path("companyjobs");
    }
  },
  pathForCompanySearch: function() {
    return FlowRouter.path("companySearch");
  },
  pathForStudentSearch: function() {
    return FlowRouter.path("studentSearch");
  }
});
