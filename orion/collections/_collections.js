Cars = new orion.collection('cars', {
	singularName: 'car',
	pluralName: 'cars',
	link: {
		title: 'Cars'
	},
	tabular: {
		columns: [
			{data: 'name', title: 'car name'}
		]
	}
});

Makes = new orion.collection('makes', {
	singularName: 'make',
	pluralName: 'makes',
	link: {
		title: 'Makes'
	},
	tabular: {
		columns: [
			{data: 'name', title: 'make name'}
		]
	}
});

Slideshows = new orion.collection('slideshows', {
	singularName: 'slideshow',
	pluralName: 'slideshows',
	link: {
		title: 'Slideshows'
	},
	tabular: {
		columns: [
			{ data: 'name', title: 'Name'}
		]
	}
})

Posts = new orion.collection('posts', {
	singularName: 'Blog Post',
	pluralName: 'Blog Posts',
	link: {
		title: 'Blog Posts'
	},
	tabular: {
		columns: [
			{ data: 'title', title: 'Title'}
		]
	}
})
