import './collections/password.js';
import './collections/email.js';
import '/imports/api/collections/jobs.js';
import '/imports/api/collections/companies.js';
import '/imports/api/collections/students.js';

Meteor.methods({
  saveCompany: function (data) {
    Meteor.users.attachSchema(Company);
    id = Accounts.createUser(data);
    Roles.addUsersToRoles(id, 'company', 'user-type');

    Meteor.call('sendVerificationLink', id);
    return true;
  },
  saveStudent: function (data) {
    Meteor.users.attachSchema(Student);
    id = Accounts.createUser(data);
    Roles.addUsersToRoles(id, 'student', 'user-type');

    Meteor.call('sendVerificationLink', id);
    return true;
  },
  saveJob: function (vacancy) {
    Jobs.insert(vacancy);
  },
  // send verification link
  sendVerificationLink: function(data) {
    let userId = data;
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }
  }
});
