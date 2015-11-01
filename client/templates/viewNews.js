Template.viewNews.helpers({
});

Template.viewNews.events({
  'click .deleteNews': function(e) {
    e.preventDefault();

    if (confirm("Delete this news?")) {
      News.remove(this._id);
      Router.go('appHome');
    }
  }
});