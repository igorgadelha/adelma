Router.route('/', function () {
  this.render('home');
});

Router.route('/questions', function () {
  this.render('questions', {
  });
});