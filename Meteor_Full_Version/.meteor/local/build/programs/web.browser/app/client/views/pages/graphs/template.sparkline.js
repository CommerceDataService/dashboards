(function(){
Template.__checkName("graphSparkline");
Template["graphSparkline"] = new Template("Template.graphSparkline", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Sparkline charts"),
      category: Spacebars.call("Graphs")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInDown"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.Raw('<div class="col-lg-5">\n                <div class="jumbotron">\n                    <h1>Sparkline</h1>\n                    <p>It\'s another graet library for inline graphics visualization.</p>\n                    <p><a href="http://omnipotent.net/jquery.sparkline" target="_blank" class="btn btn-primary btn-lg" role="button">Learn more about Sparkline</a>\n                    </p>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "col-lg-7"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Sparkline Charts <small>With custom colors.</small></h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV("\n                        ", HTML.TABLE({
    "class": "table table-bordered white-bg"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("Graph"), "\n                                ", HTML.TH("Type"), "\n                            "), "\n                            "), "\n\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    id: "sparkline1"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Inline line chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    id: "sparkline2"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Bar chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    id: "sparkline3"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Pie chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    id: "sparkline4"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Long inline chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    id: "sparkline5"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Tristate chart\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    id: "sparkline6"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Discrete chart\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Custom pie size example</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content text-center h-200">\n                        <span id="sparkline7"></span>\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Custom bar size example</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content text-center h-200">\n                        <span id="sparkline8"></span>\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Custom line size example</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content text-center h-200">\n                        <span id="sparkline9"></span>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n    ") ];
}));

}).call(this);
