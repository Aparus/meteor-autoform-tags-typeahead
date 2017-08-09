Package.describe({
    name: 'sojourneer:autoform-tags-typeahead',
    version: '0.7.1',
    summary: 'Provides a autoform tags input with typeahead functionality with Japanese support',
    git: 'https://github.com/Sojourneer/meteor-autoform-tags-typeahead.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');

    api.use([
        'mongo',
        'aldeed:simple-schema@1.3.3',
        'aldeed:collection2@2.5.0',
        'aldeed:autoform@5.5.0',
        'ajduke:bootstrap-tagsinput@0.7.0',
        'mrt:bootstrap3-typeahead@0.1.1',
        'templating'
    ]);

    api.addFiles([
        'common/tag.js',
    ], ['server', 'client']);

    api.addFiles([
        'tags-typeahead.html',
        'tags-typeahead.js',
        'tags-typeahead.css'
    ], 'client');

    api.export(['TagsUtil', 'CloudspiderTags']);
});

