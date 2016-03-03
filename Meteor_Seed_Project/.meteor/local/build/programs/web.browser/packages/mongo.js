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
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var _ = Package.underscore._;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var DDP = Package['ddp-client'].DDP;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var DiffSequence = Package['diff-sequence'].DiffSequence;
var MongoID = Package['mongo-id'].MongoID;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var LocalCollectionDriver, Mongo;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mongo/local_collection_driver.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
LocalCollectionDriver = function () {                                                                                 // 1
  var self = this;                                                                                                    // 2
  self.noConnCollections = {};                                                                                        // 3
};                                                                                                                    // 4
                                                                                                                      // 5
var ensureCollection = function (name, collections) {                                                                 // 6
  if (!(name in collections))                                                                                         // 7
    collections[name] = new LocalCollection(name);                                                                    // 8
  return collections[name];                                                                                           // 9
};                                                                                                                    // 10
                                                                                                                      // 11
_.extend(LocalCollectionDriver.prototype, {                                                                           // 12
  open: function (name, conn) {                                                                                       // 13
    var self = this;                                                                                                  // 14
    if (!name)                                                                                                        // 15
      return new LocalCollection;                                                                                     // 16
    if (! conn) {                                                                                                     // 17
      return ensureCollection(name, self.noConnCollections);                                                          // 18
    }                                                                                                                 // 19
    if (! conn._mongo_livedata_collections)                                                                           // 20
      conn._mongo_livedata_collections = {};                                                                          // 21
    // XXX is there a way to keep track of a connection's collections without                                         // 22
    // dangling it off the connection object?                                                                         // 23
    return ensureCollection(name, conn._mongo_livedata_collections);                                                  // 24
  }                                                                                                                   // 25
});                                                                                                                   // 26
                                                                                                                      // 27
// singleton                                                                                                          // 28
LocalCollectionDriver = new LocalCollectionDriver;                                                                    // 29
                                                                                                                      // 30
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mongo/collection.js                                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// options.connection, if given, is a LivedataClient or LivedataServer                                                // 1
// XXX presently there is no way to destroy/clean up a Collection                                                     // 2
                                                                                                                      // 3
/**                                                                                                                   // 4
 * @summary Namespace for MongoDB-related items                                                                       // 5
 * @namespace                                                                                                         // 6
 */                                                                                                                   // 7
Mongo = {};                                                                                                           // 8
                                                                                                                      // 9
/**                                                                                                                   // 10
 * @summary Constructor for a Collection                                                                              // 11
 * @locus Anywhere                                                                                                    // 12
 * @instancename collection                                                                                           // 13
 * @class                                                                                                             // 14
 * @param {String} name The name of the collection.  If null, creates an unmanaged (unsynchronized) local collection.
 * @param {Object} [options]                                                                                          // 16
 * @param {Object} options.connection The server connection that will manage this collection. Uses the default connection if not specified.  Pass the return value of calling [`DDP.connect`](#ddp_connect) to specify a different server. Pass `null` to specify no connection. Unmanaged (`name` is null) collections cannot specify a connection.
 * @param {String} options.idGeneration The method of generating the `_id` fields of new documents in this collection.  Possible values:
                                                                                                                      // 19
 - **`'STRING'`**: random strings                                                                                     // 20
 - **`'MONGO'`**:  random [`Mongo.ObjectID`](#mongo_object_id) values                                                 // 21
                                                                                                                      // 22
The default id generation technique is `'STRING'`.                                                                    // 23
 * @param {Function} options.transform An optional transformation function. Documents will be passed through this function before being returned from `fetch` or `findOne`, and before being passed to callbacks of `observe`, `map`, `forEach`, `allow`, and `deny`. Transforms are *not* applied for the callbacks of `observeChanges` or to cursors returned from publish functions.
 */                                                                                                                   // 25
