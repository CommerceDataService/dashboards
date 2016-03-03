(function(){
Template.__checkName("formUpload");
Template["formUpload"] = new Template("Template.formUpload", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("File upload"),
      category: Spacebars.call("Forms")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeIn"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Dropzone Area</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.Raw("<!-- For more info about dropzone plugin see this: https://github.com/devonbarrett/meteor-dropzone/ -->"), "\n                        ", Blaze._TemplateWith(function() {
    return {
      url: Spacebars.call("http://somewebsite.com/upload"),
      id: Spacebars.call("dropzoneDiv")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("dropzone"));
  }), "\n                    "), "\n                "), "\n            "), "\n        "), "\n\n    ") ];
}));

}).call(this);
