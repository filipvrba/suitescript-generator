import fs from "fs";
import path from "path";

function mkdirs(path_o) {
  let dir_name = path.dirname(path_o);
  if (fs.existsSync(dirname)) return true;
  mkdirs(dir_name);
  fs.mkdirSync(dirname)
}