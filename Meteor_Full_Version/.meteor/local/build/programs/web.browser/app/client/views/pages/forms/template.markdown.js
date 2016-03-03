(function(){
Template.__checkName("markdown");
Template["markdown"] = new Template("Template.markdown", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Markdown"),
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
  }, "\n                        ", HTML.Raw("<h5>Bootstrap markdown <small>http://www.codingdrama.com/bootstrap-markdown/</small></h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.Raw("<p>\n                            Bootstrap-Markdown designed to be easily integrated with your bootstrap project. It exposes useful API that allow you to fully hook-in into the plugin\n                        </p>"), "\n                        ", HTML.Raw('<p>\n                            Switch regular textarea within your form into Bootstrap-Markdown editor seamlessly by adding <code>$("#markdown").markdown();</code>\n                        </p>'), "\n\n                            ", HTML.TEXTAREA({
    name: "content",
    id: "markdown",
    rows: "10",
    value: "h1 header\n============\n\nParagraphs are separated by a blank line.\n\n2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists\nlook like:\n\n  * this one\n  * that one\n  * the other one\n                            "
  }), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.Raw("<h2>\n                            Usage\n                        </h2>"), "\n                        ", HTML.Raw("<p>\n                            Beside using above data-attributes, you could call it via code\n                        </p>"), "\n                            ", HTML.Raw('<pre>\n$("#some-textarea").markdown({autofocus:false,savable:false}) </pre>'), "\n                        ", HTML.Raw("<h4>\n                            Available options are:\n                        </h4>"), "\n\n                        ", HTML.TABLE({
    "class": "table table-striped"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("Option Name"), "\n                                ", HTML.TH("Type"), "\n                                ", HTML.TH("Description"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("autofocus"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("boolean")), "\n                                ", HTML.TD("Indicates that editor will focused after instantiated. Default to ", HTML.CODE("false")), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("savable"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("boolean")), "\n                                ", HTML.TD("Indicates that editor will have save button and action. Default to ", HTML.CODE("false")), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("hideable"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("boolean")), "\n                                ", HTML.TD("If set to ", HTML.CODE("true"), " then the editor will be hidden on ", HTML.CODE("blur"), " event. Default to ", HTML.CODE("false")), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("width"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("mixed")), "\n                                ", HTML.TD("The editor width. Default to ", HTML.CODE("inherit"), ". You could supply any numerical value (that will be set as css), or supply valid Bootstrap class (something like ", HTML.CODE("span2"), ")"), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("height"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("mixed")), "\n                                ", HTML.TD("The editor height. Default to ", HTML.CODE("inherit")), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("resize"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("string")), "\n                                ", HTML.TD("Option to disable or change the resize property, possible values ", HTML.CODE("none"), ",", HTML.CODE("both"), ",", HTML.CODE("horizontal"), ",", HTML.CODE("vertical"), ". Default ", HTML.CODE("none"), HTML.BR(), "\n                                    If this option is enabled, the user will be able to resize the editor and preview screen.", HTML.BR(), HTML.BR(), "\n                                    ", HTML.DIV({
    "class": "alert alert-warning"
  }, "\n                                        ", HTML.STRONG("Browser support"), "\n                                        ", HTML.P("This is currently only supported on limited browsers. See ", HTML.A({
    href: "http://caniuse.com/css-resize",
    target: "_blank"
  }, "Can you run it: Resize"), " for all supported browsers"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("iconlibrary"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("string")), "\n                                ", HTML.TD("The icon library to use. Glyphicons (", HTML.CODE("glyph"), ") and Font Awesome (", HTML.CODE("fa"), ") are supported. In order to use Font Awesome properly, you'll need to ", HTML.A({
    href: "http://fontawesome.io/get-started/"
  }, "include Font Awesome stylesheet"), " yourself. Default to ", HTML.CODE("glyph")), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("language"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("string")), "\n                                ", HTML.TD("Localization setting. Default to ", HTML.CODE("en")), "\n                            "), "\n\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("footer"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("mixed")), "\n                                ", HTML.TD("Footer dom. Can be string or callback. Default is empty string"), "\n                            "), "\n\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("fullscreen"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("object")), "\n                                ", HTML.TD("Contains ", HTML.CODE("enable"), " (", HTML.CODE("bool"), ") and ", HTML.CODE("icons"), " (", HTML.CODE("object"), ") keys."), "\n                            "), "\n\n\n\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("hiddenButtons"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("mixed")), "\n                                ", HTML.TD("Array or string of button names to be hidden. Default is empty string"), "\n                            "), "\n\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.CODE("disabledButtons"), "\n                                "), "\n                                ", HTML.TD(HTML.CODE("mixed")), "\n                                ", HTML.TD("Array or string of button names to be disabled. Default is empty string"), "\n                            "), "\n\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n        "), "\n\n\n    ") ];
}));

}).call(this);