Mongo.Collection = function (name, options) {                                                                         // 26
  var self = this;                                                                                                    // 27
  if (! (self instanceof Mongo.Collection))                                                                           // 28
    throw new Error('use "new" to construct a Mongo.Collection');                                                     // 29
                                                                                                                      // 30
  if (!name && (name !== null)) {                                                                                     // 31
    Meteor._debug("Warning: creating anonymous collection. It will not be " +                                         // 32
                  "saved or synchronized over the network. (Pass null for " +                                         // 33
                  "the collection name to turn off this warning.)");                                                  // 34
    name = null;                                                                                                      // 35
  }                                                                                                                   // 36
                                                                                                                      // 37
  if (name !== null && typeof name !== "string") {                                                                    // 38
    throw new Error(                                                                                                  // 39
      "First argument to new Mongo.Collection must be a string or null");                                             // 40
  }                                                                                                                   // 41
                                                                                                                      // 42
  if (options && options.methods) {                                                                                   // 43
    // Backwards compatibility hack with original signature (which passed                                             // 44
    // "connection" directly instead of in options. (Connections must have a "methods"                                // 45
    // method.)                                                                                                       // 46
    // XXX remove before 1.0                                                                                          // 47
    options = {connection: options};                                                                                  // 48
  }                                                                                                                   // 49
  // Backwards compatibility: "connection" used to be called "manager".                                               // 50
  if (options && options.manager && !options.connection) {                                                            // 51
    options.connection = options.manager;                                                                             // 52
  }                                                                                                                   // 53
  options = _.extend({                                                                                                // 54
    connection: undefined,                                                                                            // 55
    idGeneration: 'STRING',                                                                                           // 56
    transform: null,                                                                                                  // 57
    _driver: undefined,                                                                                               // 58
    _preventAutopublish: false                                                                                        // 59
  }, options);                                                                                                        // 60
                                                                                                                      // 61
  switch (options.idGeneration) {                                                                                     // 62
  case 'MONGO':                                                                                                       // 63
    self._makeNewID = function () {                                                                                   // 64
      var src = name                                                                                                  // 65
            ? DDP.randomStream('/collection/' + name)                                                                 // 66
            : Random.insecure;                                                                                        // 67
      return new Mongo.ObjectID(src.hexString(24));                                                                   // 68
    };                                                                                                                // 69
    break;                                                                                                            // 70
  case 'STRING':                                                                                                      // 71
  default:                                                                                                            // 72
    self._makeNewID = function () {                                                                                   // 73
      var src = name                                                                                                  // 74
            ? DDP.randomStream('/collection/' + name)                                                                 // 75
            : Random.insecure;                                                                                        // 76
      return src.id();                                                                                                // 77
    };                                                                                                                // 78
    break;                                                                                                            // 79
  }                                                                                                                   // 80
                                                                                                                      // 81
  self._transform = LocalCollection.wrapTransform(options.transform);                                                 // 82
                                                                                                                      // 83
  if (! name || options.connection === null)                                                                          // 84
    // note: nameless collections never have a connection                                                             // 85
    self._connection = null;                                                                                          // 86
  else if (options.connection)                                                                                        // 87
    self._connection = options.connection;                                                                            // 88
  else if (Meteor.isClient)                                                                                           // 89
    self._connection = Meteor.connection;                                                                             // 90
  else                                                                                                                // 91
    self._connection = Meteor.server;                                                                                 // 92
                                                                                                                      // 93
  if (!options._driver) {                                                                                             // 94
    // XXX This check assumes that webapp is loaded so that Meteor.server !==                                         // 95
    // null. We should fully support the case of "want to use a Mongo-backed                                          // 96
    // collection from Node code without webapp", but we don't yet.                                                   // 97
    // #MeteorServerNull                                                                                              // 98
    if (name && self._connection === Meteor.server &&                                                                 // 99
        typeof MongoInternals !== "undefined" &&                                                                      // 100
        MongoInternals.defaultRemoteCollectionDriver) {                                                               // 101
      options._driver = MongoInternals.defaultRemoteCollectionDriver();                                               // 102
    } else {                                                                                                          // 103
      options._driver = LocalCollectionDriver;                                                                        // 104
    }                                                                                                                 // 105
  }                                                                                                                   // 106
                                                                                                                      // 107
  self._collection = options._driver.open(name, self._connection);                                                    // 108
  self._name = name;                                                                                                  // 109
  self._driver = options._driver;                                                                                     // 110
                                                                                                                      // 111
  if (self._connection && self._connection.registerStore) {                                                           // 112
    // OK, we're going to be a slave, replicating some remote                                                         // 113
    // database, except possibly with some temporary divergence while                                                 // 114
    // we have unacknowledged RPC's.                                                                                  // 115
    var ok = self._connection.registerStore(name, {                                                                   // 116
      // Called at the beginning of a batch of updates. batchSize is the number                                       // 117
      // of update calls to expect.                                                                                   // 118
      //                                                                                                              // 119
      // XXX This interface is pretty janky. reset probably ought to go back to                                       // 120
      // being its own function, and callers shouldn't have to calculate                                              // 121
      // batchSize. The optimization of not calling pause/remove should be                                            // 122
      // delayed until later: the first call to update() should buffer its                                            // 123
      // message, and then we can either directly apply it at endUpdate time if                                       // 124
      // it was the only update, or do pauseObservers/apply/apply at the next                                         // 125
      // update() if there's another one.                                                                             // 126
      beginUpdate: function (batchSize, reset) {                                                                      // 127
        // pause observers so users don't see flicker when updating several                                           // 128
        // objects at once (including the post-reconnect reset-and-reapply                                            // 129
        // stage), and so that a re-sorting of a query can take advantage of the                                      // 130
        // full _diffQuery moved calculation instead of applying change one at a                                      // 131
        // time.                                                                                                      // 132
        if (batchSize > 1 || reset)                                                                                   // 133
          self._collection.pauseObservers();                                                                          // 134
                                                                                                                      // 135
        if (reset)                                                                                                    // 136
          self._collection.remove({});                                                                                // 137
      },                                                                                                              // 138
                                                                                                                      // 139
      // Apply an update.                                                                                             // 140
      // XXX better specify this interface (not in terms of a wire message)?                                          // 141
      update: function (msg) {                                                                                        // 142
        var mongoId = MongoID.idParse(msg.id);                                                                        // 143
        var doc = self._collection.findOne(mongoId);                                                                  // 144
                                                                                                                      // 145
        // Is this a "replace the whole doc" message coming from the quiescence                                       // 146
        // of method writes to an object? (Note that 'undefined' is a valid                                           // 147
        // value meaning "remove it".)                                                                                // 148
        if (msg.msg === 'replace') {                                                                                  // 149
          var replace = msg.replace;                                                                                  // 150
          if (!replace) {                                                                                             // 151
            if (doc)                                                                                                  // 152
              self._collection.remove(mongoId);                                                                       // 153
          } else if (!doc) {                                                                                          // 154
            self._collection.insert(replace);                                                                         // 155
          } else {                                                                                                    // 156
            // XXX check that replace has no $ ops                                                                    // 157
            self._collection.update(mongoId, replace);                                                                // 158
          }                                                                                                           // 159
          return;                                                                                                     // 160
        } else if (msg.msg === 'added') {                                                                             // 161
          if (doc) {                                                                                                  // 162
            throw new Error("Expected not to find a document already present for an add");                            // 163
          }                                                                                                           // 164
          self._collection.insert(_.extend({_id: mongoId}, msg.fields));                                              // 165
        } else if (msg.msg === 'removed') {                                                                           // 166
          if (!doc)                                                                                                   // 167
            throw new Error("Expected to find a document already present for removed");                               // 168
          self._collection.remove(mongoId);                                                                           // 169
        } else if (msg.msg === 'changed') {                                                                           // 170
          if (!doc)                                                                                                   // 171
            throw new Error("Expected to find a document to change");                                                 // 172
          if (!_.isEmpty(msg.fields)) {                                                                               // 173
            var modifier = {};                                                                                        // 174
            _.each(msg.fields, function (value, key) {                                                                // 175
              if (value === undefined) {                                                                              // 176
                if (!modifier.$unset)                                                                                 // 177
                  modifier.$unset = {};                                                                               // 178
                modifier.$unset[key] = 1;                                                                             // 179
              } else {                                                                                                // 180
                if (!modifier.$set)                                                                                   // 181
                  modifier.$set = {};                                                                                 // 182
                modifier.$set[key] = value;                                                                           // 183
              }                                                                                                       // 184
            });                                                                                                       // 185
            self._collection.update(mongoId, modifier);                                                               // 186
          }                                                                                                           // 187
        } else {                                                                                                      // 188
          throw new Error("I don't know how to deal with this message");                                              // 189
        }                                                                                                             // 190
                                                                                                                      // 191
      },                                                                                                              // 192
                                                                                                                      // 193
      // Called at the end of a batch of updates.                                                                     // 194
      endUpdate: function () {                                                                                        // 195
        self._collection.resumeObservers();                                                                           // 196
      },                                                                                                              // 197
                                                                                                                      // 198
      // Called around method stub invocations to capture the original versions                                       // 199
      // of modified documents.                                                                                       // 200
      saveOriginals: function () {                                                                                    // 201
        self._collection.saveOriginals();                                                                             // 202
      },                                                                                                              // 203
      retrieveOriginals: function () {                                                                                // 204
        return self._collection.retrieveOriginals();                                                                  // 205
      },                                                                                                              // 206
                                                                                                                      // 207
      // Used to preserve current versions of documents across a store reset.                                         // 208
      getDoc: function(id) {                                                                                          // 209
        return self.findOne(id);                                                                                      // 210
      },                                                                                                              // 211
    });                                                                                                               // 212
                                                                                                                      // 213
    if (!ok)                                                                                                          // 214
      throw new Error("There is already a collection named '" + name + "'");                                          // 215
  }                                                                                                                   // 216
                                                                                                                      // 217
  self._defineMutationMethods();                                                                                      // 218
                                                                                                                      // 219
  // autopublish                                                                                                      // 220
  if (Package.autopublish && !options._preventAutopublish && self._connection                                         // 221
      && self._connection.publish) {                                                                                  // 222
    self._connection.publish(null, function () {                                                                      // 223
      return self.find();                                                                                             // 224
    }, {is_auto: true});                                                                                              // 225
  }                                                                                                                   // 226
};                                                                                                                    // 227
                                                                                                                      // 228
///                                                                                                                   // 229
/// Main collection API                                                                                               // 230
///                                                                                                                   // 231
                                                                                                                      // 232
                                                                                                                      // 233
