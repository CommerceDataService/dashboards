(function(){
Template.__checkName("fooTables");
Template["fooTables"] = new Template("Template.fooTables", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Foo Table"),
      category: Spacebars.call("Tables")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.Raw('<div class="ibox-title">\n                        <h5>FooTable with row toggler, sorting and pagination</h5>\n\n                        <div class="ibox-tools">\n                            <a class="collapse-link">\n                                <i class="fa fa-chevron-up"></i>\n                            </a>\n                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n                                <i class="fa fa-wrench"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-user">\n                                <li><a href="#">Config option 1</a>\n                                </li>\n                                <li><a href="#">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class="close-link">\n                                <i class="fa fa-times"></i>\n                            </a>\n                        </div>\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.TABLE({
    "class": "footable table table-stripped toggle-arrow-tiny",
    "data-page-size": "8"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n\n                                ", HTML.TH({
    "data-toggle": "true"
  }, "Project"), "\n                                ", HTML.TH("Name"), "\n                                ", HTML.TH("Phone"), "\n                                ", HTML.TH({
    "data-hide": "all"
  }, "Company"), "\n                                ", HTML.TH({
    "data-hide": "all"
  }, "Completed"), "\n                                ", HTML.TH({
    "data-hide": "all"
  }, "Task"), "\n                                ", HTML.TH({
    "data-hide": "all"
  }, "Date"), "\n                                ", HTML.TH("Action"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("Project - This is example of project"), "\n                                ", HTML.TD("Patrick Smith"), "\n                                ", HTML.TD("0800 051213"), "\n                                ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "0.52/1.561")), "\n                                ", HTML.TD("20%"), "\n                                ", HTML.TD("Jul 14, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Alpha project"), "\n                                ", HTML.TD("Alice Jackson"), "\n                                ", HTML.TD("0500 780909"), "\n                                ", HTML.TD("Nec Euismod In Company"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "6,9")), "\n                                ", HTML.TD("40%"), "\n                                ", HTML.TD("Jul 16, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Betha project"), "\n                                ", HTML.TD("John Smith"), "\n                                ", HTML.TD("0800 1111"), "\n                                ", HTML.TD("Erat Volutpat"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "3,1")), "\n                                ", HTML.TD("75%"), "\n                                ", HTML.TD("Jul 18, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Gamma project"), "\n                                ", HTML.TD("Anna Jordan"), "\n                                ", HTML.TD("(016977) 0648"), "\n                                ", HTML.TD("Tellus Ltd"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "4,9")), "\n                                ", HTML.TD("18%"), "\n                                ", HTML.TD("Jul 22, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Alpha project"), "\n                                ", HTML.TD("Alice Jackson"), "\n                                ", HTML.TD("0500 780909"), "\n                                ", HTML.TD("Nec Euismod In Company"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "6,9")), "\n                                ", HTML.TD("40%"), "\n                                ", HTML.TD("Jul 16, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Project\n                                    ", HTML.SMALL("This is example of project"), "\n                                "), "\n                                ", HTML.TD("Patrick Smith"), "\n                                ", HTML.TD("0800 051213"), "\n                                ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "0.52/1.561")), "\n                                ", HTML.TD("20%"), "\n                                ", HTML.TD("Jul 14, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Gamma project"), "\n                                ", HTML.TD("Anna Jordan"), "\n                                ", HTML.TD("(016977) 0648"), "\n                                ", HTML.TD("Tellus Ltd"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "4,9")), "\n                                ", HTML.TD("18%"), "\n                                ", HTML.TD("Jul 22, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Project\n                                    ", HTML.SMALL("This is example of project"), "\n                                "), "\n                                ", HTML.TD("Patrick Smith"), "\n                                ", HTML.TD("0800 051213"), "\n                                ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "0.52/1.561")), "\n                                ", HTML.TD("20%"), "\n                                ", HTML.TD("Jul 14, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Alpha project"), "\n                                ", HTML.TD("Alice Jackson"), "\n                                ", HTML.TD("0500 780909"), "\n                                ", HTML.TD("Nec Euismod In Company"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "6,9")), "\n                                ", HTML.TD("40%"), "\n                                ", HTML.TD("Jul 16, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Betha project"), "\n                                ", HTML.TD("John Smith"), "\n                                ", HTML.TD("0800 1111"), "\n                                ", HTML.TD("Erat Volutpat"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "3,1")), "\n                                ", HTML.TD("75%"), "\n                                ", HTML.TD("Jul 18, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Gamma project"), "\n                                ", HTML.TD("Anna Jordan"), "\n                                ", HTML.TD("(016977) 0648"), "\n                                ", HTML.TD("Tellus Ltd"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "4,9")), "\n                                ", HTML.TD("18%"), "\n                                ", HTML.TD("Jul 22, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Alpha project"), "\n                                ", HTML.TD("Alice Jackson"), "\n                                ", HTML.TD("0500 780909"), "\n                                ", HTML.TD("Nec Euismod In Company"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "6,9")), "\n                                ", HTML.TD("40%"), "\n                                ", HTML.TD("Jul 16, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Project\n                                    ", HTML.SMALL("This is example of project"), "\n                                "), "\n                                ", HTML.TD("Patrick Smith"), "\n                                ", HTML.TD("0800 051213"), "\n                                ", HTML.TD("Inceptos Hymenaeos Ltd"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "0.52/1.561")), "\n                                ", HTML.TD("20%"), "\n                                ", HTML.TD("Jul 14, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("Gamma project"), "\n                                ", HTML.TD("Anna Jordan"), "\n                                ", HTML.TD("(016977) 0648"), "\n                                ", HTML.TD("Tellus Ltd"), "\n                                ", HTML.TD(HTML.SPAN({
    "class": "pie"
  }, "4,9")), "\n                                ", HTML.TD("18%"), "\n                                ", HTML.TD("Jul 22, 2013"), "\n                                ", HTML.TD(HTML.A({
    href: "#"
  }, HTML.I({
    "class": "fa fa-check text-navy"
  }))), "\n                            "), "\n                            "), "\n                            ", HTML.TFOOT("\n                            ", HTML.TR("\n                                ", HTML.TD({
    colspan: "5"
  }, "\n                                    ", HTML.UL({
    "class": "pagination pull-right"
  }), "\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.Raw('<div class="ibox-title">\n                        <h5>Simple FooTable with pagination, sorting and filter</h5>\n\n                        <div class="ibox-tools">\n                            <a class="collapse-link">\n                                <i class="fa fa-chevron-up"></i>\n                            </a>\n                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n                                <i class="fa fa-wrench"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-user">\n                                <li><a href="#">Config option 1</a>\n                                </li>\n                                <li><a href="#">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class="close-link">\n                                <i class="fa fa-times"></i>\n                            </a>\n                        </div>\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.Raw('<input type="text" class="form-control input-sm m-b-xs" id="filter" placeholder="Search in table">'), "\n\n                        ", HTML.TABLE({
    "class": "footable table table-stripped",
    "data-page-size": "8",
    "data-filter": "#filter"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("Rendering engine"), "\n                                ", HTML.TH("Browser"), "\n                                ", HTML.TH({
    "data-hide": "phone,tablet"
  }, "Platform(s)"), "\n                                ", HTML.TH({
    "data-hide": "phone,tablet"
  }, "Engine version"), "\n                                ", HTML.TH({
    "data-hide": "phone,tablet"
  }, "CSS grade"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Trident"), "\n                                ", HTML.TD("Internet\n                                    Explorer 4.0\n                                "), "\n                                ", HTML.TD("Win 95+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "4"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Trident"), "\n                                ", HTML.TD("Internet\n                                    Explorer 5.0\n                                "), "\n                                ", HTML.TD("Win 95+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Trident"), "\n                                ", HTML.TD("Internet\n                                    Explorer 5.5\n                                "), "\n                                ", HTML.TD("Win 95+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "5.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Netscape Navigator 9"), "\n                                ", HTML.TD("Win 98+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("Safari 1.3"), "\n                                ", HTML.TD("OSX.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "312.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("Safari 2.0"), "\n                                ", HTML.TD("OSX.4+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "419.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("Safari 3.0"), "\n                                ", HTML.TD("OSX.4+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "522.1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("OmniWeb 5.5"), "\n                                ", HTML.TD("OSX.4+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "420"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("iPod Touch / iPhone"), "\n                                ", HTML.TD("iPod"), "\n                                ", HTML.TD({
    "class": "center"
  }, "420.1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("S60"), "\n                                ", HTML.TD("S60"), "\n                                ", HTML.TD({
    "class": "center"
  }, "413"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 7.0"), "\n                                ", HTML.TD("Win 95+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 7.5"), "\n                                ", HTML.TD("Win 95+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 8.0"), "\n                                ", HTML.TD("Win 95+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 8.5"), "\n                                ", HTML.TD("Win 95+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 9.0"), "\n                                ", HTML.TD("Win 95+ / OSX.3+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 9.2"), "\n                                ", HTML.TD("Win 88+ / OSX.3+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 9.5"), "\n                                ", HTML.TD("Win 88+ / OSX.3+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera for Wii"), "\n                                ", HTML.TD("Wii"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Nokia N800"), "\n                                ", HTML.TD("N800"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Nintendo DS browser"), "\n                                ", HTML.TD("Nintendo DS"), "\n                                ", HTML.TD({
    "class": "center"
  }, "8.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C/A", HTML.SUP("1")), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("KHTML"), "\n                                ", HTML.TD("Konqureror 3.1"), "\n                                ", HTML.TD("KDE 3.1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "3.1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("KHTML"), "\n                                ", HTML.TD("Konqureror 3.3"), "\n                                ", HTML.TD("KDE 3.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "3.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("KHTML"), "\n                                ", HTML.TD("Konqureror 3.5"), "\n                                ", HTML.TD("KDE 3.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "3.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Tasman"), "\n                                ", HTML.TD("Internet Explorer 4.5"), "\n                                ", HTML.TD("Mac OS 8-9"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Tasman"), "\n                                ", HTML.TD("Internet Explorer 5.1"), "\n                                ", HTML.TD("Mac OS 7.6-9"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Tasman"), "\n                                ", HTML.TD("Internet Explorer 5.2"), "\n                                ", HTML.TD("Mac OS 8-X"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("NetFront 3.1"), "\n                                ", HTML.TD("Embedded devices"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("NetFront 3.4"), "\n                                ", HTML.TD("Embedded devices"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("Dillo 0.8"), "\n                                ", HTML.TD("Embedded devices"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("Links"), "\n                                ", HTML.TD("Text only"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("Lynx"), "\n                                ", HTML.TD("Text only"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("IE Mobile"), "\n                                ", HTML.TD("Windows Mobile 6"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("PSP browser"), "\n                                ", HTML.TD("PSP"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeU"
  }, "\n                                ", HTML.TD("Other browsers"), "\n                                ", HTML.TD("All others"), "\n                                ", HTML.TD("-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "U"), "\n                            "), "\n                            "), "\n                            ", HTML.TFOOT("\n                            ", HTML.TR("\n                                ", HTML.TD({
    colspan: "5"
  }, "\n                                    ", HTML.UL({
    "class": "pagination pull-right"
  }), "\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
