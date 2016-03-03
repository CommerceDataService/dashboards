(function(){
Template.__checkName("graphRickshaw");
Template["graphRickshaw"] = new Template("Template.graphRickshaw", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Rickshaw charts"),
      category: Spacebars.call("Graphs")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Simple area example <small>With custom colors.</small></h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div id="chart" class="rickshaw_graph"></div>\n\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Multiple Area</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div id="rickshaw_multi" class="rickshaw_graph"></div>\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>One line Example</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div id="rickshaw_line" class="rickshaw_graph"></div>\n\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Multiple Line Example</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div id="rickshaw_multi_line" class="rickshaw_graph"></div>\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Bars</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div id="rickshaw_bars" class="rickshaw_graph"></div>\n\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Stacked Bars</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div id="rickshaw_bars_stacked" class="rickshaw_graph"></div>\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Scatterplot</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div id="rickshaw_scatterplot" class="rickshaw_graph"></div>\n\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n\n    ") ];
}));

}).call(this);
