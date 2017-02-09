usersList = Meteor.subscribe('usersList');

Template.users.helpers({
  	users: function() {
  		users = Meteor.users.find({});
    	return users.fetch();
    },
});

Template.users.onCreated(function () {
    this.pagination = new Meteor.Pagination(Meteor.users, {
        sort: {
            _id: -1
        },
        perPage: 10
    });
});

Template.users.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    documents: function () {
        return Template.instance().pagination.getPage();
    },
    // optional helper used to return a callback that should be executed before changing the page
    clickEvent: function() {
        return function(e, templateInstance, clickedPage) {
            e.preventDefault();
            console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
        };
    }
});
