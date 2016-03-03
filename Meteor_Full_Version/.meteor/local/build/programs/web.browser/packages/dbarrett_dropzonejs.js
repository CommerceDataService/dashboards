//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/dbarrett_dropzonejs/packages/dbarrett_dropzonejs.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/dbarrett:dropzonejs/lib/3.10.2/dropzone.js                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
;(function(){                                                                                                       // 1
                                                                                                                    // 2
/**                                                                                                                 // 3
 * Require the module at `name`.                                                                                    // 4
 *                                                                                                                  // 5
 * @param {String} name                                                                                             // 6
 * @return {Object} exports                                                                                         // 7
 * @api public                                                                                                      // 8
 */                                                                                                                 // 9
                                                                                                                    // 10
function require(name) {                                                                                            // 11
  var module = require.modules[name];                                                                               // 12
  if (!module) throw new Error('failed to require "' + name + '"');                                                 // 13
                                                                                                                    // 14
  if (!('exports' in module) && typeof module.definition === 'function') {                                          // 15
    module.client = module.component = true;                                                                        // 16
    module.definition.call(this, module.exports = {}, module);                                                      // 17
    delete module.definition;                                                                                       // 18
  }                                                                                                                 // 19
                                                                                                                    // 20
  return module.exports;                                                                                            // 21
}                                                                                                                   // 22
                                                                                                                    // 23
/**                                                                                                                 // 24
 * Registered modules.                                                                                              // 25
 */                                                                                                                 // 26
                                                                                                                    // 27
require.modules = {};                                                                                               // 28
                                                                                                                    // 29
/**                                                                                                                 // 30
 * Register module at `name` with callback `definition`.                                                            // 31
 *                                                                                                                  // 32
 * @param {String} name                                                                                             // 33
 * @param {Function} definition                                                                                     // 34
 * @api private                                                                                                     // 35
 */                                                                                                                 // 36
                                                                                                                    // 37
require.register = function (name, definition) {                                                                    // 38
  require.modules[name] = {                                                                                         // 39
    definition: definition                                                                                          // 40
  };                                                                                                                // 41
};                                                                                                                  // 42
                                                                                                                    // 43
/**                                                                                                                 // 44
 * Define a module's exports immediately with `exports`.                                                            // 45
 *                                                                                                                  // 46
 * @param {String} name                                                                                             // 47
 * @param {Generic} exports                                                                                         // 48
 * @api private                                                                                                     // 49
 */                                                                                                                 // 50
                                                                                                                    // 51
require.define = function (name, exports) {                                                                         // 52
  require.modules[name] = {                                                                                         // 53
    exports: exports                                                                                                // 54
  };                                                                                                                // 55
};                                                                                                                  // 56
require.register("component~emitter@1.1.2", function (exports, module) {                                            // 57
                                                                                                                    // 58
/**                                                                                                                 // 59
 * Expose `Emitter`.                                                                                                // 60
 */                                                                                                                 // 61
                                                                                                                    // 62
module.exports = Emitter;                                                                                           // 63
                                                                                                                    // 64
/**                                                                                                                 // 65
 * Initialize a new `Emitter`.                                                                                      // 66
 *                                                                                                                  // 67
 * @api public                                                                                                      // 68
 */                                                                                                                 // 69
                                                                                                                    // 70
function Emitter(obj) {                                                                                             // 71
  if (obj) return mixin(obj);                                                                                       // 72
};                                                                                                                  // 73
                                                                                                                    // 74
/**                                                                                                                 // 75
 * Mixin the emitter properties.                                                                                    // 76
 *                                                                                                                  // 77
 * @param {Object} obj                                                                                              // 78
 * @return {Object}                                                                                                 // 79
 * @api private                                                                                                     // 80
 */                                                                                                                 // 81
                                                                                                                    // 82
function mixin(obj) {                                                                                               // 83
  for (var key in Emitter.prototype) {                                                                              // 84
    obj[key] = Emitter.prototype[key];                                                                              // 85
  }                                                                                                                 // 86
  return obj;                                                                                                       // 87
}                                                                                                                   // 88
                                                                                                                    // 89
/**                                                                                                                 // 90
 * Listen on the given `event` with `fn`.                                                                           // 91
 *                                                                                                                  // 92
 * @param {String} event                                                                                            // 93
 * @param {Function} fn                                                                                             // 94
 * @return {Emitter}                                                                                                // 95
 * @api public                                                                                                      // 96
 */                                                                                                                 // 97
                                                                                                                    // 98
Emitter.prototype.on =                                                                                              // 99
Emitter.prototype.addEventListener = function(event, fn){                                                           // 100
  this._callbacks = this._callbacks || {};                                                                          // 101
  (this._callbacks[event] = this._callbacks[event] || [])                                                           // 102
    .push(fn);                                                                                                      // 103
  return this;                                                                                                      // 104
};                                                                                                                  // 105
                                                                                                                    // 106
/**                                                                                                                 // 107
 * Adds an `event` listener that will be invoked a single                                                           // 108
 * time then automatically removed.                                                                                 // 109
 *                                                                                                                  // 110
 * @param {String} event                                                                                            // 111
 * @param {Function} fn                                                                                             // 112
 * @return {Emitter}                                                                                                // 113
 * @api public                                                                                                      // 114
 */                                                                                                                 // 115
                                                                                                                    // 116
Emitter.prototype.once = function(event, fn){                                                                       // 117
  var self = this;                                                                                                  // 118
  this._callbacks = this._callbacks || {};                                                                          // 119
                                                                                                                    // 120
  function on() {                                                                                                   // 121
    self.off(event, on);                                                                                            // 122
    fn.apply(this, arguments);                                                                                      // 123
  }                                                                                                                 // 124
                                                                                                                    // 125
  on.fn = fn;                                                                                                       // 126
  this.on(event, on);                                                                                               // 127
  return this;                                                                                                      // 128
};                                                                                                                  // 129
                                                                                                                    // 130
/**                                                                                                                 // 131
 * Remove the given callback for `event` or all                                                                     // 132
 * registered callbacks.                                                                                            // 133
 *                                                                                                                  // 134
 * @param {String} event                                                                                            // 135
 * @param {Function} fn                                                                                             // 136
 * @return {Emitter}                                                                                                // 137
 * @api public                                                                                                      // 138
 */                                                                                                                 // 139
                                                                                                                    // 140
Emitter.prototype.off =                                                                                             // 141
Emitter.prototype.removeListener =                                                                                  // 142
Emitter.prototype.removeAllListeners =                                                                              // 143
Emitter.prototype.removeEventListener = function(event, fn){                                                        // 144
  this._callbacks = this._callbacks || {};                                                                          // 145
                                                                                                                    // 146
  // all                                                                                                            // 147
  if (0 == arguments.length) {                                                                                      // 148
    this._callbacks = {};                                                                                           // 149
    return this;                                                                                                    // 150
  }                                                                                                                 // 151
                                                                                                                    // 152
  // specific event                                                                                                 // 153
  var callbacks = this._callbacks[event];                                                                           // 154
  if (!callbacks) return this;                                                                                      // 155
                                                                                                                    // 156
  // remove all handlers                                                                                            // 157
  if (1 == arguments.length) {                                                                                      // 158
    delete this._callbacks[event];                                                                                  // 159
    return this;                                                                                                    // 160
  }                                                                                                                 // 161
                                                                                                                    // 162
  // remove specific handler                                                                                        // 163
  var cb;                                                                                                           // 164
  for (var i = 0; i < callbacks.length; i++) {                                                                      // 165
    cb = callbacks[i];                                                                                              // 166
    if (cb === fn || cb.fn === fn) {                                                                                // 167
      callbacks.splice(i, 1);                                                                                       // 168
      break;                                                                                                        // 169
    }                                                                                                               // 170
  }                                                                                                                 // 171
  return this;                                                                                                      // 172
};                                                                                                                  // 173
                                                                                                                    // 174
/**                                                                                                                 // 175
 * Emit `event` with the given args.                                                                                // 176
 *                                                                                                                  // 177
 * @param {String} event                                                                                            // 178
 * @param {Mixed} ...                                                                                               // 179
 * @return {Emitter}                                                                                                // 180
 */                                                                                                                 // 181
                                                                                                                    // 182
Emitter.prototype.emit = function(event){                                                                           // 183
  this._callbacks = this._callbacks || {};                                                                          // 184
  var args = [].slice.call(arguments, 1)                                                                            // 185
    , callbacks = this._callbacks[event];                                                                           // 186
                                                                                                                    // 187
  if (callbacks) {                                                                                                  // 188
    callbacks = callbacks.slice(0);                                                                                 // 189
    for (var i = 0, len = callbacks.length; i < len; ++i) {                                                         // 190
      callbacks[i].apply(this, args);                                                                               // 191
    }                                                                                                               // 192
  }                                                                                                                 // 193
                                                                                                                    // 194
  return this;                                                                                                      // 195
};                                                                                                                  // 196
                                                                                                                    // 197
/**                                                                                                                 // 198
 * Return array of callbacks for `event`.                                                                           // 199
 *                                                                                                                  // 200
 * @param {String} event                                                                                            // 201
 * @return {Array}                                                                                                  // 202
 * @api public                                                                                                      // 203
 */                                                                                                                 // 204
                                                                                                                    // 205
Emitter.prototype.listeners = function(event){                                                                      // 206
  this._callbacks = this._callbacks || {};                                                                          // 207
  return this._callbacks[event] || [];                                                                              // 208
};                                                                                                                  // 209
                                                                                                                    // 210
/**                                                                                                                 // 211
 * Check if this emitter has `event` handlers.                                                                      // 212
 *                                                                                                                  // 213
 * @param {String} event                                                                                            // 214
 * @return {Boolean}                                                                                                // 215
 * @api public                                                                                                      // 216
 */                                                                                                                 // 217
                                                                                                                    // 218
Emitter.prototype.hasListeners = function(event){                                                                   // 219
  return !! this.listeners(event).length;                                                                           // 220
};                                                                                                                  // 221
                                                                                                                    // 222
});                                                                                                                 // 223
                                                                                                                    // 224
require.register("dropzone", function (exports, module) {                                                           // 225
                                                                                                                    // 226
                                                                                                                    // 227
/**                                                                                                                 // 228
 * Exposing dropzone                                                                                                // 229
 */                                                                                                                 // 230
module.exports = require("dropzone/lib/dropzone.js");                                                               // 231
                                                                                                                    // 232
});                                                                                                                 // 233
                                                                                                                    // 234
require.register("dropzone/lib/dropzone.js", function (exports, module) {                                           // 235
                                                                                                                    // 236
/*                                                                                                                  // 237
 *                                                                                                                  // 238
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)                                                     // 239
 *                                                                                                                  // 240
 * Copyright (c) 2012, Matias Meno                                                                                  // 241
 *                                                                                                                  // 242
 * Permission is hereby granted, free of charge, to any person obtaining a copy                                     // 243
 * of this software and associated documentation files (the "Software"), to deal                                    // 244
 * in the Software without restriction, including without limitation the rights                                     // 245
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell                                        // 246
 * copies of the Software, and to permit persons to whom the Software is                                            // 247
 * furnished to do so, subject to the following conditions:                                                         // 248
 *                                                                                                                  // 249
 * The above copyright notice and this permission notice shall be included in                                       // 250
 * all copies or substantial portions of the Software.                                                              // 251
 *                                                                                                                  // 252
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR                                       // 253
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,                                         // 254
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE                                      // 255
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                                           // 256
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,                                    // 257
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN                                        // 258
 * THE SOFTWARE.                                                                                                    // 259
 *                                                                                                                  // 260
 */                                                                                                                 // 261
                                                                                                                    // 262
(function() {                                                                                                       // 263
  var Dropzone, Em, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,                  // 264
    __hasProp = {}.hasOwnProperty,                                                                                  // 265
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;                                                                                             // 267
                                                                                                                    // 268
  Em = typeof Emitter !== "undefined" && Emitter !== null ? Emitter : require("component~emitter@1.1.2");           // 269
                                                                                                                    // 270
  noop = function() {};                                                                                             // 271
                                                                                                                    // 272
  Dropzone = (function(_super) {                                                                                    // 273
    var extend;                                                                                                     // 274
                                                                                                                    // 275
    __extends(Dropzone, _super);                                                                                    // 276
                                                                                                                    // 277
                                                                                                                    // 278
    /*                                                                                                              // 279
    This is a list of all available events you can register on a dropzone object.                                   // 280
                                                                                                                    // 281
    You can register an event handler like this:                                                                    // 282
                                                                                                                    // 283
        dropzone.on("dragEnter", function() { });                                                                   // 284
     */                                                                                                             // 285
                                                                                                                    // 286
    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached"];
                                                                                                                    // 288
    Dropzone.prototype.defaultOptions = {                                                                           // 289
      url: null,                                                                                                    // 290
      method: "post",                                                                                               // 291
      withCredentials: false,                                                                                       // 292
      parallelUploads: 2,                                                                                           // 293
      uploadMultiple: false,                                                                                        // 294
      maxFilesize: 256,                                                                                             // 295
      paramName: "file",                                                                                            // 296
      createImageThumbnails: true,                                                                                  // 297
      maxThumbnailFilesize: 10,                                                                                     // 298
      thumbnailWidth: 100,                                                                                          // 299
      thumbnailHeight: 100,                                                                                         // 300
      maxFiles: null,                                                                                               // 301
      params: {},                                                                                                   // 302
      clickable: true,                                                                                              // 303
      ignoreHiddenFiles: true,                                                                                      // 304
      acceptedFiles: null,                                                                                          // 305
      acceptedMimeTypes: null,                                                                                      // 306
      autoProcessQueue: true,                                                                                       // 307
      autoQueue: true,                                                                                              // 308
      addRemoveLinks: false,                                                                                        // 309
      previewsContainer: null,                                                                                      // 310
      dictDefaultMessage: "Drop files here to upload",                                                              // 311
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",                               // 312
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",          // 313
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",                       // 314
      dictInvalidFileType: "You can't upload files of this type.",                                                  // 315
      dictResponseError: "Server responded with {{statusCode}} code.",                                              // 316
      dictCancelUpload: "Cancel upload",                                                                            // 317
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",                                 // 318
      dictRemoveFile: "Remove file",                                                                                // 319
      dictRemoveFileConfirmation: null,                                                                             // 320
      dictMaxFilesExceeded: "You can not upload any more files.",                                                   // 321
      accept: function(file, done) {                                                                                // 322
        return done();                                                                                              // 323
      },                                                                                                            // 324
      init: function() {                                                                                            // 325
        return noop;                                                                                                // 326
      },                                                                                                            // 327
      forceFallback: false,                                                                                         // 328
      fallback: function() {                                                                                        // 329
        var child, messageElement, span, _i, _len, _ref;                                                            // 330
        this.element.className = "" + this.element.className + " dz-browser-not-supported";                         // 331
        _ref = this.element.getElementsByTagName("div");                                                            // 332
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                         // 333
          child = _ref[_i];                                                                                         // 334
          if (/(^| )dz-message($| )/.test(child.className)) {                                                       // 335
            messageElement = child;                                                                                 // 336
            child.className = "dz-message";                                                                         // 337
            continue;                                                                                               // 338
          }                                                                                                         // 339
        }                                                                                                           // 340
        if (!messageElement) {                                                                                      // 341
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");                 // 342
          this.element.appendChild(messageElement);                                                                 // 343
        }                                                                                                           // 344
        span = messageElement.getElementsByTagName("span")[0];                                                      // 345
        if (span) {                                                                                                 // 346
          span.textContent = this.options.dictFallbackMessage;                                                      // 347
        }                                                                                                           // 348
        return this.element.appendChild(this.getFallbackForm());                                                    // 349
      },                                                                                                            // 350
      resize: function(file) {                                                                                      // 351
        var info, srcRatio, trgRatio;                                                                               // 352
        info = {                                                                                                    // 353
          srcX: 0,                                                                                                  // 354
          srcY: 0,                                                                                                  // 355
          srcWidth: file.width,                                                                                     // 356
          srcHeight: file.height                                                                                    // 357
        };                                                                                                          // 358
        srcRatio = file.width / file.height;                                                                        // 359
        info.optWidth = this.options.thumbnailWidth;                                                                // 360
        info.optHeight = this.options.thumbnailHeight;                                                              // 361
        if ((info.optWidth == null) && (info.optHeight == null)) {                                                  // 362
          info.optWidth = info.srcWidth;                                                                            // 363
          info.optHeight = info.srcHeight;                                                                          // 364
        } else if (info.optWidth == null) {                                                                         // 365
          info.optWidth = srcRatio * info.optHeight;                                                                // 366
        } else if (info.optHeight == null) {                                                                        // 367
          info.optHeight = (1 / srcRatio) * info.optWidth;                                                          // 368
        }                                                                                                           // 369
        trgRatio = info.optWidth / info.optHeight;                                                                  // 370
        if (file.height < info.optHeight || file.width < info.optWidth) {                                           // 371
          info.trgHeight = info.srcHeight;                                                                          // 372
          info.trgWidth = info.srcWidth;                                                                            // 373
        } else {                                                                                                    // 374
          if (srcRatio > trgRatio) {                                                                                // 375
            info.srcHeight = file.height;                                                                           // 376
            info.srcWidth = info.srcHeight * trgRatio;                                                              // 377
          } else {                                                                                                  // 378
            info.srcWidth = file.width;                                                                             // 379
            info.srcHeight = info.srcWidth / trgRatio;                                                              // 380
          }                                                                                                         // 381
        }                                                                                                           // 382
        info.srcX = (file.width - info.srcWidth) / 2;                                                               // 383
        info.srcY = (file.height - info.srcHeight) / 2;                                                             // 384
        return info;                                                                                                // 385
      },                                                                                                            // 386
                                                                                                                    // 387
      /*                                                                                                            // 388
      Those functions register themselves to the events on init and handle all                                      // 389
      the user interface specific stuff. Overwriting them won't break the upload                                    // 390
      but can break the way it's displayed.                                                                         // 391
      You can overwrite them if you don't like the default behavior. If you just                                    // 392
      want to add an additional event handler, register it on the dropzone object                                   // 393
      and don't overwrite those options.                                                                            // 394
       */                                                                                                           // 395
      drop: function(e) {                                                                                           // 396
        return this.element.classList.remove("dz-drag-hover");                                                      // 397
      },                                                                                                            // 398
      dragstart: noop,                                                                                              // 399
      dragend: function(e) {                                                                                        // 400
        return this.element.classList.remove("dz-drag-hover");                                                      // 401
      },                                                                                                            // 402
      dragenter: function(e) {                                                                                      // 403
        return this.element.classList.add("dz-drag-hover");                                                         // 404
      },                                                                                                            // 405
      dragover: function(e) {                                                                                       // 406
        return this.element.classList.add("dz-drag-hover");                                                         // 407
      },                                                                                                            // 408
      dragleave: function(e) {                                                                                      // 409
        return this.element.classList.remove("dz-drag-hover");                                                      // 410
      },                                                                                                            // 411
      paste: noop,                                                                                                  // 412
      reset: function() {                                                                                           // 413
        return this.element.classList.remove("dz-started");                                                         // 414
      },                                                                                                            // 415
      addedfile: function(file) {                                                                                   // 416
        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;        // 417
        if (this.element === this.previewsContainer) {                                                              // 418
          this.element.classList.add("dz-started");                                                                 // 419
        }                                                                                                           // 420
        if (this.previewsContainer) {                                                                               // 421
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());                        // 422
          file.previewTemplate = file.previewElement;                                                               // 423
          this.previewsContainer.appendChild(file.previewElement);                                                  // 424
          _ref = file.previewElement.querySelectorAll("[data-dz-name]");                                            // 425
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                       // 426
            node = _ref[_i];                                                                                        // 427
            node.textContent = file.name;                                                                           // 428
          }                                                                                                         // 429
          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");                                           // 430
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {                                                    // 431
            node = _ref1[_j];                                                                                       // 432
            node.innerHTML = this.filesize(file.size);                                                              // 433
          }                                                                                                         // 434
          if (this.options.addRemoveLinks) {                                                                        // 435
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);                                                      // 437
          }                                                                                                         // 438
          removeFileEvent = (function(_this) {                                                                      // 439
            return function(e) {                                                                                    // 440
              e.preventDefault();                                                                                   // 441
              e.stopPropagation();                                                                                  // 442
              if (file.status === Dropzone.UPLOADING) {                                                             // 443
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {                    // 444
                  return _this.removeFile(file);                                                                    // 445
                });                                                                                                 // 446
              } else {                                                                                              // 447
                if (_this.options.dictRemoveFileConfirmation) {                                                     // 448
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {                    // 449
                    return _this.removeFile(file);                                                                  // 450
                  });                                                                                               // 451
                } else {                                                                                            // 452
                  return _this.removeFile(file);                                                                    // 453
                }                                                                                                   // 454
              }                                                                                                     // 455
            };                                                                                                      // 456
          })(this);                                                                                                 // 457
          _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");                                         // 458
          _results = [];                                                                                            // 459
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {                                                    // 460
            removeLink = _ref2[_k];                                                                                 // 461
            _results.push(removeLink.addEventListener("click", removeFileEvent));                                   // 462
          }                                                                                                         // 463
          return _results;                                                                                          // 464
        }                                                                                                           // 465
      },                                                                                                            // 466
      removedfile: function(file) {                                                                                 // 467
        var _ref;                                                                                                   // 468
        if (file.previewElement) {                                                                                  // 469
          if ((_ref = file.previewElement) != null) {                                                               // 470
            _ref.parentNode.removeChild(file.previewElement);                                                       // 471
          }                                                                                                         // 472
        }                                                                                                           // 473
        return this._updateMaxFilesReachedClass();                                                                  // 474
      },                                                                                                            // 475
      thumbnail: function(file, dataUrl) {                                                                          // 476
        var thumbnailElement, _i, _len, _ref, _results;                                                             // 477
        if (file.previewElement) {                                                                                  // 478
          file.previewElement.classList.remove("dz-file-preview");                                                  // 479
          file.previewElement.classList.add("dz-image-preview");                                                    // 480
          _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");                                       // 481
          _results = [];                                                                                            // 482
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                       // 483
            thumbnailElement = _ref[_i];                                                                            // 484
            thumbnailElement.alt = file.name;                                                                       // 485
            _results.push(thumbnailElement.src = dataUrl);                                                          // 486
          }                                                                                                         // 487
          return _results;                                                                                          // 488
        }                                                                                                           // 489
      },                                                                                                            // 490
      error: function(file, message) {                                                                              // 491
        var node, _i, _len, _ref, _results;                                                                         // 492
        if (file.previewElement) {                                                                                  // 493
          file.previewElement.classList.add("dz-error");                                                            // 494
          if (typeof message !== "String" && message.error) {                                                       // 495
            message = message.error;                                                                                // 496
          }                                                                                                         // 497
          _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");                                    // 498
          _results = [];                                                                                            // 499
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                       // 500
            node = _ref[_i];                                                                                        // 501
            _results.push(node.textContent = message);                                                              // 502
          }                                                                                                         // 503
          return _results;                                                                                          // 504
        }                                                                                                           // 505
      },                                                                                                            // 506
      errormultiple: noop,                                                                                          // 507
      processing: function(file) {                                                                                  // 508
        if (file.previewElement) {                                                                                  // 509
          file.previewElement.classList.add("dz-processing");                                                       // 510
          if (file._removeLink) {                                                                                   // 511
            return file._removeLink.textContent = this.options.dictCancelUpload;                                    // 512
          }                                                                                                         // 513
        }                                                                                                           // 514
      },                                                                                                            // 515
      processingmultiple: noop,                                                                                     // 516
      uploadprogress: function(file, progress, bytesSent) {                                                         // 517
        var node, _i, _len, _ref, _results;                                                                         // 518
        if (file.previewElement) {                                                                                  // 519
          _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");                                  // 520
          _results = [];                                                                                            // 521
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                       // 522
            node = _ref[_i];                                                                                        // 523
            _results.push(node.style.width = "" + progress + "%");                                                  // 524
          }                                                                                                         // 525
          return _results;                                                                                          // 526
        }                                                                                                           // 527
      },                                                                                                            // 528
      totaluploadprogress: noop,                                                                                    // 529
      sending: noop,                                                                                                // 530
      sendingmultiple: noop,                                                                                        // 531
      success: function(file) {                                                                                     // 532
        if (file.previewElement) {                                                                                  // 533
          return file.previewElement.classList.add("dz-success");                                                   // 534
        }                                                                                                           // 535
      },                                                                                                            // 536
      successmultiple: noop,                                                                                        // 537
      canceled: function(file) {                                                                                    // 538
        return this.emit("error", file, "Upload canceled.");                                                        // 539
      },                                                                                                            // 540
      canceledmultiple: noop,                                                                                       // 541
      complete: function(file) {                                                                                    // 542
        if (file._removeLink) {                                                                                     // 543
          return file._removeLink.textContent = this.options.dictRemoveFile;                                        // 544
        }                                                                                                           // 545
      },                                                                                                            // 546
      completemultiple: noop,                                                                                       // 547
      maxfilesexceeded: noop,                                                                                       // 548
      maxfilesreached: noop,                                                                                        // 549
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-details\">\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n    <div class=\"dz-size\" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-success-mark\"><span>✔</span></div>\n  <div class=\"dz-error-mark\"><span>✘</span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n</div>"
    };                                                                                                              // 551
                                                                                                                    // 552
    extend = function() {                                                                                           // 553
      var key, object, objects, target, val, _i, _len;                                                              // 554
      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];                     // 555
      for (_i = 0, _len = objects.length; _i < _len; _i++) {                                                        // 556
        object = objects[_i];                                                                                       // 557
        for (key in object) {                                                                                       // 558
          val = object[key];                                                                                        // 559
          target[key] = val;                                                                                        // 560
        }                                                                                                           // 561
      }                                                                                                             // 562
      return target;                                                                                                // 563
    };                                                                                                              // 564
                                                                                                                    // 565
    function Dropzone(element, options) {                                                                           // 566
      var elementOptions, fallback, _ref;                                                                           // 567
      this.element = element;                                                                                       // 568
      this.version = Dropzone.version;                                                                              // 569
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");                // 570
      this.clickableElements = [];                                                                                  // 571
      this.listeners = [];                                                                                          // 572
      this.files = [];                                                                                              // 573
      if (typeof this.element === "string") {                                                                       // 574
        this.element = document.querySelector(this.element);                                                        // 575
      }                                                                                                             // 576
      if (!(this.element && (this.element.nodeType != null))) {                                                     // 577
        throw new Error("Invalid dropzone element.");                                                               // 578
      }                                                                                                             // 579
      if (this.element.dropzone) {                                                                                  // 580
        throw new Error("Dropzone already attached.");                                                              // 581
      }                                                                                                             // 582
      Dropzone.instances.push(this);                                                                                // 583
      this.element.dropzone = this;                                                                                 // 584
      elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};                       // 585
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});               // 586
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {                                           // 587
        return this.options.fallback.call(this);                                                                    // 588
      }                                                                                                             // 589
      if (this.options.url == null) {                                                                               // 590
        this.options.url = this.element.getAttribute("action");                                                     // 591
      }                                                                                                             // 592
      if (!this.options.url) {                                                                                      // 593
        throw new Error("No URL provided.");                                                                        // 594
      }                                                                                                             // 595
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {                                           // 596
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }                                                                                                             // 598
      if (this.options.acceptedMimeTypes) {                                                                         // 599
        this.options.acceptedFiles = this.options.acceptedMimeTypes;                                                // 600
        delete this.options.acceptedMimeTypes;                                                                      // 601
      }                                                                                                             // 602
      this.options.method = this.options.method.toUpperCase();                                                      // 603
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {                                         // 604
        fallback.parentNode.removeChild(fallback);                                                                  // 605
      }                                                                                                             // 606
      if (this.options.previewsContainer !== false) {                                                               // 607
        if (this.options.previewsContainer) {                                                                       // 608
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");        // 609
        } else {                                                                                                    // 610
          this.previewsContainer = this.element;                                                                    // 611
        }                                                                                                           // 612
      }                                                                                                             // 613
      if (this.options.clickable) {                                                                                 // 614
        if (this.options.clickable === true) {                                                                      // 615
          this.clickableElements = [this.element];                                                                  // 616
        } else {                                                                                                    // 617
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");                       // 618
        }                                                                                                           // 619
      }                                                                                                             // 620
      this.init();                                                                                                  // 621
    }                                                                                                               // 622
                                                                                                                    // 623
    Dropzone.prototype.getAcceptedFiles = function() {                                                              // 624
      var file, _i, _len, _ref, _results;                                                                           // 625
      _ref = this.files;                                                                                            // 626
      _results = [];                                                                                                // 627
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 628
        file = _ref[_i];                                                                                            // 629
        if (file.accepted) {                                                                                        // 630
          _results.push(file);                                                                                      // 631
        }                                                                                                           // 632
      }                                                                                                             // 633
      return _results;                                                                                              // 634
    };                                                                                                              // 635
                                                                                                                    // 636
    Dropzone.prototype.getRejectedFiles = function() {                                                              // 637
      var file, _i, _len, _ref, _results;                                                                           // 638
      _ref = this.files;                                                                                            // 639
      _results = [];                                                                                                // 640
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 641
        file = _ref[_i];                                                                                            // 642
        if (!file.accepted) {                                                                                       // 643
          _results.push(file);                                                                                      // 644
        }                                                                                                           // 645
      }                                                                                                             // 646
      return _results;                                                                                              // 647
    };                                                                                                              // 648
                                                                                                                    // 649
    Dropzone.prototype.getFilesWithStatus = function(status) {                                                      // 650
      var file, _i, _len, _ref, _results;                                                                           // 651
      _ref = this.files;                                                                                            // 652
      _results = [];                                                                                                // 653
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 654
        file = _ref[_i];                                                                                            // 655
        if (file.status === status) {                                                                               // 656
          _results.push(file);                                                                                      // 657
        }                                                                                                           // 658
      }                                                                                                             // 659
      return _results;                                                                                              // 660
    };                                                                                                              // 661
                                                                                                                    // 662
    Dropzone.prototype.getQueuedFiles = function() {                                                                // 663
      return this.getFilesWithStatus(Dropzone.QUEUED);                                                              // 664
    };                                                                                                              // 665
                                                                                                                    // 666
    Dropzone.prototype.getUploadingFiles = function() {                                                             // 667
      return this.getFilesWithStatus(Dropzone.UPLOADING);                                                           // 668
    };                                                                                                              // 669
                                                                                                                    // 670
    Dropzone.prototype.getActiveFiles = function() {                                                                // 671
      var file, _i, _len, _ref, _results;                                                                           // 672
      _ref = this.files;                                                                                            // 673
      _results = [];                                                                                                // 674
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 675
        file = _ref[_i];                                                                                            // 676
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {                                // 677
          _results.push(file);                                                                                      // 678
        }                                                                                                           // 679
      }                                                                                                             // 680
      return _results;                                                                                              // 681
    };                                                                                                              // 682
                                                                                                                    // 683
    Dropzone.prototype.init = function() {                                                                          // 684
      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;                                    // 685
      if (this.element.tagName === "form") {                                                                        // 686
        this.element.setAttribute("enctype", "multipart/form-data");                                                // 687
      }                                                                                                             // 688
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {              // 689
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }                                                                                                             // 691
      if (this.clickableElements.length) {                                                                          // 692
        setupHiddenFileInput = (function(_this) {                                                                   // 693
          return function() {                                                                                       // 694
            if (_this.hiddenFileInput) {                                                                            // 695
              document.body.removeChild(_this.hiddenFileInput);                                                     // 696
            }                                                                                                       // 697
            _this.hiddenFileInput = document.createElement("input");                                                // 698
            _this.hiddenFileInput.setAttribute("type", "file");                                                     // 699
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {                                   // 700
              _this.hiddenFileInput.setAttribute("multiple", "multiple");                                           // 701
            }                                                                                                       // 702
            _this.hiddenFileInput.className = "dz-hidden-input";                                                    // 703
            if (_this.options.acceptedFiles != null) {                                                              // 704
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);                            // 705
            }                                                                                                       // 706
            _this.hiddenFileInput.style.visibility = "hidden";                                                      // 707
            _this.hiddenFileInput.style.position = "absolute";                                                      // 708
            _this.hiddenFileInput.style.top = "0";                                                                  // 709
            _this.hiddenFileInput.style.left = "0";                                                                 // 710
            _this.hiddenFileInput.style.height = "0";                                                               // 711
            _this.hiddenFileInput.style.width = "0";                                                                // 712
            document.body.appendChild(_this.hiddenFileInput);                                                       // 713
            return _this.hiddenFileInput.addEventListener("change", function() {                                    // 714
              var file, files, _i, _len;                                                                            // 715
              files = _this.hiddenFileInput.files;                                                                  // 716
              if (files.length) {                                                                                   // 717
                for (_i = 0, _len = files.length; _i < _len; _i++) {                                                // 718
                  file = files[_i];                                                                                 // 719
                  _this.addFile(file);                                                                              // 720
                }                                                                                                   // 721
              }                                                                                                     // 722
              return setupHiddenFileInput();                                                                        // 723
            });                                                                                                     // 724
          };                                                                                                        // 725
        })(this);                                                                                                   // 726
        setupHiddenFileInput();                                                                                     // 727
      }                                                                                                             // 728
      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;                                             // 729
      _ref1 = this.events;                                                                                          // 730
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {                                                          // 731
        eventName = _ref1[_i];                                                                                      // 732
        this.on(eventName, this.options[eventName]);                                                                // 733
      }                                                                                                             // 734
      this.on("uploadprogress", (function(_this) {                                                                  // 735
        return function() {                                                                                         // 736
          return _this.updateTotalUploadProgress();                                                                 // 737
        };                                                                                                          // 738
      })(this));                                                                                                    // 739
      this.on("removedfile", (function(_this) {                                                                     // 740
        return function() {                                                                                         // 741
          return _this.updateTotalUploadProgress();                                                                 // 742
        };                                                                                                          // 743
      })(this));                                                                                                    // 744
      this.on("canceled", (function(_this) {                                                                        // 745
        return function(file) {                                                                                     // 746
          return _this.emit("complete", file);                                                                      // 747
        };                                                                                                          // 748
      })(this));                                                                                                    // 749
      this.on("complete", (function(_this) {                                                                        // 750
        return function(file) {                                                                                     // 751
          if (_this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {                      // 752
            return setTimeout((function() {                                                                         // 753
              return _this.emit("queuecomplete");                                                                   // 754
            }), 0);                                                                                                 // 755
          }                                                                                                         // 756
        };                                                                                                          // 757
      })(this));                                                                                                    // 758
      noPropagation = function(e) {                                                                                 // 759
        e.stopPropagation();                                                                                        // 760
        if (e.preventDefault) {                                                                                     // 761
          return e.preventDefault();                                                                                // 762
        } else {                                                                                                    // 763
          return e.returnValue = false;                                                                             // 764
        }                                                                                                           // 765
      };                                                                                                            // 766
      this.listeners = [                                                                                            // 767
        {                                                                                                           // 768
          element: this.element,                                                                                    // 769
          events: {                                                                                                 // 770
            "dragstart": (function(_this) {                                                                         // 771
              return function(e) {                                                                                  // 772
                return _this.emit("dragstart", e);                                                                  // 773
              };                                                                                                    // 774
            })(this),                                                                                               // 775
            "dragenter": (function(_this) {                                                                         // 776
              return function(e) {                                                                                  // 777
                noPropagation(e);                                                                                   // 778
                return _this.emit("dragenter", e);                                                                  // 779
              };                                                                                                    // 780
            })(this),                                                                                               // 781
            "dragover": (function(_this) {                                                                          // 782
              return function(e) {                                                                                  // 783
                var efct;                                                                                           // 784
                try {                                                                                               // 785
                  efct = e.dataTransfer.effectAllowed;                                                              // 786
                } catch (_error) {}                                                                                 // 787
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';               // 788
                noPropagation(e);                                                                                   // 789
                return _this.emit("dragover", e);                                                                   // 790
              };                                                                                                    // 791
            })(this),                                                                                               // 792
            "dragleave": (function(_this) {                                                                         // 793
              return function(e) {                                                                                  // 794
                return _this.emit("dragleave", e);                                                                  // 795
              };                                                                                                    // 796
            })(this),                                                                                               // 797
            "drop": (function(_this) {                                                                              // 798
              return function(e) {                                                                                  // 799
                noPropagation(e);                                                                                   // 800
                return _this.drop(e);                                                                               // 801
              };                                                                                                    // 802
            })(this),                                                                                               // 803
            "dragend": (function(_this) {                                                                           // 804
              return function(e) {                                                                                  // 805
                return _this.emit("dragend", e);                                                                    // 806
              };                                                                                                    // 807
            })(this)                                                                                                // 808
          }                                                                                                         // 809
        }                                                                                                           // 810
      ];                                                                                                            // 811
      this.clickableElements.forEach((function(_this) {                                                             // 812
        return function(clickableElement) {                                                                         // 813
          return _this.listeners.push({                                                                             // 814
            element: clickableElement,                                                                              // 815
            events: {                                                                                               // 816
              "click": function(evt) {                                                                              // 817
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  return _this.hiddenFileInput.click();                                                             // 819
                }                                                                                                   // 820
              }                                                                                                     // 821
            }                                                                                                       // 822
          });                                                                                                       // 823
        };                                                                                                          // 824
      })(this));                                                                                                    // 825
      this.enable();                                                                                                // 826
      return this.options.init.call(this);                                                                          // 827
    };                                                                                                              // 828
                                                                                                                    // 829
    Dropzone.prototype.destroy = function() {                                                                       // 830
      var _ref;                                                                                                     // 831
      this.disable();                                                                                               // 832
      this.removeAllFiles(true);                                                                                    // 833
      if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {                                       // 834
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);                                          // 835
        this.hiddenFileInput = null;                                                                                // 836
      }                                                                                                             // 837
      delete this.element.dropzone;                                                                                 // 838
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);                                        // 839
    };                                                                                                              // 840
                                                                                                                    // 841
    Dropzone.prototype.updateTotalUploadProgress = function() {                                                     // 842
      var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;                       // 843
      totalBytesSent = 0;                                                                                           // 844
      totalBytes = 0;                                                                                               // 845
      activeFiles = this.getActiveFiles();                                                                          // 846
      if (activeFiles.length) {                                                                                     // 847
        _ref = this.getActiveFiles();                                                                               // 848
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                         // 849
          file = _ref[_i];                                                                                          // 850
          totalBytesSent += file.upload.bytesSent;                                                                  // 851
          totalBytes += file.upload.total;                                                                          // 852
        }                                                                                                           // 853
        totalUploadProgress = 100 * totalBytesSent / totalBytes;                                                    // 854
      } else {                                                                                                      // 855
        totalUploadProgress = 100;                                                                                  // 856
      }                                                                                                             // 857
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);                     // 858
    };                                                                                                              // 859
                                                                                                                    // 860
    Dropzone.prototype._getParamName = function(n) {                                                                // 861
      if (typeof this.options.paramName === "function") {                                                           // 862
        return this.options.paramName(n);                                                                           // 863
      } else {                                                                                                      // 864
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");                    // 865
      }                                                                                                             // 866
    };                                                                                                              // 867
                                                                                                                    // 868
    Dropzone.prototype.getFallbackForm = function() {                                                               // 869
      var existingFallback, fields, fieldsString, form;                                                             // 870
      if (existingFallback = this.getExistingFallback()) {                                                          // 871
        return existingFallback;                                                                                    // 872
      }                                                                                                             // 873
      fieldsString = "<div class=\"dz-fallback\">";                                                                 // 874
      if (this.options.dictFallbackText) {                                                                          // 875
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";                                             // 876
      }                                                                                                             // 877
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);                                                                // 879
      if (this.element.tagName !== "FORM") {                                                                        // 880
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);                                                                                   // 882
      } else {                                                                                                      // 883
        this.element.setAttribute("enctype", "multipart/form-data");                                                // 884
        this.element.setAttribute("method", this.options.method);                                                   // 885
      }                                                                                                             // 886
      return form != null ? form : fields;                                                                          // 887
    };                                                                                                              // 888
                                                                                                                    // 889
    Dropzone.prototype.getExistingFallback = function() {                                                           // 890
      var fallback, getFallback, tagName, _i, _len, _ref;                                                           // 891
      getFallback = function(elements) {                                                                            // 892
        var el, _i, _len;                                                                                           // 893
        for (_i = 0, _len = elements.length; _i < _len; _i++) {                                                     // 894
          el = elements[_i];                                                                                        // 895
          if (/(^| )fallback($| )/.test(el.className)) {                                                            // 896
            return el;                                                                                              // 897
          }                                                                                                         // 898
        }                                                                                                           // 899
      };                                                                                                            // 900
      _ref = ["div", "form"];                                                                                       // 901
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 902
        tagName = _ref[_i];                                                                                         // 903
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {                                   // 904
          return fallback;                                                                                          // 905
        }                                                                                                           // 906
      }                                                                                                             // 907
    };                                                                                                              // 908
                                                                                                                    // 909
    Dropzone.prototype.setupEventListeners = function() {                                                           // 910
      var elementListeners, event, listener, _i, _len, _ref, _results;                                              // 911
      _ref = this.listeners;                                                                                        // 912
      _results = [];                                                                                                // 913
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 914
        elementListeners = _ref[_i];                                                                                // 915
        _results.push((function() {                                                                                 // 916
          var _ref1, _results1;                                                                                     // 917
          _ref1 = elementListeners.events;                                                                          // 918
          _results1 = [];                                                                                           // 919
          for (event in _ref1) {                                                                                    // 920
            listener = _ref1[event];                                                                                // 921
            _results1.push(elementListeners.element.addEventListener(event, listener, false));                      // 922
          }                                                                                                         // 923
          return _results1;                                                                                         // 924
        })());                                                                                                      // 925
      }                                                                                                             // 926
      return _results;                                                                                              // 927
    };                                                                                                              // 928
                                                                                                                    // 929
    Dropzone.prototype.removeEventListeners = function() {                                                          // 930
      var elementListeners, event, listener, _i, _len, _ref, _results;                                              // 931
      _ref = this.listeners;                                                                                        // 932
      _results = [];                                                                                                // 933
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 934
        elementListeners = _ref[_i];                                                                                // 935
        _results.push((function() {                                                                                 // 936
          var _ref1, _results1;                                                                                     // 937
          _ref1 = elementListeners.events;                                                                          // 938
          _results1 = [];                                                                                           // 939
          for (event in _ref1) {                                                                                    // 940
            listener = _ref1[event];                                                                                // 941
            _results1.push(elementListeners.element.removeEventListener(event, listener, false));                   // 942
          }                                                                                                         // 943
          return _results1;                                                                                         // 944
        })());                                                                                                      // 945
      }                                                                                                             // 946
      return _results;                                                                                              // 947
    };                                                                                                              // 948
                                                                                                                    // 949
    Dropzone.prototype.disable = function() {                                                                       // 950
      var file, _i, _len, _ref, _results;                                                                           // 951
      this.clickableElements.forEach(function(element) {                                                            // 952
        return element.classList.remove("dz-clickable");                                                            // 953
      });                                                                                                           // 954
      this.removeEventListeners();                                                                                  // 955
      _ref = this.files;                                                                                            // 956
      _results = [];                                                                                                // 957
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 958
        file = _ref[_i];                                                                                            // 959
        _results.push(this.cancelUpload(file));                                                                     // 960
      }                                                                                                             // 961
      return _results;                                                                                              // 962
    };                                                                                                              // 963
                                                                                                                    // 964
    Dropzone.prototype.enable = function() {                                                                        // 965
      this.clickableElements.forEach(function(element) {                                                            // 966
        return element.classList.add("dz-clickable");                                                               // 967
      });                                                                                                           // 968
      return this.setupEventListeners();                                                                            // 969
    };                                                                                                              // 970
                                                                                                                    // 971
    Dropzone.prototype.filesize = function(size) {                                                                  // 972
      var string;                                                                                                   // 973
      if (size >= 1024 * 1024 * 1024 * 1024 / 10) {                                                                 // 974
        size = size / (1024 * 1024 * 1024 * 1024 / 10);                                                             // 975
        string = "TiB";                                                                                             // 976
      } else if (size >= 1024 * 1024 * 1024 / 10) {                                                                 // 977
        size = size / (1024 * 1024 * 1024 / 10);                                                                    // 978
        string = "GiB";                                                                                             // 979
      } else if (size >= 1024 * 1024 / 10) {                                                                        // 980
        size = size / (1024 * 1024 / 10);                                                                           // 981
        string = "MiB";                                                                                             // 982
      } else if (size >= 1024 / 10) {                                                                               // 983
        size = size / (1024 / 10);                                                                                  // 984
        string = "KiB";                                                                                             // 985
      } else {                                                                                                      // 986
        size = size * 10;                                                                                           // 987
        string = "b";                                                                                               // 988
      }                                                                                                             // 989
      return "<strong>" + (Math.round(size) / 10) + "</strong> " + string;                                          // 990
    };                                                                                                              // 991
                                                                                                                    // 992
    Dropzone.prototype._updateMaxFilesReachedClass = function() {                                                   // 993
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {             // 994
        if (this.getAcceptedFiles().length === this.options.maxFiles) {                                             // 995
          this.emit('maxfilesreached', this.files);                                                                 // 996
        }                                                                                                           // 997
        return this.element.classList.add("dz-max-files-reached");                                                  // 998
      } else {                                                                                                      // 999
        return this.element.classList.remove("dz-max-files-reached");                                               // 1000
      }                                                                                                             // 1001
    };                                                                                                              // 1002
                                                                                                                    // 1003
    Dropzone.prototype.drop = function(e) {                                                                         // 1004
      var files, items;                                                                                             // 1005
      if (!e.dataTransfer) {                                                                                        // 1006
        return;                                                                                                     // 1007
      }                                                                                                             // 1008
      this.emit("drop", e);                                                                                         // 1009
      files = e.dataTransfer.files;                                                                                 // 1010
      if (files.length) {                                                                                           // 1011
        items = e.dataTransfer.items;                                                                               // 1012
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {                                         // 1013
          this._addFilesFromItems(items);                                                                           // 1014
        } else {                                                                                                    // 1015
          this.handleFiles(files);                                                                                  // 1016
        }                                                                                                           // 1017
      }                                                                                                             // 1018
    };                                                                                                              // 1019
                                                                                                                    // 1020
    Dropzone.prototype.paste = function(e) {                                                                        // 1021
      var items, _ref;                                                                                              // 1022
      if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {                  // 1023
        return;                                                                                                     // 1024
      }                                                                                                             // 1025
      this.emit("paste", e);                                                                                        // 1026
      items = e.clipboardData.items;                                                                                // 1027
      if (items.length) {                                                                                           // 1028
        return this._addFilesFromItems(items);                                                                      // 1029
      }                                                                                                             // 1030
    };                                                                                                              // 1031
                                                                                                                    // 1032
    Dropzone.prototype.handleFiles = function(files) {                                                              // 1033
      var file, _i, _len, _results;                                                                                 // 1034
      _results = [];                                                                                                // 1035
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1036
        file = files[_i];                                                                                           // 1037
        _results.push(this.addFile(file));                                                                          // 1038
      }                                                                                                             // 1039
      return _results;                                                                                              // 1040
    };                                                                                                              // 1041
                                                                                                                    // 1042
    Dropzone.prototype._addFilesFromItems = function(items) {                                                       // 1043
      var entry, item, _i, _len, _results;                                                                          // 1044
      _results = [];                                                                                                // 1045
      for (_i = 0, _len = items.length; _i < _len; _i++) {                                                          // 1046
        item = items[_i];                                                                                           // 1047
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {                                 // 1048
          if (entry.isFile) {                                                                                       // 1049
            _results.push(this.addFile(item.getAsFile()));                                                          // 1050
          } else if (entry.isDirectory) {                                                                           // 1051
            _results.push(this._addFilesFromDirectory(entry, entry.name));                                          // 1052
          } else {                                                                                                  // 1053
            _results.push(void 0);                                                                                  // 1054
          }                                                                                                         // 1055
        } else if (item.getAsFile != null) {                                                                        // 1056
          if ((item.kind == null) || item.kind === "file") {                                                        // 1057
            _results.push(this.addFile(item.getAsFile()));                                                          // 1058
          } else {                                                                                                  // 1059
            _results.push(void 0);                                                                                  // 1060
          }                                                                                                         // 1061
        } else {                                                                                                    // 1062
          _results.push(void 0);                                                                                    // 1063
        }                                                                                                           // 1064
      }                                                                                                             // 1065
      return _results;                                                                                              // 1066
    };                                                                                                              // 1067
                                                                                                                    // 1068
    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {                                         // 1069
      var dirReader, entriesReader;                                                                                 // 1070
      dirReader = directory.createReader();                                                                         // 1071
      entriesReader = (function(_this) {                                                                            // 1072
        return function(entries) {                                                                                  // 1073
          var entry, _i, _len;                                                                                      // 1074
          for (_i = 0, _len = entries.length; _i < _len; _i++) {                                                    // 1075
            entry = entries[_i];                                                                                    // 1076
            if (entry.isFile) {                                                                                     // 1077
              entry.file(function(file) {                                                                           // 1078
                if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {                         // 1079
                  return;                                                                                           // 1080
                }                                                                                                   // 1081
                file.fullPath = "" + path + "/" + file.name;                                                        // 1082
                return _this.addFile(file);                                                                         // 1083
              });                                                                                                   // 1084
            } else if (entry.isDirectory) {                                                                         // 1085
              _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);                                    // 1086
            }                                                                                                       // 1087
          }                                                                                                         // 1088
        };                                                                                                          // 1089
      })(this);                                                                                                     // 1090
      return dirReader.readEntries(entriesReader, function(error) {                                                 // 1091
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      });                                                                                                           // 1093
    };                                                                                                              // 1094
                                                                                                                    // 1095
    Dropzone.prototype.accept = function(file, done) {                                                              // 1096
      if (file.size > this.options.maxFilesize * 1024 * 1024) {                                                     // 1097
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {                                         // 1099
        return done(this.options.dictInvalidFileType);                                                              // 1100
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {      // 1101
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));                     // 1102
        return this.emit("maxfilesexceeded", file);                                                                 // 1103
      } else {                                                                                                      // 1104
        return this.options.accept.call(this, file, done);                                                          // 1105
      }                                                                                                             // 1106
    };                                                                                                              // 1107
                                                                                                                    // 1108
    Dropzone.prototype.addFile = function(file) {                                                                   // 1109
      file.upload = {                                                                                               // 1110
        progress: 0,                                                                                                // 1111
        total: file.size,                                                                                           // 1112
        bytesSent: 0                                                                                                // 1113
      };                                                                                                            // 1114
      this.files.push(file);                                                                                        // 1115
      file.status = Dropzone.ADDED;                                                                                 // 1116
      this.emit("addedfile", file);                                                                                 // 1117
      this._enqueueThumbnail(file);                                                                                 // 1118
      return this.accept(file, (function(_this) {                                                                   // 1119
        return function(error) {                                                                                    // 1120
          if (error) {                                                                                              // 1121
            file.accepted = false;                                                                                  // 1122
            _this._errorProcessing([file], error);                                                                  // 1123
          } else {                                                                                                  // 1124
            file.accepted = true;                                                                                   // 1125
            if (_this.options.autoQueue) {                                                                          // 1126
              _this.enqueueFile(file);                                                                              // 1127
            }                                                                                                       // 1128
          }                                                                                                         // 1129
          return _this._updateMaxFilesReachedClass();                                                               // 1130
        };                                                                                                          // 1131
      })(this));                                                                                                    // 1132
    };                                                                                                              // 1133
                                                                                                                    // 1134
    Dropzone.prototype.enqueueFiles = function(files) {                                                             // 1135
      var file, _i, _len;                                                                                           // 1136
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1137
        file = files[_i];                                                                                           // 1138
        this.enqueueFile(file);                                                                                     // 1139
      }                                                                                                             // 1140
      return null;                                                                                                  // 1141
    };                                                                                                              // 1142
                                                                                                                    // 1143
    Dropzone.prototype.enqueueFile = function(file) {                                                               // 1144
      if (file.status === Dropzone.ADDED && file.accepted === true) {                                               // 1145
        file.status = Dropzone.QUEUED;                                                                              // 1146
        if (this.options.autoProcessQueue) {                                                                        // 1147
          return setTimeout(((function(_this) {                                                                     // 1148
            return function() {                                                                                     // 1149
              return _this.processQueue();                                                                          // 1150
            };                                                                                                      // 1151
          })(this)), 0);                                                                                            // 1152
        }                                                                                                           // 1153
      } else {                                                                                                      // 1154
        throw new Error("This file can't be queued because it has already been processed or was rejected.");        // 1155
      }                                                                                                             // 1156
    };                                                                                                              // 1157
                                                                                                                    // 1158
    Dropzone.prototype._thumbnailQueue = [];                                                                        // 1159
                                                                                                                    // 1160
    Dropzone.prototype._processingThumbnail = false;                                                                // 1161
                                                                                                                    // 1162
    Dropzone.prototype._enqueueThumbnail = function(file) {                                                         // 1163
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);                                                                            // 1165
        return setTimeout(((function(_this) {                                                                       // 1166
          return function() {                                                                                       // 1167
            return _this._processThumbnailQueue();                                                                  // 1168
          };                                                                                                        // 1169
        })(this)), 0);                                                                                              // 1170
      }                                                                                                             // 1171
    };                                                                                                              // 1172
                                                                                                                    // 1173
    Dropzone.prototype._processThumbnailQueue = function() {                                                        // 1174
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {                                         // 1175
        return;                                                                                                     // 1176
      }                                                                                                             // 1177
      this._processingThumbnail = true;                                                                             // 1178
      return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {                                  // 1179
        return function() {                                                                                         // 1180
          _this._processingThumbnail = false;                                                                       // 1181
          return _this._processThumbnailQueue();                                                                    // 1182
        };                                                                                                          // 1183
      })(this));                                                                                                    // 1184
    };                                                                                                              // 1185
                                                                                                                    // 1186
    Dropzone.prototype.removeFile = function(file) {                                                                // 1187
      if (file.status === Dropzone.UPLOADING) {                                                                     // 1188
        this.cancelUpload(file);                                                                                    // 1189
      }                                                                                                             // 1190
      this.files = without(this.files, file);                                                                       // 1191
      this.emit("removedfile", file);                                                                               // 1192
      if (this.files.length === 0) {                                                                                // 1193
        return this.emit("reset");                                                                                  // 1194
      }                                                                                                             // 1195
    };                                                                                                              // 1196
                                                                                                                    // 1197
    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {                                               // 1198
      var file, _i, _len, _ref;                                                                                     // 1199
      if (cancelIfNecessary == null) {                                                                              // 1200
        cancelIfNecessary = false;                                                                                  // 1201
      }                                                                                                             // 1202
      _ref = this.files.slice();                                                                                    // 1203
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                           // 1204
        file = _ref[_i];                                                                                            // 1205
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {                                              // 1206
          this.removeFile(file);                                                                                    // 1207
        }                                                                                                           // 1208
      }                                                                                                             // 1209
      return null;                                                                                                  // 1210
    };                                                                                                              // 1211
                                                                                                                    // 1212
    Dropzone.prototype.createThumbnail = function(file, callback) {                                                 // 1213
      var fileReader;                                                                                               // 1214
      fileReader = new FileReader;                                                                                  // 1215
      fileReader.onload = (function(_this) {                                                                        // 1216
        return function() {                                                                                         // 1217
          var img;                                                                                                  // 1218
          img = document.createElement("img");                                                                      // 1219
          img.onload = function() {                                                                                 // 1220
            var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;                                      // 1221
            file.width = img.width;                                                                                 // 1222
            file.height = img.height;                                                                               // 1223
            resizeInfo = _this.options.resize.call(_this, file);                                                    // 1224
            if (resizeInfo.trgWidth == null) {                                                                      // 1225
              resizeInfo.trgWidth = resizeInfo.optWidth;                                                            // 1226
            }                                                                                                       // 1227
            if (resizeInfo.trgHeight == null) {                                                                     // 1228
              resizeInfo.trgHeight = resizeInfo.optHeight;                                                          // 1229
            }                                                                                                       // 1230
            canvas = document.createElement("canvas");                                                              // 1231
            ctx = canvas.getContext("2d");                                                                          // 1232
            canvas.width = resizeInfo.trgWidth;                                                                     // 1233
            canvas.height = resizeInfo.trgHeight;                                                                   // 1234
            drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
            thumbnail = canvas.toDataURL("image/png");                                                              // 1236
            _this.emit("thumbnail", file, thumbnail);                                                               // 1237
            if (callback != null) {                                                                                 // 1238
              return callback();                                                                                    // 1239
            }                                                                                                       // 1240
          };                                                                                                        // 1241
          return img.src = fileReader.result;                                                                       // 1242
        };                                                                                                          // 1243
      })(this);                                                                                                     // 1244
      return fileReader.readAsDataURL(file);                                                                        // 1245
    };                                                                                                              // 1246
                                                                                                                    // 1247
    Dropzone.prototype.processQueue = function() {                                                                  // 1248
      var i, parallelUploads, processingLength, queuedFiles;                                                        // 1249
      parallelUploads = this.options.parallelUploads;                                                               // 1250
      processingLength = this.getUploadingFiles().length;                                                           // 1251
      i = processingLength;                                                                                         // 1252
      if (processingLength >= parallelUploads) {                                                                    // 1253
        return;                                                                                                     // 1254
      }                                                                                                             // 1255
      queuedFiles = this.getQueuedFiles();                                                                          // 1256
      if (!(queuedFiles.length > 0)) {                                                                              // 1257
        return;                                                                                                     // 1258
      }                                                                                                             // 1259
      if (this.options.uploadMultiple) {                                                                            // 1260
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));                         // 1261
      } else {                                                                                                      // 1262
        while (i < parallelUploads) {                                                                               // 1263
          if (!queuedFiles.length) {                                                                                // 1264
            return;                                                                                                 // 1265
          }                                                                                                         // 1266
          this.processFile(queuedFiles.shift());                                                                    // 1267
          i++;                                                                                                      // 1268
        }                                                                                                           // 1269
      }                                                                                                             // 1270
    };                                                                                                              // 1271
                                                                                                                    // 1272
    Dropzone.prototype.processFile = function(file) {                                                               // 1273
      return this.processFiles([file]);                                                                             // 1274
    };                                                                                                              // 1275
                                                                                                                    // 1276
    Dropzone.prototype.processFiles = function(files) {                                                             // 1277
      var file, _i, _len;                                                                                           // 1278
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1279
        file = files[_i];                                                                                           // 1280
        file.processing = true;                                                                                     // 1281
        file.status = Dropzone.UPLOADING;                                                                           // 1282
        this.emit("processing", file);                                                                              // 1283
      }                                                                                                             // 1284
      if (this.options.uploadMultiple) {                                                                            // 1285
        this.emit("processingmultiple", files);                                                                     // 1286
      }                                                                                                             // 1287
      return this.uploadFiles(files);                                                                               // 1288
    };                                                                                                              // 1289
                                                                                                                    // 1290
    Dropzone.prototype._getFilesWithXhr = function(xhr) {                                                           // 1291
      var file, files;                                                                                              // 1292
      return files = (function() {                                                                                  // 1293
        var _i, _len, _ref, _results;                                                                               // 1294
        _ref = this.files;                                                                                          // 1295
        _results = [];                                                                                              // 1296
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                         // 1297
          file = _ref[_i];                                                                                          // 1298
          if (file.xhr === xhr) {                                                                                   // 1299
            _results.push(file);                                                                                    // 1300
          }                                                                                                         // 1301
        }                                                                                                           // 1302
        return _results;                                                                                            // 1303
      }).call(this);                                                                                                // 1304
    };                                                                                                              // 1305
                                                                                                                    // 1306
    Dropzone.prototype.cancelUpload = function(file) {                                                              // 1307
      var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;                                                     // 1308
      if (file.status === Dropzone.UPLOADING) {                                                                     // 1309
        groupedFiles = this._getFilesWithXhr(file.xhr);                                                             // 1310
        for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {                                                 // 1311
          groupedFile = groupedFiles[_i];                                                                           // 1312
          groupedFile.status = Dropzone.CANCELED;                                                                   // 1313
        }                                                                                                           // 1314
        file.xhr.abort();                                                                                           // 1315
        for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {                                               // 1316
          groupedFile = groupedFiles[_j];                                                                           // 1317
          this.emit("canceled", groupedFile);                                                                       // 1318
        }                                                                                                           // 1319
        if (this.options.uploadMultiple) {                                                                          // 1320
          this.emit("canceledmultiple", groupedFiles);                                                              // 1321
        }                                                                                                           // 1322
      } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {                             // 1323
        file.status = Dropzone.CANCELED;                                                                            // 1324
        this.emit("canceled", file);                                                                                // 1325
        if (this.options.uploadMultiple) {                                                                          // 1326
          this.emit("canceledmultiple", [file]);                                                                    // 1327
        }                                                                                                           // 1328
      }                                                                                                             // 1329
      if (this.options.autoProcessQueue) {                                                                          // 1330
        return this.processQueue();                                                                                 // 1331
      }                                                                                                             // 1332
    };                                                                                                              // 1333
                                                                                                                    // 1334
    Dropzone.prototype.uploadFile = function(file) {                                                                // 1335
      return this.uploadFiles([file]);                                                                              // 1336
    };                                                                                                              // 1337
                                                                                                                    // 1338
    Dropzone.prototype.uploadFiles = function(files) {                                                              // 1339
      var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, option, progressObj, response, updateProgress, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      xhr = new XMLHttpRequest();                                                                                   // 1341
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1342
        file = files[_i];                                                                                           // 1343
        file.xhr = xhr;                                                                                             // 1344
      }                                                                                                             // 1345
      xhr.open(this.options.method, this.options.url, true);                                                        // 1346
      xhr.withCredentials = !!this.options.withCredentials;                                                         // 1347
      response = null;                                                                                              // 1348
      handleError = (function(_this) {                                                                              // 1349
        return function() {                                                                                         // 1350
          var _j, _len1, _results;                                                                                  // 1351
          _results = [];                                                                                            // 1352
          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {                                                    // 1353
            file = files[_j];                                                                                       // 1354
            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }                                                                                                         // 1356
          return _results;                                                                                          // 1357
        };                                                                                                          // 1358
      })(this);                                                                                                     // 1359
      updateProgress = (function(_this) {                                                                           // 1360
        return function(e) {                                                                                        // 1361
          var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;                                // 1362
          if (e != null) {                                                                                          // 1363
            progress = 100 * e.loaded / e.total;                                                                    // 1364
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {                                                  // 1365
              file = files[_j];                                                                                     // 1366
              file.upload = {                                                                                       // 1367
                progress: progress,                                                                                 // 1368
                total: e.total,                                                                                     // 1369
                bytesSent: e.loaded                                                                                 // 1370
              };                                                                                                    // 1371
            }                                                                                                       // 1372
          } else {                                                                                                  // 1373
            allFilesFinished = true;                                                                                // 1374
            progress = 100;                                                                                         // 1375
            for (_k = 0, _len2 = files.length; _k < _len2; _k++) {                                                  // 1376
              file = files[_k];                                                                                     // 1377
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {                 // 1378
                allFilesFinished = false;                                                                           // 1379
              }                                                                                                     // 1380
              file.upload.progress = progress;                                                                      // 1381
              file.upload.bytesSent = file.upload.total;                                                            // 1382
            }                                                                                                       // 1383
            if (allFilesFinished) {                                                                                 // 1384
              return;                                                                                               // 1385
            }                                                                                                       // 1386
          }                                                                                                         // 1387
          _results = [];                                                                                            // 1388
          for (_l = 0, _len3 = files.length; _l < _len3; _l++) {                                                    // 1389
            file = files[_l];                                                                                       // 1390
            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));                     // 1391
          }                                                                                                         // 1392
          return _results;                                                                                          // 1393
        };                                                                                                          // 1394
      })(this);                                                                                                     // 1395
      xhr.onload = (function(_this) {                                                                               // 1396
        return function(e) {                                                                                        // 1397
          var _ref;                                                                                                 // 1398
          if (files[0].status === Dropzone.CANCELED) {                                                              // 1399
            return;                                                                                                 // 1400
          }                                                                                                         // 1401
          if (xhr.readyState !== 4) {                                                                               // 1402
            return;                                                                                                 // 1403
          }                                                                                                         // 1404
          response = xhr.responseText;                                                                              // 1405
          if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
            try {                                                                                                   // 1407
              response = JSON.parse(response);                                                                      // 1408
            } catch (_error) {                                                                                      // 1409
              e = _error;                                                                                           // 1410
              response = "Invalid JSON response from server.";                                                      // 1411
            }                                                                                                       // 1412
          }                                                                                                         // 1413
          updateProgress();                                                                                         // 1414
          if (!((200 <= (_ref = xhr.status) && _ref < 300))) {                                                      // 1415
            return handleError();                                                                                   // 1416
          } else {                                                                                                  // 1417
            return _this._finished(files, response, e);                                                             // 1418
          }                                                                                                         // 1419
        };                                                                                                          // 1420
      })(this);                                                                                                     // 1421
      xhr.onerror = (function(_this) {                                                                              // 1422
        return function() {                                                                                         // 1423
          if (files[0].status === Dropzone.CANCELED) {                                                              // 1424
            return;                                                                                                 // 1425
          }                                                                                                         // 1426
          return handleError();                                                                                     // 1427
        };                                                                                                          // 1428
      })(this);                                                                                                     // 1429
      progressObj = (_ref = xhr.upload) != null ? _ref : xhr;                                                       // 1430
      progressObj.onprogress = updateProgress;                                                                      // 1431
      headers = {                                                                                                   // 1432
        "Accept": "application/json",                                                                               // 1433
        "Cache-Control": "no-cache",                                                                                // 1434
        "X-Requested-With": "XMLHttpRequest"                                                                        // 1435
      };                                                                                                            // 1436
      if (this.options.headers) {                                                                                   // 1437
        extend(headers, this.options.headers);                                                                      // 1438
      }                                                                                                             // 1439
      for (headerName in headers) {                                                                                 // 1440
        headerValue = headers[headerName];                                                                          // 1441
        xhr.setRequestHeader(headerName, headerValue);                                                              // 1442
      }                                                                                                             // 1443
      formData = new FormData();                                                                                    // 1444
      if (this.options.params) {                                                                                    // 1445
        _ref1 = this.options.params;                                                                                // 1446
        for (key in _ref1) {                                                                                        // 1447
          value = _ref1[key];                                                                                       // 1448
          formData.append(key, value);                                                                              // 1449
        }                                                                                                           // 1450
      }                                                                                                             // 1451
      for (_j = 0, _len1 = files.length; _j < _len1; _j++) {                                                        // 1452
        file = files[_j];                                                                                           // 1453
        this.emit("sending", file, xhr, formData);                                                                  // 1454
      }                                                                                                             // 1455
      if (this.options.uploadMultiple) {                                                                            // 1456
        this.emit("sendingmultiple", files, xhr, formData);                                                         // 1457
      }                                                                                                             // 1458
      if (this.element.tagName === "FORM") {                                                                        // 1459
        _ref2 = this.element.querySelectorAll("input, textarea, select, button");                                   // 1460
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {                                                      // 1461
          input = _ref2[_k];                                                                                        // 1462
          inputName = input.getAttribute("name");                                                                   // 1463
          inputType = input.getAttribute("type");                                                                   // 1464
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {                                       // 1465
            _ref3 = input.options;                                                                                  // 1466
            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {                                                  // 1467
              option = _ref3[_l];                                                                                   // 1468
              if (option.selected) {                                                                                // 1469
                formData.append(inputName, option.value);                                                           // 1470
              }                                                                                                     // 1471
            }                                                                                                       // 1472
          } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);                                                                // 1474
          }                                                                                                         // 1475
        }                                                                                                           // 1476
      }                                                                                                             // 1477
      for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
        formData.append(this._getParamName(i), files[i], files[i].name);                                            // 1479
      }                                                                                                             // 1480
      return xhr.send(formData);                                                                                    // 1481
    };                                                                                                              // 1482
                                                                                                                    // 1483
    Dropzone.prototype._finished = function(files, responseText, e) {                                               // 1484
      var file, _i, _len;                                                                                           // 1485
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1486
        file = files[_i];                                                                                           // 1487
        file.status = Dropzone.SUCCESS;                                                                             // 1488
        this.emit("success", file, responseText, e);                                                                // 1489
        this.emit("complete", file);                                                                                // 1490
      }                                                                                                             // 1491
      if (this.options.uploadMultiple) {                                                                            // 1492
        this.emit("successmultiple", files, responseText, e);                                                       // 1493
        this.emit("completemultiple", files);                                                                       // 1494
      }                                                                                                             // 1495
      if (this.options.autoProcessQueue) {                                                                          // 1496
        return this.processQueue();                                                                                 // 1497
      }                                                                                                             // 1498
    };                                                                                                              // 1499
                                                                                                                    // 1500
    Dropzone.prototype._errorProcessing = function(files, message, xhr) {                                           // 1501
      var file, _i, _len;                                                                                           // 1502
      for (_i = 0, _len = files.length; _i < _len; _i++) {                                                          // 1503
        file = files[_i];                                                                                           // 1504
        file.status = Dropzone.ERROR;                                                                               // 1505
        this.emit("error", file, message, xhr);                                                                     // 1506
        this.emit("complete", file);                                                                                // 1507
      }                                                                                                             // 1508
      if (this.options.uploadMultiple) {                                                                            // 1509
        this.emit("errormultiple", files, message, xhr);                                                            // 1510
        this.emit("completemultiple", files);                                                                       // 1511
      }                                                                                                             // 1512
      if (this.options.autoProcessQueue) {                                                                          // 1513
        return this.processQueue();                                                                                 // 1514
      }                                                                                                             // 1515
    };                                                                                                              // 1516
                                                                                                                    // 1517
    return Dropzone;                                                                                                // 1518
                                                                                                                    // 1519
  })(Em);                                                                                                           // 1520
                                                                                                                    // 1521
  Dropzone.version = "3.10.2";                                                                                      // 1522
                                                                                                                    // 1523
  Dropzone.options = {};                                                                                            // 1524
                                                                                                                    // 1525
  Dropzone.optionsForElement = function(element) {                                                                  // 1526
    if (element.getAttribute("id")) {                                                                               // 1527
      return Dropzone.options[camelize(element.getAttribute("id"))];                                                // 1528
    } else {                                                                                                        // 1529
      return void 0;                                                                                                // 1530
    }                                                                                                               // 1531
  };                                                                                                                // 1532
                                                                                                                    // 1533
  Dropzone.instances = [];                                                                                          // 1534
                                                                                                                    // 1535
  Dropzone.forElement = function(element) {                                                                         // 1536
    if (typeof element === "string") {                                                                              // 1537
      element = document.querySelector(element);                                                                    // 1538
    }                                                                                                               // 1539
    if ((element != null ? element.dropzone : void 0) == null) {                                                    // 1540
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }                                                                                                               // 1542
    return element.dropzone;                                                                                        // 1543
  };                                                                                                                // 1544
                                                                                                                    // 1545
  Dropzone.autoDiscover = false;                                                                                    // 1546
                                                                                                                    // 1547
  Dropzone.discover = function() {                                                                                  // 1548
    var checkElements, dropzone, dropzones, _i, _len, _results;                                                     // 1549
    if (document.querySelectorAll) {                                                                                // 1550
      dropzones = document.querySelectorAll(".dropzone");                                                           // 1551
    } else {                                                                                                        // 1552
      dropzones = [];                                                                                               // 1553
      checkElements = function(elements) {                                                                          // 1554
        var el, _i, _len, _results;                                                                                 // 1555
        _results = [];                                                                                              // 1556
        for (_i = 0, _len = elements.length; _i < _len; _i++) {                                                     // 1557
          el = elements[_i];                                                                                        // 1558
          if (/(^| )dropzone($| )/.test(el.className)) {                                                            // 1559
            _results.push(dropzones.push(el));                                                                      // 1560
          } else {                                                                                                  // 1561
            _results.push(void 0);                                                                                  // 1562
          }                                                                                                         // 1563
        }                                                                                                           // 1564
        return _results;                                                                                            // 1565
      };                                                                                                            // 1566
      checkElements(document.getElementsByTagName("div"));                                                          // 1567
      checkElements(document.getElementsByTagName("form"));                                                         // 1568
    }                                                                                                               // 1569
    _results = [];                                                                                                  // 1570
    for (_i = 0, _len = dropzones.length; _i < _len; _i++) {                                                        // 1571
      dropzone = dropzones[_i];                                                                                     // 1572
      if (Dropzone.optionsForElement(dropzone) !== false) {                                                         // 1573
        _results.push(new Dropzone(dropzone));                                                                      // 1574
      } else {                                                                                                      // 1575
        _results.push(void 0);                                                                                      // 1576
      }                                                                                                             // 1577
    }                                                                                                               // 1578
    return _results;                                                                                                // 1579
  };                                                                                                                // 1580
                                                                                                                    // 1581
  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];                                                // 1582
                                                                                                                    // 1583
  Dropzone.isBrowserSupported = function() {                                                                        // 1584
    var capableBrowser, regex, _i, _len, _ref;                                                                      // 1585
    capableBrowser = true;                                                                                          // 1586
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {                                                          // 1588
        capableBrowser = false;                                                                                     // 1589
      } else {                                                                                                      // 1590
        _ref = Dropzone.blacklistedBrowsers;                                                                        // 1591
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {                                                         // 1592
          regex = _ref[_i];                                                                                         // 1593
          if (regex.test(navigator.userAgent)) {                                                                    // 1594
            capableBrowser = false;                                                                                 // 1595
            continue;                                                                                               // 1596
          }                                                                                                         // 1597
        }                                                                                                           // 1598
      }                                                                                                             // 1599
    } else {                                                                                                        // 1600
      capableBrowser = false;                                                                                       // 1601
    }                                                                                                               // 1602
    return capableBrowser;                                                                                          // 1603
  };                                                                                                                // 1604
                                                                                                                    // 1605
  without = function(list, rejectedItem) {                                                                          // 1606
    var item, _i, _len, _results;                                                                                   // 1607
    _results = [];                                                                                                  // 1608
    for (_i = 0, _len = list.length; _i < _len; _i++) {                                                             // 1609
      item = list[_i];                                                                                              // 1610
      if (item !== rejectedItem) {                                                                                  // 1611
        _results.push(item);                                                                                        // 1612
      }                                                                                                             // 1613
    }                                                                                                               // 1614
    return _results;                                                                                                // 1615
  };                                                                                                                // 1616
                                                                                                                    // 1617
  camelize = function(str) {                                                                                        // 1618
    return str.replace(/[\-_](\w)/g, function(match) {                                                              // 1619
      return match.charAt(1).toUpperCase();                                                                         // 1620
    });                                                                                                             // 1621
  };                                                                                                                // 1622
                                                                                                                    // 1623
  Dropzone.createElement = function(string) {                                                                       // 1624
    var div;                                                                                                        // 1625
    div = document.createElement("div");                                                                            // 1626
    div.innerHTML = string;                                                                                         // 1627
    return div.childNodes[0];                                                                                       // 1628
  };                                                                                                                // 1629
                                                                                                                    // 1630
  Dropzone.elementInside = function(element, container) {                                                           // 1631
    if (element === container) {                                                                                    // 1632
      return true;                                                                                                  // 1633
    }                                                                                                               // 1634
    while (element = element.parentNode) {                                                                          // 1635
      if (element === container) {                                                                                  // 1636
        return true;                                                                                                // 1637
      }                                                                                                             // 1638
    }                                                                                                               // 1639
    return false;                                                                                                   // 1640
  };                                                                                                                // 1641
                                                                                                                    // 1642
  Dropzone.getElement = function(el, name) {                                                                        // 1643
    var element;                                                                                                    // 1644
    if (typeof el === "string") {                                                                                   // 1645
      element = document.querySelector(el);                                                                         // 1646
    } else if (el.nodeType != null) {                                                                               // 1647
      element = el;                                                                                                 // 1648
    }                                                                                                               // 1649
    if (element == null) {                                                                                          // 1650
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }                                                                                                               // 1652
    return element;                                                                                                 // 1653
  };                                                                                                                // 1654
                                                                                                                    // 1655
  Dropzone.getElements = function(els, name) {                                                                      // 1656
    var e, el, elements, _i, _j, _len, _len1, _ref;                                                                 // 1657
    if (els instanceof Array) {                                                                                     // 1658
      elements = [];                                                                                                // 1659
      try {                                                                                                         // 1660
        for (_i = 0, _len = els.length; _i < _len; _i++) {                                                          // 1661
          el = els[_i];                                                                                             // 1662
          elements.push(this.getElement(el, name));                                                                 // 1663
        }                                                                                                           // 1664
      } catch (_error) {                                                                                            // 1665
        e = _error;                                                                                                 // 1666
        elements = null;                                                                                            // 1667
      }                                                                                                             // 1668
    } else if (typeof els === "string") {                                                                           // 1669
      elements = [];                                                                                                // 1670
      _ref = document.querySelectorAll(els);                                                                        // 1671
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {                                                         // 1672
        el = _ref[_j];                                                                                              // 1673
        elements.push(el);                                                                                          // 1674
      }                                                                                                             // 1675
    } else if (els.nodeType != null) {                                                                              // 1676
      elements = [els];                                                                                             // 1677
    }                                                                                                               // 1678
    if (!((elements != null) && elements.length)) {                                                                 // 1679
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }                                                                                                               // 1681
    return elements;                                                                                                // 1682
  };                                                                                                                // 1683
                                                                                                                    // 1684
  Dropzone.confirm = function(question, accepted, rejected) {                                                       // 1685
    if (window.confirm(question)) {                                                                                 // 1686
      return accepted();                                                                                            // 1687
    } else if (rejected != null) {                                                                                  // 1688
      return rejected();                                                                                            // 1689
    }                                                                                                               // 1690
  };                                                                                                                // 1691
                                                                                                                    // 1692
  Dropzone.isValidFile = function(file, acceptedFiles) {                                                            // 1693
    var baseMimeType, mimeType, validType, _i, _len;                                                                // 1694
    if (!acceptedFiles) {                                                                                           // 1695
      return true;                                                                                                  // 1696
    }                                                                                                               // 1697
    acceptedFiles = acceptedFiles.split(",");                                                                       // 1698
    mimeType = file.type;                                                                                           // 1699
    baseMimeType = mimeType.replace(/\/.*$/, "");                                                                   // 1700
    for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {                                                    // 1701
      validType = acceptedFiles[_i];                                                                                // 1702
      validType = validType.trim();                                                                                 // 1703
      if (validType.charAt(0) === ".") {                                                                            // 1704
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) { // 1705
          return true;                                                                                              // 1706
        }                                                                                                           // 1707
      } else if (/\/\*$/.test(validType)) {                                                                         // 1708
        if (baseMimeType === validType.replace(/\/.*$/, "")) {                                                      // 1709
          return true;                                                                                              // 1710
        }                                                                                                           // 1711
      } else {                                                                                                      // 1712
        if (mimeType === validType) {                                                                               // 1713
          return true;                                                                                              // 1714
        }                                                                                                           // 1715
      }                                                                                                             // 1716
    }                                                                                                               // 1717
    return false;                                                                                                   // 1718
  };                                                                                                                // 1719
                                                                                                                    // 1720
  if (typeof jQuery !== "undefined" && jQuery !== null) {                                                           // 1721
    jQuery.fn.dropzone = function(options) {                                                                        // 1722
      return this.each(function() {                                                                                 // 1723
        return new Dropzone(this, options);                                                                         // 1724
      });                                                                                                           // 1725
    };                                                                                                              // 1726
  }                                                                                                                 // 1727
                                                                                                                    // 1728
  if (typeof module !== "undefined" && module !== null) {                                                           // 1729
    module.exports = Dropzone;                                                                                      // 1730
  } else {                                                                                                          // 1731
    window.Dropzone = Dropzone;                                                                                     // 1732
  }                                                                                                                 // 1733
                                                                                                                    // 1734
  Dropzone.ADDED = "added";                                                                                         // 1735
                                                                                                                    // 1736
  Dropzone.QUEUED = "queued";                                                                                       // 1737
                                                                                                                    // 1738
  Dropzone.ACCEPTED = Dropzone.QUEUED;                                                                              // 1739
                                                                                                                    // 1740
  Dropzone.UPLOADING = "uploading";                                                                                 // 1741
                                                                                                                    // 1742
  Dropzone.PROCESSING = Dropzone.UPLOADING;                                                                         // 1743
                                                                                                                    // 1744
  Dropzone.CANCELED = "canceled";                                                                                   // 1745
                                                                                                                    // 1746
  Dropzone.ERROR = "error";                                                                                         // 1747
                                                                                                                    // 1748
  Dropzone.SUCCESS = "success";                                                                                     // 1749
                                                                                                                    // 1750
                                                                                                                    // 1751
  /*                                                                                                                // 1752
                                                                                                                    // 1753
  Bugfix for iOS 6 and 7                                                                                            // 1754
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios                          // 1755
  based on the work of https://github.com/stomita/ios-imagefile-megapixel                                           // 1756
   */                                                                                                               // 1757
                                                                                                                    // 1758
  detectVerticalSquash = function(img) {                                                                            // 1759
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;                                                        // 1760
    iw = img.naturalWidth;                                                                                          // 1761
    ih = img.naturalHeight;                                                                                         // 1762
    canvas = document.createElement("canvas");                                                                      // 1763
    canvas.width = 1;                                                                                               // 1764
    canvas.height = ih;                                                                                             // 1765
    ctx = canvas.getContext("2d");                                                                                  // 1766
    ctx.drawImage(img, 0, 0);                                                                                       // 1767
    data = ctx.getImageData(0, 0, 1, ih).data;                                                                      // 1768
    sy = 0;                                                                                                         // 1769
    ey = ih;                                                                                                        // 1770
    py = ih;                                                                                                        // 1771
    while (py > sy) {                                                                                               // 1772
      alpha = data[(py - 1) * 4 + 3];                                                                               // 1773
      if (alpha === 0) {                                                                                            // 1774
        ey = py;                                                                                                    // 1775
      } else {                                                                                                      // 1776
        sy = py;                                                                                                    // 1777
      }                                                                                                             // 1778
      py = (ey + sy) >> 1;                                                                                          // 1779
    }                                                                                                               // 1780
    ratio = py / ih;                                                                                                // 1781
    if (ratio === 0) {                                                                                              // 1782
      return 1;                                                                                                     // 1783
    } else {                                                                                                        // 1784
      return ratio;                                                                                                 // 1785
    }                                                                                                               // 1786
  };                                                                                                                // 1787
                                                                                                                    // 1788
  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {                                            // 1789
    var vertSquashRatio;                                                                                            // 1790
    vertSquashRatio = detectVerticalSquash(img);                                                                    // 1791
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);                                    // 1792
  };                                                                                                                // 1793
                                                                                                                    // 1794
                                                                                                                    // 1795
  /*                                                                                                                // 1796
   * contentloaded.js                                                                                               // 1797
   *                                                                                                                // 1798
   * Author: Diego Perini (diego.perini at gmail.com)                                                               // 1799
   * Summary: cross-browser wrapper for DOMContentLoaded                                                            // 1800
   * Updated: 20101020                                                                                              // 1801
   * License: MIT                                                                                                   // 1802
   * Version: 1.2                                                                                                   // 1803
   *                                                                                                                // 1804
   * URL:                                                                                                           // 1805
   * http://javascript.nwbox.com/ContentLoaded/                                                                     // 1806
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE                                                          // 1807
   */                                                                                                               // 1808
                                                                                                                    // 1809
  contentLoaded = function(win, fn) {                                                                               // 1810
    var add, doc, done, init, poll, pre, rem, root, top;                                                            // 1811
    done = false;                                                                                                   // 1812
    top = true;                                                                                                     // 1813
    doc = win.document;                                                                                             // 1814
    root = doc.documentElement;                                                                                     // 1815
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");                                              // 1816
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");                                           // 1817
    pre = (doc.addEventListener ? "" : "on");                                                                       // 1818
    init = function(e) {                                                                                            // 1819
      if (e.type === "readystatechange" && doc.readyState !== "complete") {                                         // 1820
        return;                                                                                                     // 1821
      }                                                                                                             // 1822
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);                                              // 1823
      if (!done && (done = true)) {                                                                                 // 1824
        return fn.call(win, e.type || e);                                                                           // 1825
      }                                                                                                             // 1826
    };                                                                                                              // 1827
    poll = function() {                                                                                             // 1828
      var e;                                                                                                        // 1829
      try {                                                                                                         // 1830
        root.doScroll("left");                                                                                      // 1831
      } catch (_error) {                                                                                            // 1832
        e = _error;                                                                                                 // 1833
        setTimeout(poll, 50);                                                                                       // 1834
        return;                                                                                                     // 1835
      }                                                                                                             // 1836
      return init("poll");                                                                                          // 1837
    };                                                                                                              // 1838
    if (doc.readyState !== "complete") {                                                                            // 1839
      if (doc.createEventObject && root.doScroll) {                                                                 // 1840
        try {                                                                                                       // 1841
          top = !win.frameElement;                                                                                  // 1842
        } catch (_error) {}                                                                                         // 1843
        if (top) {                                                                                                  // 1844
          poll();                                                                                                   // 1845
        }                                                                                                           // 1846
      }                                                                                                             // 1847
      doc[add](pre + "DOMContentLoaded", init, false);                                                              // 1848
      doc[add](pre + "readystatechange", init, false);                                                              // 1849
      return win[add](pre + "load", init, false);                                                                   // 1850
    }                                                                                                               // 1851
  };                                                                                                                // 1852
                                                                                                                    // 1853
  Dropzone._autoDiscoverFunction = function() {                                                                     // 1854
    if (Dropzone.autoDiscover) {                                                                                    // 1855
      return Dropzone.discover();                                                                                   // 1856
    }                                                                                                               // 1857
  };                                                                                                                // 1858
                                                                                                                    // 1859
  contentLoaded(window, Dropzone._autoDiscoverFunction);                                                            // 1860
                                                                                                                    // 1861
}).call(this);                                                                                                      // 1862
                                                                                                                    // 1863
});                                                                                                                 // 1864
                                                                                                                    // 1865
