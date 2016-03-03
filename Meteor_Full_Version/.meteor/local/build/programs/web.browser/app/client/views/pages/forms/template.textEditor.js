(function(){
Template.__checkName("textEditor");
Template["textEditor"] = new Template("Template.textEditor", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Text editor"),
      category: Spacebars.call("Forms")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Wyswig Summernote Editor</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content no-padding">\n\n                        <div class="summernote">\n                            <h3>Lorem Ipsum is simply</h3>\n                            dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the industry\'s</strong> standard dummy text ever since the 1500s,\n                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic\n                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n                            <br>\n                            <br>\n                            <ul>\n                                <li>Remaining essentially unchanged</li>\n                                <li>Make a type specimen book</li>\n                                <li>Unknown printer</li>\n                            </ul>\n                        </div>\n\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-12">\n                <div class="ibox float-e-margins">\n\n                    <div class="ibox-content">\n\n                        <h2>\n                            Summernote\n                        </h2>\n                        <p>\n                            Super Simple WYSIWYG Editor on Bootstrap\n                        </p>\n\n                        <div class="alert alert-warning">\n                            Full documentation for Summernote.js, including examples and API calls, keybored shortcuts, PHP Examples, Django installation, and Rails (gem) integration can be found at:\n                            <a href="http://hackerwins.github.io/summernote/features.html#api">http://hackerwins.github.io/summernote/features.html#api</a>\n                            <!--<div class="summernote">summernote 2</div>-->\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n    ") ];
}));

}).call(this);
