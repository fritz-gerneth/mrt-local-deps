Package.describe({
    summary: 'Package-A'
});

Package.on_use(function (api, where) {
    api.use(['package-C'], 'client');
});