if (typeof exports == "object") {                                                                                   // 1866
  module.exports = require("dropzone");                                                                             // 1867
} else if (typeof define == "function" && define.amd) {                                                             // 1868
  define([], function(){ return require("dropzone"); });                                                            // 1869
} else {                                                                                                            // 1870
  this["Dropzone"] = require("dropzone");                                                                           // 1871
}                                                                                                                   // 1872
})()                                                                                                                // 1873
                                                                                                                    // 1874
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1884
}).call(this);                                                                                                         // 1885
                                                                                                                       // 1886
                                                                                                                       // 1887
                                                                                                                       // 1888
                                                                                                                       // 1889
                                                                                                                       // 1890
                                                                                                                       // 1891
(function () {                                                                                                         // 1892
                                                                                                                       // 1893
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/dbarrett:dropzonejs/lib/template.dbarrett:dropzonejs.js                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("dropzone");                                                                                   // 2
Template["dropzone"] = new Template("Template.dropzone", (function() {                                              // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    id: function() {                                                                                                // 6
      return Spacebars.mustache(view.lookup("id"));                                                                 // 7
    },                                                                                                              // 8
    "class": "dropzone"                                                                                             // 9
  });                                                                                                               // 10
}));                                                                                                                // 11
                                                                                                                    // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1913
}).call(this);                                                                                                         // 1914
                                                                                                                       // 1915
                                                                                                                       // 1916
                                                                                                                       // 1917
                                                                                                                       // 1918
                                                                                                                       // 1919
                                                                                                                       // 1920
(function () {                                                                                                         // 1921
                                                                                                                       // 1922
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/dbarrett:dropzonejs/lib/dbarrett:dropzonejs.js                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.dropzone.rendered = function() {                                                                           // 1
  var options = _.extend({}, Meteor.Dropzone.options, this.data);                                                   // 2
                                                                                                                    // 3
  if(this.data.id) {                                                                                                // 4
    this.dropzone = new Dropzone('#' + this.data.id + '.dropzone', options);                                        // 5
  }else{                                                                                                            // 6
    $(this.firstNode).dropzone(options);                                                                            // 7
  }                                                                                                                 // 8
                                                                                                                    // 9
};                                                                                                                  // 10
                                                                                                                    // 11
Meteor.Dropzone = {                                                                                                 // 12
    options: {                                                                                                      // 13
                                                                                                                    // 14
    }                                                                                                               // 15
};                                                                                                                  // 16
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       // 1946
}).call(this);                                                                                                         // 1947
                                                                                                                       // 1948
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['dbarrett:dropzonejs'] = {};

})();
