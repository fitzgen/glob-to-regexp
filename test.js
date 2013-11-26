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

// EXTENDED MODE
// - support ?, [], {some, *, alternativ?s}

// ?: Match one character, no more and no less
assert.ok(globToRegexp("f?o", true).test("foo"));
assert.equal(false, globToRegexp("f?o", true).test("fooo"));
assert.equal(false, globToRegexp("f?oo", true).test("foo"));

// []: Match a character range
assert.ok(globToRegexp("fo[oz]", true).test("foo"));
assert.ok(globToRegexp("fo[oz]", true).test("foz"));

// {}: Match a choice of different substrings
assert.ok(globToRegexp("foo{bar,baaz}", true).test("foobaaz"));
assert.ok(globToRegexp("foo{bar,b*z}", true).test("foobuzz"));

// More complex extended matches
assert.ok(globToRegexp("http://?o[oz].b*z.com/{*.js,*.html}", true).test("http://foo.baaz.com/jquery.min.js"));
assert.ok(globToRegexp("http://?o[oz].b*z.com/{*.js,*.html}", true).test("http://moz.buzz.com/index.html"));
assert.equal(false, globToRegexp("http://?o[oz].b*z.com/{*.js,*.html}", true).test("http://moz.buzz.com/index.htm"));
assert.equal(false, globToRegexp("http://?o[oz].b*z.com/{*.js,*.html}", true).test("http://moz.bar.com/index.html"));
assert.equal(false, globToRegexp("http://?o[oz].b*z.com/{*.js,*.html}", true).test("http://flozz.buzz.com/index.html"));

// Remaining special chars should still match themselves
var testExtStr = "\\/$^+.()=!|,.*"
assert.ok(globToRegexp(testExtStr).test(testExtStr));

console.log("Ok!");
