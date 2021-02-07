const path = require("path");

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
  return path.resolve(cwd, ...paths)
}

exports.serializeFileCfg = function serializeFileCfg(cfg = {}) {
  let vars = {};
  for (var key in cfg) {
    vars[key] = isFunc(cfg[key]) ? cfg[key](path) : cfg[key]
  }
  return vars;
}

exports.format = function format(opt = {}) {
  return Object.entries(opt).map(([key, value]) => ` ${key}=${value} `)
}

function isFunc(v) {
  return typeof v === 'function';
}