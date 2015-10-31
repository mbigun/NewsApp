// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  Categories.remove({});
  News.remove({});
  if (Categories.find().count() === 0) {
    var data = [
      {category: "Music",
       news: [{
         title: "Data on the Wire",
         subtitle: "One Language",
         content: "Database Everywhere",
         createdBy: "Latency Compensation",
         createdOn: "Full Stack Reactivity",
         modifiedBy: "Embrace the Ecosystem",
         modifiedOn: "Simplicity Equals Productivity"
       },
       {
         title: "Data on the Wire2",
         subtitle: "One Language2",
         content: "Database Everywhere2",
         createdBy: "Latency Compensation2",
         createdOn: "Full Stack Reactivity2",
         modifiedBy: "Embrace the Ecosystem2",
         modifiedOn: "Simplicity Equals Productivity2"
       }]
      },
      {category: "Sport",
       news: [{
         title: "2Data on the Wire",
         subtitle: "2One Language",
         content: "2Database Everywhere",
         createdBy: "2Latency Compensation",
         createdOn: "2Full Stack Reactivity",
         modifiedBy: "2Embrace the Ecosystem",
         modifiedOn: "2Simplicity Equals Productivity"
        }]
      },
      {category: "Politics",
       news: [{         
         title: "3Data on the Wire",
         subtitle: "3One Language",
         content: "3Database Everywhere",
         createdBy: "3Latency Compensation",
         createdOn: "3Full Stack Reactivity",
         modifiedBy: "3Embrace the Ecosystem",
         modifiedOn: "3Simplicity Equals Productivity"
       }]
      }
    ];

    _.each(data, function(list) {
      var category_id = Categories.insert({category: list.category});
        _.each(list.news, function(text) {
          News.insert({
                      categoryId: category_id,
                      title: text.title,
                      subtitle: text.subtitle,
                      content: text.content,
                      createdBy: text.createdBy,
                      createdOn: text.createdOn,
                      modifiedBy: text.modifiedBy,
                      modifiedOn: text.modifiedOn
                    });
      });
    });
  }
});
