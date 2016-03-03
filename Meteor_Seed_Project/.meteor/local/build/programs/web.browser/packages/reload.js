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
var _ = Package.underscore._;

/* Package-scope variables */
var Reload;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/reload/packages/reload.js                                                             //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
(function(){                                                                                      // 1
                                                                                                  // 2
/////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                         //     // 4
// packages/reload/reload.js                                                               //     // 5
//                                                                                         //     // 6
/////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                           //     // 8
/**                                                                                        // 1   // 9
 * This code does _NOT_ support hot (session-restoring) reloads on                         // 2   // 10
 * IE6,7. It only works on browsers with sessionStorage support.                           // 3   // 11
 *                                                                                         // 4   // 12
 * There are a couple approaches to add IE6,7 support:                                     // 5   // 13
 *                                                                                         // 6   // 14
 * - use IE's "userData" mechanism in combination with window.name.                        // 7   // 15
 * This mostly works, however the problem is that it can not get to the                    // 8   // 16
 * data until after DOMReady. This is a problem for us since this API                      // 9   // 17
 * relies on the data being ready before API users run. We could                           // 10  // 18
 * refactor using Meteor.startup in all API users, but that might slow                     // 11  // 19
 * page loads as we couldn't start the stream until after DOMReady.                        // 12  // 20
 * Here are some resources on this approach:                                               // 13  // 21
 * https://github.com/hugeinc/USTORE.js                                                    // 14  // 22
 * http://thudjs.tumblr.com/post/419577524/localstorage-userdata                           // 15  // 23
 * http://www.javascriptkit.com/javatutors/domstorage2.shtml                               // 16  // 24
 *                                                                                         // 17  // 25
 * - POST the data to the server, and have the server send it back on                      // 18  // 26
 * page load. This is nice because it sidesteps all the local storage                      // 19  // 27
 * compatibility issues, however it is kinda tricky. We can use a unique                   // 20  // 28
 * token in the URL, then get rid of it with HTML5 pushstate, but that                     // 21  // 29
 * only works on pushstate browsers.                                                       // 22  // 30
 *                                                                                         // 23  // 31
 * This will all need to be reworked entirely when we add server-side                      // 24  // 32
 * HTML rendering. In that case, the server will need to have access to                    // 25  // 33
 * the client's session to render properly.                                                // 26  // 34
 */                                                                                        // 27  // 35
                                                                                           // 28  // 36
// XXX when making this API public, also expose a flag for the app                         // 29  // 37
// developer to know whether a hot code push is happening. This is                         // 30  // 38
// useful for apps using `window.onbeforeunload`. See                                      // 31  // 39
// https://github.com/meteor/meteor/pull/657                                               // 32  // 40
                                                                                           // 33  // 41
Reload = {};                                                                               // 34  // 42
                                                                                           // 35  // 43
var KEY_NAME = 'Meteor_Reload';                                                            // 36  // 44
                                                                                           // 37  // 45
var old_data = {};                                                                         // 38  // 46
// read in old data at startup.                                                            // 39  // 47
var old_json;                                                                              // 40  // 48
                                                                                           // 41  // 49
// This logic for sessionStorage detection is based on browserstate/history.js             // 42  // 50
var safeSessionStorage = null;                                                             // 43  // 51
try {                                                                                      // 44  // 52
  // This throws a SecurityError on Chrome if cookies & localStorage are                   // 45  // 53
  // explicitly disabled                                                                   // 46  // 54
  //                                                                                       // 47  // 55
  // On Firefox with dom.storage.enabled set to false, sessionStorage is null              // 48  // 56
  //                                                                                       // 49  // 57
  // We can't even do (typeof sessionStorage) on Chrome, it throws.  So we rely            // 50  // 58
  // on the throw if sessionStorage == null; the alternative is browser                    // 51  // 59
  // detection, but this seems better.                                                     // 52  // 60
  safeSessionStorage = window.sessionStorage;                                              // 53  // 61
                                                                                           // 54  // 62
  // Check we can actually use it                                                          // 55  // 63
  if (safeSessionStorage) {                                                                // 56  // 64
    safeSessionStorage.setItem('__dummy__', '1');                                          // 57  // 65
    safeSessionStorage.removeItem('__dummy__');                                            // 58  // 66
  } else {                                                                                 // 59  // 67
    // Be consistently null, for safety                                                    // 60  // 68
    safeSessionStorage = null;                                                             // 61  // 69
  }                                                                                        // 62  // 70
} catch(e) {                                                                               // 63  // 71
  // Expected on chrome with strict security, or if sessionStorage not supported           // 64  // 72
  safeSessionStorage = null;                                                               // 65  // 73
}                                                                                          // 66  // 74
                                                                                           // 67  // 75
// Exported for test.                                                                      // 68  // 76
Reload._getData = function () {                                                            // 69  // 77
  return safeSessionStorage && safeSessionStorage.getItem(KEY_NAME);                       // 70  // 78
};                                                                                         // 71  // 79
                                                                                           // 72  // 80
if (safeSessionStorage) {                                                                  // 73  // 81
  old_json = Reload._getData();                                                            // 74  // 82
  safeSessionStorage.removeItem(KEY_NAME);                                                 // 75  // 83
} else {                                                                                   // 76  // 84
  // Unsupported browser (IE 6,7) or locked down security settings.                        // 77  // 85
  // No session resumption.                                                                // 78  // 86
  // Meteor._debug("XXX UNSUPPORTED BROWSER/SETTINGS");                                    // 79  // 87
}                                                                                          // 80  // 88
                                                                                           // 81  // 89
if (!old_json) old_json = '{}';                                                            // 82  // 90
var old_parsed = {};                                                                       // 83  // 91
try {                                                                                      // 84  // 92
  old_parsed = JSON.parse(old_json);                                                       // 85  // 93
  if (typeof old_parsed !== "object") {                                                    // 86  // 94
    Meteor._debug("Got bad data on reload. Ignoring.");                                    // 87  // 95
    old_parsed = {};                                                                       // 88  // 96
  }                                                                                        // 89  // 97
} catch (err) {                                                                            // 90  // 98
  Meteor._debug("Got invalid JSON on reload. Ignoring.");                                  // 91  // 99
}                                                                                          // 92  // 100
                                                                                           // 93  // 101
if (old_parsed.reload && typeof old_parsed.data === "object") {                            // 94  // 102
  // Meteor._debug("Restoring reload data.");                                              // 95  // 103
  old_data = old_parsed.data;                                                              // 96  // 104
}                                                                                          // 97  // 105
                                                                                           // 98  // 106
                                                                                           // 99  // 107
var providers = [];                                                                        // 100
                                                                                           // 101
////////// External API //////////                                                         // 102
                                                                                           // 103
// Packages that support migration should register themselves by calling                   // 104
// this function. When it's time to migrate, callback will be called                       // 105
// with one argument, the "retry function," and an optional 'option'                       // 106
// argument (containing a key 'immediateMigration'). If the package                        // 107
// is ready to migrate, it should return [true, data], where data is                       // 108
// its migration data, an arbitrary JSON value (or [true] if it has                        // 109
// no migration data this time). If the package needs more time                            // 110
// before it is ready to migrate, it should return false. Then, once                       // 111
// it is ready to migrating again, it should call the retry                                // 112
// function. The retry function will return immediately, but will                          // 113
// schedule the migration to be retried, meaning that every package                        // 114
// will be polled once again for its migration data. If they are all                       // 115
// ready this time, then the migration will happen. name must be set if there              // 116
// is migration data. If 'immediateMigration' is set in the options                        // 117
// argument, then it doesn't matter whether the package is ready to                        // 118
// migrate or not; the reload will happen immediately without waiting                      // 119
// (used for OAuth redirect login).                                                        // 120
//                                                                                         // 121
Reload._onMigrate = function (name, callback) {                                            // 122
  if (!callback) {                                                                         // 123
    // name not provided, so first arg is callback.                                        // 124
    callback = name;                                                                       // 125
    name = undefined;                                                                      // 126
  }                                                                                        // 127
  providers.push({name: name, callback: callback});                                        // 128
};                                                                                         // 129
                                                                                           // 130
// Called by packages when they start up.                                                  // 131
// Returns the object that was saved, or undefined if none saved.                          // 132
//                                                                                         // 133
Reload._migrationData = function (name) {                                                  // 134
  return old_data[name];                                                                   // 135
};                                                                                         // 136
                                                                                           // 137
// Options are the same as for `Reload._migrate`.                                          // 138
var pollProviders = function (tryReload, options) {                                        // 139
  tryReload = tryReload || function () {};                                                 // 140
  options = options || {};                                                                 // 141
                                                                                           // 142
  var migrationData = {};                                                                  // 143
  var remaining = _.clone(providers);                                                      // 144
  var allReady = true;                                                                     // 145
  while (remaining.length) {                                                               // 146
    var p = remaining.shift();                                                             // 147
    var status = p.callback(tryReload, options);                                           // 148
    if (!status[0])                                                                        // 149
      allReady = false;                                                                    // 150
    if (status.length > 1 && p.name)                                                       // 151
      migrationData[p.name] = status[1];                                                   // 152
  };                                                                                       // 153
  if (allReady || options.immediateMigration)                                              // 154
    return migrationData;                                                                  // 155
  else                                                                                     // 156
    return null;                                                                           // 157
};                                                                                         // 158
                                                                                           // 159
// Options are:                                                                            // 160
//  - immediateMigration: true if the page will be reloaded immediately                    // 161
//    regardless of whether packages report that they are ready or not.                    // 162
Reload._migrate = function (tryReload, options) {                                          // 163
  // Make sure each package is ready to go, and collect their                              // 164
  // migration data                                                                        // 165
  var migrationData = pollProviders(tryReload, options);                                   // 166
  if (migrationData === null)                                                              // 167
    return false; // not ready yet..                                                       // 168
                                                                                           // 169
  try {                                                                                    // 170
    // Persist the migration data                                                          // 171
    var json = JSON.stringify({                                                            // 172
      data: migrationData, reload: true                                                    // 173
    });                                                                                    // 174
  } catch (err) {                                                                          // 175
    Meteor._debug("Couldn't serialize data for migration", migrationData);                 // 176
    throw err;                                                                             // 177
  }                                                                                        // 178
                                                                                           // 179
  if (safeSessionStorage) {                                                                // 180
    try {                                                                                  // 181
      safeSessionStorage.setItem(KEY_NAME, json);                                          // 182
    } catch (err) {                                                                        // 183
      // We should have already checked this, but just log - don't throw                   // 184
      Meteor._debug("Couldn't save data for migration to sessionStorage", err);            // 185
    }                                                                                      // 186
  } else {                                                                                 // 187
    Meteor._debug("Browser does not support sessionStorage. Not saving migration state.");        // 196
  }                                                                                        // 189
                                                                                           // 190
  return true;                                                                             // 191
};                                                                                         // 192
                                                                                           // 193
// Allows tests to isolate the list of providers.                                          // 194
Reload._withFreshProvidersForTest = function (f) {                                         // 195
  var originalProviders = _.clone(providers);                                              // 196
  providers = [];                                                                          // 197
  try {                                                                                    // 198
    f();                                                                                   // 199
  } finally {                                                                              // 200
    providers = originalProviders;                                                         // 201
  }                                                                                        // 202
};                                                                                         // 203
                                                                                           // 204
// Migrating reload: reload this page (presumably to pick up a new                         // 205
// version of the code or assets), but save the program state and                          // 206
// migrate it over. This function returns immediately. The reload                          // 207
// will happen at some point in the future once all of the packages                        // 208
// are ready to migrate.                                                                   // 209
//                                                                                         // 210
var reloading = false;                                                                     // 211
Reload._reload = function (options) {                                                      // 212
  options = options || {};                                                                 // 213
                                                                                           // 214
  if (reloading)                                                                           // 215
    return;                                                                                // 216
  reloading = true;                                                                        // 217
                                                                                           // 218
  var tryReload = function () { _.defer(function () {                                      // 219
    if (Reload._migrate(tryReload, options)) {                                             // 220
      // Tell the browser to shut down this VM and make a new one                          // 221
      window.location.reload();                                                            // 222
    }                                                                                      // 223
  }); };                                                                                   // 224
                                                                                           // 225
  tryReload();                                                                             // 226
};                                                                                         // 227
                                                                                           // 228
/////////////////////////////////////////////////////////////////////////////////////////////     // 237
                                                                                                  // 238
}).call(this);                                                                                    // 239
                                                                                                  // 240
                                                                                                  // 241
                                                                                                  // 242
                                                                                                  // 243
                                                                                                  // 244
                                                                                                  // 245
(function(){                                                                                      // 246
                                                                                                  // 247
/////////////////////////////////////////////////////////////////////////////////////////////     // 248
//                                                                                         //     // 249
// packages/reload/deprecated.js                                                           //     // 250
//                                                                                         //     // 251
/////////////////////////////////////////////////////////////////////////////////////////////     // 252
                                                                                           //     // 253
// Reload functionality used to live on Meteor._reload. Be nice and try not to             // 1   // 254
// break code that uses it, even though it's internal.                                     // 2   // 255
// XXX COMPAT WITH 0.6.4                                                                   // 3   // 256
Meteor._reload = {                                                                         // 4   // 257
  onMigrate: Reload._onMigrate,                                                            // 5   // 258
  migrationData: Reload._migrationData,                                                    // 6   // 259
  reload: Reload._reload                                                                   // 7   // 260
};                                                                                         // 8   // 261
                                                                                           // 9   // 262
/////////////////////////////////////////////////////////////////////////////////////////////     // 263
                                                                                                  // 264
}).call(this);                                                                                    // 265
                                                                                                  // 266
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.reload = {
  Reload: Reload
};

})();
