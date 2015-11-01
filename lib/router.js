Router.configure({
  layoutTemplate: 'appLayout'
});

Router.route('home', {
  path: '/',
    action: function () {
    	this.render('appHome');
  }
});

Router.route('appHome', {
  path: '/category/:_id',
    data: function () {
    	return Categories.findOne(this.params._id);
  },
    action: function () {
    	this.render();
  }
});

Router.route('appLogin', {
	path: '/login'
});

Router.route('appRegister', {
	path: '/register'
});

Router.route('appAbout', {
	path: '/about'
});

Router.route('viewNews', {
  path: '/news/:_id',
    data: function () {
    	return News.findOne(this.params._id);
  },
    action: function () {
    	this.render();
  }
});

Router.route('editNews', {
  path: '/news/edit/:_id',
    data: function () {
    	return News.findOne(this.params._id);
  },
    action: function () {
    	this.render();
  }
});

Router.route('addNews', {
  path: '/add',
  action: function () {
      this.render();
  }
});



