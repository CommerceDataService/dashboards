(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var module, exports, s;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/underscorestring_underscore.string/packages/underscorestring_underscore.string.js                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
(function () {                                                                                                      // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 3
//                                                                                                          //      // 4
// packages/underscorestring:underscore.string/meteor-pre.js                                                //      // 5
//                                                                                                          //      // 6
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 7
                                                                                                            //      // 8
// Defining this will trick dist/underscore.string.js into putting its exports into module.exports          // 1    // 9
// Credit to Tim Heckel for this trick - see https://github.com/TimHeckel/meteor-underscore-string          // 2    // 10
module = {};                                                                                                // 3    // 11
                                                                                                            // 4    // 12
// This also needed, otherwise above doesn't work???                                                        // 5    // 13
exports = {};                                                                                               // 6    // 14
                                                                                                            // 7    // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 16
                                                                                                                    // 17
}).call(this);                                                                                                      // 18
                                                                                                                    // 19
                                                                                                                    // 20
                                                                                                                    // 21
                                                                                                                    // 22
                                                                                                                    // 23
                                                                                                                    // 24
(function () {                                                                                                      // 25
                                                                                                                    // 26
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 27
//                                                                                                          //      // 28
// packages/underscorestring:underscore.string/dist/underscore.string.js                                    //      // 29
//                                                                                                          //      // 30
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 31
                                                                                                            //      // 32
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.s=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');                                                                               // 2    // 34
var decap = _dereq_('./decapitalize');                                                                      // 3    // 35
                                                                                                            // 4    // 36
module.exports = function camelize(str, decapitalize) {                                                     // 5    // 37
  str = trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {                                              // 6    // 38
    return c ? c.toUpperCase() : "";                                                                        // 7    // 39
  });                                                                                                       // 8    // 40
                                                                                                            // 9    // 41
  if (decapitalize === true) {                                                                              // 10   // 42
    return decap(str);                                                                                      // 11   // 43
  } else {                                                                                                  // 12   // 44
    return str;                                                                                             // 13   // 45
  }                                                                                                         // 14   // 46
};                                                                                                          // 15   // 47
                                                                                                            // 16   // 48
},{"./decapitalize":9,"./trim":60}],2:[function(_dereq_,module,exports){                                    // 17   // 49
var makeString = _dereq_('./helper/makeString');                                                            // 18   // 50
                                                                                                            // 19   // 51
module.exports = function capitalize(str) {                                                                 // 20   // 52
  str = makeString(str);                                                                                    // 21   // 53
  return str.charAt(0).toUpperCase() + str.slice(1);                                                        // 22   // 54
};                                                                                                          // 23   // 55
                                                                                                            // 24   // 56
},{"./helper/makeString":19}],3:[function(_dereq_,module,exports){                                          // 25   // 57
var makeString = _dereq_('./helper/makeString');                                                            // 26   // 58
                                                                                                            // 27   // 59
module.exports = function chars(str) {                                                                      // 28   // 60
  return makeString(str).split('');                                                                         // 29   // 61
};                                                                                                          // 30   // 62
                                                                                                            // 31   // 63
},{"./helper/makeString":19}],4:[function(_dereq_,module,exports){                                          // 32   // 64
module.exports = function chop(str, step) {                                                                 // 33   // 65
  if (str == null) return [];                                                                               // 34   // 66
  str = String(str);                                                                                        // 35   // 67
  step = ~~step;                                                                                            // 36   // 68
  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];                                // 37   // 69
};                                                                                                          // 38   // 70
                                                                                                            // 39   // 71
},{}],5:[function(_dereq_,module,exports){                                                                  // 40   // 72
var capitalize = _dereq_('./capitalize');                                                                   // 41   // 73
var camelize = _dereq_('./camelize');                                                                       // 42   // 74
var makeString = _dereq_('./helper/makeString');                                                            // 43   // 75
                                                                                                            // 44   // 76
module.exports = function classify(str) {                                                                   // 45   // 77
  str = makeString(str);                                                                                    // 46   // 78
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));                               // 47   // 79
};                                                                                                          // 48   // 80
                                                                                                            // 49   // 81
},{"./camelize":1,"./capitalize":2,"./helper/makeString":19}],6:[function(_dereq_,module,exports){          // 50   // 82
var trim = _dereq_('./trim');                                                                               // 51   // 83
                                                                                                            // 52   // 84
module.exports = function clean(str) {                                                                      // 53   // 85
  return trim(str).replace(/\s+/g, ' ');                                                                    // 54   // 86
};                                                                                                          // 55   // 87
                                                                                                            // 56   // 88
},{"./trim":60}],7:[function(_dereq_,module,exports){                                                       // 57   // 89
var makeString = _dereq_('./helper/makeString');                                                            // 58   // 90
                                                                                                            // 59   // 91
module.exports = function(str, substr) {                                                                    // 60   // 92
  str = makeString(str);                                                                                    // 61   // 93
  substr = makeString(substr);                                                                              // 62   // 94
                                                                                                            // 63   // 95
  if (str.length === 0 || substr.length === 0) return 0;                                                    // 64   // 96
                                                                                                            // 65   // 97
  var count = 0,                                                                                            // 66   // 98
    pos = 0,                                                                                                // 67   // 99
    length = substr.length;                                                                                 // 68   // 100
                                                                                                            // 69   // 101
  while (true) {                                                                                            // 70   // 102
    pos = str.indexOf(substr, pos);                                                                         // 71   // 103
    if (pos === -1) break;                                                                                  // 72   // 104
    count++;                                                                                                // 73   // 105
    pos += length;                                                                                          // 74   // 106
  }                                                                                                         // 75   // 107
                                                                                                            // 76   // 108
  return count;                                                                                             // 77   // 109
};                                                                                                          // 78   // 110
                                                                                                            // 79   // 111
},{"./helper/makeString":19}],8:[function(_dereq_,module,exports){                                          // 80   // 112
var trim = _dereq_('./trim');                                                                               // 81   // 113
                                                                                                            // 82   // 114
module.exports = function dasherize(str) {                                                                  // 83   // 115
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();                       // 84   // 116
};                                                                                                          // 85   // 117
                                                                                                            // 86   // 118
},{"./trim":60}],9:[function(_dereq_,module,exports){                                                       // 87   // 119
var makeString = _dereq_('./helper/makeString');                                                            // 88   // 120
                                                                                                            // 89   // 121
module.exports = function decapitalize(str) {                                                               // 90   // 122
  str = makeString(str);                                                                                    // 91   // 123
  return str.charAt(0).toLowerCase() + str.slice(1);                                                        // 92   // 124
};                                                                                                          // 93   // 125
                                                                                                            // 94   // 126
},{"./helper/makeString":19}],10:[function(_dereq_,module,exports){                                         // 95   // 127
var makeString = _dereq_('./helper/makeString');                                                            // 96   // 128
                                                                                                            // 97   // 129
function getIndent(str) {                                                                                   // 98   // 130
  var matches = str.match(/^[\s\\t]*/gm);                                                                   // 99   // 131
  var indent = matches[0].length;                                                                           // 100  // 132
                                                                                                            // 101  // 133
  for (var i = 1; i < matches.length; i++) {                                                                // 102  // 134
    indent = Math.min(matches[i].length, indent);                                                           // 103  // 135
  }                                                                                                         // 104  // 136
                                                                                                            // 105  // 137
  return indent;                                                                                            // 106  // 138
}                                                                                                           // 107  // 139
                                                                                                            // 108  // 140
module.exports = function dedent(str, pattern) {                                                            // 109  // 141
  str = makeString(str);                                                                                    // 110  // 142
  var indent = getIndent(str);                                                                              // 111  // 143
  var reg;                                                                                                  // 112  // 144
                                                                                                            // 113  // 145
  if (indent === 0) return str;                                                                             // 114  // 146
                                                                                                            // 115  // 147
  if (typeof pattern === 'string') {                                                                        // 116  // 148
    reg = new RegExp('^' + pattern, 'gm');                                                                  // 117  // 149
  } else {                                                                                                  // 118  // 150
    reg = new RegExp('^[ \\t]{' + indent + '}', 'gm');                                                      // 119  // 151
  }                                                                                                         // 120  // 152
                                                                                                            // 121  // 153
  return str.replace(reg, '');                                                                              // 122  // 154
};                                                                                                          // 123  // 155
                                                                                                            // 124  // 156
},{"./helper/makeString":19}],11:[function(_dereq_,module,exports){                                         // 125  // 157
var makeString = _dereq_('./helper/makeString');                                                            // 126  // 158
var toPositive = _dereq_('./helper/toPositive');                                                            // 127  // 159
                                                                                                            // 128  // 160
module.exports = function endsWith(str, ends, position) {                                                   // 129  // 161
  str = makeString(str);                                                                                    // 130  // 162
  ends = '' + ends;                                                                                         // 131  // 163
  if (typeof position == 'undefined') {                                                                     // 132  // 164
    position = str.length - ends.length;                                                                    // 133  // 165
  } else {                                                                                                  // 134  // 166
    position = Math.min(toPositive(position), str.length) - ends.length;                                    // 135  // 167
  }                                                                                                         // 136  // 168
  return position >= 0 && str.indexOf(ends, position) === position;                                         // 137  // 169
};                                                                                                          // 138  // 170
                                                                                                            // 139  // 171
},{"./helper/makeString":19,"./helper/toPositive":21}],12:[function(_dereq_,module,exports){                // 140  // 172
var makeString = _dereq_('./helper/makeString');                                                            // 141  // 173
var escapeChars = _dereq_('./helper/escapeChars');                                                          // 142  // 174
var reversedEscapeChars = {};                                                                               // 143  // 175
                                                                                                            // 144  // 176
for(var key in escapeChars) reversedEscapeChars[escapeChars[key]] = key;                                    // 145  // 177
reversedEscapeChars["'"] = '#39';                                                                           // 146  // 178
                                                                                                            // 147  // 179
module.exports = function escapeHTML(str) {                                                                 // 148  // 180
  return makeString(str).replace(/[&<>"']/g, function(m) {                                                  // 149  // 181
    return '&' + reversedEscapeChars[m] + ';';                                                              // 150  // 182
  });                                                                                                       // 151  // 183
};                                                                                                          // 152  // 184
                                                                                                            // 153  // 185
},{"./helper/escapeChars":17,"./helper/makeString":19}],13:[function(_dereq_,module,exports){               // 154  // 186
module.exports = function() {                                                                               // 155  // 187
  var result = {};                                                                                          // 156  // 188
                                                                                                            // 157  // 189
  for (var prop in this) {                                                                                  // 158  // 190
    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join)$/)) continue;          // 159  // 191
    result[prop] = this[prop];                                                                              // 160  // 192
  }                                                                                                         // 161  // 193
                                                                                                            // 162  // 194
  return result;                                                                                            // 163  // 195
};                                                                                                          // 164  // 196
                                                                                                            // 165  // 197
},{}],14:[function(_dereq_,module,exports){                                                                 // 166  // 198
//  Underscore.string                                                                                       // 167  // 199
//  (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>                                            // 168  // 200
//  Underscore.string is freely distributable under the terms of the MIT license.                           // 169  // 201
//  Documentation: https://github.com/epeli/underscore.string                                               // 170  // 202
//  Some code is borrowed from MooTools and Alexandru Marasteanu.                                           // 171  // 203
//  Version '3.0.3'                                                                                         // 172  // 204
                                                                                                            // 173  // 205
'use strict';                                                                                               // 174  // 206
                                                                                                            // 175  // 207
function s(value) {                                                                                         // 176  // 208
  /* jshint validthis: true */                                                                              // 177  // 209
  if (!(this instanceof s)) return new s(value);                                                            // 178  // 210
  this._wrapped = value;                                                                                    // 179  // 211
}                                                                                                           // 180  // 212
                                                                                                            // 181  // 213
s.VERSION = '3.0.3';                                                                                        // 182  // 214
                                                                                                            // 183  // 215
s.isBlank          = _dereq_('./isBlank');                                                                  // 184  // 216
s.stripTags        = _dereq_('./stripTags');                                                                // 185  // 217
s.capitalize       = _dereq_('./capitalize');                                                               // 186  // 218
s.decapitalize     = _dereq_('./decapitalize');                                                             // 187  // 219
s.chop             = _dereq_('./chop');                                                                     // 188  // 220
s.trim             = _dereq_('./trim');                                                                     // 189  // 221
s.clean            = _dereq_('./clean');                                                                    // 190  // 222
s.count            = _dereq_('./count');                                                                    // 191  // 223
s.chars            = _dereq_('./chars');                                                                    // 192  // 224
s.swapCase         = _dereq_('./swapCase');                                                                 // 193  // 225
s.escapeHTML       = _dereq_('./escapeHTML');                                                               // 194  // 226
s.unescapeHTML     = _dereq_('./unescapeHTML');                                                             // 195  // 227
s.splice           = _dereq_('./splice');                                                                   // 196  // 228
s.insert           = _dereq_('./insert');                                                                   // 197  // 229
s.replaceAll       = _dereq_('./replaceAll');                                                               // 198  // 230
s.include          = _dereq_('./include');                                                                  // 199  // 231
s.join             = _dereq_('./join');                                                                     // 200  // 232
s.lines            = _dereq_('./lines');                                                                    // 201  // 233
s.dedent           = _dereq_('./dedent');                                                                   // 202  // 234
s.reverse          = _dereq_('./reverse');                                                                  // 203  // 235
s.startsWith       = _dereq_('./startsWith');                                                               // 204  // 236
s.endsWith         = _dereq_('./endsWith');                                                                 // 205  // 237
s.pred             = _dereq_('./pred');                                                                     // 206  // 238
s.succ             = _dereq_('./succ');                                                                     // 207  // 239
s.titleize         = _dereq_('./titleize');                                                                 // 208  // 240
s.camelize         = _dereq_('./camelize');                                                                 // 209  // 241
s.underscored      = _dereq_('./underscored');                                                              // 210  // 242
s.dasherize        = _dereq_('./dasherize');                                                                // 211  // 243
s.classify         = _dereq_('./classify');                                                                 // 212  // 244
s.humanize         = _dereq_('./humanize');                                                                 // 213  // 245
s.ltrim            = _dereq_('./ltrim');                                                                    // 214  // 246
s.rtrim            = _dereq_('./rtrim');                                                                    // 215  // 247
s.truncate         = _dereq_('./truncate');                                                                 // 216  // 248
s.prune            = _dereq_('./prune');                                                                    // 217  // 249
s.words            = _dereq_('./words');                                                                    // 218  // 250
s.pad              = _dereq_('./pad');                                                                      // 219  // 251
s.lpad             = _dereq_('./lpad');                                                                     // 220  // 252
s.rpad             = _dereq_('./rpad');                                                                     // 221  // 253
s.lrpad            = _dereq_('./lrpad');                                                                    // 222  // 254
s.sprintf          = _dereq_('./sprintf');                                                                  // 223  // 255
s.vsprintf         = _dereq_('./vsprintf');                                                                 // 224  // 256
s.toNumber         = _dereq_('./toNumber');                                                                 // 225  // 257
s.numberFormat     = _dereq_('./numberFormat');                                                             // 226  // 258
s.strRight         = _dereq_('./strRight');                                                                 // 227  // 259
s.strRightBack     = _dereq_('./strRightBack');                                                             // 228  // 260
s.strLeft          = _dereq_('./strLeft');                                                                  // 229  // 261
s.strLeftBack      = _dereq_('./strLeftBack');                                                              // 230  // 262
s.toSentence       = _dereq_('./toSentence');                                                               // 231  // 263
s.toSentenceSerial = _dereq_('./toSentenceSerial');                                                         // 232  // 264
s.slugify          = _dereq_('./slugify');                                                                  // 233  // 265
s.surround         = _dereq_('./surround');                                                                 // 234  // 266
s.quote            = _dereq_('./quote');                                                                    // 235  // 267
s.unquote          = _dereq_('./unquote');                                                                  // 236  // 268
s.repeat           = _dereq_('./repeat');                                                                   // 237  // 269
s.naturalCmp       = _dereq_('./naturalCmp');                                                               // 238  // 270
s.levenshtein      = _dereq_('./levenshtein');                                                              // 239  // 271
s.toBoolean        = _dereq_('./toBoolean');                                                                // 240  // 272
s.exports          = _dereq_('./exports');                                                                  // 241  // 273
s.escapeRegExp     = _dereq_('./helper/escapeRegExp');                                                      // 242  // 274
                                                                                                            // 243  // 275
// Aliases                                                                                                  // 244  // 276
s.strip     = s.trim;                                                                                       // 245  // 277
s.lstrip    = s.ltrim;                                                                                      // 246  // 278
s.rstrip    = s.rtrim;                                                                                      // 247  // 279
s.center    = s.lrpad;                                                                                      // 248  // 280
s.rjust     = s.lpad;                                                                                       // 249  // 281
s.ljust     = s.rpad;                                                                                       // 250  // 282
s.contains  = s.include;                                                                                    // 251  // 283
s.q         = s.quote;                                                                                      // 252  // 284
s.toBool    = s.toBoolean;                                                                                  // 253  // 285
s.camelcase = s.camelize;                                                                                   // 254  // 286
                                                                                                            // 255  // 287
                                                                                                            // 256  // 288
// Implement chaining                                                                                       // 257  // 289
s.prototype = {                                                                                             // 258  // 290
  value: function value() {                                                                                 // 259  // 291
    return this._wrapped;                                                                                   // 260  // 292
  }                                                                                                         // 261  // 293
};                                                                                                          // 262  // 294
                                                                                                            // 263  // 295
function fn2method(key, fn) {                                                                               // 264  // 296
    if (typeof fn !== "function") return;                                                                   // 265  // 297
    s.prototype[key] = function() {                                                                         // 266  // 298
      var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));                             // 267  // 299
      var res = fn.apply(null, args);                                                                       // 268  // 300
      // if the result is non-string stop the chain and return the value                                    // 269  // 301
      return typeof res === 'string' ? new s(res) : res;                                                    // 270  // 302
    };                                                                                                      // 271  // 303
}                                                                                                           // 272  // 304
                                                                                                            // 273  // 305
