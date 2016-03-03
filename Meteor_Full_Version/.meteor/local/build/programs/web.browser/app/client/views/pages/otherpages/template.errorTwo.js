(function(){
Template.__checkName("errorTwo");
Template["errorTwo"] = new Template("Template.errorTwo", (function() {
  var view = this;
  return HTML.DIV({
    "class": "middle-box text-center animated fadeInDown"
  }, HTML.Raw('\n        <h1>500</h1>\n        <h3 class="font-bold">Internal Server Error</h3>\n\n        '), HTML.DIV({
    "class": "error-desc"
  }, "\n            The server encountered something unexpected that didn't allow it to complete the request. We apologize.", HTML.Raw("<br>"), "\n            You can go back to main page: ", HTML.Raw("<br>"), HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard1"
      }));
    },
    "class": "btn btn-primary m-t"
  }, "Dashboard"), "\n        "), "\n    ");
}));

}).call(this);
