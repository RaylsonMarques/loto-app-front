"use strict";
var env = require("./src/environments/environment");
var DEFAULT_TARGET = "http://localhost";
module.exports = {
    "/api/*": {
        "target": (env.environment.ANGULAR_PROXY_HOST_API || DEFAULT_TARGET) + ":4100",
        "secure": false,
        "pathRewrite": { "^/api": "/api/loto-app" },
        "changeOrigin": true,
        "logLevel": "debug"
    }
};
