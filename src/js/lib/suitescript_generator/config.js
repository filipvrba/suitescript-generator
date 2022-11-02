export default class Config {
  constructor(path=null) {
    this.set_path_env(path);
    this._config = require("config")
  };

  set_path_env(path) {
    if (path) process.env.NODE_CONFIG_DIR = __dirname + "/configDir/"
  }
}