_.extend(Mongo.Collection.prototype, {                                                                                // 234
                                                                                                                      // 235
  _getFindSelector: function (args) {                                                                                 // 236
    if (args.length == 0)                                                                                             // 237
      return {};                                                                                                      // 238
    else                                                                                                              // 239
      return args[0];                                                                                                 // 240
  },                                                                                                                  // 241
                                                                                                                      // 242
  _getFindOptions: function (args) {                                                                                  // 243
    var self = this;                                                                                                  // 244
    if (args.length < 2) {                                                                                            // 245
      return { transform: self._transform };                                                                          // 246
    } else {                                                                                                          // 247
      check(args[1], Match.Optional(Match.ObjectIncluding({                                                           // 248
        fields: Match.Optional(Match.OneOf(Object, undefined)),                                                       // 249
        sort: Match.Optional(Match.OneOf(Object, Array, undefined)),                                                  // 250
        limit: Match.Optional(Match.OneOf(Number, undefined)),                                                        // 251
        skip: Match.Optional(Match.OneOf(Number, undefined))                                                          // 252
     })));                                                                                                            // 253
                                                                                                                      // 254
      return _.extend({                                                                                               // 255
        transform: self._transform                                                                                    // 256
      }, args[1]);                                                                                                    // 257
    }                                                                                                                 // 258
  },                                                                                                                  // 259
                                                                                                                      // 260
  /**                                                                                                                 // 261
   * @summary Find the documents in a collection that match the selector.                                             // 262
   * @locus Anywhere                                                                                                  // 263
   * @method find                                                                                                     // 264
   * @memberOf Mongo.Collection                                                                                       // 265
   * @instance                                                                                                        // 266
   * @param {MongoSelector} [selector] A query describing the documents to find                                       // 267
   * @param {Object} [options]                                                                                        // 268
   * @param {MongoSortSpecifier} options.sort Sort order (default: natural order)                                     // 269
   * @param {Number} options.skip Number of results to skip at the beginning                                          // 270
   * @param {Number} options.limit Maximum number of results to return                                                // 271
   * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.                           // 272
   * @param {Boolean} options.reactive (Client only) Default `true`; pass `false` to disable reactivity               // 273
   * @param {Function} options.transform Overrides `transform` on the  [`Collection`](#collections) for this cursor.  Pass `null` to disable transformation.
   * @returns {Mongo.Cursor}                                                                                          // 275
   */                                                                                                                 // 276
  find: function (/* selector, options */) {                                                                          // 277
    // Collection.find() (return all docs) behaves differently                                                        // 278
    // from Collection.find(undefined) (return 0 docs).  so be                                                        // 279
    // careful about the length of arguments.                                                                         // 280
    var self = this;                                                                                                  // 281
    var argArray = _.toArray(arguments);                                                                              // 282
    return self._collection.find(self._getFindSelector(argArray),                                                     // 283
                                 self._getFindOptions(argArray));                                                     // 284
  },                                                                                                                  // 285
                                                                                                                      // 286
  /**                                                                                                                 // 287
   * @summary Finds the first document that matches the selector, as ordered by sort and skip options.                // 288
   * @locus Anywhere                                                                                                  // 289
   * @method findOne                                                                                                  // 290
   * @memberOf Mongo.Collection                                                                                       // 291
   * @instance                                                                                                        // 292
   * @param {MongoSelector} [selector] A query describing the documents to find                                       // 293
   * @param {Object} [options]                                                                                        // 294
   * @param {MongoSortSpecifier} options.sort Sort order (default: natural order)                                     // 295
   * @param {Number} options.skip Number of results to skip at the beginning                                          // 296
   * @param {MongoFieldSpecifier} options.fields Dictionary of fields to return or exclude.                           // 297
   * @param {Boolean} options.reactive (Client only) Default true; pass false to disable reactivity                   // 298
   * @param {Function} options.transform Overrides `transform` on the [`Collection`](#collections) for this cursor.  Pass `null` to disable transformation.
   * @returns {Object}                                                                                                // 300
   */                                                                                                                 // 301
  findOne: function (/* selector, options */) {                                                                       // 302
    var self = this;                                                                                                  // 303
    var argArray = _.toArray(arguments);                                                                              // 304
    return self._collection.findOne(self._getFindSelector(argArray),                                                  // 305
                                    self._getFindOptions(argArray));                                                  // 306
  }                                                                                                                   // 307
                                                                                                                      // 308
});                                                                                                                   // 309
                                                                                                                      // 310
Mongo.Collection._publishCursor = function (cursor, sub, collection) {                                                // 311
  var observeHandle = cursor.observeChanges({                                                                         // 312
    added: function (id, fields) {                                                                                    // 313
      sub.added(collection, id, fields);                                                                              // 314
    },                                                                                                                // 315
    changed: function (id, fields) {                                                                                  // 316
      sub.changed(collection, id, fields);                                                                            // 317
    },                                                                                                                // 318
    removed: function (id) {                                                                                          // 319
      sub.removed(collection, id);                                                                                    // 320
    }                                                                                                                 // 321
  });                                                                                                                 // 322
                                                                                                                      // 323
  // We don't call sub.ready() here: it gets called in livedata_server, after                                         // 324
  // possibly calling _publishCursor on multiple returned cursors.                                                    // 325
                                                                                                                      // 326
  // register stop callback (expects lambda w/ no args).                                                              // 327
  sub.onStop(function () {observeHandle.stop();});                                                                    // 328
};                                                                                                                    // 329
                                                                                                                      // 330
// protect against dangerous selectors.  falsey and {_id: falsey} are both                                            // 331
// likely programmer error, and not what you want, particularly for destructive                                       // 332
// operations.  JS regexps don't serialize over DDP but can be trivially                                              // 333
// replaced by $regex.                                                                                                // 334
Mongo.Collection._rewriteSelector = function (selector) {                                                             // 335
  // shorthand -- scalars match _id                                                                                   // 336
  if (LocalCollection._selectorIsId(selector))                                                                        // 337
    selector = {_id: selector};                                                                                       // 338
                                                                                                                      // 339
  if (_.isArray(selector)) {                                                                                          // 340
    // This is consistent with the Mongo console itself; if we don't do this                                          // 341
    // check passing an empty array ends up selecting all items                                                       // 342
    throw new Error("Mongo selector can't be an array.");                                                             // 343
  }                                                                                                                   // 344
                                                                                                                      // 345
  if (!selector || (('_id' in selector) && !selector._id))                                                            // 346
    // can't match anything                                                                                           // 347
    return {_id: Random.id()};                                                                                        // 348
                                                                                                                      // 349
  var ret = {};                                                                                                       // 350
  _.each(selector, function (value, key) {                                                                            // 351
    // Mongo supports both {field: /foo/} and {field: {$regex: /foo/}}                                                // 352
    if (value instanceof RegExp) {                                                                                    // 353
      ret[key] = convertRegexpToMongoSelector(value);                                                                 // 354
    } else if (value && value.$regex instanceof RegExp) {                                                             // 355
      ret[key] = convertRegexpToMongoSelector(value.$regex);                                                          // 356
      // if value is {$regex: /foo/, $options: ...} then $options                                                     // 357
      // override the ones set on $regex.                                                                             // 358
      if (value.$options !== undefined)                                                                               // 359
        ret[key].$options = value.$options;                                                                           // 360
    }                                                                                                                 // 361
    else if (_.contains(['$or','$and','$nor'], key)) {                                                                // 362
      // Translate lower levels of $and/$or/$nor                                                                      // 363
      ret[key] = _.map(value, function (v) {                                                                          // 364
        return Mongo.Collection._rewriteSelector(v);                                                                  // 365
      });                                                                                                             // 366
    } else {                                                                                                          // 367
      ret[key] = value;                                                                                               // 368
    }                                                                                                                 // 369
  });                                                                                                                 // 370
  return ret;                                                                                                         // 371
};                                                                                                                    // 372
                                                                                                                      // 373
// convert a JS RegExp object to a Mongo {$regex: ..., $options: ...}                                                 // 374
// selector                                                                                                           // 375
var convertRegexpToMongoSelector = function (regexp) {                                                                // 376
  check(regexp, RegExp); // safety belt                                                                               // 377
                                                                                                                      // 378
  var selector = {$regex: regexp.source};                                                                             // 379
  var regexOptions = '';                                                                                              // 380
  // JS RegExp objects support 'i', 'm', and 'g'. Mongo regex $options                                                // 381
  // support 'i', 'm', 'x', and 's'. So we support 'i' and 'm' here.                                                  // 382
  if (regexp.ignoreCase)                                                                                              // 383
    regexOptions += 'i';                                                                                              // 384
  if (regexp.multiline)                                                                                               // 385
    regexOptions += 'm';                                                                                              // 386
  if (regexOptions)                                                                                                   // 387
    selector.$options = regexOptions;                                                                                 // 388
                                                                                                                      // 389
  return selector;                                                                                                    // 390
};                                                                                                                    // 391
                                                                                                                      // 392
var throwIfSelectorIsNotId = function (selector, methodName) {                                                        // 393
  if (!LocalCollection._selectorIsIdPerhapsAsObject(selector)) {                                                      // 394
    throw new Meteor.Error(                                                                                           // 395
      403, "Not permitted. Untrusted code may only " + methodName +                                                   // 396
        " documents by ID.");                                                                                         // 397
  }                                                                                                                   // 398
};                                                                                                                    // 399
                                                                                                                      // 400
