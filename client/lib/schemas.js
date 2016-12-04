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
  },
  users_id:{
    type:String,
    optional:false
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
          {label: "Cabeça", value: "cabeca"},
          {label: "Pescoço", value: "pescoco"},
          {label: "Ombros", value: "ombros"},
          {label: "Mãos", value: "maos"},
          {label: "Tórax", value: "torax"},
          {label: "Abdômen", value: "abdomen"},
          {label: "Pernas", value: "pernas"},
        ];
      }
    }
  }
});

Schema.q3 = new SimpleSchema({
  areastensassituacaodeconflito: {
    type: String,
    optional: true,
    label:"ESCREVA NA CAIXA AS ÁREAS DO SEU CORPO QUE FICAM MAIS TENSAS EM SITUAÇÕES DE CONFLITO",    
    autoform: {
      type: "textarea",
    }
  }
});

Schema.q4 = new SimpleSchema({
  acaoacalmar: {
    type: [String],
    optional: true,
    label:"MARQUE A AÇÃO QUE GOSTARIA DE REALIZAR PARA SE ACALMAR",    
    autoform: {
      type: "select-checkbox-inline",
      options: function () {
        return [
          {label: "Esticar todo o corpo", value: "esticar"},
          {label: "Inspirar e Expirar", value: "inspiprar_e_expirar"},
          {label: "Fechar os olhos e ouvir música", value: "ouvir_musica"},
          {label: "Isolar para Reorganizar os pensamentos", value: "isolar"}
        ];
      }
    }
  }
});

Schema.q5 = new SimpleSchema({
  outraacaoacalmar: {
    type: String,
    optional: true,
    label:"ESCREVA OUTRA AÇÃO QUE GOSTARIA DE REALIZAR PARA SE ACALMAR",    
    autoform: {
      type: "textarea",
    }
  }
});



Schema.q7 = new SimpleSchema({
  qualidadesparceiro: {
    type: [String],
    optional: true,
    label:"Selecione as qualidades do/a Parceiro/a ",    
    autoform: {
      type: "select2",
      afFieldInput: {
        multiple: true
      },
      options: function () {
        return [
          {label: "INSEGURA, CIUMENTA", value: "insegura_ciumenta"},
          {label: "AMIGA, BRIGUENTA", value: "amiga_briguenta"},
          {label: "DESCONTROLADA, CONTROLADORA,  SEGURA", value: "descontrolada_controladora_segura"},
          {label: "EMOTIVA, RESPEITOSA, CALMA", value: "emotiva_respeitosa_calma"},
          {label: "COMUNICATIVA, ALEGRE", value: "comunicativa_alegre"},
          {label: "MACHISTA, INDEPENDENTE EMOCIONALMENTE", value: "machista_independente"}
        ];
      }
    }
  }
});

Schema.q8 = new SimpleSchema({
  qaprecia: {
    type: String,
    optional: true,
    label:"ESCREVA AS QUALIDADES DA/O PARCEIRA/O QUE APRECIA",    
    autoform: {
      type: "textarea",
    }
  }
});

Schema.q9 = new SimpleSchema({
  qnaprecia: {
    type: String,
    optional: true,
    label:"ESCREVA AS QUALIDADES DA/O PARCEIRA/O QUE NÃO APRECIA",    
    autoform: {
      type: "textarea",
    }
  }
});


Schema.q10 = new SimpleSchema({
  autoavaliacao: {
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
          {label: "Controlador", value: "controlador"},
          {label: "Machista", value: "machista"},
          {label: "Agressivo", value: "agressivo"},
          {label: "Respeitoso", value: "respeitoso"},
          {label: "Amigo", value: "amigo"},
          {label: "Calmo", value: "calmo"},
          {label: "Ciumento", value: "ciumento"},
          {label: "Inseguro", value: "inseguro"},
          {label: "Infiel", value: "infiel"},
          {label: "Companheiro", value: "companheiro"},
          {label: "Independente Emocionalmente", value: "independente"},
        ];
      }
    }
  }
});


Schema.q11 = new SimpleSchema({
  suasqualidades: {
    type: String,
    optional: true,
    label:"ESCREVA AS SUAS QUALIDADES QUE NÃO QUER MAIS PARA VOCÊ",    
    autoform: {
      type: "textarea",
    }
  },
  qcompanheira: {
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


form = new SimpleSchema({
   inspirar: {
    type: String,
    optional: true,
  },
  expirar: {
    type: String,
    optional: true,
  },
  areastensas: {
    type: [String],
    optional: true,
  },  
  areastensassituacaodeconflito: {
    type: String,
    optional: true,
  },  
  acaoacalmar: {
    type: [String],
    optional: true,
  },  
  outraacaoacalmar: {
    type: String,
    optional: true,
  },
  qualidadesparceiro: {
    type: [String],
    optional: true,
  },  
  qaprecia: {
    type: String,
    optional: true,
  },  
  qnaprecia: {
    type: String,
    optional: true,
  },   
  autoavaliacao: {
    type: [String],
    optional: true,
  },   
  suasqualidades: {
    type: String,
    optional: true,
  },   
  qcompanheira: {
    type: String,
    optional: true,
  },   
  qele: {
    type: String,
    optional: true,
  },   
  users_id: {
    type: String,
    optional: false,
  },

});

Avaliacoes = new Mongo.Collection('avaliacoes');
Avaliacoes.attachSchema(form);