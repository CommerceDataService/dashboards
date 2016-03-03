(function(){
Template.__checkName("pageTwo");
Template["pageTwo"] = new Template("Template.pageTwo", (function() {
  var view = this;
  return [ Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Page two")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content animated fadeInRight">\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="text-center m-t-lg">\n                    <h1>\n                        Simple example of second view\n                    </h1>\n                    <small>Writen in pageTwo.html file.</small>\n                </div>\n            </div>\n        </div>\n    </div>') ];
}));

}).call(this);
