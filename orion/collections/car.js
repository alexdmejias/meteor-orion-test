Cars.attachSchema(new SimpleSchema({
	name: {
		type: String
	},
	make: orion.attribute('hasOne', {
		label: 'Make',
	}, {
		collection: Makes,
		titleField: 'name',
		publicationName: 'wasd'
	}),
	createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