// Copy functions to instance methods for chaining                                                          // 274  // 306
for (var key in s) fn2method(key, s[key]);                                                                  // 275  // 307
                                                                                                            // 276  // 308
fn2method("tap", function tap(string, fn) {                                                                 // 277  // 309
  return fn(string);                                                                                        // 278  // 310
});                                                                                                         // 279  // 311
                                                                                                            // 280  // 312
function prototype2method(methodName) {                                                                     // 281  // 313
  fn2method(methodName, function(context) {                                                                 // 282  // 314
    var args = Array.prototype.slice.call(arguments, 1);                                                    // 283  // 315
    return String.prototype[methodName].apply(context, args);                                               // 284  // 316
  });                                                                                                       // 285  // 317
}                                                                                                           // 286  // 318
                                                                                                            // 287  // 319
var prototypeMethods = [                                                                                    // 288  // 320
  "toUpperCase",                                                                                            // 289  // 321
  "toLowerCase",                                                                                            // 290  // 322
  "split",                                                                                                  // 291  // 323
  "replace",                                                                                                // 292  // 324
  "slice",                                                                                                  // 293  // 325
  "substring",                                                                                              // 294  // 326
  "substr",                                                                                                 // 295  // 327
  "concat"                                                                                                  // 296  // 328
];                                                                                                          // 297  // 329
                                                                                                            // 298  // 330
