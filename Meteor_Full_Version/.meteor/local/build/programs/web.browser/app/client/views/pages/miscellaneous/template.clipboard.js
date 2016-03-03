(function(){
Template.__checkName("clipboard");
Template["clipboard"] = new Template("Template.clipboard", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Copy to clipboard"),
      category: Spacebars.call("Miscellaneous")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content  animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox "
  }, "\n                    ", HTML.Raw('<div class="ibox-title">\n                        <h5>Copy to clipboard</h5>\n                    </div>'), "\n\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n\n                        ", HTML.Raw("<p>\n                            Modern copy to clipboard features. Just 2kb without flash!\n                        </p>"), "\n\n                        ", HTML.DIV({
    "class": "row"
  }, "\n                            ", HTML.Raw('<div class="col-md-6">\n                                <h3>Copy text from another element</h3>\n\n                                <p>\n                                    A pretty common use case is to copy content from another element. You can do that by adding a <code>data-clipboard-target</code> attribute in your trigger element.\n                                </p>\n                                <p>\n                                    The value you include on this attribute needs to match another\'s element selector.\n                                </p>\n\n                                <p class="text-navy font-bold" id="copytext">Please press the button and copy me!</p>\n                                <button class="btn btn-white" data-clipboard-target="#copytext"><i class="fa fa-copy"></i> Copy</button>\n\n                                <div class="m-t">\n                                    <strong>HTML markup</strong>\n                                </div>\n                                    <pre>\n\n&lt;p id="copytext"&gt;Please press the button and copy me!&lt;/p&gt;\n\n&lt;button class="btn btn-white" data-clipboard-target="#copytext"&gt;&lt;i class="fa fa-copy"&gt;&lt;/i&gt; Copy&lt;/button&gt;\n                                    </pre>\n                            </div>'), "\n                            ", HTML.DIV({
    "class": "col-md-6"
  }, "\n                                ", HTML.Raw("<h3>Cut text from another element</h3>"), "\n\n                                ", HTML.Raw("<p>\n                                    Additionally, you can define a <code>data-clipboard-action</code> attribute to specify if you want to either <code>copy</code> or <code>cut</code> content.\n                                </p>"), "\n\n                                ", HTML.TEXTAREA({
    "class": "form-control",
    id: "cuttext",
    value: "This is example text that will be cuted fromt this textarea control."
  }), "\n                                ", HTML.Raw('<button class="btn btn-white m-t" data-clipboard-action="cut" data-clipboard-target="#cuttext"><i class="fa fa-cut"></i> Cut to clipboard</button>'), "\n\n                                ", HTML.Raw('<div class="m-t">\n                                    <strong>HTML markup</strong>\n                                </div>'), "\n\n                                    ", HTML.Raw('<pre>\n\n&lt;textarea id="cuttext"&gt;This is example text that will be cuted fromt this textarea control.&lt;/textarea&gt;\n\n&lt;button class="btn btn-white" data-clipboard-action="cut" data-clipboard-target="#cuttext"&gt;&lt;i class="fa fa-cut"&gt;&lt;/i&gt; Cut to clipboard&lt;/button&gt;\n                                    </pre>'), "\n\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n                ", HTML.DIV({
    "class": "ibox "
  }, "\n                    ", HTML.Raw('<div class="ibox-title">\n                        <h5>Playground</h5>\n                    </div>'), "\n\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n\n                        ", HTML.Raw("<strong>\n\n                            Paste and test you copied text.\n                        </strong>"), "\n\n                            ", HTML.TEXTAREA({
    "class": "form-control border-left m-t",
    style: "height: 200px",
    value: "\n                            "
  }), "\n\n                    "), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
