module.exports = {
    baseUrl: './',
    devServer: {
        proxy: {
            "/api": {
                target: "https://9c0a853b-f0a6-42d1-a676-6f2d790a9a74.mock.pstmn.io",
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}