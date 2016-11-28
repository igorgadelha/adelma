var Schema = {};
Schema.information = new SimpleSchema({
  inspirar: {
    type: String,
    optional: true,
    label:"PRIMEIRO CONTE  E ESCREVA A QUANTIDADE DE TEMPO QUE LEVA PARA INSPIRAR",    
    autoform: {
      afFieldInput: {
        type: "text"
      }
    }
  },
  expirar: {
    type: String,
    optional: true,
    label:"AGORA CONTE E ESCREVA A QUANTIDADE DE TEMPO QUE LEVA PARA  EXPIRAR",    
    autoform: {
      afFieldInput: {
        type: "text"
      }
    }
  }
});

Schema.corpo = new SimpleSchema({
  areastensas: {
    type: String,
    optional: true,
    label:"MARQUE  AS ÁREAS DO SEU CORPO QUE FICAM MAIS TENSAS EM SITUAÇÕES DE CONFLITO",    
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "CABEÇA", value: "CABEÇA"},
          {label: "PESCOÇO", value: "PESCOÇO"},
          {label: "OMBROS", value: "OMBROS"},
          {label: "MÃOS", value: "MÃOS"},
          {label: "TÓRAX", value: "TÓRAX"},
          {label: "ABDÔMEN", value: "ABDÔMEN"},
          {label: "PERNAS", value: "PERNAS"},
        ];
      }
    }
  }
});

Schema.corpo2 = new SimpleSchema({
  areastensas: {
    type: String,
    optional: true,
    label:"ESCREVA NA CAIXA   AS ÁREAS DO SEU CORPO QUE FICAM MAIS TENSAS EM SITUAÇÕES DE CONFLITO",    
    autoform: {
      type: "textarea",
    }
  }
});

Schema.corpo3 = new SimpleSchema({
  areastensas: {
    type: String,
    optional: true,
    label:"MARQUE A AÇÃO QUE GOSTARIA DE REALIZAR PARA SE ACALMAR",    
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "ESTICAR TODO CORPO", value: "CABEÇA"},
          {label: "INSPIRAR E EXPIRAR", value: "PESCOÇO"},
          {label: "FECHAR OS OLHOS E OUVIR MÚSICA", value: "OMBROS"},
          {label: "ISOLAR PARA REORGANIZAR OS PENSAMENTOS", value: "MÃOS"}
        ];
      }
    }
  }
});

Schema.corpo4 = new SimpleSchema({
  areastensas: {
    type: String,
    optional: true,
    label:"ESCREVA OUTRA AÇÃO QUE GOSTARIA DE REALIZAR PARA SE ACALMAR",    
    autoform: {
      type: "textarea",
    }
  }
});

Schema.confirm = new SimpleSchema();