// 'insert' immediately returns the inserted document's new _id.                                                      // 401
// The others return values immediately if you are in a stub, an in-memory                                            // 402
// unmanaged collection, or a mongo-backed collection and you don't pass a                                            // 403
// callback. 'update' and 'remove' return the number of affected                                                      // 404
// documents. 'upsert' returns an object with keys 'numberAffected' and, if an                                        // 405
// insert happened, 'insertedId'.                                                                                     // 406
//                                                                                                                    // 407
// Otherwise, the semantics are exactly like other methods: they take                                                 // 408
// a callback as an optional last argument; if no callback is                                                         // 409
// provided, they block until the operation is complete, and throw an                                                 // 410
// exception if it fails; if a callback is provided, then they don't                                                  // 411
// necessarily block, and they call the callback when they finish with error and                                      // 412
// result arguments.  (The insert method provides the document ID as its result;                                      // 413
// update and remove provide the number of affected docs as the result; upsert                                        // 414
// provides an object with numberAffected and maybe insertedId.)                                                      // 415
//                                                                                                                    // 416
// On the client, blocking is impossible, so if a callback                                                            // 417
// isn't provided, they just return immediately and any error                                                         // 418
// information is lost.                                                                                               // 419
//                                                                                                                    // 420
// There's one more tweak. On the client, if you don't provide a                                                      // 421
// callback, then if there is an error, a message will be logged with                                                 // 422
// Meteor._debug.                                                                                                     // 423
//                                                                                                                    // 424
// The intent (though this is actually determined by the underlying                                                   // 425
// drivers) is that the operations should be done synchronously, not                                                  // 426
// generating their result until the database has acknowledged                                                        // 427
// them. In the future maybe we should provide a flag to turn this                                                    // 428
// off.                                                                                                               // 429
                                                                                                                      // 430
/**                                                                                                                   // 431
 * @summary Insert a document in the collection.  Returns its unique _id.                                             // 432
 * @locus Anywhere                                                                                                    // 433
 * @method  insert                                                                                                    // 434
 * @memberOf Mongo.Collection                                                                                         // 435
 * @instance                                                                                                          // 436
 * @param {Object} doc The document to insert. May not yet have an _id attribute, in which case Meteor will generate one for you.
 * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the _id as the second.
 */                                                                                                                   // 439
                                                                                                                      // 440
/**                                                                                                                   // 441
 * @summary Modify one or more documents in the collection. Returns the number of affected documents.                 // 442
 * @locus Anywhere                                                                                                    // 443
 * @method update                                                                                                     // 444
 * @memberOf Mongo.Collection                                                                                         // 445
 * @instance                                                                                                          // 446
 * @param {MongoSelector} selector Specifies which documents to modify                                                // 447
 * @param {MongoModifier} modifier Specifies how to modify the documents                                              // 448
 * @param {Object} [options]                                                                                          // 449
 * @param {Boolean} options.multi True to modify all matching documents; false to only modify one of the matching documents (the default).
 * @param {Boolean} options.upsert True to insert a document if no matching documents are found.                      // 451
 * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
 */                                                                                                                   // 453
                                                                                                                      // 454
/**                                                                                                                   // 455
 * @summary Remove documents from the collection                                                                      // 456
 * @locus Anywhere                                                                                                    // 457
 * @method remove                                                                                                     // 458
 * @memberOf Mongo.Collection                                                                                         // 459
 * @instance                                                                                                          // 460
 * @param {MongoSelector} selector Specifies which documents to remove                                                // 461
 * @param {Function} [callback] Optional.  If present, called with an error object as its argument.                   // 462
 */                                                                                                                   // 463
                                                                                                                      // 464
_.each(["insert", "update", "remove"], function (name) {                                                              // 465
  Mongo.Collection.prototype[name] = function (/* arguments */) {                                                     // 466
    var self = this;                                                                                                  // 467
    var args = _.toArray(arguments);                                                                                  // 468
    var callback;                                                                                                     // 469
    var insertId;                                                                                                     // 470
    var ret;                                                                                                          // 471
                                                                                                                      // 472
    // Pull off any callback (or perhaps a 'callback' variable that was passed                                        // 473
    // in undefined, like how 'upsert' does it).                                                                      // 474
    if (args.length &&                                                                                                // 475
        (args[args.length - 1] === undefined ||                                                                       // 476
         args[args.length - 1] instanceof Function)) {                                                                // 477
      callback = args.pop();                                                                                          // 478
    }                                                                                                                 // 479
                                                                                                                      // 480
    if (name === "insert") {                                                                                          // 481
      if (!args.length)                                                                                               // 482
        throw new Error("insert requires an argument");                                                               // 483
      // shallow-copy the document and generate an ID                                                                 // 484
      args[0] = _.extend({}, args[0]);                                                                                // 485
      if ('_id' in args[0]) {                                                                                         // 486
        insertId = args[0]._id;                                                                                       // 487
        if (!insertId || !(typeof insertId === 'string'                                                               // 488
              || insertId instanceof Mongo.ObjectID))                                                                 // 489
          throw new Error("Meteor requires document _id fields to be non-empty strings or ObjectIDs");                // 490
      } else {                                                                                                        // 491
        var generateId = true;                                                                                        // 492
        // Don't generate the id if we're the client and the 'outermost' call                                         // 493
        // This optimization saves us passing both the randomSeed and the id                                          // 494
        // Passing both is redundant.                                                                                 // 495
        if (self._connection && self._connection !== Meteor.server) {                                                 // 496
          var enclosing = DDP._CurrentInvocation.get();                                                               // 497
          if (!enclosing) {                                                                                           // 498
            generateId = false;                                                                                       // 499
          }                                                                                                           // 500
        }                                                                                                             // 501
        if (generateId) {                                                                                             // 502
          insertId = args[0]._id = self._makeNewID();                                                                 // 503
        }                                                                                                             // 504
      }                                                                                                               // 505
    } else {                                                                                                          // 506
      args[0] = Mongo.Collection._rewriteSelector(args[0]);                                                           // 507
                                                                                                                      // 508
      if (name === "update") {                                                                                        // 509
        // Mutate args but copy the original options object. We need to add                                           // 510
        // insertedId to options, but don't want to mutate the caller's options                                       // 511
        // object. We need to mutate `args` because we pass `args` into the                                           // 512
        // driver below.                                                                                              // 513
        var options = args[2] = _.clone(args[2]) || {};                                                               // 514
        if (options && typeof options !== "function" && options.upsert) {                                             // 515
          // set `insertedId` if absent.  `insertedId` is a Meteor extension.                                         // 516
          if (options.insertedId) {                                                                                   // 517
            if (!(typeof options.insertedId === 'string'                                                              // 518
                  || options.insertedId instanceof Mongo.ObjectID))                                                   // 519
              throw new Error("insertedId must be string or ObjectID");                                               // 520
          } else if (! args[0]._id) {                                                                                 // 521
            options.insertedId = self._makeNewID();                                                                   // 522
          }                                                                                                           // 523
        }                                                                                                             // 524
      }                                                                                                               // 525
    }                                                                                                                 // 526
                                                                                                                      // 527
    // On inserts, always return the id that we generated; on all other                                               // 528
    // operations, just return the result from the collection.                                                        // 529
    var chooseReturnValueFromCollectionResult = function (result) {                                                   // 530
      if (name === "insert") {                                                                                        // 531
        if (!insertId && result) {                                                                                    // 532
          insertId = result;                                                                                          // 533
        }                                                                                                             // 534
        return insertId;                                                                                              // 535
      } else {                                                                                                        // 536
        return result;                                                                                                // 537
      }                                                                                                               // 538
    };                                                                                                                // 539
                                                                                                                      // 540
    var wrappedCallback;                                                                                              // 541
    if (callback) {                                                                                                   // 542
      wrappedCallback = function (error, result) {                                                                    // 543
        callback(error, ! error && chooseReturnValueFromCollectionResult(result));                                    // 544
      };                                                                                                              // 545
    }                                                                                                                 // 546
                                                                                                                      // 547
    // XXX see #MeteorServerNull                                                                                      // 548
    if (self._connection && self._connection !== Meteor.server) {                                                     // 549
      // just remote to another endpoint, propagate return value or                                                   // 550
      // exception.                                                                                                   // 551
                                                                                                                      // 552
      var enclosing = DDP._CurrentInvocation.get();                                                                   // 553
      var alreadyInSimulation = enclosing && enclosing.isSimulation;                                                  // 554
                                                                                                                      // 555
      if (Meteor.isClient && !wrappedCallback && ! alreadyInSimulation) {                                             // 556
        // Client can't block, so it can't report errors by exception,                                                // 557
        // only by callback. If they forget the callback, give them a                                                 // 558
        // default one that logs the error, so they aren't totally                                                    // 559
        // baffled if their writes don't work because their database is                                               // 560
        // down.                                                                                                      // 561
        // Don't give a default callback in simulation, because inside stubs we                                       // 562
        // want to return the results from the local collection immediately and                                       // 563
        // not force a callback.                                                                                      // 564
        wrappedCallback = function (err) {                                                                            // 565
          if (err)                                                                                                    // 566
            Meteor._debug(name + " failed: " + (err.reason || err.stack));                                            // 567
        };                                                                                                            // 568
      }                                                                                                               // 569
                                                                                                                      // 570
      if (!alreadyInSimulation && name !== "insert") {                                                                // 571
        // If we're about to actually send an RPC, we should throw an error if                                        // 572
        // this is a non-ID selector, because the mutation methods only allow                                         // 573
        // single-ID selectors. (If we don't throw here, we'll see flicker.)                                          // 574
        throwIfSelectorIsNotId(args[0], name);                                                                        // 575
      }                                                                                                               // 576
                                                                                                                      // 577
      ret = chooseReturnValueFromCollectionResult(                                                                    // 578
        self._connection.apply(self._prefix + name, args, {returnStubValue: true}, wrappedCallback)                   // 579
      );                                                                                                              // 580
                                                                                                                      // 581
    } else {                                                                                                          // 582
      // it's my collection.  descend into the collection object                                                      // 583
      // and propagate any exception.                                                                                 // 584
      args.push(wrappedCallback);                                                                                     // 585
      try {                                                                                                           // 586
        // If the user provided a callback and the collection implements this                                         // 587
        // operation asynchronously, then queryRet will be undefined, and the                                         // 588
        // result will be returned through the callback instead.                                                      // 589
        var queryRet = self._collection[name].apply(self._collection, args);                                          // 590
        ret = chooseReturnValueFromCollectionResult(queryRet);                                                        // 591
      } catch (e) {                                                                                                   // 592
        if (callback) {                                                                                               // 593
          callback(e);                                                                                                // 594
          return null;                                                                                                // 595
        }                                                                                                             // 596
        throw e;                                                                                                      // 597
      }                                                                                                               // 598
    }                                                                                                                 // 599
                                                                                                                      // 600
    // both sync and async, unless we threw an exception, return ret                                                  // 601
    // (new document ID for insert, num affected for update/remove, object with                                       // 602
    // numberAffected and maybe insertedId for upsert).                                                               // 603
    return ret;                                                                                                       // 604
  };                                                                                                                  // 605
});                                                                                                                   // 606
                                                                                                                      // 607
