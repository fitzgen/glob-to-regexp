# Blob To Regular Expression

[![Build Status](https://travis-ci.org/fitzgen/blob-to-regexp.png?branch=master)](https://travis-ci.org/fitzgen/blob-to-regexp)

Turn a *-wildcard style blob (`"*.min.js"`) into a regular expression
(`/^.+\.min\.js$/`)!

## Install

    npm install blob-to-regexp

## Usage

    var blobToRegExp = require('blob-to-regexp');
    var re = blobToRegExp("f*uck");
    re.test("firetruck"); // true
    re.test("fuck"); // false

    re = blobToRegExp("*.min.js");
    re.test("http://example.com/jquery.min.js"); // true
    re.test("http://example.com/jquery.min.js.map"); // false

    re = blobToRegExp("*/www/*.js");
    re.test("http://example.com/www/app.js"); // true
    re.test("http://example.com/www/lib/factory-proxy-model-observer.js"); // true

## License

Copyright (c) 2013, Nick Fitzgerald

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