for (var key in prototypeMethods) prototype2method(prototypeMethods[key]);                                  // 299  // 331
                                                                                                            // 300  // 332
                                                                                                            // 301  // 333
module.exports = s;                                                                                         // 302  // 334
                                                                                                            // 303  // 335
},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./count":7,"./dasherize":8,"./decapitalize":9,"./dedent":10,"./endsWith":11,"./escapeHTML":12,"./exports":13,"./helper/escapeRegExp":18,"./humanize":22,"./include":23,"./insert":24,"./isBlank":25,"./join":26,"./levenshtein":27,"./lines":28,"./lpad":29,"./lrpad":30,"./ltrim":31,"./naturalCmp":32,"./numberFormat":33,"./pad":34,"./pred":35,"./prune":36,"./quote":37,"./repeat":38,"./replaceAll":39,"./reverse":40,"./rpad":41,"./rtrim":42,"./slugify":43,"./splice":44,"./sprintf":45,"./startsWith":46,"./strLeft":47,"./strLeftBack":48,"./strRight":49,"./strRightBack":50,"./stripTags":51,"./succ":52,"./surround":53,"./swapCase":54,"./titleize":55,"./toBoolean":56,"./toNumber":57,"./toSentence":58,"./toSentenceSerial":59,"./trim":60,"./truncate":61,"./underscored":62,"./unescapeHTML":63,"./unquote":64,"./vsprintf":65,"./words":66}],15:[function(_dereq_,module,exports){
var makeString = _dereq_('./makeString');                                                                   // 305  // 337
                                                                                                            // 306  // 338
