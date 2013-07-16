module.exports = function (glob) {
  const reStr = glob
  // Escape existing regular expression syntax
    .replace(/\\/g, "\\\\")
    .replace(/\//g, "\\/")
    .replace(/\^/g, "\\^")
    .replace(/\$/g, "\\$")
    .replace(/\+/g, "\\+")
    .replace(/\?/g, "\\?")
    .replace(/\./g, "\\.")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\=/g, "\\=")
    .replace(/\!/g, "\\!")
    .replace(/\|/g, "\\|")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\,/g, "\\,")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\-/g, "\\-")
  // Turn * into the match everything wildcard
    .replace(/\*/g, ".*")
  return new RegExp("^" + reStr + "$");
}
