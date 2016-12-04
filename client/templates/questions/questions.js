Template.questions.helpers({
  steps: function() {
    return [
      {
        id: 'q1',
        title: 'q1',
        template: 'q1',
        formId: 'q1',
      },{
        id: 'q2',
        title: 'q2',
        template: 'q2',
        formId: 'q2',
      },{
        id: 'q3',
        title: 'q3',
        template: 'q3',
        formId: 'q3',
      },{
        id: 'q4',
        title: 'q4',
        template: 'q4',
        formId: 'q4',
      },{
        id: 'q5',
        title: 'q5',
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
        title: 'q7',
        template: 'q7',
        formId: 'q7',
      },{
        id: 'q8',
        title: 'q8',
        template: 'q8',
        formId: 'q8',
      },{
        id: 'q9',
        title: 'q9',
        template: 'q9',
        formId: 'q9',
      },{
        id: 'q10',
        title: 'q10',
        template: 'q10',
        formId: 'q10',
      },{
        id: 'q11',
        title: 'q11',
        template: 'q11',
        formId: 'q11',
      },{
        id: 'q12',
        title: 'q12',
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