/**                                                                                                                   // 608
 * @summary Modify one or more documents in the collection, or insert one if no matching documents were found. Returns an object with keys `numberAffected` (the number of documents modified)  and `insertedId` (the unique _id of the document that was inserted, if any).
 * @locus Anywhere                                                                                                    // 610
 * @param {MongoSelector} selector Specifies which documents to modify                                                // 611
 * @param {MongoModifier} modifier Specifies how to modify the documents                                              // 612
 * @param {Object} [options]                                                                                          // 613
 * @param {Boolean} options.multi True to modify all matching documents; false to only modify one of the matching documents (the default).
 * @param {Function} [callback] Optional.  If present, called with an error object as the first argument and, if no error, the number of affected documents as the second.
 */                                                                                                                   // 616
Mongo.Collection.prototype.upsert = function (selector, modifier,                                                     // 617
                                               options, callback) {                                                   // 618
  var self = this;                                                                                                    // 619
  if (! callback && typeof options === "function") {                                                                  // 620
    callback = options;                                                                                               // 621
    options = {};                                                                                                     // 622
  }                                                                                                                   // 623
  return self.update(selector, modifier,                                                                              // 624
              _.extend({}, options, { _returnObject: true, upsert: true }),                                           // 625
              callback);                                                                                              // 626
};                                                                                                                    // 627
                                                                                                                      // 628
// We'll actually design an index API later. For now, we just pass through to                                         // 629
// Mongo's, but make it synchronous.                                                                                  // 630
Mongo.Collection.prototype._ensureIndex = function (index, options) {                                                 // 631
  var self = this;                                                                                                    // 632
  if (!self._collection._ensureIndex)                                                                                 // 633
    throw new Error("Can only call _ensureIndex on server collections");                                              // 634
  self._collection._ensureIndex(index, options);                                                                      // 635
};                                                                                                                    // 636
Mongo.Collection.prototype._dropIndex = function (index) {                                                            // 637
  var self = this;                                                                                                    // 638
  if (!self._collection._dropIndex)                                                                                   // 639
    throw new Error("Can only call _dropIndex on server collections");                                                // 640
  self._collection._dropIndex(index);                                                                                 // 641
};                                                                                                                    // 642
Mongo.Collection.prototype._dropCollection = function () {                                                            // 643
  var self = this;                                                                                                    // 644
  if (!self._collection.dropCollection)                                                                               // 645
    throw new Error("Can only call _dropCollection on server collections");                                           // 646
  self._collection.dropCollection();                                                                                  // 647
};                                                                                                                    // 648
Mongo.Collection.prototype._createCappedCollection = function (byteSize, maxDocuments) {                              // 649
  var self = this;                                                                                                    // 650
  if (!self._collection._createCappedCollection)                                                                      // 651
    throw new Error("Can only call _createCappedCollection on server collections");                                   // 652
  self._collection._createCappedCollection(byteSize, maxDocuments);                                                   // 653
};                                                                                                                    // 654
                                                                                                                      // 655
/**                                                                                                                   // 656
 * @summary Returns the [`Collection`](http://mongodb.github.io/node-mongodb-native/1.4/api-generated/collection.html) object corresponding to this collection from the [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
 * @locus Server                                                                                                      // 658
 */                                                                                                                   // 659
Mongo.Collection.prototype.rawCollection = function () {                                                              // 660
  var self = this;                                                                                                    // 661
  if (! self._collection.rawCollection) {                                                                             // 662
    throw new Error("Can only call rawCollection on server collections");                                             // 663
  }                                                                                                                   // 664
  return self._collection.rawCollection();                                                                            // 665
};                                                                                                                    // 666
                                                                                                                      // 667
/**                                                                                                                   // 668
 * @summary Returns the [`Db`](http://mongodb.github.io/node-mongodb-native/1.4/api-generated/db.html) object corresponding to this collection's database connection from the [npm `mongodb` driver module](https://www.npmjs.com/package/mongodb) which is wrapped by `Mongo.Collection`.
 * @locus Server                                                                                                      // 670
 */                                                                                                                   // 671
Mongo.Collection.prototype.rawDatabase = function () {                                                                // 672
  var self = this;                                                                                                    // 673
  if (! (self._driver.mongo && self._driver.mongo.db)) {                                                              // 674
    throw new Error("Can only call rawDatabase on server collections");                                               // 675
  }                                                                                                                   // 676
  return self._driver.mongo.db;                                                                                       // 677
};                                                                                                                    // 678
                                                                                                                      // 679
                                                                                                                      // 680
/**                                                                                                                   // 681
 * @summary Create a Mongo-style `ObjectID`.  If you don't specify a `hexString`, the `ObjectID` will generated randomly (not using MongoDB's ID construction rules).
 * @locus Anywhere                                                                                                    // 683
 * @class                                                                                                             // 684
 * @param {String} [hexString] Optional.  The 24-character hexadecimal contents of the ObjectID to create             // 685
 */                                                                                                                   // 686
Mongo.ObjectID = MongoID.ObjectID;                                                                                    // 687
                                                                                                                      // 688
/**                                                                                                                   // 689
 * @summary To create a cursor, use find. To access the documents in a cursor, use forEach, map, or fetch.            // 690
 * @class                                                                                                             // 691
 * @instanceName cursor                                                                                               // 692
 */                                                                                                                   // 693
Mongo.Cursor = LocalCollection.Cursor;                                                                                // 694
                                                                                                                      // 695
/**                                                                                                                   // 696
 * @deprecated in 0.9.1                                                                                               // 697
 */                                                                                                                   // 698
Mongo.Collection.Cursor = Mongo.Cursor;                                                                               // 699
                                                                                                                      // 700
/**                                                                                                                   // 701
 * @deprecated in 0.9.1                                                                                               // 702
 */                                                                                                                   // 703
Mongo.Collection.ObjectID = Mongo.ObjectID;                                                                           // 704
                                                                                                                      // 705
///                                                                                                                   // 706
/// Remote methods and access control.                                                                                // 707
///                                                                                                                   // 708
                                                                                                                      // 709
