(function(){
Template.__checkName("treeView");
Template["treeView"] = new Template("Template.treeView", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Tree view"),
      category: Spacebars.call("Miscellaneous")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-12">\n                <div class="ibox float-e-margins">\n                    <div class="ibox-content">\n\n                        <strong>jsTree</strong> is jquery plugin, that provides interactive trees. It is absolutely free, open source and distributed under the MIT license. jsTree is easily extendable, themable and configurable, it supports HTML &amp; JSON data sources and AJAX loading.\n                        Get more info on: <a href="http://www.jstree.com/" target="_blank">http://www.jstree.com/</a>\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Basic example <small>with custom Font Awesome icons.</small></h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.DIV({
    id: "jstree1"
  }, "\n                            ", HTML.UL("\n                                ", HTML.LI({
    "class": "jstree-open"
  }, "Admin theme\n                                    ", HTML.UL("\n                                        ", HTML.Raw('<li>css\n                                            <ul>\n                                                <li data-jstree="{&quot;type&quot;:&quot;css&quot;}">animate.css</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;css&quot;}">bootstrap.css</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;css&quot;}">style.css</li>\n                                            </ul>\n                                        </li>'), "\n                                        ", HTML.Raw('<li>email-templates\n                                            <ul>\n                                                <li data-jstree="{&quot;type&quot;:&quot;html&quot;}">action.html</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;html&quot;}">alert.html</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;html&quot;}">billing.html</li>\n                                            </ul>\n                                        </li>'), "\n                                        ", HTML.Raw('<li>fonts\n                                            <ul>\n                                                <li data-jstree="{&quot;type&quot;:&quot;svg&quot;}">glyphicons-halflings-regular.eot</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;svg&quot;}">glyphicons-halflings-regular.svg</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;svg&quot;}">glyphicons-halflings-regular.ttf</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;svg&quot;}">glyphicons-halflings-regular.woff</li>\n                                            </ul>\n                                        </li>'), "\n                                        ", HTML.Raw('<li class="jstree-open">img\n                                            <ul>\n                                                <li data-jstree="{&quot;type&quot;:&quot;img&quot;}">profile_small.jpg</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;img&quot;}">angular_logo.png</li>\n                                                <li class="text-navy" data-jstree="{&quot;type&quot;:&quot;img&quot;}">html_logo.png</li>\n                                                <li class="text-navy" data-jstree="{&quot;type&quot;:&quot;img&quot;}">mvc_logo.png</li>\n                                            </ul>\n                                        </li>'), "\n                                        ", HTML.Raw('<li class="jstree-open">js\n                                            <ul>\n                                                <li data-jstree="{&quot;type&quot;:&quot;js&quot;}">inspinia.js</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;js&quot;}">bootstrap.js</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;js&quot;}">jquery-2.1.1.js</li>\n                                                <li data-jstree="{&quot;type&quot;:&quot;js&quot;}">jquery-ui.custom.min.js</li>\n                                                <li class="text-navy" data-jstree="{&quot;type&quot;:&quot;js&quot;}">jquery-ui-1.10.4.min.js</li>\n                                            </ul>\n                                        </li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> affix.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> dashboard.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> buttons.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> calendar.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> contacts.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> css_animation.html</li>'), "\n                                        ", HTML.Raw('<li class="text-navy" data-jstree="{&quot;type&quot;:&quot;html&quot;}"> flot_chart.html</li>'), "\n                                        ", HTML.Raw('<li class="text-navy" data-jstree="{&quot;type&quot;:&quot;html&quot;}"> google_maps.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> icons.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> inboice.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> login.html</li>'), "\n                                        ", HTML.LI({
    "data-jstree": '{"type":"html"}'
  }, " ", Blaze.View("lookup:pathFor", function() {
    return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
      route: "mailbox"
    }));
  })), "\n                                        ", HTML.LI({
    "data-jstree": '{"type":"html"}'
  }, " ", Blaze.View("lookup:pathFor", function() {
    return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
      route: "profile"
    }));
  })), "\n                                        ", HTML.Raw('<li class="text-navy" data-jstree="{&quot;type&quot;:&quot;html&quot;}"> register.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> timeline.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> video.html</li>'), "\n                                        ", HTML.Raw('<li data-jstree="{&quot;type&quot;:&quot;html&quot;}"> widgets.html</li>'), "\n                                    "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>JSON example</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n\n                        <div id="using_json"></div>\n\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