module.exports = function adjacent(str, direction) {                                                        // 307  // 339
  str = makeString(str);                                                                                    // 308  // 340
  if (str.length === 0) {                                                                                   // 309  // 341
    return '';                                                                                              // 310  // 342
  }                                                                                                         // 311  // 343
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);                // 312  // 344
};                                                                                                          // 313  // 345
                                                                                                            // 314  // 346
},{"./makeString":19}],16:[function(_dereq_,module,exports){                                                // 315  // 347
var escapeRegExp = _dereq_('./escapeRegExp');                                                               // 316  // 348
                                                                                                            // 317  // 349
module.exports = function defaultToWhiteSpace(characters) {                                                 // 318  // 350
  if (characters == null)                                                                                   // 319  // 351
    return '\\s';                                                                                           // 320  // 352
  else if (characters.source)                                                                               // 321  // 353
    return characters.source;                                                                               // 322  // 354
  else                                                                                                      // 323  // 355
    return '[' + escapeRegExp(characters) + ']';                                                            // 324  // 356
};                                                                                                          // 325  // 357
                                                                                                            // 326  // 358
},{"./escapeRegExp":18}],17:[function(_dereq_,module,exports){                                              // 327  // 359
var escapeChars = {                                                                                         // 328  // 360
  lt: '<',                                                                                                  // 329  // 361
  gt: '>',                                                                                                  // 330  // 362
  quot: '"',                                                                                                // 331  // 363
  amp: '&',                                                                                                 // 332  // 364
  apos: "'"                                                                                                 // 333  // 365
};                                                                                                          // 334  // 366
                                                                                                            // 335  // 367
module.exports = escapeChars;                                                                               // 336  // 368
                                                                                                            // 337  // 369
},{}],18:[function(_dereq_,module,exports){                                                                 // 338  // 370
var makeString = _dereq_('./makeString');                                                                   // 339  // 371
                                                                                                            // 340  // 372
module.exports = function escapeRegExp(str) {                                                               // 341  // 373
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');                                     // 342  // 374
};                                                                                                          // 343  // 375
                                                                                                            // 344  // 376
},{"./makeString":19}],19:[function(_dereq_,module,exports){                                                // 345  // 377
/**                                                                                                         // 346  // 378
 * Ensure some object is a coerced to a string                                                              // 347  // 379
 **/                                                                                                        // 348  // 380
module.exports = function makeString(object) {                                                              // 349  // 381
  if (object == null) return '';                                                                            // 350  // 382
  return '' + object;                                                                                       // 351  // 383
};                                                                                                          // 352  // 384
                                                                                                            // 353  // 385
},{}],20:[function(_dereq_,module,exports){                                                                 // 354  // 386
module.exports = function strRepeat(str, qty){                                                              // 355  // 387
  if (qty < 1) return '';                                                                                   // 356  // 388
  var result = '';                                                                                          // 357  // 389
  while (qty > 0) {                                                                                         // 358  // 390
    if (qty & 1) result += str;                                                                             // 359  // 391
    qty >>= 1, str += str;                                                                                  // 360  // 392
  }                                                                                                         // 361  // 393
  return result;                                                                                            // 362  // 394
};                                                                                                          // 363  // 395
                                                                                                            // 364  // 396
},{}],21:[function(_dereq_,module,exports){                                                                 // 365  // 397
module.exports = function toPositive(number) {                                                              // 366  // 398
  return number < 0 ? 0 : (+number || 0);                                                                   // 367  // 399
};                                                                                                          // 368  // 400
                                                                                                            // 369  // 401
},{}],22:[function(_dereq_,module,exports){                                                                 // 370  // 402
var capitalize = _dereq_('./capitalize');                                                                   // 371  // 403
var underscored = _dereq_('./underscored');                                                                 // 372  // 404
var trim = _dereq_('./trim');                                                                               // 373  // 405
                                                                                                            // 374  // 406
module.exports = function humanize(str) {                                                                   // 375  // 407
  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));                         // 376  // 408
};                                                                                                          // 377  // 409
                                                                                                            // 378  // 410
},{"./capitalize":2,"./trim":60,"./underscored":62}],23:[function(_dereq_,module,exports){                  // 379  // 411
var makeString = _dereq_('./helper/makeString');                                                            // 380  // 412
                                                                                                            // 381  // 413
module.exports = function include(str, needle) {                                                            // 382  // 414
  if (needle === '') return true;                                                                           // 383  // 415
  return makeString(str).indexOf(needle) !== -1;                                                            // 384  // 416
};                                                                                                          // 385  // 417
                                                                                                            // 386  // 418
},{"./helper/makeString":19}],24:[function(_dereq_,module,exports){                                         // 387  // 419
var splice = _dereq_('./splice');                                                                           // 388  // 420
                                                                                                            // 389  // 421
module.exports = function insert(str, i, substr) {                                                          // 390  // 422
  return splice(str, i, 0, substr);                                                                         // 391  // 423
};                                                                                                          // 392  // 424
                                                                                                            // 393  // 425
},{"./splice":44}],25:[function(_dereq_,module,exports){                                                    // 394  // 426
var makeString = _dereq_('./helper/makeString');                                                            // 395  // 427
                                                                                                            // 396  // 428
module.exports = function isBlank(str) {                                                                    // 397  // 429
  return (/^\s*$/).test(makeString(str));                                                                   // 398  // 430
};                                                                                                          // 399  // 431
                                                                                                            // 400  // 432
},{"./helper/makeString":19}],26:[function(_dereq_,module,exports){                                         // 401  // 433
var makeString = _dereq_('./helper/makeString');                                                            // 402  // 434
var slice = [].slice;                                                                                       // 403  // 435
                                                                                                            // 404  // 436
module.exports = function join() {                                                                          // 405  // 437
  var args = slice.call(arguments),                                                                         // 406  // 438
    separator = args.shift();                                                                               // 407  // 439
                                                                                                            // 408  // 440
  return args.join(makeString(separator));                                                                  // 409  // 441
};                                                                                                          // 410  // 442
                                                                                                            // 411  // 443
},{"./helper/makeString":19}],27:[function(_dereq_,module,exports){                                         // 412  // 444
var makeString = _dereq_('./helper/makeString');                                                            // 413  // 445
                                                                                                            // 414  // 446
module.exports = function levenshtein(str1, str2) {                                                         // 415  // 447
  str1 = makeString(str1);                                                                                  // 416  // 448
  str2 = makeString(str2);                                                                                  // 417  // 449
                                                                                                            // 418  // 450
  var current = [],                                                                                         // 419  // 451
    prev, value;                                                                                            // 420  // 452
                                                                                                            // 421  // 453
  for (var i = 0; i <= str2.length; i++)                                                                    // 422  // 454
    for (var j = 0; j <= str1.length; j++) {                                                                // 423  // 455
      if (i && j)                                                                                           // 424  // 456
        if (str1.charAt(j - 1) === str2.charAt(i - 1))                                                      // 425  // 457
          value = prev;                                                                                     // 426  // 458
        else                                                                                                // 427  // 459
          value = Math.min(current[j], current[j - 1], prev) + 1;                                           // 428  // 460
        else                                                                                                // 429  // 461
          value = i + j;                                                                                    // 430  // 462
                                                                                                            // 431  // 463
      prev = current[j];                                                                                    // 432  // 464
      current[j] = value;                                                                                   // 433  // 465
    }                                                                                                       // 434  // 466
                                                                                                            // 435  // 467
  return current.pop();                                                                                     // 436  // 468
};                                                                                                          // 437  // 469
                                                                                                            // 438  // 470
},{"./helper/makeString":19}],28:[function(_dereq_,module,exports){                                         // 439  // 471
module.exports = function lines(str) {                                                                      // 440  // 472
  if (str == null) return [];                                                                               // 441  // 473
  return String(str).split(/\r?\n/);                                                                        // 442  // 474
};                                                                                                          // 443  // 475
                                                                                                            // 444  // 476
},{}],29:[function(_dereq_,module,exports){                                                                 // 445  // 477
var pad = _dereq_('./pad');                                                                                 // 446  // 478
                                                                                                            // 447  // 479
module.exports = function lpad(str, length, padStr) {                                                       // 448  // 480
  return pad(str, length, padStr);                                                                          // 449  // 481
};                                                                                                          // 450  // 482
                                                                                                            // 451  // 483
},{"./pad":34}],30:[function(_dereq_,module,exports){                                                       // 452  // 484
var pad = _dereq_('./pad');                                                                                 // 453  // 485
                                                                                                            // 454  // 486
module.exports = function lrpad(str, length, padStr) {                                                      // 455  // 487
  return pad(str, length, padStr, 'both');                                                                  // 456  // 488
};                                                                                                          // 457  // 489
                                                                                                            // 458  // 490
},{"./pad":34}],31:[function(_dereq_,module,exports){                                                       // 459  // 491
var makeString = _dereq_('./helper/makeString');                                                            // 460  // 492
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');                                          // 461  // 493
var nativeTrimLeft = String.prototype.trimLeft;                                                             // 462  // 494
                                                                                                            // 463  // 495
module.exports = function ltrim(str, characters) {                                                          // 464  // 496
  str = makeString(str);                                                                                    // 465  // 497
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);                                       // 466  // 498
  characters = defaultToWhiteSpace(characters);                                                             // 467  // 499
  return str.replace(new RegExp('^' + characters + '+'), '');                                               // 468  // 500
};                                                                                                          // 469  // 501
                                                                                                            // 470  // 502
},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":19}],32:[function(_dereq_,module,exports){       // 471  // 503
module.exports = function naturalCmp(str1, str2) {                                                          // 472  // 504
  if (str1 == str2) return 0;                                                                               // 473  // 505
  if (!str1) return -1;                                                                                     // 474  // 506
  if (!str2) return 1;                                                                                      // 475  // 507
                                                                                                            // 476  // 508
  var cmpRegex = /(\.\d+)|(\d+)|(\D+)/g,                                                                    // 477  // 509
    tokens1 = String(str1).match(cmpRegex),                                                                 // 478  // 510
    tokens2 = String(str2).match(cmpRegex),                                                                 // 479  // 511
    count = Math.min(tokens1.length, tokens2.length);                                                       // 480  // 512
                                                                                                            // 481  // 513
  for (var i = 0; i < count; i++) {                                                                         // 482  // 514
    var a = tokens1[i],                                                                                     // 483  // 515
      b = tokens2[i];                                                                                       // 484  // 516
                                                                                                            // 485  // 517
    if (a !== b) {                                                                                          // 486  // 518
      var num1 = +a;                                                                                        // 487  // 519
      var num2 = +b;                                                                                        // 488  // 520
      if (num1 === num1 && num2 === num2) {                                                                 // 489  // 521
        return num1 > num2 ? 1 : -1;                                                                        // 490  // 522
      }                                                                                                     // 491  // 523
      return a < b ? -1 : 1;                                                                                // 492  // 524
    }                                                                                                       // 493  // 525
  }                                                                                                         // 494  // 526
                                                                                                            // 495  // 527
  if (tokens1.length != tokens2.length)                                                                     // 496  // 528
    return tokens1.length - tokens2.length;                                                                 // 497  // 529
                                                                                                            // 498  // 530
  return str1 < str2 ? -1 : 1;                                                                              // 499  // 531
};                                                                                                          // 500  // 532
                                                                                                            // 501  // 533
},{}],33:[function(_dereq_,module,exports){                                                                 // 502  // 534
module.exports = function numberFormat(number, dec, dsep, tsep) {                                           // 503  // 535
  if (isNaN(number) || number == null) return '';                                                           // 504  // 536
                                                                                                            // 505  // 537
  number = number.toFixed(~~dec);                                                                           // 506  // 538
  tsep = typeof tsep == 'string' ? tsep : ',';                                                              // 507  // 539
                                                                                                            // 508  // 540
  var parts = number.split('.'),                                                                            // 509  // 541
    fnums = parts[0],                                                                                       // 510  // 542
    decimals = parts[1] ? (dsep || '.') + parts[1] : '';                                                    // 511  // 543
                                                                                                            // 512  // 544
  return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;                                     // 513  // 545
};                                                                                                          // 514  // 546
                                                                                                            // 515  // 547
},{}],34:[function(_dereq_,module,exports){                                                                 // 516  // 548
var makeString = _dereq_('./helper/makeString');                                                            // 517  // 549
var strRepeat = _dereq_('./helper/strRepeat');                                                              // 518  // 550
                                                                                                            // 519  // 551
module.exports = function pad(str, length, padStr, type) {                                                  // 520  // 552
  str = makeString(str);                                                                                    // 521  // 553
  length = ~~length;                                                                                        // 522  // 554
                                                                                                            // 523  // 555
  var padlen = 0;                                                                                           // 524  // 556
                                                                                                            // 525  // 557
  if (!padStr)                                                                                              // 526  // 558
    padStr = ' ';                                                                                           // 527  // 559
  else if (padStr.length > 1)                                                                               // 528  // 560
    padStr = padStr.charAt(0);                                                                              // 529  // 561
                                                                                                            // 530  // 562
  switch (type) {                                                                                           // 531  // 563
    case 'right':                                                                                           // 532  // 564
      padlen = length - str.length;                                                                         // 533  // 565
      return str + strRepeat(padStr, padlen);                                                               // 534  // 566
    case 'both':                                                                                            // 535  // 567
      padlen = length - str.length;                                                                         // 536  // 568
      return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));    // 537  // 569
    default: // 'left'                                                                                      // 538  // 570
      padlen = length - str.length;                                                                         // 539  // 571
      return strRepeat(padStr, padlen) + str;                                                               // 540  // 572
  }                                                                                                         // 541  // 573
};                                                                                                          // 542  // 574
                                                                                                            // 543  // 575
},{"./helper/makeString":19,"./helper/strRepeat":20}],35:[function(_dereq_,module,exports){                 // 544  // 576
var adjacent = _dereq_('./helper/adjacent');                                                                // 545  // 577
                                                                                                            // 546  // 578
module.exports = function succ(str) {                                                                       // 547  // 579
  return adjacent(str, -1);                                                                                 // 548  // 580
};                                                                                                          // 549  // 581
                                                                                                            // 550  // 582
},{"./helper/adjacent":15}],36:[function(_dereq_,module,exports){                                           // 551  // 583
/**                                                                                                         // 552  // 584
 * _s.prune: a more elegant version of truncate                                                             // 553  // 585
 * prune extra chars, never leaving a half-chopped word.                                                    // 554  // 586
 * @author github.com/rwz                                                                                   // 555  // 587
 */                                                                                                         // 556  // 588
var makeString = _dereq_('./helper/makeString');                                                            // 557  // 589
var rtrim = _dereq_('./rtrim');                                                                             // 558  // 590
                                                                                                            // 559  // 591
module.exports = function prune(str, length, pruneStr) {                                                    // 560  // 592
  str = makeString(str);                                                                                    // 561  // 593
  length = ~~length;                                                                                        // 562  // 594
  pruneStr = pruneStr != null ? String(pruneStr) : '...';                                                   // 563  // 595
                                                                                                            // 564  // 596
  if (str.length <= length) return str;                                                                     // 565  // 597
                                                                                                            // 566  // 598
  var tmpl = function(c) {                                                                                  // 567  // 599
    return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';                                                 // 568  // 600
  },                                                                                                        // 569  // 601
    template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA' // 570  // 602
                                                                                                            // 571  // 603
  if (template.slice(template.length - 2).match(/\w\w/))                                                    // 572  // 604
    template = template.replace(/\s*\S+$/, '');                                                             // 573  // 605
  else                                                                                                      // 574  // 606
    template = rtrim(template.slice(0, template.length - 1));                                               // 575  // 607
                                                                                                            // 576  // 608
  return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;        // 577  // 609
};                                                                                                          // 578  // 610
                                                                                                            // 579  // 611
},{"./helper/makeString":19,"./rtrim":42}],37:[function(_dereq_,module,exports){                            // 580  // 612
var surround = _dereq_('./surround');                                                                       // 581  // 613
                                                                                                            // 582  // 614
module.exports = function quote(str, quoteChar) {                                                           // 583  // 615
  return surround(str, quoteChar || '"');                                                                   // 584  // 616
};                                                                                                          // 585  // 617
                                                                                                            // 586  // 618
},{"./surround":53}],38:[function(_dereq_,module,exports){                                                  // 587  // 619
var makeString = _dereq_('./helper/makeString');                                                            // 588  // 620
var strRepeat = _dereq_('./helper/strRepeat');                                                              // 589  // 621
                                                                                                            // 590  // 622
module.exports = function repeat(str, qty, separator) {                                                     // 591  // 623
  str = makeString(str);                                                                                    // 592  // 624
                                                                                                            // 593  // 625
  qty = ~~qty;                                                                                              // 594  // 626
                                                                                                            // 595  // 627
  // using faster implementation if separator is not needed;                                                // 596  // 628
  if (separator == null) return strRepeat(str, qty);                                                        // 597  // 629
                                                                                                            // 598  // 630
  // this one is about 300x slower in Google Chrome                                                         // 599  // 631
  for (var repeat = []; qty > 0; repeat[--qty] = str) {}                                                    // 600  // 632
  return repeat.join(separator);                                                                            // 601  // 633
};                                                                                                          // 602  // 634
                                                                                                            // 603  // 635
},{"./helper/makeString":19,"./helper/strRepeat":20}],39:[function(_dereq_,module,exports){                 // 604  // 636
var makeString = _dereq_('./helper/makeString');                                                            // 605  // 637
                                                                                                            // 606  // 638
module.exports = function replaceAll(str, find, replace, ignorecase) {                                      // 607  // 639
  var flags = (ignorecase === true)?'gi':'g';                                                               // 608  // 640
  var reg = new RegExp(find, flags);                                                                        // 609  // 641
                                                                                                            // 610  // 642
  return makeString(str).replace(reg, replace);                                                             // 611  // 643
};                                                                                                          // 612  // 644
                                                                                                            // 613  // 645
},{"./helper/makeString":19}],40:[function(_dereq_,module,exports){                                         // 614  // 646
var chars = _dereq_('./chars');                                                                             // 615  // 647
                                                                                                            // 616  // 648
module.exports = function reverse(str) {                                                                    // 617  // 649
  return chars(str).reverse().join('');                                                                     // 618  // 650
};                                                                                                          // 619  // 651
                                                                                                            // 620  // 652
},{"./chars":3}],41:[function(_dereq_,module,exports){                                                      // 621  // 653
var pad = _dereq_('./pad');                                                                                 // 622  // 654
                                                                                                            // 623  // 655
module.exports = function rpad(str, length, padStr) {                                                       // 624  // 656
  return pad(str, length, padStr, 'right');                                                                 // 625  // 657
};                                                                                                          // 626  // 658
                                                                                                            // 627  // 659
},{"./pad":34}],42:[function(_dereq_,module,exports){                                                       // 628  // 660
var makeString = _dereq_('./helper/makeString');                                                            // 629  // 661
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');                                          // 630  // 662
var nativeTrimRight = String.prototype.trimRight;                                                           // 631  // 663
                                                                                                            // 632  // 664
module.exports = function rtrim(str, characters) {                                                          // 633  // 665
  str = makeString(str);                                                                                    // 634  // 666
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);                                     // 635  // 667
  characters = defaultToWhiteSpace(characters);                                                             // 636  // 668
  return str.replace(new RegExp(characters + '+$'), '');                                                    // 637  // 669
};                                                                                                          // 638  // 670
                                                                                                            // 639  // 671
},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":19}],43:[function(_dereq_,module,exports){       // 640  // 672
var makeString = _dereq_('./helper/makeString');                                                            // 641  // 673
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');                                          // 642  // 674
var trim = _dereq_('./trim');                                                                               // 643  // 675
var dasherize = _dereq_('./dasherize');                                                                     // 644  // 676
                                                                                                            // 645  // 677