// Restrict default mutators on collection. allow() and deny() take the                                               // 710
// same options:                                                                                                      // 711
//                                                                                                                    // 712
// options.insert {Function(userId, doc)}                                                                             // 713
//   return true to allow/deny adding this document                                                                   // 714
//                                                                                                                    // 715
// options.update {Function(userId, docs, fields, modifier)}                                                          // 716
//   return true to allow/deny updating these documents.                                                              // 717
//   `fields` is passed as an array of fields that are to be modified                                                 // 718
//                                                                                                                    // 719
// options.remove {Function(userId, docs)}                                                                            // 720
//   return true to allow/deny removing these documents                                                               // 721
//                                                                                                                    // 722
// options.fetch {Array}                                                                                              // 723
//   Fields to fetch for these validators. If any call to allow or deny                                               // 724
//   does not have this option then all fields are loaded.                                                            // 725
//                                                                                                                    // 726
// allow and deny can be called multiple times. The validators are                                                    // 727
// evaluated as follows:                                                                                              // 728
// - If neither deny() nor allow() has been called on the collection,                                                 // 729
//   then the request is allowed if and only if the "insecure" smart                                                  // 730
//   package is in use.                                                                                               // 731
// - Otherwise, if any deny() function returns true, the request is denied.                                           // 732
// - Otherwise, if any allow() function returns true, the request is allowed.                                         // 733
// - Otherwise, the request is denied.                                                                                // 734
//                                                                                                                    // 735
// Meteor may call your deny() and allow() functions in any order, and may not                                        // 736
// call all of them if it is able to make a decision without calling them all                                         // 737
// (so don't include side effects).                                                                                   // 738
                                                                                                                      // 739
(function () {                                                                                                        // 740
  var addValidator = function(allowOrDeny, options) {                                                                 // 741
    // validate keys                                                                                                  // 742
    var VALID_KEYS = ['insert', 'update', 'remove', 'fetch', 'transform'];                                            // 743
    _.each(_.keys(options), function (key) {                                                                          // 744
      if (!_.contains(VALID_KEYS, key))                                                                               // 745
        throw new Error(allowOrDeny + ": Invalid key: " + key);                                                       // 746
    });                                                                                                               // 747
                                                                                                                      // 748
    var self = this;                                                                                                  // 749
    self._restricted = true;                                                                                          // 750
                                                                                                                      // 751
    _.each(['insert', 'update', 'remove'], function (name) {                                                          // 752
      if (options.hasOwnProperty(name)) {                                                                             // 753
        if (!(options[name] instanceof Function)) {                                                                   // 754
          throw new Error(allowOrDeny + ": Value for `" + name + "` must be a function");                             // 755
        }                                                                                                             // 756
                                                                                                                      // 757
        // If the transform is specified at all (including as 'null') in this                                         // 758
        // call, then take that; otherwise, take the transform from the                                               // 759
        // collection.                                                                                                // 760
        if (options.transform === undefined) {                                                                        // 761
          options[name].transform = self._transform;  // already wrapped                                              // 762
        } else {                                                                                                      // 763
          options[name].transform = LocalCollection.wrapTransform(                                                    // 764
            options.transform);                                                                                       // 765
        }                                                                                                             // 766
                                                                                                                      // 767
        self._validators[name][allowOrDeny].push(options[name]);                                                      // 768
      }                                                                                                               // 769
    });                                                                                                               // 770
                                                                                                                      // 771
    // Only update the fetch fields if we're passed things that affect                                                // 772
    // fetching. This way allow({}) and allow({insert: f}) don't result in                                            // 773
    // setting fetchAllFields                                                                                         // 774
    if (options.update || options.remove || options.fetch) {                                                          // 775
      if (options.fetch && !(options.fetch instanceof Array)) {                                                       // 776
        throw new Error(allowOrDeny + ": Value for `fetch` must be an array");                                        // 777
      }                                                                                                               // 778
      self._updateFetch(options.fetch);                                                                               // 779
    }                                                                                                                 // 780
  };                                                                                                                  // 781
                                                                                                                      // 782
  /**                                                                                                                 // 783
   * @summary Allow users to write directly to this collection from client code, subject to limitations you define.   // 784
   * @locus Server                                                                                                    // 785
   * @param {Object} options                                                                                          // 786
   * @param {Function} options.insert,update,remove Functions that look at a proposed modification to the database and return true if it should be allowed.
   * @param {String[]} options.fetch Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions.
   * @param {Function} options.transform Overrides `transform` on the  [`Collection`](#collections).  Pass `null` to disable transformation.
   */                                                                                                                 // 790
  Mongo.Collection.prototype.allow = function(options) {                                                              // 791
    addValidator.call(this, 'allow', options);                                                                        // 792
  };                                                                                                                  // 793
                                                                                                                      // 794
  /**                                                                                                                 // 795
   * @summary Override `allow` rules.                                                                                 // 796
   * @locus Server                                                                                                    // 797
   * @param {Object} options                                                                                          // 798
   * @param {Function} options.insert,update,remove Functions that look at a proposed modification to the database and return true if it should be denied, even if an [allow](#allow) rule says otherwise.
   * @param {String[]} options.fetch Optional performance enhancement. Limits the fields that will be fetched from the database for inspection by your `update` and `remove` functions.
   * @param {Function} options.transform Overrides `transform` on the  [`Collection`](#collections).  Pass `null` to disable transformation.
   */                                                                                                                 // 802
  Mongo.Collection.prototype.deny = function(options) {                                                               // 803
    addValidator.call(this, 'deny', options);                                                                         // 804
  };                                                                                                                  // 805
})();                                                                                                                 // 806
                                                                                                                      // 807
                                                                                                                      // 808
