Router.configure({
  layoutTemplate: 'main'
});

Router.route('/', function() {
	this.render('home')
}, {
	name: 'home',
});

Router.route('/blog', function() {
	var posts = Posts.find().fetch();

	this.render('blogList', {data: {posts: posts}})
});

Router.route('/blog/:slug', {
	name: 'blogSingle',
	data: function() {
		return Posts.findOne({slug: this.params.slug})
	}
})
