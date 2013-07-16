module.exports = function (blob) {
  const reStr = blob
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
    .replace(/\*/g, ".+")
  return new RegExp("^" + reStr + "$");
}
