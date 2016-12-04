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
   });

});