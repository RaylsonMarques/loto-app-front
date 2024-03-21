import * as env from "./src/environments/environment";

const DEFAULT_TARGET = "http://localhost";

export default {
	"/api/loto-app/*": {
		pathRewrite: {
			"^/api/loto-app": "/api",
		},
		target: (env.environment.API_HOST || DEFAULT_TARGET) + ":4100",
		secure: false,
		logLevel: "debug",
		changeOrigin: true,
	},
};
