"use strict";
exports.__esModule = true;
var env = require("./src/environments/environment");
var DEFAULT_TARGET = "http://localhost";
exports["default"] = {
    "/api/loto-app/*": {
        pathRewrite: {
            "^/api/loto-app": "/api"
        },
        target: (env.environment.API_HOST || DEFAULT_TARGET) + ":4100",
        secure: false,
        logLevel: "debug",
        changeOrigin: true
    }
};
