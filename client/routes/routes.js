Router.route('/', function () {
  this.render('home');
});

Router.route('/questions', function () {
  this.render('questions', {
  });
});

Router.route('/users', function () {
  this.render('users', {
  });
});

Router.route('/users/:_id', function () {
  this.render('repports', {
      data: function () {
          avaliacoes = Avaliacoes.find({users_id: this.params._id});
          return [avaliacoes.fetch()];
      }
   });
});

Router.route('/users/:_id/:test_id', function () {
  this.render('repportsingle', {
	    data: function () {
	    	  avaliacoes = Avaliacoes.find({users_id: this.params._id, _id: this.params.test_id});
	      	return [avaliacoes.fetch()];
	    }
   });

});

Router.route('/profile', function () {
  this.render('profile', {
  });
});
