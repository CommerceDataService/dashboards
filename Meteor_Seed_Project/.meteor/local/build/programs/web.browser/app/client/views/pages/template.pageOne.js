(function(){
Template.__checkName("pageOne");
Template["pageOne"] = new Template("Template.pageOne", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Page one")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content animated fadeInRight">\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="text-center m-t-lg">\n                    <h1>\n                        Welcome in INSPINIA Meteor SeedProject\n                    </h1>\n                    <small>\n                        It is an application skeleton for a typical Meteor web app. You can use it to quickly bootstrap your webapp projects and dev environment for these projects.\n                    </small>\n                </div>\n            </div>\n        </div>\n    </div>') ];
}));

}).call(this);
