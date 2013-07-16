var blobToRegexp = require("./index.js");
var assert = require("assert");

// Match everything
assert.ok(blobToRegexp("*").test("foo"));

// Match the end
assert.ok(blobToRegexp("f*").test("foo"));

// Match the start
assert.ok(blobToRegexp("*o").test("foo"));

// Match the middle
assert.ok(blobToRegexp("f*uck").test("firetruck"));

// Must match at least one character
assert.ok(!blobToRegexp("f*uck").test("fuck"));

// More complex matches
assert.ok(blobToRegexp("*.min.js").test("http://example.com/jquery.min.js"));
assert.ok(blobToRegexp("*.min.*").test("http://example.com/jquery.min.js"));
assert.ok(blobToRegexp("*/js/*.js").test("http://example.com/js/jquery.min.js"));

console.log("Ok!");
