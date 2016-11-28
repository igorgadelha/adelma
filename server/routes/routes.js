Router.route('/', function () {
  this.render('Home', {
  });
});

Router.route('/questions', function () {
  this.render('questions', {
  });
});