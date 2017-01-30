Schema = {};
Schema.q1 = new SimpleSchema({
  inspirar: {
    type: String,
    optional: true,
    label:"Primeiro conte e escreva a quantidade de tempo que leva para inspirar",
    autoform: {
      afFieldInput: {
        type: "text"
      }
    }
  },
  expirar: {
    type: String,
    optional: true,
    label:"Agora conte e escreva a quantidade de tempo que leva para expirar",
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
    label:"Marque as áreas do seu corpo que ficam tensas em situações de conflito",
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
    label:"Escreva na caixa as áreas do se corpo que ficam mais tensas em situações de conflito",
    autoform: {
      type: "textarea",
    }
  }
});

Schema.q4 = new SimpleSchema({
  acaoacalmar: {
    type: [String],
    optional: true,
    label:"Marque a ação que gostaria de realizar para se acalmar",
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
    label:"Escreva outra ação que gostaria de realizar para se acalmar",
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
          {label: "INSEGURA", value: "insegura"},
          {label: "CIUMENTA", value: "ciumenta"},
          {label: "AMIGA", value: "amiga"},
          {label: "BRIGUENTA", value: "briguenta"},
          {label: "DESCONTROLADA", value: "descontrolada"},
          {label: "CONTROLADORA", value: "controladora"},
          {label: "SEGURA", value: "segura"},
          {label: "EMOTIVA", value: "emotiva"},
          {label: "RESPEITOSA", value: "respeitosa"},
          {label: "CALMA", value: "calma"},
          {label: "COMUNICATIVA", value: "comunicativa"},
          {label: "ALEGRE", value: "alegre"},
          {label: "MACHISTA", value: "machista"},
          {label: "INDEPENDENTE EMOCIONALMENTE", value: "independente"}
        ];
      }
    }
  }
});

Schema.q8 = new SimpleSchema({
  qaprecia: {
    type: String,
    optional: true,
    label:"Escreva as qualidades da/o parceira/o que aprecia",
    autoform: {
      type: "textarea",
    }
  }
});

Schema.q9 = new SimpleSchema({
  qnaprecia: {
    type: String,
    optional: true,
    label:"Escreva as qualidades da/o parceira/o que não aprecia",
    autoform: {
      type: "textarea",
    }
  }
});


Schema.q10 = new SimpleSchema({
  autoavaliacao: {
    type: [String],
    optional: true,
    label:"Chegou sua vez de se avaliar, marque as suas características",
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
    label:"Escreva as suas qualidades que não quer mais para você",
    autoform: {
      type: "textarea",
    }
  },
  qcompanheira: {
    type: String,
    optional: true,
    label:"Escreva as qualidades da companheira/o que não quer mais para ela/e",
    autoform: {
      type: "textarea",
    }
  }
});

Schema.q12 = new SimpleSchema({
  qele: {
    type: String,
    optional: true,
    label:"Escreva as qualidades do relacionamento respeitoso entre o casal",
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
