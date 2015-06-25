Slideshows.attachSchema(new SimpleSchema({
	name: {
		type: String
	},
	image: orion.attribute('image', {
		label: 'Image',
		optional: true
	}),
	images: {
		type: [Object]
	},
	"images.$.caption": {
		type: String
	},
	"images.$.image": orion.attribute('image', {
      label: 'image', // We use this function to make i18n work in autoform
      optional: true
  }),
	createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));
