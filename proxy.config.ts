import * as env from "./src/environments/environment";

const DEFAULT_TARGET = "http://localhost";

export = {
	"/api/*": {
		"target": (env.environment.ANGULAR_PROXY_HOST_API || DEFAULT_TARGET) + ":4100",
		"secure": false,
		"pathRewrite": { "^/api": "/api/loto-app" },
		"changeOrigin": true,
		"logLevel": "debug"
	}
};
