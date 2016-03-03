(function(){
Template.__checkName("idleTimer");
Template["idleTimer"] = new Template("Template.idleTimer", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Idle timer"),
      category: Spacebars.call("Miscellaneous")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content  animated fadeInRight">\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="ibox ">\n                    <div class="ibox-title">\n                        <h5>Idle Timer</h5>\n                    </div>\n\n                    <div class="ibox-content">\n                        <div class="alert alert-danger custom-alert" style="display: none">\n\n                            Your time is up. But you can move your mouse and get back to app.\n\n                        </div>\n                        <strong>Idle Timer Plugin </strong>\n                        <p>\n                            Idle plugin provides you a way to monitor user activity with a page.Idle is defined by not moving the mouse, scrolling the mouse wheel and using the keyboard.\n                        </p>\n\n                        <div class="text-center p-lg h-200">\n\n                            <h3>Please do not move the mouse for 5 seconds</h3>\n                            <i class="fa fa-hand-o-up fa-4x"></i>\n\n                        </div>\n\n                        <p>There are two ways to instantiate. Either statically, or on an element. Element bound timers\n                            will only watch for events inside of them. You may just want page-level activity, in which\n                            case you may set up your timers on <code>document</code>, <code>document.documentElement</code>, and <code>document.body</code>.\n                            Instantiate returns jQuery for chaining.</p>\n\n                        <p>Example usage</p>\n                            <pre>\n    // Set idle time\n    $( document ).idleTimer( 5000 );\n\n    $( document ).on( "idle.idleTimer", function(event, elem, obj){\n        // function you want to fire when the user goes idle\n    });\n\n    $( document ).on( "active.idleTimer", function(event, elem, obj, triggerevent){\n        // function you want to fire when the user becomes active again\n    });\n\n</pre>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>') ];
}));

}).call(this);
