import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

if (Meteor.isServer) {

  Meteor.startup(function () {
    // code to run on server at startup
    if(ExampleItems.find().count() == 0){
      ExampleItems.insert({title: "INSEGURA", order: 1});
      ExampleItems.insert({title: "CIUMENTA", order: 2});
      ExampleItems.insert({title: "AMIGA", order: 3});
      ExampleItems.insert({title: "BRIGUENTA", order: 4});
      ExampleItems.insert({title: "DESCONTROLADA", order: 5});
      ExampleItems.insert({title: "CONTROLADORA", order: 6});
      ExampleItems.insert({title: "SEGURA", order: 7});
      ExampleItems.insert({title: "EMOTIVA", order: 8});
      ExampleItems.insert({title: "RESPEITOSA", order: 9});
      ExampleItems.insert({title: "CALMA", order: 10});
      ExampleItems.insert({title: "COMUNICATIVA", order: 11});
      ExampleItems.insert({title: "ALEGRE", order: 12});
      ExampleItems.insert({title: "MACHISTA", order: 13});
      ExampleItems.insert({title: "INDEPENDENTE EMOCIONALMENTE", order: 14});
    }
  });
}
