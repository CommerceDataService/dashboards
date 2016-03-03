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
var Promise = Package.promise.Promise;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Reload = Package.reload.Reload;

/* Package-scope variables */
var hcp, HotCodePush, RouterAutoscroll;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/okgrow_router-autoscroll/client/hot-code-push.js                             //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
//named reactive-dict are persisted across hot code push                                 // 1
hcp = new ReactiveDict("okgrow-hot-code-push");                                          // 2
                                                                                         // 3
var fakeStartPromise = {                                                                 // 4
  'then': function (actionFn) {                                                          // 5
    //debug("scheduled begin and end hook")                                              // 6
    hcp.set("has-hcp-hook", true);                                                       // 7
    Reload._onMigrate(function () {                                                      // 8
      try {                                                                              // 9
        actionFn()                                                                       // 10
      } catch(ex) {;}                                                                    // 11
      return [true];                                                                     // 12
    });                                                                                  // 13
    return fakeStartPromise;                                                             // 14
  }                                                                                      // 15
};                                                                                       // 16
                                                                                         // 17
HotCodePush = {                                                                          // 18
  start: fakeStartPromise,                                                               // 19
  end: new Promise(function (resolve) {                                                  // 20
    hcp.set("has-hcp-hook", true);                                                       // 21
    window.addEventListener("load", function () {                                        // 22
      //debug("detected window load")                                                    // 23
      if( hcp.get("has-hcp-hook") ){                                                     // 24
        //debug("HotCodePush.end promise resolving");                                    // 25
        hcp.set("has-hcp-hook", undefined);                                              // 26
        resolve(true);                                                                   // 27
      }                                                                                  // 28
    });                                                                                  // 29
  })                                                                                     // 30
};                                                                                       // 31
                                                                                         // 32
function debug(msg) {                                                                    // 33
  console.info(msg);                                                                     // 34
}                                                                                        // 35
                                                                                         // 36
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/okgrow_router-autoscroll/client/router-autoscroll.js                         //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
RouterAutoscroll = {                                                                     // 1
  animationDuration: 200,                                                                // 2
  marginTop: 0                                                                           // 3
};                                                                                       // 4
                                                                                         // 5
var backToPosition;                                                                      // 6
// Saved positions will survive a hot code push                                          // 7
var scrollPositions = new ReactiveDict("okgrow-router-autoscroll");                      // 8
                                                                                         // 9
function saveScrollPosition () {                                                         // 10
  scrollPositions.set(window.location.href, $(window).scrollTop());                      // 11
}                                                                                        // 12
                                                                                         // 13
//TODO use history state so we don't litter                                              // 14
window.onpopstate = function () {                                                        // 15
  backToPosition = scrollPositions.get(window.location.href);                            // 16
};                                                                                       // 17
                                                                                         // 18
// Scroll to the right place after changing routes. "The right place" is:                // 19
// 1. The previous position if we're returning via the back button                       // 20
// 2. The element whose id is specified in the URL hash                                  // 21
// 3. The top of page otherwise                                                          // 22
function getScrollToPosition () {                                                        // 23
  if (backToPosition) {                                                                  // 24
    var oldPosition = backToPosition;                                                    // 25
    backToPosition = undefined;                                                          // 26
    return oldPosition;                                                                  // 27
  }                                                                                      // 28
                                                                                         // 29
  var hash = window.location.hash;                                                       // 30
  var $hash;                                                                             // 31
  try{                                                                                   // 32
    //HTML5 allows all kinds of ids, so we can't whitelist characters, only              // 33
    //decide the hash doesn't represent a DOM id if we fail                              // 34
    $hash = $(hash);                                                                     // 35
  } catch (ex) {                                                                         // 36
    $hash = [];                                                                          // 37
  }                                                                                      // 38
                                                                                         // 39
  if(hash.indexOf('maintainScroll=1') > -1)                                              // 40
    return undefined;                                                                    // 41
                                                                                         // 42
  if ($hash.length)                                                                      // 43
    return $hash.offset().top;                                                           // 44
                                                                                         // 45
  return 0;                                                                              // 46
}                                                                                        // 47
                                                                                         // 48
