module.exports = function (glob, extended) {
  if (glob === null || typeof glob === "undefined") {
    return null;
  }
  if (typeof extended === "undefined") extended = false;
  var str = String(glob),
  reStr = "",
  inMulti = false,
  c;
  
  for (var i = 0, len = str.length; i < len; i++) {
    c = str[i];
    switch (c) {
    case "\\":
    case "/":
    case "$":
    case "^":
    case "+":
    case ".":
    case "(":
    case ")":
    case "=":
    case "!":
    case "|":
      reStr += "\\" + c;
      break;
    case "?":
      if (extended) {
        reStr += ".";
	break;
      }
    case "[":
    case "]":
      if (extended) {
        reStr += c;
	break;
      }
    case "{":
      if (extended) {
        inMulti = true;
	reStr += "(";
	break;
      }
    case "}":
      if (extended) {
        inMulti = false;
	reStr += ")";
	break;
      }
    case ",":
      if (inMulti) {
        reStr += "|";
	break;
      }
      reStr += "\\" + c;
      break;
    case "*":
      reStr += ".*";
      break;
    default:
      reStr += c;
    }
  }
  return new RegExp("^" + reStr + "$");
};
