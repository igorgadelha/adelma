Meteor.publish("userList", function () {
   return Meteor.users.find({});
});

Meteor.publish("Avaliacoes", function () {
   return Avaliacoes.find({});
});