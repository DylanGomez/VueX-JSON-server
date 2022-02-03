module.exports = {
    presets: [
        ['@vue/cli-plugin-babel/preset', {
            useBuiltIns: 'usage',
            polyfills: [
                'es.array.iterator',
                'es.promise',
                'es.object.assign',
                'es.promise.finally',
                'es.number.is-nan',
                'es.object.is',
            ],
        }],
    ],
}
