Posts.attachSchema(new SimpleSchema({
	title: {
		type: String
	}
	, slug: {
		type: String
	}
	, content: orion.attribute('summernote', {
		label: 'body'
	})
	, slideshow: orion.attribute('hasOne', {
		label: 'Slideshow',
	}, {
		collection: Slideshows,
		titleField: 'name',
		publicationName: 'wasdasd'
	})
	, createdBy: orion.attribute('createdBy')
  , createdAt: orion.attribute('createdAt')
}));
