Router.route('/', {
    template: 'home',
    name: 'home',
    title: 'Home'
});

Router.route('/conheca', {
    template: 'conheca',
    name: 'conheca',
    title: 'Conheca'
});
Router.route('/termo-de-uso', {
    template: 'termos-de-uso',
    name: 'termo-de-uso',
    title: 'termo-de-uso'
});

Router.route('/questions', {
  template: 'questions',
  name: 'questions',
  title: 'Jogo',
  parent: 'home',
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
