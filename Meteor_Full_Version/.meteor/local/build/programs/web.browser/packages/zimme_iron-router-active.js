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
var check = Package.check.check;
var Match = Package.check.Match;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var Router = Package['iron:router'].Router;
var RouteController = Package['iron:router'].RouteController;
var s = Package['underscorestring:underscore.string'].s;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Iron = Package['iron:core'].Iron;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// packages/zimme_iron-router-active/packages/zimme_iron-router-active.js     //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
(function () {                                                                // 1
                                                                              // 2
/////////////////////////////////////////////////////////////////////////////
//                                                                         //
// packages/zimme:iron-router-active/client/helpers.coffee.js              //
//                                                                         //
/////////////////////////////////////////////////////////////////////////////
                                                                           //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var func, helpers, isActive, name, testExp,                                   // 10
  __hasProp = {}.hasOwnProperty;                                              // 11
                                                                              // 12
isActive = function(type, inverse) {                                          // 13
  var name;                                                                   // 14
  if (inverse == null) {                                                      // 15
    inverse = false;                                                          // 16
  }                                                                           // 17
  name = 'is';                                                                // 18
  if (inverse) {                                                              // 19
    name = name + 'Not';                                                      // 20
  }                                                                           // 21
  name = name + 'Active' + s.capitalize(type);                                // 22
  return function(view) {                                                     // 23
    var className, controller, isPath, pattern, regex, test, _ref;            // 24
    if (!(view instanceof Spacebars.kw)) {                                    // 25
      throw new Error(("" + name + " options must be key value pair such ") + ("as {{" + name + " regex='route/path'}}. You passed: ") + ("" + (JSON.stringify(view))));
    }                                                                         // 27
    pattern = {                                                               // 28
      className: Match.Optional(String),                                      // 29
      regex: String                                                           // 30
    };                                                                        // 31
    check(view.hash, pattern);                                                // 32
    controller = Router.current();                                            // 33
    if (!controller) {                                                        // 34
      return false;                                                           // 35
    }                                                                         // 36
    _ref = view.hash, className = _ref.className, regex = _ref.regex;         // 37
    if (className == null) {                                                  // 38
      className = inverse ? 'disabled' : 'active';                            // 39
    }                                                                         // 40
    if (type === 'path') {                                                    // 41
      isPath = true;                                                          // 42
    }                                                                         // 43
    test = testExp(controller, regex, isPath);                                // 44
    if (inverse) {                                                            // 45
      test = !test;                                                           // 46
    }                                                                         // 47
    if (test) {                                                               // 48
      return className;                                                       // 49
    } else {                                                                  // 50
      return false;                                                           // 51
    }                                                                         // 52
  };                                                                          // 53
};                                                                            // 54
                                                                              // 55
testExp = function(controller, exp, isPath) {                                 // 56
  var pattern, re, _ref;                                                      // 57
  if (isPath == null) {                                                       // 58
    isPath = false;                                                           // 59
  }                                                                           // 60
  if (isPath) {                                                               // 61
    pattern = controller.location.get().path;                                 // 62
  } else {                                                                    // 63
    pattern = (_ref = controller.route) != null ? _ref.getName() : void 0;    // 64
  }                                                                           // 65
  re = new RegExp(exp, 'i');                                                  // 66
  return re.test(pattern);                                                    // 67
};                                                                            // 68
                                                                              // 69
helpers = {                                                                   // 70
  isActiveRoute: isActive('route'),                                           // 71
  isActivePath: isActive('path'),                                             // 72
  isNotActiveRoute: isActive('route', true),                                  // 73
  isNotActivePath: isActive('path', true)                                     // 74
};                                                                            // 75
                                                                              // 76
for (name in helpers) {                                                       // 77
  if (!__hasProp.call(helpers, name)) continue;                               // 78
  func = helpers[name];                                                       // 79
  Template.registerHelper(name, func);                                        // 80
}                                                                             // 81
/////////////////////////////////////////////////////////////////////////////
                                                                              // 83
}).call(this);                                                                // 84
                                                                              // 85
////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['zimme:iron-router-active'] = {};

})();
