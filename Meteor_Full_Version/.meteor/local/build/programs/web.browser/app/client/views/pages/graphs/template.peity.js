(function(){
Template.__checkName("graphPeity");
Template["graphPeity"] = new Template("Template.graphPeity", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Peity charts"),
      category: Spacebars.call("Graphs")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInDown"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.Raw('<div class="col-lg-5">\n                <div class="jumbotron">\n                    <h1>Peity Charts</h1>\n                    <p>Is a perfect library for inline graphics visualization data.</p>\n                    <p><a href="http://benpickles.github.io/peity/" target="_blank" class="btn btn-primary btn-lg" role="button">Learn more about Peity</a>\n                    </p>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "col-lg-7"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Pie Charts <small>With custom colors.</small></h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV("\n                        ", HTML.TABLE({
    "class": "table table-bordered white-bg"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("Graph"), "\n                                ", HTML.TH("Code"), "\n                            "), "\n                            "), "\n\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "pie"
  }, "1/5"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="pie"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "1/5", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "pie"
  }, "226/360"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="pie"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "226/360", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "pie"
  }, "0.52/1.561"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="pie"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "0.52/1.561", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "pie"
  }, "1,4"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="pie"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "1,4", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "pie"
  }, "226,134"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="pie"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "226,134", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "pie"
  }, "0.52,1.041"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="pie"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "0.52,1.041", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Line and Bars Charts</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV("\n                        ", HTML.TABLE({
    "class": "table table-bordered white-bg"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("Graph"), "\n                                ", HTML.TH("Code"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "data-diameter": "40",
    "class": "updating-chart"
  }, "5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,7,3,5,2"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="line"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "5,3,9,6,5,9,7,3,5,2", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "line"
  }, "5,3,9,6,5,9,7,3,5,2"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="line"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "5,3,9,6,5,9,7,3,5,2", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "line"
  }, "5,3,2,-1,-3,-2,2,3,5,2"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="line"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "5,3,2,-1,-3,-2,2,3,5,2", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "line"
  }, "0,-3,-6,-4,-5,-4,-7,-3,-5,-2"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="line"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "0,-3,-6,-4,-5,-4,-7,-3,-5,-2", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "bar"
  }, "5,3,9,6,5,9,7,3,5,2"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="bar"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "5,3,9,6,5,9,7,3,5,2", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "bar"
  }, "5,3,2,-1,-3,-2,2,3,5,2"), "\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.CODE(HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), 'span class="bar"', HTML.CharRef({
    html: "&gt;",
    str: ">"
  }), "5,3,2,-1,-3,-2,2,3,5,2", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "/span", HTML.CharRef({
    html: "&gt;",
    str: ">"
  })), "\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n\n        "), "\n    ") ];
}));

}).call(this);
