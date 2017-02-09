Router.route('/', {
    template: 'home',
    name: 'home',
    title: 'Home'
});

Router.route('/questions', {
  template: 'questions'
});

Router.route('/users', {
    name: 'users',
    title: 'Usuários',
    parent: 'home',
    template:'users'
});

Router.route('/users/:_id', {
  name: 'repports',
  title: 'Testes',
  parent: 'users',
  template:'repports',
  data: function () {
      avaliacoes = Avaliacoes.find({users_id: this.params._id});
      return [avaliacoes.fetch()];
  }
});

Router.route('/users/:_id/:test_id', {
  name: 'repportsingle',
  title: 'Teste',
  parent: 'repports',
  template:'repportsingle',
  data: function () {
    avaliacoes = Avaliacoes.find({users_id: this.params._id, _id: this.params.test_id});
    return [avaliacoes.fetch()];
  }

 });

Router.route('/profile', function () {
  this.render('profile', {
  });
});
