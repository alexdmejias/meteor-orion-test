Makes.attachSchema(new SimpleSchema({
	name: {
		type: String
	}
	, createdBy: orion.attribute('createdBy')
  , createdAt: orion.attribute('createdAt')
}));