module.exports = function slugify(str) {                                                                    // 646  // 678
  var from  = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",                                    // 647  // 679
      to    = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz",                                    // 648  // 680
      regex = new RegExp(defaultToWhiteSpace(from), 'g');                                                   // 649  // 681
                                                                                                            // 650  // 682
  str = makeString(str).toLowerCase().replace(regex, function(c){                                           // 651  // 683
    var index = from.indexOf(c);                                                                            // 652  // 684
    return to.charAt(index) || '-';                                                                         // 653  // 685
  });                                                                                                       // 654  // 686
                                                                                                            // 655  // 687
  return trim(dasherize(str.replace(/[^\w\s-]/g, '-')), '-');                                               // 656  // 688
};                                                                                                          // 657  // 689
                                                                                                            // 658  // 690
},{"./dasherize":8,"./helper/defaultToWhiteSpace":16,"./helper/makeString":19,"./trim":60}],44:[function(_dereq_,module,exports){
var chars = _dereq_('./chars');                                                                             // 660  // 692
                                                                                                            // 661  // 693
module.exports = function splice(str, i, howmany, substr) {                                                 // 662  // 694
  var arr = chars(str);                                                                                     // 663  // 695
  arr.splice(~~i, ~~howmany, substr);                                                                       // 664  // 696
  return arr.join('');                                                                                      // 665  // 697
};                                                                                                          // 666  // 698
                                                                                                            // 667  // 699
},{"./chars":3}],45:[function(_dereq_,module,exports){                                                      // 668  // 700
// sprintf() for JavaScript 0.7-beta1                                                                       // 669  // 701
// http://www.diveintojavascript.com/projects/javascript-sprintf                                            // 670  // 702
//                                                                                                          // 671  // 703
// Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>                                     // 672  // 704
// All rights reserved.                                                                                     // 673  // 705
var strRepeat = _dereq_('./helper/strRepeat');                                                              // 674  // 706
var toString = Object.prototype.toString;                                                                   // 675  // 707
var sprintf = (function() {                                                                                 // 676  // 708
  function get_type(variable) {                                                                             // 677  // 709
    return toString.call(variable).slice(8, -1).toLowerCase();                                              // 678  // 710
  }                                                                                                         // 679  // 711
                                                                                                            // 680  // 712
  var str_repeat = strRepeat;                                                                               // 681  // 713
                                                                                                            // 682  // 714
  var str_format = function() {                                                                             // 683  // 715
    if (!str_format.cache.hasOwnProperty(arguments[0])) {                                                   // 684  // 716
      str_format.cache[arguments[0]] = str_format.parse(arguments[0]);                                      // 685  // 717
    }                                                                                                       // 686  // 718
    return str_format.format.call(null, str_format.cache[arguments[0]], arguments);                         // 687  // 719
  };                                                                                                        // 688  // 720
                                                                                                            // 689  // 721
  str_format.format = function(parse_tree, argv) {                                                          // 690  // 722
    var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
    for (i = 0; i < tree_length; i++) {                                                                     // 692  // 724
      node_type = get_type(parse_tree[i]);                                                                  // 693  // 725
      if (node_type === 'string') {                                                                         // 694  // 726
        output.push(parse_tree[i]);                                                                         // 695  // 727
      }                                                                                                     // 696  // 728
      else if (node_type === 'array') {                                                                     // 697  // 729
        match = parse_tree[i]; // convenience purposes only                                                 // 698  // 730
        if (match[2]) { // keyword argument                                                                 // 699  // 731
          arg = argv[cursor];                                                                               // 700  // 732
          for (k = 0; k < match[2].length; k++) {                                                           // 701  // 733
            if (!arg.hasOwnProperty(match[2][k])) {                                                         // 702  // 734
              throw new Error(sprintf('[_.sprintf] property "%s" does not exist', match[2][k]));            // 703  // 735
            }                                                                                               // 704  // 736
            arg = arg[match[2][k]];                                                                         // 705  // 737
          }                                                                                                 // 706  // 738
        } else if (match[1]) { // positional argument (explicit)                                            // 707  // 739
          arg = argv[match[1]];                                                                             // 708  // 740
        }                                                                                                   // 709  // 741
        else { // positional argument (implicit)                                                            // 710  // 742
          arg = argv[cursor++];                                                                             // 711  // 743
        }                                                                                                   // 712  // 744
                                                                                                            // 713  // 745
        if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {                                         // 714  // 746
          throw new Error(sprintf('[_.sprintf] expecting number but found %s', get_type(arg)));             // 715  // 747
        }                                                                                                   // 716  // 748
        switch (match[8]) {                                                                                 // 717  // 749
          case 'b': arg = arg.toString(2); break;                                                           // 718  // 750
          case 'c': arg = String.fromCharCode(arg); break;                                                  // 719  // 751
          case 'd': arg = parseInt(arg, 10); break;                                                         // 720  // 752
          case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;              // 721  // 753
          case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;            // 722  // 754
          case 'o': arg = arg.toString(8); break;                                                           // 723  // 755
          case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;      // 724  // 756
          case 'u': arg = Math.abs(arg); break;                                                             // 725  // 757
          case 'x': arg = arg.toString(16); break;                                                          // 726  // 758
          case 'X': arg = arg.toString(16).toUpperCase(); break;                                            // 727  // 759
        }                                                                                                   // 728  // 760
        arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);                            // 729  // 761
        pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';                        // 730  // 762
        pad_length = match[6] - String(arg).length;                                                         // 731  // 763
        pad = match[6] ? str_repeat(pad_character, pad_length) : '';                                        // 732  // 764
        output.push(match[5] ? arg + pad : pad + arg);                                                      // 733  // 765
      }                                                                                                     // 734  // 766
    }                                                                                                       // 735  // 767
    return output.join('');                                                                                 // 736  // 768
  };                                                                                                        // 737  // 769
                                                                                                            // 738  // 770
  str_format.cache = {};                                                                                    // 739  // 771
                                                                                                            // 740  // 772
  str_format.parse = function(fmt) {                                                                        // 741  // 773
    var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;                                             // 742  // 774
    while (_fmt) {                                                                                          // 743  // 775
      if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {                                                      // 744  // 776
        parse_tree.push(match[0]);                                                                          // 745  // 777
      }                                                                                                     // 746  // 778
      else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {                                                  // 747  // 779
        parse_tree.push('%');                                                                               // 748  // 780
      }                                                                                                     // 749  // 781
      else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
        if (match[2]) {                                                                                     // 751  // 783
          arg_names |= 1;                                                                                   // 752  // 784
          var field_list = [], replacement_field = match[2], field_match = [];                              // 753  // 785
          if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {                     // 754  // 786
            field_list.push(field_match[1]);                                                                // 755  // 787
            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {       // 756  // 788
              if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {               // 757  // 789
                field_list.push(field_match[1]);                                                            // 758  // 790
              }                                                                                             // 759  // 791
              else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {                     // 760  // 792
                field_list.push(field_match[1]);                                                            // 761  // 793
              }                                                                                             // 762  // 794
              else {                                                                                        // 763  // 795
                throw new Error('[_.sprintf] huh?');                                                        // 764  // 796
              }                                                                                             // 765  // 797
            }                                                                                               // 766  // 798
          }                                                                                                 // 767  // 799
          else {                                                                                            // 768  // 800
            throw new Error('[_.sprintf] huh?');                                                            // 769  // 801
          }                                                                                                 // 770  // 802
          match[2] = field_list;                                                                            // 771  // 803
        }                                                                                                   // 772  // 804
        else {                                                                                              // 773  // 805
          arg_names |= 2;                                                                                   // 774  // 806
        }                                                                                                   // 775  // 807
        if (arg_names === 3) {                                                                              // 776  // 808
          throw new Error('[_.sprintf] mixing positional and named placeholders is not (yet) supported');   // 777  // 809
        }                                                                                                   // 778  // 810
        parse_tree.push(match);                                                                             // 779  // 811
      }                                                                                                     // 780  // 812
      else {                                                                                                // 781  // 813
        throw new Error('[_.sprintf] huh?');                                                                // 782  // 814
      }                                                                                                     // 783  // 815
      _fmt = _fmt.substring(match[0].length);                                                               // 784  // 816
    }                                                                                                       // 785  // 817
    return parse_tree;                                                                                      // 786  // 818
  };                                                                                                        // 787  // 819
                                                                                                            // 788  // 820
  return str_format;                                                                                        // 789  // 821
})();                                                                                                       // 790  // 822
                                                                                                            // 791  // 823
