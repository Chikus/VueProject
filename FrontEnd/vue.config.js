module.exports = {
    outputDir: (__dirname,'../backend/dist'),
    devServer: {
        proxy: {
            '': {
                target: 'http://localhost:3001'
            }
        }
    }
};
