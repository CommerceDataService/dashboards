(function(){
Template.__checkName("blankLayout");
Template["blankLayout"] = new Template("Template.blankLayout", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Main view  -->\n    "), Spacebars.include(view.lookupTemplate("yield")) ];
}));

}).call(this);
