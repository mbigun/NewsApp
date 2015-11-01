// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  News.remove({});
  Categories.remove({});
  if (Categories.find().count() === 0) {
    var data = [
      {category: "Sport",
       news: [{
         title: "England 12-12 New Zealand",
         subtitle: "One Language",
         content: "England's last tackle plays have been pathetic so far. They've played half an hour and not put a single decent kick in. Not good enough at schoolboy level, let alone international level. I think it's pretty evident that George Williams is not yet international standard.",
         createdBy: "dev@meteor.com",
         createdOn: "",
         modifiedBy: "",
         modifiedOn: ""
       },
       {
         title: "WTA Finals title in Singapore",
         subtitle: "One Language2",
         content: "The world number six came from a break down in the deciding set against her 25-year-old Czech opponent to win 6-2 4-6 6-3 in two hours and five minutes.",
         createdBy: "admin@admin.com",
         createdOn: "",
         modifiedBy: "",
         modifiedOn: ""
       },
       {
         title: "Roger Federer beats Rafael Nadal",
         subtitle: "One Language2",
         content: "Federer, 34, ended a five-match losing streak against Nadal to win 6-3 5-7 6-3 in just over two hours, in their first meeting at his home ATP event in Basel.",
         createdBy: "admin@admin.com",
         createdOn: "",
         modifiedBy: "",
         modifiedOn: ""
       }]
      },
      {category: "Music",
       news: [{
         title: "Anxiety overshadows campaign",
         subtitle: "2One Language",
         content: "For the past day, its premises have been surrounded by the police after a map locating their offices in the capital, Ankara, was found on suspected militants from the so-called Islamic State group.",
         createdBy: "mbigun@bigmir.net",
         createdOn: "",
         modifiedBy: "",
         modifiedOn: ""
        },
        {
         title: "Rapping for votes",
         subtitle: "2One Language",
         content: "A rap song with undertones of an Ottoman empire army anthem is being shared by its supporters on social media",
         createdBy: "mbigun@bigmir.net",
         createdOn: "",
         modifiedBy: "",
         modifiedOn: ""
        }]
      },
      {category: "Politics",
       news: [{         
         title: "Turkey election: Ruling AKP",
         subtitle: "3One Language",
         content: "With 95% of all votes counted, state-run Anadolu Agency said the party was on 49.5%, with the main opposition CHP on 25.3%.",
         createdBy: "admin@admin.com",
         createdOn: "",
         modifiedBy: "",
         modifiedOn: ""
       }]
      },
      {category: "Movies",
       news: [{     
       }]
      }
    ];

    _.each(data, function(list) {
      var category_id = Categories.insert({category: list.category});
        _.each(list.news, function(text) {
          News.insert({categoryId: category_id,
                      title: text.title,
                      subtitle: text.subtitle,
                      content: text.content,
                      createdBy: text.createdBy,
                      createdOn: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
                      modifiedBy: text.modifiedBy,
                      modifiedOn: text.modifiedOn
                    });
      });
    });
  }
  
});
