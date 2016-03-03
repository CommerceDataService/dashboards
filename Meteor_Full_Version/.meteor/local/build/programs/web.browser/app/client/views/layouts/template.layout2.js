(function(){
Template.__checkName("layout2");
Template["layout2"] = new Template("Template.layout2", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Wrapper-->\n    "), HTML.DIV({
    id: "wrapper"
  }, "\n\n        ", HTML.Raw("<!-- Page wraper -->"), "\n        ", HTML.DIV({
    id: "page-wrapper",
    "class": "gray-bg"
  }, "\n\n            ", HTML.Raw("<!-- Navigation -->"), "\n            ", Spacebars.include(view.lookupTemplate("topNavigation")), "\n\n            ", HTML.Raw("<!-- Main view  -->"), "\n            ", Spacebars.include(view.lookupTemplate("yield")), "\n\n        "), "\n    ") ];
}));

}).call(this);
