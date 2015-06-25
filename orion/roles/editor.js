EditorRole = new Roles.Role('editor');

EditorRole.helper('collections.posts.indexFilter', function() {
  return { };
})

EditorRole.allow('collections.posts.index', function() { return true; });
EditorRole.allow('collections.posts.insert', function() { return true; });
EditorRole.allow('collections.posts.update', function() { return true; });
EditorRole.allow('collections.posts.remove', function() { return true; });
EditorRole.allow('collections.posts.showCreate', function() { return true; });
EditorRole.allow('collections.posts.showUpdate', function() { return true; });
EditorRole.allow('collections.posts.showRemove', function() { return true; });
