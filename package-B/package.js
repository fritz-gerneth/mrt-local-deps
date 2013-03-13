Package.describe({
    summary: 'Package-B'
});

Package.on_use(function (api, where) {
    api.use(['package-C'], 'client');
});
