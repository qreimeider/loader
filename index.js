const dotenv = require("dotenv");
const nconf = require("nconf");

dotenv.config();

function loadConfig({ argv, file, env, defaults = {} }) {
	if (argv) {
		nconf.argv();
	}
	if (file) {
		nconf.file(file);
	}
	if (env) {
		nconf.env(env);
	}
	nconf.defaults(defaults);
}

module.exports = {
	loadConfig,
};
