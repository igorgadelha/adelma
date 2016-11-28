Template.q7.helpers({
  schema: function() {
    return  Schema.q7;
    }
});

Template.example.helpers({    
exampleOptions: function() {
  return {
    sort: true,
    group: {
      scroll: true,
      name: "exampleSortGroup",
      pull: true,
      put: true
    }
  }
},
exampleItems: function() {
  return ExampleItems.find({},{sort: {order: 1}});
}
});

Template.item.helpers({    
itemFormSchema: function() {
  return Schema2.exampleItem;
},
formId: function() {
  return 'formExampleItem' + this._id;
}
});


// Init DB collection
ExampleItems = new Mongo.Collection('exampleItems');

// Simple collection schema
Schema2 = {};

Schema2.exampleItem = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  order: {
    type: Number,
    label: "Sorting",
    optional: true,
    autoform: {
      omit: true
    },
    autoValue: function() {
      if (this.isInsert) {
        var lastSortIndex = ExampleItems.find({}, {sort: {order: -1}, limit: 1});
        
        if(lastSortIndex.count() > 0){
          return lastSortIndex.fetch()[0].order + 1;  
        }

        return 1;
      } else {
        return this.value;
      }
    }    
  }
});

ExampleItems.attachSchema(Schema2.exampleItem);
