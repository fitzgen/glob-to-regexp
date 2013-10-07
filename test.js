var globToRegexp = require("./index.js");
var assert = require("assert");

// Match everything
assert.ok(globToRegexp("*").test("foo"));

// Match the end
assert.ok(globToRegexp("f*").test("foo"));

// Match the start
assert.ok(globToRegexp("*o").test("foo"));

// Match the middle
assert.ok(globToRegexp("f*uck").test("firetruck"));

// Match zero characters
assert.ok(globToRegexp("f*uck").test("fuck"));

// More complex matches
assert.ok(globToRegexp("*.min.js").test("http://example.com/jquery.min.js"));
assert.ok(globToRegexp("*.min.*").test("http://example.com/jquery.min.js"));
assert.ok(globToRegexp("*/js/*.js").test("http://example.com/js/jquery.min.js"));

var testStr = "\\/$^+?.()=!|{},[].*"
assert.ok(globToRegexp(testStr).test(testStr));
console.log("Ok!");
