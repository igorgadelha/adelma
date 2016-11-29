Schema = {};
Schema.q1 = new SimpleSchema({
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

Schema.q2 = new SimpleSchema({
  areastensas: {
    type: [String],
    optional: true,
    label:"MARQUE  AS ÁREAS DO SEU CORPO QUE FICAM MAIS TENSAS EM SITUAÇÕES DE CONFLITO",    
    autoform: {
      type: "select-checkbox-inline",
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

Schema.q3 = new SimpleSchema({
  areastensas: {
    type: String,
    optional: true,
    label:"ESCREVA NA CAIXA AS ÁREAS DO SEU CORPO QUE FICAM MAIS TENSAS EM SITUAÇÕES DE CONFLITO",    
    autoform: {
      type: "textarea",
    }
  }
});

Schema.q4 = new SimpleSchema({
  areastensas: {
    type: [String],
    optional: true,
    label:"MARQUE A AÇÃO QUE GOSTARIA DE REALIZAR PARA SE ACALMAR",    
    autoform: {
      type: "select-checkbox-inline",
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

Schema.q5 = new SimpleSchema({
  areastensas: {
    type: String,
    optional: true,
    label:"ESCREVA OUTRA AÇÃO QUE GOSTARIA DE REALIZAR PARA SE ACALMAR",    
    autoform: {
      type: "textarea",
    }
  }
});

Schema.q6 = new SimpleSchema({
  areastensas: {
    type: String,
    optional: true,
    label:"ESCREVA OUTRA  AÇÃO QUE GOSTARIA DE REALIZAR PARA SE ACALMAR",    
    autoform: {
      type: "textarea",
    }
  }
});



Schema.q7 = new SimpleSchema({
  areastensas: {
    type: [String],
    optional: true,
    label:"MARQUE A AÇÃO QUE GOSTARIA DE REALIZAR PARA SE ACALMAR",    
    autoform: {
      type: "select2",
      afFieldInput: {
        multiple: true
      },
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

Schema.q8 = new SimpleSchema({
  areastensas: {
    type: String,
    optional: true,
    label:"ESCREVA AS QUALIDADES DA/O PARCEIRA/O QUE NÃO APRECIA",    
    autoform: {
      type: "textarea",
    }
  }
});

Schema.q9 = new SimpleSchema({
  areastensas: {
    type: String,
    optional: true,
    label:"ESCREVA AS QUALIDADES DA/O PARCEIRA/O QUE NÃO APRECIA",    
    autoform: {
      type: "textarea",
    }
  }
});


Schema.q10 = new SimpleSchema({
  areastensas: {
    type: [String],
    optional: true,
    label:"CHEGOU SUA VEZ DE SE AVALIAR MARQUE AS SUAS CARACTERÍSTICAS",    
    autoform: {
      type: "select2",
      afFieldInput: {
        multiple: true
      },
      options: function () {
        return [
          {label: "Controlador", value: "CABEÇA"},
          {label: "Machista", value: "PESCOÇO"},
          {label: "Agressivo", value: "OMBROS"},
          {label: "Respeitoso", value: "MÃOS"},
          {label: "Amigo", value: "TÓRAX"},
          {label: "Calmo", value: "ABDÔMEN"},
          {label: "Ciumento", value: "PERNAS"},
          {label: "Inseguro", value: "PERNAS"},
          {label: "Infiel", value: "PERNAS"},
          {label: "Companheiro", value: "PERNAS"},
          {label: "Independente Emocionalmente", value: "PERNAS"},
        ];
      }
    }
  }
});


Schema.q11 = new SimpleSchema({
  qele: {
    type: String,
    optional: true,
    label:"ESCREVA AS SUAS QUALIDADES QUE NÃO QUER MAIS PARA VOCÊ",    
    autoform: {
      type: "textarea",
    }
  },
  qela: {
    type: String,
    optional: true,
    label:"ESCREVA AS QUALIDADES DA COMPANHEIRA QUE NÃO QUER PARA ELA",    
    autoform: {
      type: "textarea",
    }
  }
});

Schema.q12 = new SimpleSchema({
  qele: {
    type: String,
    optional: true,
    label:"ESCREVA AS QUALIDADES DO RELACIONAMENTO RESPEITOSO ENTRE O CASAL",    
    autoform: {
      type: "textarea",
    }
  }
});