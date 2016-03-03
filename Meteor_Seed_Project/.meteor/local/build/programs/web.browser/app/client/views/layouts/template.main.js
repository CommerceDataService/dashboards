(function(){
Template.__checkName("mainLayout");
Template["mainLayout"] = new Template("Template.mainLayout", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Wrapper-->\n    "), HTML.DIV({
    id: "wrapper"
  }, "\n\n        ", HTML.Raw("<!-- Navigation -->"), "\n        ", Spacebars.include(view.lookupTemplate("navigation")), "\n\n        ", HTML.Raw("<!-- Page wraper -->"), "\n        ", HTML.DIV({
    id: "page-wrapper",
    "class": "gray-bg"
  }, "\n\n            ", HTML.Raw("<!-- Page wrapper -->"), "\n            ", Spacebars.include(view.lookupTemplate("topNavbar")), "\n\n            ", HTML.Raw("<!-- Main view  -->"), "\n            ", Spacebars.include(view.lookupTemplate("yield")), "\n\n            ", HTML.Raw("<!-- Footer -->"), "\n            ", Spacebars.include(view.lookupTemplate("footer")), "\n\n        "), "\n        ", HTML.Raw("<!-- End page wrapper-->"), "\n\n    "), HTML.Raw("\n    <!-- End wrapper-->") ];
}));

}).call(this);
