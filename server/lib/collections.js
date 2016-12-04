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


// Init DB collection
ExampleItems = new Mongo.Collection('exampleItems');