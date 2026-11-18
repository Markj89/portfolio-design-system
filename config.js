module.exports = {
    source: ['tokens/**/*.json'],
    platforms: {
        ts: {
            transformGroup: 'js',
            buildPath: 'src/theme/',
            files: [{
                destination: 'tokens.ts',
                format: 'javascript/esm'
            }]
        }
    }
};