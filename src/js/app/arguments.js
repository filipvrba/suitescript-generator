import optparse from "optparse";
import { APP_NAME } from "./constants.js";

export const options = {
  name: null,
  script: null,
  type: null,
  desc: null
};

let switches = [
  ["-h", "--help", "Shows help."],
  ["-n", "--name AUTHOR", "Set author name."],
  ["-s", "--script NAME", "Set script name."],
  ["-t", "--type TYPE", "Set script type."],
  ["-d", "--desc DESC", "Set script description."]
];

let parser = new optparse.OptionParser(switches);
parser.banner = `Builds a scaffold specifically for a given sort of script.\nUsage: ${APP_NAME} [options]`;
parser.on("help", () => console.log(parser.toString()));
parser.on("*", (name, value) => options[name] = value);
parser.parse(process.argv)