//Do the scroll, after the DOM update so that the position can be correct                // 49
var scheduleScroll = function () {                                                       // 50
  Tracker.afterFlush(function () {                                                       // 51
    var position = getScrollToPosition();                                                // 52
    scrollTo(position);                                                                  // 53
  });                                                                                    // 54
};                                                                                       // 55
                                                                                         // 56
var flowScroll = function (newRoute) {                                                   // 57
  if(newRoute.context.pathname.indexOf("#") == -1)                                       // 58
    scrollTo(0);                                                                         // 59
  else                                                                                   // 60
    scheduleScroll();                                                                    // 61
};                                                                                       // 62
                                                                                         // 63
function ironWhenReady (callFn) {                                                        // 64
  return function () {                                                                   // 65
    var self = this;                                                                     // 66
    self.next();                                                                         // 67
    // XXX in iron, why do we abort if not ready, shouldn't we try once ready?           // 68
    if (self.ready()) callFn();                                                          // 69
  }                                                                                      // 70
}                                                                                        // 71
                                                                                         // 72
function scrollTo (position) {                                                           // 73
  $('body,html').animate({                                                               // 74
    scrollTop: position - RouterAutoscroll.marginTop                                     // 75
  }, RouterAutoscroll.animationDuration);                                                // 76
}                                                                                        // 77
                                                                                         // 78
if (Package['iron:router']) {                                                            // 79
  Package['iron:router'].Router.onRun(ironWhenReady(scheduleScroll));                    // 80
  Package['iron:router'].Router.onStop(saveScrollPosition);                              // 81
}                                                                                        // 82
                                                                                         // 83
if (Package["kadira:flow-router"]) {                                                     // 84
  Package["kadira:flow-router"].FlowRouter.triggers.enter([flowScroll]);                 // 85
  Package["kadira:flow-router"].FlowRouter.triggers.exit([saveScrollPosition]);          // 86
}                                                                                        // 87
                                                                                         // 88
if (Package["kadira:flow-router-ssr"]) {                                                 // 89
  Package["kadira:flow-router-ssr"].FlowRouter.triggers.enter([flowScroll]);             // 90
  Package["kadira:flow-router-ssr"].FlowRouter.triggers.exit([saveScrollPosition]);      // 91
}                                                                                        // 92
                                                                                         // 93
if (Package["meteorhacks:flow-router"]) {                                                // 94
  Package["meteorhacks:flow-router"].FlowRouter.triggers.enter([flowScroll]);            // 95
  Package["meteorhacks:flow-router"].FlowRouter.triggers.exit([saveScrollPosition]);     // 96
}                                                                                        // 97
                                                                                         // 98
if (Package["meteorhacks:flow-router-ssr"]) {                                            // 99
  Package["meteorhacks:flow-router-ssr"].FlowRouter.triggers.enter([flowScroll]);        // 100
  Package["meteorhacks:flow-router-ssr"].FlowRouter.triggers.exit([saveScrollPosition]);
}                                                                                        // 102
                                                                                         // 103
HotCodePush.start.then(function () {                                                     // 104
  var currentScroll = $(window).scrollTop();                                             // 105
  scrollPositions.set("HotCodePushScrollPosition", currentScroll);                       // 106
});                                                                                      // 107
                                                                                         // 108
HotCodePush.end.then(function () {                                                       // 109
  backToPosition = scrollPositions.get("HotCodePushScrollPosition");                     // 110
  if (backToPosition) {                                                                  // 111
    scheduleScroll();                                                                    // 112
  }                                                                                      // 113
});                                                                                      // 114
                                                                                         // 115
RouterAutoscroll.scrollPositions = scrollPositions;                                      // 116
                                                                                         // 117
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['okgrow:router-autoscroll'] = {
  RouterAutoscroll: RouterAutoscroll
};

})();
