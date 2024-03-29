// lib/global.js
let globalVar: any;

function setGlobalVar(value: any) {
  globalVar = value;
}

function getGlobalVar() {
  return globalVar;
}

export {
  setGlobalVar,
  getGlobalVar,
};