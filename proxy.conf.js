const PROXY_CONFIG=[{
    context:[
        "/notes",
    ],
    target:"https://medghgnfvg.execute-api.us-east-1.amazonaws.com/dev",
    secure: true,
    logLevel: "debug",
    changeOrigin:true,
}]

module.exports = PROXY_CONFIG;