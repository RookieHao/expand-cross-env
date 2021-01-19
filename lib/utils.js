
const PATH_VARS = "pathVars";
const RESOLVE_CONTEXT = "resolveContext";

const { resolve, isAbsolute } = require("path");

exports.resolveFileCfg = function resolveFileCfg(ext) {
  try {
    const fs = require("fs");
    let filePath = exports.resolveCwd('.cross-env.' + ext);
    fs.accessSync(filePath, fs.constants.F_OK);
    return require(filePath);
  } catch (error) { }
}

exports.mergeFileCfg = function mergeFileCfg(cfgs = []) {
  return cfgs.map(exports.serializeFileCfg).reduce((a = {}, b = {}) => {
    return Object.assign(a, b);
  }, {})
}

exports.resolveCwd = function resolveCwd(...paths) {
  const cwd = process.cwd();
  return resolve(cwd, ...paths)
}

exports.serializeFileCfg = function serializeFileCfg(cfg = {}) {
  let { [RESOLVE_CONTEXT]: _context = process.cwd(), [PATH_VARS]: _pathVars, ...envVars } = cfg;
  let vars = { ...envVars };
  if (_pathVars) {
    for (var key in _pathVars) {
      vars[key] = isAbsolute(_pathVars[key]) ? _pathVars[key] : resolve(_context, _pathVars[key])
    }
  }
  return vars;
}

exports.format = function format(opt = {}) {
  return Object.entries(opt).map(([key, value]) => ` ${key}=${value} `)
}