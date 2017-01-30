Template.questions.helpers({
  steps: function() {
    return [
      {
        id: 'q1',
        title: '1',
        template: 'q1',
        formId: 'q1',
      },{
        id: 'q2',
        title: '2',
        template: 'q2',
        formId: 'q2',
      },{
        id: 'q3',
        title: '3',
        template: 'q3',
        formId: 'q3',
      },{
        id: 'q4',
        title: '4',
        template: 'q4',
        formId: 'q4',
      },{
        id: 'q5',
        title: '5',
        template: 'q5',
        formId: 'q5',
      },
      // {
      //   id: 'q6',
      //   title: 'q6',
      //   template: 'q6',
      //   formId: 'q6',
      // },
      {
        id: 'q7',
        title: '6',
        template: 'q7',
        formId: 'q7',
      },{
        id: 'q8',
        title: '7',
        template: 'q8',
        formId: 'q8',
      },{
        id: 'q9',
        title: '8',
        template: 'q9',
        formId: 'q9',
      },{
        id: 'q10',
        title: '9',
        template: 'q10',
        formId: 'q10',
      },{
        id: 'q11',
        title: '10',
        template: 'q11',
        formId: 'q11',
      },{
        id: 'q12',
        title: '11',
        template: 'q12',
        formId: 'q12',
        onSubmit: function(data, wizard) {
          // submit logic 
          var self = this;
            Avaliacoes.insert(_.extend( wizard.mergedData(), data ), function(err, id) {
              if (err) {
                console.log( err,_.extend( wizard.mergedData(), data ) );
                self.done();
              } else {
                Router.go('/', {
                  _id: id
                });
              }
            });
        }
      }
    ]
  }
});
