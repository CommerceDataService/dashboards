(function(){
Template.__checkName("tableStatic");
Template["tableStatic"] = new Template("Template.tableStatic", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Static tables"),
      category: Spacebars.call("Tables")
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
  }, "\n                        ", HTML.Raw("<h5>Basic Table</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.TABLE({
    "class": "table"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("#"), "\n                                ", HTML.TH("First Name"), "\n                                ", HTML.TH("Last Name"), "\n                                ", HTML.TH("Username"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("1"), "\n                                ", HTML.TD("Mark"), "\n                                ", HTML.TD("Otto"), "\n                                ", HTML.TD("@mdo"), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("2"), "\n                                ", HTML.TD("Jacob"), "\n                                ", HTML.TD("Thornton"), "\n                                ", HTML.TD("@fat"), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("3"), "\n                                ", HTML.TD("Larry"), "\n                                ", HTML.TD("the Bird"), "\n                                ", HTML.TD("@twitter"), "\n                            "), "\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Striped Table </h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.TABLE({
    "class": "table table-striped"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("#"), "\n                                ", HTML.TH("Data"), "\n                                ", HTML.TH("User"), "\n                                ", HTML.TH("Value"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("1"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "line"
  }, "5,3,2,-1,-3,-2,2,3,5,2")), "\n                                ", HTML.TD("Samantha"), "\n                                ", HTML.TD({
    "class": "text-navy"
  }, " ", HTML.I({
    "class": "fa fa-level-up"
  }), " 40% "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("2"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "line"
  }, "5,3,9,6,5,9,7,3,5,2")), "\n                                ", HTML.TD("Jacob"), "\n                                ", HTML.TD({
    "class": "text-warning"
  }, " ", HTML.I({
    "class": "fa fa-level-down"
  }), " -20% "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("3"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "line"
  }, "1,6,3,9,5,9,5,3,9,6,4")), "\n                                ", HTML.TD("Damien"), "\n                                ", HTML.TD({
    "class": "text-navy"
  }, " ", HTML.I({
    "class": "fa fa-level-up"
  }), " 26% "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Border Table </h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.TABLE({
    "class": "table table-bordered"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("#"), "\n                                ", HTML.TH("First Name"), "\n                                ", HTML.TH("Last Name"), "\n                                ", HTML.TH("Username"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("1"), "\n                                ", HTML.TD("Mark"), "\n                                ", HTML.TD("Otto"), "\n                                ", HTML.TD("@mdo"), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("2"), "\n                                ", HTML.TD("Jacob"), "\n                                ", HTML.TD("Thornton"), "\n                                ", HTML.TD("@fat"), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("3"), "\n                                ", HTML.TD("Larry"), "\n                                ", HTML.TD("the Bird"), "\n                                ", HTML.TD("@twitter"), "\n                            "), "\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Hover Table  </h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.TABLE({
    "class": "table table-hover"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("#"), "\n                                ", HTML.TH("Data"), "\n                                ", HTML.TH("User"), "\n                                ", HTML.TH("Value"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("1"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "0.52,1.041")), "\n                                ", HTML.TD("Samantha"), "\n                                ", HTML.TD({
    "class": "text-navy"
  }, " ", HTML.I({
    "class": "fa fa-level-up"
  }), " 40% "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("2"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "226,134")), "\n                                ", HTML.TD("Jacob"), "\n                                ", HTML.TD({
    "class": "text-warning"
  }, " ", HTML.I({
    "class": "fa fa-level-down"
  }), " -20% "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("3"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "0.52/1.561")), "\n                                ", HTML.TD("Damien"), "\n                                ", HTML.TD({
    "class": "text-navy"
  }, " ", HTML.I({
    "class": "fa fa-level-up"
  }), " 26% "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Custom responsive table </h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.Raw('<div class="row">\n                            <div class="col-sm-5 m-b-xs"><select class="input-sm form-control input-s-sm inline">\n                                <option value="0">Option 1</option>\n                                <option value="1">Option 2</option>\n                                <option value="2">Option 3</option>\n                                <option value="3">Option 4</option>\n                            </select>\n                            </div>\n                            <div class="col-sm-4 m-b-xs">\n                                <div data-toggle="buttons" class="btn-group">\n                                    <label class="btn btn-sm btn-white"> <input type="radio" id="option1" name="options"> Day </label>\n                                    <label class="btn btn-sm btn-white active"> <input type="radio" id="option2" name="options"> Week </label>\n                                    <label class="btn btn-sm btn-white"> <input type="radio" id="option3" name="options"> Month </label>\n                                </div>\n                            </div>\n                            <div class="col-sm-3">\n                                <div class="input-group"><input type="text" placeholder="Search" class="input-sm form-control"> <span class="input-group-btn">\n                                        <button type="button" class="btn btn-sm btn-primary"> Go!</button> </span></div>\n                            </div>\n                        </div>'), "\n                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                            ", HTML.TABLE({
    "class": "table table-striped"
  }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n\n                                    ", HTML.TH(), "\n                                    ", HTML.TH("Project "), "\n                                    ", HTML.TH("Completed "), "\n                                    ", HTML.TH("Task"), "\n                                    ", HTML.TH("Date"), "\n                                    ", HTML.TH("Action"), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD(HTML.INPUT({
    type: "checkbox",
    checked: "",
    "class": "i-checks",
    name: "input[]"
  })), "\n                                    ", HTML.TD("Project", HTML.SMALL("This is example of project")), "\n                                    ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "0.52/1.561")), "\n                                    ", HTML.TD("20%"), "\n                                    ", HTML.TD("Jul 14, 2013"), "\n                                    ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD(HTML.INPUT({
    type: "checkbox",
    "class": "i-checks",
    name: "input[]"
  })), "\n                                    ", HTML.TD("Alpha project"), "\n                                    ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "6,9")), "\n                                    ", HTML.TD("40%"), "\n                                    ", HTML.TD("Jul 16, 2013"), "\n                                    ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD(HTML.INPUT({
    type: "checkbox",
    "class": "i-checks",
    name: "input[]"
  })), "\n                                    ", HTML.TD("Betha project"), "\n                                    ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "3,1")), "\n                                    ", HTML.TD("75%"), "\n                                    ", HTML.TD("Jul 18, 2013"), "\n                                    ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD(HTML.INPUT({
    type: "checkbox",
    "class": "i-checks",
    name: "input[]"
  })), "\n                                    ", HTML.TD("Gamma project"), "\n                                    ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "4,9")), "\n                                    ", HTML.TD("18%"), "\n                                    ", HTML.TD("Jul 22, 2013"), "\n                                    ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n\n        "), "\n    ") ];
}));

}).call(this);
