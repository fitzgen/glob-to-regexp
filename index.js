module.exports = function (glob) {
  if (glob === null || typeof glob === "undefined") {
    return null;
  }
  var str = String(glob),
  reStr = "",
  c;
  
  for (var i = 0, len = str.length; i < len; i++) {
    c = str[i];
    switch (c) {
    case "\\":
    case "/":
    case "$":
    case "^":
    case "+":
    case "?":
    case ".":
    case "(":
    case ")":
    case "=":
    case "!":
    case "|":
    case "{":
    case "}":
    case ",":
    case "[":
    case "]":
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
