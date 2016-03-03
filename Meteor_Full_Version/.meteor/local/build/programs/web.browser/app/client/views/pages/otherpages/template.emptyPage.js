(function(){
Template.__checkName("emptyPage");
Template["emptyPage"] = new Template("Template.emptyPage", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Empty page"),
      category: Spacebars.call("Other pages")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content"
  }, "\n        ", HTML.DIV({
    "class": "middle-box text-center animated fadeInRightBig"
  }, "\n            ", HTML.Raw('<h3 class="font-bold">This is page content</h3>'), "\n            ", HTML.DIV({
    "class": "error-desc"
  }, "\n                You can create here any grid layout you want. And any variation layout you imagine:) Check out\n                main dashboard and other site. It use many different layout.\n                ", HTML.Raw("<br>"), HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard1"
      }));
    },
    "class": "btn btn-primary m-t"
  }, "Dashboard"), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
