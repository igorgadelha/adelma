usersList = Meteor.subscribe('usersList');	

Template.users.helpers({
  	users: function() {
  		users = Meteor.users.find({});
    	return users.fetch();
    }
});