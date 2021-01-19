// Copyright (c) 2021 RookieHao
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const CrossEnv = require("cross-env");
const { mergeFileCfg, resolveFileCfg, format } = require("./lib/utils")

module.exports = ExpandCrossEnv;

function ExpandCrossEnv(option = {}) {
  /**
   * expand file :
   * .cross-env.js
   * .cross-env.json
   */

  let argv = process.argv.slice(2);

  let nof = argv.indexOf("--nof");
  if (nof >= 0) {
    process.env.EXP_CROSS_ENV_NOFILE = true;
    argv.splice(nof, 1);
  }

  if (!process.env.EXP_CROSS_ENV_NOFILE) {
    let fileCfgS = mergeFileCfg(["json", "js"].map(resolveFileCfg).filter(Boolean));
    argv = format(fileCfgS).concat(argv);
  }
  CrossEnv(argv, option);
}