module.exports = sprintf;                                                                                   // 792  // 824
                                                                                                            // 793  // 825
},{"./helper/strRepeat":20}],46:[function(_dereq_,module,exports){                                          // 794  // 826
var makeString = _dereq_('./helper/makeString');                                                            // 795  // 827
var toPositive = _dereq_('./helper/toPositive');                                                            // 796  // 828
                                                                                                            // 797  // 829
module.exports = function startsWith(str, starts, position) {                                               // 798  // 830
  str = makeString(str);                                                                                    // 799  // 831
  starts = '' + starts;                                                                                     // 800  // 832
  position = position == null ? 0 : Math.min(toPositive(position), str.length);                             // 801  // 833
  return str.lastIndexOf(starts, position) === position;                                                    // 802  // 834
};                                                                                                          // 803  // 835
                                                                                                            // 804  // 836
},{"./helper/makeString":19,"./helper/toPositive":21}],47:[function(_dereq_,module,exports){                // 805  // 837
var makeString = _dereq_('./helper/makeString');                                                            // 806  // 838
                                                                                                            // 807  // 839
module.exports = function strLeft(str, sep) {                                                               // 808  // 840
  str = makeString(str);                                                                                    // 809  // 841
  sep = makeString(sep);                                                                                    // 810  // 842
  var pos = !sep ? -1 : str.indexOf(sep);                                                                   // 811  // 843
  return~ pos ? str.slice(0, pos) : str;                                                                    // 812  // 844
};                                                                                                          // 813  // 845
                                                                                                            // 814  // 846
},{"./helper/makeString":19}],48:[function(_dereq_,module,exports){                                         // 815  // 847
var makeString = _dereq_('./helper/makeString');                                                            // 816  // 848
                                                                                                            // 817  // 849
module.exports = function strLeftBack(str, sep) {                                                           // 818  // 850
  str = makeString(str);                                                                                    // 819  // 851
  sep = makeString(sep);                                                                                    // 820  // 852
  var pos = str.lastIndexOf(sep);                                                                           // 821  // 853
  return~ pos ? str.slice(0, pos) : str;                                                                    // 822  // 854
};                                                                                                          // 823  // 855
                                                                                                            // 824  // 856
},{"./helper/makeString":19}],49:[function(_dereq_,module,exports){                                         // 825  // 857
var makeString = _dereq_('./helper/makeString');                                                            // 826  // 858
                                                                                                            // 827  // 859
module.exports = function strRight(str, sep) {                                                              // 828  // 860
  str = makeString(str);                                                                                    // 829  // 861
  sep = makeString(sep);                                                                                    // 830  // 862
  var pos = !sep ? -1 : str.indexOf(sep);                                                                   // 831  // 863
  return~ pos ? str.slice(pos + sep.length, str.length) : str;                                              // 832  // 864
};                                                                                                          // 833  // 865
                                                                                                            // 834  // 866
},{"./helper/makeString":19}],50:[function(_dereq_,module,exports){                                         // 835  // 867
var makeString = _dereq_('./helper/makeString');                                                            // 836  // 868
                                                                                                            // 837  // 869
module.exports = function strRightBack(str, sep) {                                                          // 838  // 870
  str = makeString(str);                                                                                    // 839  // 871
  sep = makeString(sep);                                                                                    // 840  // 872
  var pos = !sep ? -1 : str.lastIndexOf(sep);                                                               // 841  // 873
  return~ pos ? str.slice(pos + sep.length, str.length) : str;                                              // 842  // 874
};                                                                                                          // 843  // 875
                                                                                                            // 844  // 876
},{"./helper/makeString":19}],51:[function(_dereq_,module,exports){                                         // 845  // 877
var makeString = _dereq_('./helper/makeString');                                                            // 846  // 878
                                                                                                            // 847  // 879
module.exports = function stripTags(str) {                                                                  // 848  // 880
  return makeString(str).replace(/<\/?[^>]+>/g, '');                                                        // 849  // 881
};                                                                                                          // 850  // 882
                                                                                                            // 851  // 883
},{"./helper/makeString":19}],52:[function(_dereq_,module,exports){                                         // 852  // 884
var adjacent = _dereq_('./helper/adjacent');                                                                // 853  // 885
                                                                                                            // 854  // 886
module.exports = function succ(str) {                                                                       // 855  // 887
  return adjacent(str, 1);                                                                                  // 856  // 888
};                                                                                                          // 857  // 889
                                                                                                            // 858  // 890
},{"./helper/adjacent":15}],53:[function(_dereq_,module,exports){                                           // 859  // 891
module.exports = function surround(str, wrapper) {                                                          // 860  // 892
  return [wrapper, str, wrapper].join('');                                                                  // 861  // 893
};                                                                                                          // 862  // 894
                                                                                                            // 863  // 895
},{}],54:[function(_dereq_,module,exports){                                                                 // 864  // 896
var makeString = _dereq_('./helper/makeString');                                                            // 865  // 897
                                                                                                            // 866  // 898
module.exports = function swapCase(str) {                                                                   // 867  // 899
  return makeString(str).replace(/\S/g, function(c) {                                                       // 868  // 900
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();                                       // 869  // 901
  });                                                                                                       // 870  // 902
};                                                                                                          // 871  // 903
                                                                                                            // 872  // 904
},{"./helper/makeString":19}],55:[function(_dereq_,module,exports){                                         // 873  // 905
var makeString = _dereq_('./helper/makeString');                                                            // 874  // 906
                                                                                                            // 875  // 907
module.exports = function titleize(str) {                                                                   // 876  // 908
  return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {                               // 877  // 909
    return c.toUpperCase();                                                                                 // 878  // 910
  });                                                                                                       // 879  // 911
};                                                                                                          // 880  // 912
                                                                                                            // 881  // 913
},{"./helper/makeString":19}],56:[function(_dereq_,module,exports){                                         // 882  // 914
var trim = _dereq_('./trim');                                                                               // 883  // 915
                                                                                                            // 884  // 916
function boolMatch(s, matchers) {                                                                           // 885  // 917
  var i, matcher, down = s.toLowerCase();                                                                   // 886  // 918
  matchers = [].concat(matchers);                                                                           // 887  // 919
  for (i = 0; i < matchers.length; i += 1) {                                                                // 888  // 920
    matcher = matchers[i];                                                                                  // 889  // 921
    if (!matcher) continue;                                                                                 // 890  // 922
    if (matcher.test && matcher.test(s)) return true;                                                       // 891  // 923
    if (matcher.toLowerCase() === down) return true;                                                        // 892  // 924
  }                                                                                                         // 893  // 925
}                                                                                                           // 894  // 926
                                                                                                            // 895  // 927
module.exports = function toBoolean(str, trueValues, falseValues) {                                         // 896  // 928
  if (typeof str === "number") str = "" + str;                                                              // 897  // 929
  if (typeof str !== "string") return !!str;                                                                // 898  // 930
  str = trim(str);                                                                                          // 899  // 931
  if (boolMatch(str, trueValues || ["true", "1"])) return true;                                             // 900  // 932
  if (boolMatch(str, falseValues || ["false", "0"])) return false;                                          // 901  // 933
};                                                                                                          // 902  // 934
                                                                                                            // 903  // 935
},{"./trim":60}],57:[function(_dereq_,module,exports){                                                      // 904  // 936
var trim = _dereq_('./trim');                                                                               // 905  // 937
var parseNumber = function(source) {                                                                        // 906  // 938
  return source * 1 || 0;                                                                                   // 907  // 939
};                                                                                                          // 908  // 940
                                                                                                            // 909  // 941
module.exports = function toNumber(num, precision) {                                                        // 910  // 942
  if (num == null) return 0;                                                                                // 911  // 943
  var factor = Math.pow(10, isFinite(precision) ? precision : 0);                                           // 912  // 944
  return Math.round(num * factor) / factor;                                                                 // 913  // 945
};                                                                                                          // 914  // 946
                                                                                                            // 915  // 947
},{"./trim":60}],58:[function(_dereq_,module,exports){                                                      // 916  // 948
var rtrim = _dereq_('./rtrim');                                                                             // 917  // 949
                                                                                                            // 918  // 950
module.exports = function toSentence(array, separator, lastSeparator, serial) {                             // 919  // 951
  separator = separator || ', ';                                                                            // 920  // 952
  lastSeparator = lastSeparator || ' and ';                                                                 // 921  // 953
  var a = array.slice(),                                                                                    // 922  // 954
    lastMember = a.pop();                                                                                   // 923  // 955
                                                                                                            // 924  // 956
  if (array.length > 2 && serial) lastSeparator = rtrim(separator) + lastSeparator;                         // 925  // 957
                                                                                                            // 926  // 958
  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;                            // 927  // 959
};                                                                                                          // 928  // 960
                                                                                                            // 929  // 961
},{"./rtrim":42}],59:[function(_dereq_,module,exports){                                                     // 930  // 962
var toSentence = _dereq_('./toSentence');                                                                   // 931  // 963
                                                                                                            // 932  // 964
module.exports = function toSentenceSerial(array, sep, lastSep) {                                           // 933  // 965
  return toSentence(array, sep, lastSep, true);                                                             // 934  // 966
};                                                                                                          // 935  // 967
                                                                                                            // 936  // 968
},{"./toSentence":58}],60:[function(_dereq_,module,exports){                                                // 937  // 969
var makeString = _dereq_('./helper/makeString');                                                            // 938  // 970
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');                                          // 939  // 971
var nativeTrim = String.prototype.trim;                                                                     // 940  // 972
                                                                                                            // 941  // 973
module.exports = function trim(str, characters) {                                                           // 942  // 974
  str = makeString(str);                                                                                    // 943  // 975
  if (!characters && nativeTrim) return nativeTrim.call(str);                                               // 944  // 976
  characters = defaultToWhiteSpace(characters);                                                             // 945  // 977
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');                     // 946  // 978
};                                                                                                          // 947  // 979
                                                                                                            // 948  // 980
},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":19}],61:[function(_dereq_,module,exports){       // 949  // 981
var makeString = _dereq_('./helper/makeString');                                                            // 950  // 982
                                                                                                            // 951  // 983
module.exports = function truncate(str, length, truncateStr) {                                              // 952  // 984
  str = makeString(str);                                                                                    // 953  // 985
  truncateStr = truncateStr || '...';                                                                       // 954  // 986
  length = ~~length;                                                                                        // 955  // 987
  return str.length > length ? str.slice(0, length) + truncateStr : str;                                    // 956  // 988
};                                                                                                          // 957  // 989
                                                                                                            // 958  // 990
},{"./helper/makeString":19}],62:[function(_dereq_,module,exports){                                         // 959  // 991
var trim = _dereq_('./trim');                                                                               // 960  // 992
                                                                                                            // 961  // 993
module.exports = function underscored(str) {                                                                // 962  // 994
  return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();            // 963  // 995
};                                                                                                          // 964  // 996
                                                                                                            // 965  // 997
},{"./trim":60}],63:[function(_dereq_,module,exports){                                                      // 966  // 998
var makeString = _dereq_('./helper/makeString');                                                            // 967  // 999
var escapeChars = _dereq_('./helper/escapeChars');                                                          // 968  // 1000
                                                                                                            // 969  // 1001
module.exports = function unescapeHTML(str) {                                                               // 970  // 1002
  return makeString(str).replace(/\&([^;]+);/g, function(entity, entityCode) {                              // 971  // 1003
    var match;                                                                                              // 972  // 1004
                                                                                                            // 973  // 1005
    if (entityCode in escapeChars) {                                                                        // 974  // 1006
      return escapeChars[entityCode];                                                                       // 975  // 1007
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {                                             // 976  // 1008
      return String.fromCharCode(parseInt(match[1], 16));                                                   // 977  // 1009
    } else if (match = entityCode.match(/^#(\d+)$/)) {                                                      // 978  // 1010
      return String.fromCharCode(~~match[1]);                                                               // 979  // 1011
    } else {                                                                                                // 980  // 1012
      return entity;                                                                                        // 981  // 1013
    }                                                                                                       // 982  // 1014
  });                                                                                                       // 983  // 1015
};                                                                                                          // 984  // 1016
                                                                                                            // 985  // 1017
},{"./helper/escapeChars":17,"./helper/makeString":19}],64:[function(_dereq_,module,exports){               // 986  // 1018
module.exports = function unquote(str, quoteChar) {                                                         // 987  // 1019
  quoteChar = quoteChar || '"';                                                                             // 988  // 1020
  if (str[0] === quoteChar && str[str.length - 1] === quoteChar)                                            // 989  // 1021
    return str.slice(1, str.length - 1);                                                                    // 990  // 1022
  else return str;                                                                                          // 991  // 1023
};                                                                                                          // 992  // 1024
                                                                                                            // 993  // 1025
},{}],65:[function(_dereq_,module,exports){                                                                 // 994  // 1026
var sprintf = _dereq_('./sprintf');                                                                         // 995  // 1027
                                                                                                            // 996  // 1028
module.exports = function vsprintf(fmt, argv) {                                                             // 997  // 1029
  argv.unshift(fmt);                                                                                        // 998  // 1030
  return sprintf.apply(null, argv);                                                                         // 999  // 1031
};                                                                                                          // 1000
                                                                                                            // 1001
},{"./sprintf":45}],66:[function(_dereq_,module,exports){                                                   // 1002
var isBlank = _dereq_('./isBlank');                                                                         // 1003
var trim = _dereq_('./trim');                                                                               // 1004
                                                                                                            // 1005
module.exports = function words(str, delimiter) {                                                           // 1006
  if (isBlank(str)) return [];                                                                              // 1007
  return trim(str, delimiter).split(delimiter || /\s+/);                                                    // 1008
};                                                                                                          // 1009
                                                                                                            // 1010
},{"./isBlank":25,"./trim":60}]},{},[14])                                                                   // 1011
(14)                                                                                                        // 1012
});                                                                                                         // 1013
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 1046
                                                                                                                    // 1047
}).call(this);                                                                                                      // 1048
                                                                                                                    // 1049
                                                                                                                    // 1050
                                                                                                                    // 1051
                                                                                                                    // 1052
                                                                                                                    // 1053
                                                                                                                    // 1054
(function () {                                                                                                      // 1055
                                                                                                                    // 1056
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 1057
//                                                                                                          //      // 1058
// packages/underscorestring:underscore.string/meteor-post.js                                               //      // 1059
//                                                                                                          //      // 1060
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 1061
                                                                                                            //      // 1062
// s will be picked up by Meteor and exported                                                               // 1    // 1063
s = module.exports;                                                                                         // 2    // 1064
                                                                                                            // 3    // 1065
//////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 1066
                                                                                                                    // 1067
}).call(this);                                                                                                      // 1068
                                                                                                                    // 1069
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['underscorestring:underscore.string'] = {
  s: s
};

})();

//# sourceMappingURL=underscorestring_underscore.string.js.map
