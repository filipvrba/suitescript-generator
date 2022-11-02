import { CONFIG_IDS, CONFIG_UIDS } from "./constants.js";
import config from "config";

export default class Config {
  get script_paths() {
    return this._script_paths
  };

  set script_paths(script_paths) {
    this._script_paths = script_paths
  };

  get user_details() {
    return this._user_details
  };

  set user_details(user_details) {
    this._user_details = user_details
  };

  get file_options() {
    return this._file_options
  };

  set file_options(file_options) {
    this._file_options = file_options
  };

  constructor(path=null) {
    this.set_path_env(path);
    this._script_paths = {};
    this._user_details = {};
    this._file_options = {};
    this.set_values
  };

  set_path_env(path) {
    if (!path) return null;
    process.env.NODE_CONFIG_DIR = path
  };

  get set_values() {
    for (let k in CONFIG_UIDS) {
      let options = {k, uid: CONFIG_UIDS[k]};
      let uniq_value_l = obj => this.set_uniq_value(obj, options);

      switch (k) {
      case "s":
        uniq_value_l(this._script_paths);
        break;

      case "u":
        uniq_value_l(this._user_details);
        break;

      case "f":
        uniq_value_l(this._file_options)
      }
    }
  };

  set_uniq_value(obj, options) {
    let uniq_a = CONFIG_IDS[options.k];

    for (let k in uniq_a) {
      obj[uniq_a[k]] = config.get(`${options.uid}.${uniq_a[k]}`)
    }
  };

  value(id) {
    this._config.get(id)
  }
}