(function(){
Template.__checkName("pageHeading");
Template["pageHeading"] = new Template("Template.pageHeading", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row wrapper border-bottom white-bg page-heading"
  }, "\n        ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n            ", HTML.H2(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n            ", HTML.OL({
    "class": "breadcrumb"
  }, "\n                ", HTML.LI("\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: view.lookup("home")
      }));
    }
  }, "Home"), "\n                "), "\n                ", Blaze.If(function() {
    return Spacebars.call(view.lookup("category"));
  }, function() {
    return [ "\n                ", HTML.LI("\n                    ", HTML.A(Blaze.View("lookup:category", function() {
      return Spacebars.mustache(view.lookup("category"));
    })), "\n                "), "\n                " ];
  }), "\n                ", HTML.LI({
    "class": "active"
  }, "\n                    ", HTML.STRONG(Blaze.View("lookup:title", function() {
    return Spacebars.mustache(view.lookup("title"));
  })), "\n                "), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