Mongo.Collection.prototype._defineMutationMethods = function() {                                                      // 809
  var self = this;                                                                                                    // 810
                                                                                                                      // 811
  // set to true once we call any allow or deny methods. If true, use                                                 // 812
  // allow/deny semantics. If false, use insecure mode semantics.                                                     // 813
  self._restricted = false;                                                                                           // 814
                                                                                                                      // 815
  // Insecure mode (default to allowing writes). Defaults to 'undefined' which                                        // 816
  // means insecure iff the insecure package is loaded. This property can be                                          // 817
  // overriden by tests or packages wishing to change insecure mode behavior of                                       // 818
  // their collections.                                                                                               // 819
  self._insecure = undefined;                                                                                         // 820
                                                                                                                      // 821
  self._validators = {                                                                                                // 822
    insert: {allow: [], deny: []},                                                                                    // 823
    update: {allow: [], deny: []},                                                                                    // 824
    remove: {allow: [], deny: []},                                                                                    // 825
    upsert: {allow: [], deny: []}, // dummy arrays; can't set these!                                                  // 826
    fetch: [],                                                                                                        // 827
    fetchAllFields: false                                                                                             // 828
  };                                                                                                                  // 829
                                                                                                                      // 830
  if (!self._name)                                                                                                    // 831
    return; // anonymous collection                                                                                   // 832
                                                                                                                      // 833
  // XXX Think about method namespacing. Maybe methods should be                                                      // 834
  // "Meteor:Mongo:insert/NAME"?                                                                                      // 835
  self._prefix = '/' + self._name + '/';                                                                              // 836
                                                                                                                      // 837
  // mutation methods                                                                                                 // 838
  if (self._connection) {                                                                                             // 839
    var m = {};                                                                                                       // 840
                                                                                                                      // 841
    _.each(['insert', 'update', 'remove'], function (method) {                                                        // 842
      m[self._prefix + method] = function (/* ... */) {                                                               // 843
        // All the methods do their own validation, instead of using check().                                         // 844
        check(arguments, [Match.Any]);                                                                                // 845
        var args = _.toArray(arguments);                                                                              // 846
        try {                                                                                                         // 847
          // For an insert, if the client didn't specify an _id, generate one                                         // 848
          // now; because this uses DDP.randomStream, it will be consistent with                                      // 849
          // what the client generated. We generate it now rather than later so                                       // 850
          // that if (eg) an allow/deny rule does an insert to the same                                               // 851
          // collection (not that it really should), the generated _id will                                           // 852
          // still be the first use of the stream and will be consistent.                                             // 853
          //                                                                                                          // 854
          // However, we don't actually stick the _id onto the document yet,                                          // 855
          // because we want allow/deny rules to be able to differentiate                                             // 856
          // between arbitrary client-specified _id fields and merely                                                 // 857
          // client-controlled-via-randomSeed fields.                                                                 // 858
          var generatedId = null;                                                                                     // 859
          if (method === "insert" && !_.has(args[0], '_id')) {                                                        // 860
            generatedId = self._makeNewID();                                                                          // 861
          }                                                                                                           // 862
                                                                                                                      // 863
          if (this.isSimulation) {                                                                                    // 864
            // In a client simulation, you can do any mutation (even with a                                           // 865
            // complex selector).                                                                                     // 866
            if (generatedId !== null)                                                                                 // 867
              args[0]._id = generatedId;                                                                              // 868
            return self._collection[method].apply(                                                                    // 869
              self._collection, args);                                                                                // 870
          }                                                                                                           // 871
                                                                                                                      // 872
          // This is the server receiving a method call from the client.                                              // 873
                                                                                                                      // 874
          // We don't allow arbitrary selectors in mutations from the client: only                                    // 875
          // single-ID selectors.                                                                                     // 876
          if (method !== 'insert')                                                                                    // 877
            throwIfSelectorIsNotId(args[0], method);                                                                  // 878
                                                                                                                      // 879
          if (self._restricted) {                                                                                     // 880
            // short circuit if there is no way it will pass.                                                         // 881
            if (self._validators[method].allow.length === 0) {                                                        // 882
              throw new Meteor.Error(                                                                                 // 883
                403, "Access denied. No allow validators set on restricted " +                                        // 884
                  "collection for method '" + method + "'.");                                                         // 885
            }                                                                                                         // 886
                                                                                                                      // 887
            var validatedMethodName =                                                                                 // 888
                  '_validated' + method.charAt(0).toUpperCase() + method.slice(1);                                    // 889
            args.unshift(this.userId);                                                                                // 890
            method === 'insert' && args.push(generatedId);                                                            // 891
            return self[validatedMethodName].apply(self, args);                                                       // 892
          } else if (self._isInsecure()) {                                                                            // 893
            if (generatedId !== null)                                                                                 // 894
              args[0]._id = generatedId;                                                                              // 895
            // In insecure mode, allow any mutation (with a simple selector).                                         // 896
            // XXX This is kind of bogus.  Instead of blindly passing whatever                                        // 897
            //     we get from the network to this function, we should actually                                       // 898
            //     know the correct arguments for the function and pass just                                          // 899
            //     them.  For example, if you have an extraneous extra null                                           // 900
            //     argument and this is Mongo on the server, the .wrapAsync'd                                         // 901
            //     functions like update will get confused and pass the                                               // 902
            //     "fut.resolver()" in the wrong slot, where _update will never                                       // 903
            //     invoke it. Bam, broken DDP connection.  Probably should just                                       // 904
            //     take this whole method and write it three times, invoking                                          // 905
            //     helpers for the common code.                                                                       // 906
            return self._collection[method].apply(self._collection, args);                                            // 907
          } else {                                                                                                    // 908
            // In secure mode, if we haven't called allow or deny, then nothing                                       // 909
            // is permitted.                                                                                          // 910
            throw new Meteor.Error(403, "Access denied");                                                             // 911
          }                                                                                                           // 912
        } catch (e) {                                                                                                 // 913
          if (e.name === 'MongoError' || e.name === 'MinimongoError') {                                               // 914
            throw new Meteor.Error(409, e.toString());                                                                // 915
          } else {                                                                                                    // 916
            throw e;                                                                                                  // 917
          }                                                                                                           // 918
        }                                                                                                             // 919
      };                                                                                                              // 920
    });                                                                                                               // 921
    // Minimongo on the server gets no stubs; instead, by default                                                     // 922
    // it wait()s until its result is ready, yielding.                                                                // 923
    // This matches the behavior of macromongo on the server better.                                                  // 924
    // XXX see #MeteorServerNull                                                                                      // 925
    if (Meteor.isClient || self._connection === Meteor.server)                                                        // 926
      self._connection.methods(m);                                                                                    // 927
  }                                                                                                                   // 928
};                                                                                                                    // 929
                                                                                                                      // 930
                                                                                                                      // 931
Mongo.Collection.prototype._updateFetch = function (fields) {                                                         // 932
  var self = this;                                                                                                    // 933
                                                                                                                      // 934
  if (!self._validators.fetchAllFields) {                                                                             // 935
    if (fields) {                                                                                                     // 936
      self._validators.fetch = _.union(self._validators.fetch, fields);                                               // 937
    } else {                                                                                                          // 938
      self._validators.fetchAllFields = true;                                                                         // 939
      // clear fetch just to make sure we don't accidentally read it                                                  // 940
      self._validators.fetch = null;                                                                                  // 941
    }                                                                                                                 // 942
  }                                                                                                                   // 943
};                                                                                                                    // 944
                                                                                                                      // 945
Mongo.Collection.prototype._isInsecure = function () {                                                                // 946
  var self = this;                                                                                                    // 947
  if (self._insecure === undefined)                                                                                   // 948
    return !!Package.insecure;                                                                                        // 949
  return self._insecure;                                                                                              // 950
};                                                                                                                    // 951
                                                                                                                      // 952
var docToValidate = function (validator, doc, generatedId) {                                                          // 953
  var ret = doc;                                                                                                      // 954
  if (validator.transform) {                                                                                          // 955
    ret = EJSON.clone(doc);                                                                                           // 956
    // If you set a server-side transform on your collection, then you don't get                                      // 957
    // to tell the difference between "client specified the ID" and "server                                           // 958
    // generated the ID", because transforms expect to get _id.  If you want to                                       // 959
    // do that check, you can do it with a specific                                                                   // 960
    // `C.allow({insert: f, transform: null})` validator.                                                             // 961
    if (generatedId !== null) {                                                                                       // 962
      ret._id = generatedId;                                                                                          // 963
    }                                                                                                                 // 964
    ret = validator.transform(ret);                                                                                   // 965
  }                                                                                                                   // 966
  return ret;                                                                                                         // 967
};                                                                                                                    // 968
                                                                                                                      // 969
Mongo.Collection.prototype._validatedInsert = function (userId, doc,                                                  // 970
                                                         generatedId) {                                               // 971
  var self = this;                                                                                                    // 972
                                                                                                                      // 973
  // call user validators.                                                                                            // 974
  // Any deny returns true means denied.                                                                              // 975
  if (_.any(self._validators.insert.deny, function(validator) {                                                       // 976
    return validator(userId, docToValidate(validator, doc, generatedId));                                             // 977
  })) {                                                                                                               // 978
    throw new Meteor.Error(403, "Access denied");                                                                     // 979
  }                                                                                                                   // 980
  // Any allow returns true means proceed. Throw error if they all fail.                                              // 981
  if (_.all(self._validators.insert.allow, function(validator) {                                                      // 982
    return !validator(userId, docToValidate(validator, doc, generatedId));                                            // 983
  })) {                                                                                                               // 984
    throw new Meteor.Error(403, "Access denied");                                                                     // 985
  }                                                                                                                   // 986
                                                                                                                      // 987
  // If we generated an ID above, insert it now: after the validation, but                                            // 988
  // before actually inserting.                                                                                       // 989
  if (generatedId !== null)                                                                                           // 990
    doc._id = generatedId;                                                                                            // 991
                                                                                                                      // 992
  self._collection.insert.call(self._collection, doc);                                                                // 993
};                                                                                                                    // 994
                                                                                                                      // 995
var transformDoc = function (validator, doc) {                                                                        // 996
  if (validator.transform)                                                                                            // 997
    return validator.transform(doc);                                                                                  // 998
  return doc;                                                                                                         // 999
};                                                                                                                    // 1000
                                                                                                                      // 1001
