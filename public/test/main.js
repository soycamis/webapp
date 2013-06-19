require.config({
    baseUrl: './',
    urlArgs: 'bust=' +  (new Date()).getTime(),
    paths: {
        'mocha': 'test/lib/'
    }
});