// Simulate a mongo `update` operation while validating that the access                                               // 1002
// control rules set by calls to `allow/deny` are satisfied. If all                                                   // 1003
// pass, rewrite the mongo operation to use $in to set the list of                                                    // 1004
// document ids to change ##ValidatedChange                                                                           // 1005
Mongo.Collection.prototype._validatedUpdate = function(                                                               // 1006
    userId, selector, mutator, options) {                                                                             // 1007
  var self = this;                                                                                                    // 1008
                                                                                                                      // 1009
  check(mutator, Object);                                                                                             // 1010
                                                                                                                      // 1011
  options = _.clone(options) || {};                                                                                   // 1012
                                                                                                                      // 1013
  if (!LocalCollection._selectorIsIdPerhapsAsObject(selector))                                                        // 1014
    throw new Error("validated update should be of a single ID");                                                     // 1015
                                                                                                                      // 1016
  // We don't support upserts because they don't fit nicely into allow/deny                                           // 1017
  // rules.                                                                                                           // 1018
  if (options.upsert)                                                                                                 // 1019
    throw new Meteor.Error(403, "Access denied. Upserts not " +                                                       // 1020
                           "allowed in a restricted collection.");                                                    // 1021
                                                                                                                      // 1022
  var noReplaceError = "Access denied. In a restricted collection you can only" +                                     // 1023
        " update documents, not replace them. Use a Mongo update operator, such " +                                   // 1024
        "as '$set'.";                                                                                                 // 1025
                                                                                                                      // 1026
  // compute modified fields                                                                                          // 1027
  var fields = [];                                                                                                    // 1028
  if (_.isEmpty(mutator)) {                                                                                           // 1029
    throw new Meteor.Error(403, noReplaceError);                                                                      // 1030
  }                                                                                                                   // 1031
  _.each(mutator, function (params, op) {                                                                             // 1032
    if (op.charAt(0) !== '$') {                                                                                       // 1033
      throw new Meteor.Error(403, noReplaceError);                                                                    // 1034
    } else if (!_.has(ALLOWED_UPDATE_OPERATIONS, op)) {                                                               // 1035
      throw new Meteor.Error(                                                                                         // 1036
        403, "Access denied. Operator " + op + " not allowed in a restricted collection.");                           // 1037
    } else {                                                                                                          // 1038
      _.each(_.keys(params), function (field) {                                                                       // 1039
        // treat dotted fields as if they are replacing their                                                         // 1040
        // top-level part                                                                                             // 1041
        if (field.indexOf('.') !== -1)                                                                                // 1042
          field = field.substring(0, field.indexOf('.'));                                                             // 1043
                                                                                                                      // 1044
        // record the field we are trying to change                                                                   // 1045
        if (!_.contains(fields, field))                                                                               // 1046
          fields.push(field);                                                                                         // 1047
      });                                                                                                             // 1048
    }                                                                                                                 // 1049
  });                                                                                                                 // 1050
                                                                                                                      // 1051
  var findOptions = {transform: null};                                                                                // 1052
  if (!self._validators.fetchAllFields) {                                                                             // 1053
    findOptions.fields = {};                                                                                          // 1054
    _.each(self._validators.fetch, function(fieldName) {                                                              // 1055
      findOptions.fields[fieldName] = 1;                                                                              // 1056
    });                                                                                                               // 1057
  }                                                                                                                   // 1058
                                                                                                                      // 1059
  var doc = self._collection.findOne(selector, findOptions);                                                          // 1060
  if (!doc)  // none satisfied!                                                                                       // 1061
    return 0;                                                                                                         // 1062
                                                                                                                      // 1063
  // call user validators.                                                                                            // 1064
  // Any deny returns true means denied.                                                                              // 1065
  if (_.any(self._validators.update.deny, function(validator) {                                                       // 1066
    var factoriedDoc = transformDoc(validator, doc);                                                                  // 1067
    return validator(userId,                                                                                          // 1068
                     factoriedDoc,                                                                                    // 1069
                     fields,                                                                                          // 1070
                     mutator);                                                                                        // 1071
  })) {                                                                                                               // 1072
    throw new Meteor.Error(403, "Access denied");                                                                     // 1073
  }                                                                                                                   // 1074
  // Any allow returns true means proceed. Throw error if they all fail.                                              // 1075
  if (_.all(self._validators.update.allow, function(validator) {                                                      // 1076
    var factoriedDoc = transformDoc(validator, doc);                                                                  // 1077
    return !validator(userId,                                                                                         // 1078
                      factoriedDoc,                                                                                   // 1079
                      fields,                                                                                         // 1080
                      mutator);                                                                                       // 1081
  })) {                                                                                                               // 1082
    throw new Meteor.Error(403, "Access denied");                                                                     // 1083
  }                                                                                                                   // 1084
                                                                                                                      // 1085
  options._forbidReplace = true;                                                                                      // 1086
                                                                                                                      // 1087
  // Back when we supported arbitrary client-provided selectors, we actually                                          // 1088
  // rewrote the selector to include an _id clause before passing to Mongo to                                         // 1089
  // avoid races, but since selector is guaranteed to already just be an ID, we                                       // 1090
  // don't have to any more.                                                                                          // 1091
                                                                                                                      // 1092
  return self._collection.update.call(                                                                                // 1093
    self._collection, selector, mutator, options);                                                                    // 1094
};                                                                                                                    // 1095
                                                                                                                      // 1096
// Only allow these operations in validated updates. Specifically                                                     // 1097
// whitelist operations, rather than blacklist, so new complex                                                        // 1098
// operations that are added aren't automatically allowed. A complex                                                  // 1099
// operation is one that does more than just modify its target                                                        // 1100
// field. For now this contains all update operations except '$rename'.                                               // 1101
// http://docs.mongodb.org/manual/reference/operators/#update                                                         // 1102
var ALLOWED_UPDATE_OPERATIONS = {                                                                                     // 1103
  $inc:1, $set:1, $unset:1, $addToSet:1, $pop:1, $pullAll:1, $pull:1,                                                 // 1104
  $pushAll:1, $push:1, $bit:1                                                                                         // 1105
};                                                                                                                    // 1106
                                                                                                                      // 1107
// Simulate a mongo `remove` operation while validating access control                                                // 1108
// rules. See #ValidatedChange                                                                                        // 1109
Mongo.Collection.prototype._validatedRemove = function(userId, selector) {                                            // 1110
  var self = this;                                                                                                    // 1111
                                                                                                                      // 1112
  var findOptions = {transform: null};                                                                                // 1113
  if (!self._validators.fetchAllFields) {                                                                             // 1114
    findOptions.fields = {};                                                                                          // 1115
    _.each(self._validators.fetch, function(fieldName) {                                                              // 1116
      findOptions.fields[fieldName] = 1;                                                                              // 1117
    });                                                                                                               // 1118
  }                                                                                                                   // 1119
                                                                                                                      // 1120
  var doc = self._collection.findOne(selector, findOptions);                                                          // 1121
  if (!doc)                                                                                                           // 1122
    return 0;                                                                                                         // 1123
                                                                                                                      // 1124
  // call user validators.                                                                                            // 1125
  // Any deny returns true means denied.                                                                              // 1126
  if (_.any(self._validators.remove.deny, function(validator) {                                                       // 1127
    return validator(userId, transformDoc(validator, doc));                                                           // 1128
  })) {                                                                                                               // 1129
    throw new Meteor.Error(403, "Access denied");                                                                     // 1130
  }                                                                                                                   // 1131
  // Any allow returns true means proceed. Throw error if they all fail.                                              // 1132
  if (_.all(self._validators.remove.allow, function(validator) {                                                      // 1133
    return !validator(userId, transformDoc(validator, doc));                                                          // 1134
  })) {                                                                                                               // 1135
    throw new Meteor.Error(403, "Access denied");                                                                     // 1136
  }                                                                                                                   // 1137
                                                                                                                      // 1138
  // Back when we supported arbitrary client-provided selectors, we actually                                          // 1139
  // rewrote the selector to {_id: {$in: [ids that we found]}} before passing to                                      // 1140
  // Mongo to avoid races, but since selector is guaranteed to already just be                                        // 1141
  // an ID, we don't have to any more.                                                                                // 1142
                                                                                                                      // 1143
  return self._collection.remove.call(self._collection, selector);                                                    // 1144
};                                                                                                                    // 1145
                                                                                                                      // 1146
/**                                                                                                                   // 1147
 * @deprecated in 0.9.1                                                                                               // 1148
 */                                                                                                                   // 1149
Meteor.Collection = Mongo.Collection;                                                                                 // 1150
                                                                                                                      // 1151
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.mongo = {
  Mongo: Mongo
};

})();
