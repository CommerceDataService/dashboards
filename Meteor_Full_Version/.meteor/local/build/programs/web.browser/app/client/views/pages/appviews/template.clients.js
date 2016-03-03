(function(){
Template.__checkName("clients");
Template["clients"] = new Template("Template.clients", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Clients"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content  animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-sm-8"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.Raw('<span class="text-muted small pull-right">Last modification: <i class="fa fa-clock-o"></i> 2:10 pm - 12.06.2014</span>'), "\n                        ", HTML.Raw("<h2>Clients</h2>"), "\n                        ", HTML.Raw("<p>\n                            All clients need to be verified before you can send email and set a project.\n                        </p>"), "\n                        ", HTML.Raw('<div class="input-group">\n                            <input type="text" placeholder="Search client " class="input form-control">\n                                <span class="input-group-btn">\n                                        <button type="button" class="btn btn btn-primary"> <i class="fa fa-search"></i> Search</button>\n                                </span>\n                        </div>'), "\n                        ", HTML.DIV({
    "class": "clients-list"
  }, "\n                            ", HTML.Raw('<ul class="nav nav-tabs">\n                                <span class="pull-right small text-muted">1406 Elements</span>\n                                <li class="active"><a data-toggle="tab" href="#tab-1"><i class="fa fa-user"></i> Contacts</a></li>\n                                <li class=""><a data-toggle="tab" href="#tab-2"><i class="fa fa-briefcase"></i> Companies</a></li>\n                            </ul>'), "\n                            ", HTML.DIV({
    "class": "tab-content"
  }, "\n                                ", HTML.DIV({
    id: "tab-1",
    "class": "tab-pane active"
  }, "\n                                    ", HTML.DIV({
    "class": "full-height-scroll"
  }, "\n                                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                                            ", HTML.TABLE({
    "class": "table table-striped table-hover"
  }, "\n                                                ", HTML.TBODY("\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.IMG({
    alt: "image",
    src: "img/a2.jpg"
  }), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-1",
    "class": "client-link"
  }, "Anthony Jackson")), "\n                                                    ", HTML.TD(" Tellus Institute"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" gravida@rbisit.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.IMG({
    alt: "image",
    src: "img/a3.jpg"
  }), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-2",
    "class": "client-link"
  }, "Rooney Lindsay")), "\n                                                    ", HTML.TD("Proin Limited"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" rooney@proin.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.IMG({
    alt: "image",
    src: "img/a4.jpg"
  }), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-3",
    "class": "client-link"
  }, "Lionel Mcmillan")), "\n                                                    ", HTML.TD("Et Industries"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-phone"
  }, " ")), "\n                                                    ", HTML.TD(" +432 955 908"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a5.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-4",
    "class": "client-link"
  }, "Edan Randall")), "\n                                                    ", HTML.TD("Integer Sem Corp."), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-phone"
  }, " ")), "\n                                                    ", HTML.TD(" +422 600 213"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-warning"
  }, "Waiting")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a6.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-2",
    "class": "client-link"
  }, "Jasper Carson")), "\n                                                    ", HTML.TD("Mone Industries"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-phone"
  }, " ")), "\n                                                    ", HTML.TD(" +400 468 921"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a7.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-3",
    "class": "client-link"
  }, "Reuben Pacheco")), "\n                                                    ", HTML.TD("Magna Associates"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" pacheco@manga.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-info"
  }, "Phoned")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a1.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-1",
    "class": "client-link"
  }, "Simon Carson")), "\n                                                    ", HTML.TD("Erat Corp."), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" Simon@erta.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a3.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-2",
    "class": "client-link"
  }, "Rooney Lindsay")), "\n                                                    ", HTML.TD("Proin Limited"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" rooney@proin.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-warning"
  }, "Waiting")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a4.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-3",
    "class": "client-link"
  }, "Lionel Mcmillan")), "\n                                                    ", HTML.TD("Et Industries"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-phone"
  }, " ")), "\n                                                    ", HTML.TD(" +432 955 908"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a5.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-4",
    "class": "client-link"
  }, "Edan Randall")), "\n                                                    ", HTML.TD("Integer Sem Corp."), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-phone"
  }, " ")), "\n                                                    ", HTML.TD(" +422 600 213"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a2.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-1",
    "class": "client-link"
  }, "Anthony Jackson")), "\n                                                    ", HTML.TD(" Tellus Institute"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" gravida@rbisit.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-danger"
  }, "Deleted")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a7.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-2",
    "class": "client-link"
  }, "Reuben Pacheco")), "\n                                                    ", HTML.TD("Magna Associates"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" pacheco@manga.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a5.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-3",
    "class": "client-link"
  }, "Edan Randall")), "\n                                                    ", HTML.TD("Integer Sem Corp."), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-phone"
  }, " ")), "\n                                                    ", HTML.TD(" +422 600 213"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-info"
  }, "Phoned")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a6.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-4",
    "class": "client-link"
  }, "Jasper Carson")), "\n                                                    ", HTML.TD("Mone Industries"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-phone"
  }, " ")), "\n                                                    ", HTML.TD(" +400 468 921"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a7.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-2",
    "class": "client-link"
  }, "Reuben Pacheco")), "\n                                                    ", HTML.TD("Magna Associates"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" pacheco@manga.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a1.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-1",
    "class": "client-link"
  }, "Simon Carson")), "\n                                                    ", HTML.TD("Erat Corp."), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" Simon@erta.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a3.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-3",
    "class": "client-link"
  }, "Rooney Lindsay")), "\n                                                    ", HTML.TD("Proin Limited"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" rooney@proin.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a4.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-4",
    "class": "client-link"
  }, "Lionel Mcmillan")), "\n                                                    ", HTML.TD("Et Industries"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-phone"
  }, " ")), "\n                                                    ", HTML.TD(" +432 955 908"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a5.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-1",
    "class": "client-link"
  }, "Edan Randall")), "\n                                                    ", HTML.TD("Integer Sem Corp."), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-phone"
  }, " ")), "\n                                                    ", HTML.TD(" +422 600 213"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-info"
  }, "Phoned")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a2.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-2",
    "class": "client-link"
  }, "Anthony Jackson")), "\n                                                    ", HTML.TD(" Tellus Institute"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" gravida@rbisit.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-warning"
  }, "Waiting")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD({
    "class": "client-avatar"
  }, HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    src: "img/a7.jpg"
  })), " "), "\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#contact-4",
    "class": "client-link"
  }, "Reuben Pacheco")), "\n                                                    ", HTML.TD("Magna Associates"), "\n                                                    ", HTML.TD({
    "class": "contact-type"
  }, HTML.I({
    "class": "fa fa-envelope"
  }, " ")), "\n                                                    ", HTML.TD(" pacheco@manga.com"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                                ", HTML.DIV({
    id: "tab-2",
    "class": "tab-pane"
  }, "\n                                    ", HTML.DIV({
    "class": "full-height-scroll"
  }, "\n                                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                                            ", HTML.TABLE({
    "class": "table table-striped table-hover"
  }, "\n                                                ", HTML.TBODY("\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-1",
    "class": "client-link"
  }, "Tellus Institute")), "\n                                                    ", HTML.TD("Rexton"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Angola"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-2",
    "class": "client-link"
  }, "Velit Industries")), "\n                                                    ", HTML.TD("Maglie"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Luxembourg"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-3",
    "class": "client-link"
  }, "Art Limited")), "\n                                                    ", HTML.TD("Sooke"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Philippines"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-1",
    "class": "client-link"
  }, "Tempor Arcu Corp.")), "\n                                                    ", HTML.TD("Eisden"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Korea, North"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-warning"
  }, "Waiting")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-2",
    "class": "client-link"
  }, "Penatibus Consulting")), "\n                                                    ", HTML.TD("Tribogna"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Montserrat"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-3",
    "class": "client-link"
  }, " Ultrices Incorporated")), "\n                                                    ", HTML.TD("Basingstoke"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Tunisia"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-2",
    "class": "client-link"
  }, "Et Arcu Inc.")), "\n                                                    ", HTML.TD("Sioux City"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Burundi"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-1",
    "class": "client-link"
  }, "Tellus Institute")), "\n                                                    ", HTML.TD("Rexton"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Angola"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-2",
    "class": "client-link"
  }, "Velit Industries")), "\n                                                    ", HTML.TD("Maglie"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Luxembourg"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-3",
    "class": "client-link"
  }, "Art Limited")), "\n                                                    ", HTML.TD("Sooke"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Philippines"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-1",
    "class": "client-link"
  }, "Tempor Arcu Corp.")), "\n                                                    ", HTML.TD("Eisden"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Korea, North"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-warning"
  }, "Waiting")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-2",
    "class": "client-link"
  }, "Penatibus Consulting")), "\n                                                    ", HTML.TD("Tribogna"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Montserrat"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-3",
    "class": "client-link"
  }, " Ultrices Incorporated")), "\n                                                    ", HTML.TD("Basingstoke"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Tunisia"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-2",
    "class": "client-link"
  }, "Et Arcu Inc.")), "\n                                                    ", HTML.TD("Sioux City"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Burundi"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-1",
    "class": "client-link"
  }, "Tellus Institute")), "\n                                                    ", HTML.TD("Rexton"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Angola"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-2",
    "class": "client-link"
  }, "Velit Industries")), "\n                                                    ", HTML.TD("Maglie"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Luxembourg"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-3",
    "class": "client-link"
  }, "Art Limited")), "\n                                                    ", HTML.TD("Sooke"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Philippines"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-1",
    "class": "client-link"
  }, "Tempor Arcu Corp.")), "\n                                                    ", HTML.TD("Eisden"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Korea, North"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-warning"
  }, "Waiting")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-2",
    "class": "client-link"
  }, "Penatibus Consulting")), "\n                                                    ", HTML.TD("Tribogna"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Montserrat"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-3",
    "class": "client-link"
  }, " Ultrices Incorporated")), "\n                                                    ", HTML.TD("Basingstoke"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Tunisia"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                ", HTML.TR("\n                                                    ", HTML.TD(HTML.A({
    "data-toggle": "tab",
    href: "#company-2",
    "class": "client-link"
  }, "Et Arcu Inc.")), "\n                                                    ", HTML.TD("Sioux City"), "\n                                                    ", HTML.TD(HTML.I({
    "class": "fa fa-flag"
  }), " Burundi"), "\n                                                    ", HTML.TD({
    "class": "client-status"
  }, HTML.SPAN({
    "class": "label label-primary"
  }, "Active")), "\n                                                "), "\n                                                "), "\n                                            "), "\n                                        "), "\n                                    "), "\n                                "), "\n                            "), "\n\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.Raw('<div class="col-sm-4">\n                <div class="ibox ">\n\n                    <div class="ibox-content">\n                        <div class="tab-content">\n                            <div id="contact-1" class="tab-pane active">\n                                <div class="row m-b-lg">\n                                    <div class="col-lg-4 text-center">\n                                        <h2>Nicki Smith</h2>\n\n                                        <div class="m-b-sm">\n                                            <img alt="image" class="img-circle" src="img/a2.jpg" style="width: 62px">\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-8">\n                                        <strong>\n                                            About me\n                                        </strong>\n\n                                        <p>\n                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                                            tempor incididunt ut labore et dolore magna aliqua.\n                                        </p>\n                                        <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-envelope"></i> Send Message\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class="client-detail">\n                                    <div class="full-height-scroll">\n\n                                        <strong>Last activity</strong>\n\n                                        <ul class="list-group clear-list">\n                                            <li class="list-group-item fist-item">\n                                                <span class="pull-right"> 09:00 pm </span>\n                                                Please contact me\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 10:16 am </span>\n                                                Sign a contract\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 08:22 pm </span>\n                                                Open new shop\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 11:06 pm </span>\n                                                Call back to Sylvia\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 12:00 am </span>\n                                                Write a letter to Sandra\n                                            </li>\n                                        </ul>\n                                        <strong>Notes</strong>\n                                        <p>\n                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                                            tempor incididunt ut labore et dolore magna aliqua.\n                                        </p>\n                                        <hr>\n                                        <strong>Timeline activity</strong>\n                                        <div id="vertical-timeline" class="vertical-container dark-timeline">\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-bolt"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>There are many variations of passages of Lorem Ipsum available.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 06:10 pm - 11.03.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon navy-bg">\n                                                    <i class="fa fa-warning"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>The generated Lorem Ipsum is therefore.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 02:50 pm - 03.10.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div id="contact-2" class="tab-pane">\n                                <div class="row m-b-lg">\n                                    <div class="col-lg-4 text-center">\n                                        <h2>Edan Randall</h2>\n\n                                        <div class="m-b-sm">\n                                            <img alt="image" class="img-circle" src="img/a3.jpg" style="width: 62px">\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-8">\n                                        <strong>\n                                            About me\n                                        </strong>\n\n                                        <p>\n                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default tempor incididunt model text.\n                                        </p>\n                                        <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-envelope"></i> Send Message\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class="client-detail">\n                                    <div class="full-height-scroll">\n\n                                        <strong>Last activity</strong>\n\n                                        <ul class="list-group clear-list">\n                                            <li class="list-group-item fist-item">\n                                                <span class="pull-right"> 09:00 pm </span>\n                                                Lorem Ipsum available\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 10:16 am </span>\n                                                Latin words, combined\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 08:22 pm </span>\n                                                Open new shop\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 11:06 pm </span>\n                                                The generated Lorem Ipsum\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 12:00 am </span>\n                                                Content here, content here\n                                            </li>\n                                        </ul>\n                                        <strong>Notes</strong>\n                                        <p>\n                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.\n                                        </p>\n                                        <hr>\n                                        <strong>Timeline activity</strong>\n                                        <div id="vertical-timeline" class="vertical-container dark-timeline">\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-bolt"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>There are many variations of passages of Lorem Ipsum available.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 06:10 pm - 11.03.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon navy-bg">\n                                                    <i class="fa fa-warning"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>The generated Lorem Ipsum is therefore.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 02:50 pm - 03.10.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div id="contact-3" class="tab-pane">\n                                <div class="row m-b-lg">\n                                    <div class="col-lg-4 text-center">\n                                        <h2>Jasper Carson</h2>\n\n                                        <div class="m-b-sm">\n                                            <img alt="image" class="img-circle" src="img/a4.jpg" style="width: 62px">\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-8">\n                                        <strong>\n                                            About me\n                                        </strong>\n\n                                        <p>\n                                            Latin professor at Hampden-Sydney College in Virginia, looked  embarrassing hidden in the middle.\n                                        </p>\n                                        <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-envelope"></i> Send Message\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class="client-detail">\n                                    <div class="full-height-scroll">\n\n                                        <strong>Last activity</strong>\n\n                                        <ul class="list-group clear-list">\n                                            <li class="list-group-item fist-item">\n                                                <span class="pull-right"> 09:00 pm </span>\n                                                Aldus PageMaker including\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 10:16 am </span>\n                                                Finibus Bonorum et Malorum\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 08:22 pm </span>\n                                                Write a letter to Sandra\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 11:06 pm </span>\n                                                Standard chunk of Lorem\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 12:00 am </span>\n                                                Open new shop\n                                            </li>\n                                        </ul>\n                                        <strong>Notes</strong>\n                                        <p>\n                                            Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n                                        </p>\n                                        <hr>\n                                        <strong>Timeline activity</strong>\n                                        <div id="vertical-timeline" class="vertical-container dark-timeline">\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-bolt"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>There are many variations of passages of Lorem Ipsum available.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 06:10 pm - 11.03.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon navy-bg">\n                                                    <i class="fa fa-warning"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>The generated Lorem Ipsum is therefore.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 02:50 pm - 03.10.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div id="contact-4" class="tab-pane">\n                                <div class="row m-b-lg">\n                                    <div class="col-lg-4 text-center">\n                                        <h2>Reuben Pacheco</h2>\n\n                                        <div class="m-b-sm">\n                                            <img alt="image" class="img-circle" src="img/a5.jpg" style="width: 62px">\n                                        </div>\n                                    </div>\n                                    <div class="col-lg-8">\n                                        <strong>\n                                            About me\n                                        </strong>\n\n                                        <p>\n                                            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,written in 45 BC. This book is a treatise on.\n                                        </p>\n                                        <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-envelope"></i> Send Message\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class="client-detail">\n                                    <div class="full-height-scroll">\n\n                                        <strong>Last activity</strong>\n\n                                        <ul class="list-group clear-list">\n                                            <li class="list-group-item fist-item">\n                                                <span class="pull-right"> 09:00 pm </span>\n                                                The point of using\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 10:16 am </span>\n                                                Lorem Ipsum is that it has\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 08:22 pm </span>\n                                                Text, and a search for \'lorem ipsum\'\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 11:06 pm </span>\n                                                Passages of Lorem Ipsum\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> 12:00 am </span>\n                                                If you are going\n                                            </li>\n                                        </ul>\n                                        <strong>Notes</strong>\n                                        <p>\n                                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                        </p>\n                                        <hr>\n                                        <strong>Timeline activity</strong>\n                                        <div id="vertical-timeline" class="vertical-container dark-timeline">\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-bolt"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>There are many variations of passages of Lorem Ipsum available.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 06:10 pm - 11.03.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon navy-bg">\n                                                    <i class="fa fa-warning"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>The generated Lorem Ipsum is therefore.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 02:50 pm - 03.10.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div id="company-1" class="tab-pane">\n                                <div class="m-b-lg">\n                                    <h2>Tellus Institute</h2>\n\n                                    <p>\n                                        Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,written in 45 BC. This book is a treatise on.\n                                    </p>\n                                    <div>\n                                        <small>Active project completion with: 48%</small>\n                                        <div class="progress progress-mini">\n                                            <div style="width: 48%;" class="progress-bar"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="client-detail">\n                                    <div class="full-height-scroll">\n\n                                        <strong>Last activity</strong>\n\n                                        <ul class="list-group clear-list">\n                                            <li class="list-group-item fist-item">\n                                                <span class="pull-right"> <span class="label label-primary">NEW</span> </span>\n                                                The point of using\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> <span class="label label-warning">WAITING</span></span>\n                                                Lorem Ipsum is that it has\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> <span class="label label-danger">BLOCKED</span> </span>\n                                                If you are going\n                                            </li>\n                                        </ul>\n                                        <strong>Notes</strong>\n                                        <p>\n                                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                        </p>\n                                        <hr>\n                                        <strong>Timeline activity</strong>\n                                        <div id="vertical-timeline" class="vertical-container dark-timeline">\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-bolt"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>There are many variations of passages of Lorem Ipsum available.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 06:10 pm - 11.03.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon navy-bg">\n                                                    <i class="fa fa-warning"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>The generated Lorem Ipsum is therefore.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 02:50 pm - 03.10.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div id="company-2" class="tab-pane">\n                                <div class="m-b-lg">\n                                    <h2>Penatibus Consulting</h2>\n\n                                    <p>\n                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.\n                                    </p>\n                                    <div>\n                                        <small>Active project completion with: 22%</small>\n                                        <div class="progress progress-mini">\n                                            <div style="width: 22%;" class="progress-bar"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="client-detail">\n                                    <div class="full-height-scroll">\n\n                                        <strong>Last activity</strong>\n\n                                        <ul class="list-group clear-list">\n                                            <li class="list-group-item fist-item">\n                                                <span class="pull-right"> <span class="label label-warning">WAITING</span> </span>\n                                                Aldus PageMaker\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"><span class="label label-primary">NEW</span> </span>\n                                                Lorem Ipsum, you need to be sure\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"> <span class="label label-danger">BLOCKED</span> </span>\n                                                The generated Lorem Ipsum\n                                            </li>\n                                        </ul>\n                                        <strong>Notes</strong>\n                                        <p>\n                                            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\n                                        </p>\n                                        <hr>\n                                        <strong>Timeline activity</strong>\n                                        <div id="vertical-timeline" class="vertical-container dark-timeline">\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-bolt"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>There are many variations of passages of Lorem Ipsum available.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 06:10 pm - 11.03.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon navy-bg">\n                                                    <i class="fa fa-warning"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>The generated Lorem Ipsum is therefore.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 02:50 pm - 03.10.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div id="company-3" class="tab-pane">\n                                <div class="m-b-lg">\n                                    <h2>Ultrices Incorporated</h2>\n\n                                    <p>\n                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.\n                                    </p>\n                                    <div>\n                                        <small>Active project completion with: 72%</small>\n                                        <div class="progress progress-mini">\n                                            <div style="width: 72%;" class="progress-bar"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="client-detail">\n                                    <div class="full-height-scroll">\n\n                                        <strong>Last activity</strong>\n\n                                        <ul class="list-group clear-list">\n                                            <li class="list-group-item fist-item">\n                                                <span class="pull-right"> <span class="label label-danger">BLOCKED</span> </span>\n                                                Hidden in the middle of text\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right"><span class="label label-primary">NEW</span> </span>\n                                                Non-characteristic words etc.\n                                            </li>\n                                            <li class="list-group-item">\n                                                <span class="pull-right">  <span class="label label-warning">WAITING</span> </span>\n                                                Bonorum et Malorum\n                                            </li>\n                                        </ul>\n                                        <strong>Notes</strong>\n                                        <p>\n                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.\n                                        </p>\n                                        <hr>\n                                        <strong>Timeline activity</strong>\n                                        <div id="vertical-timeline" class="vertical-container dark-timeline">\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-bolt"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>There are many variations of passages of Lorem Ipsum available.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 06:10 pm - 11.03.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon navy-bg">\n                                                    <i class="fa fa-warning"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>The generated Lorem Ipsum is therefore.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 02:50 pm - 03.10.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-coffee"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Conference on the sales results for the previous year.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 2:10 pm - 12.06.2014 </span>\n                                                </div>\n                                            </div>\n                                            <div class="vertical-timeline-block">\n                                                <div class="vertical-timeline-icon gray-bg">\n                                                    <i class="fa fa-briefcase"></i>\n                                                </div>\n                                                <div class="vertical-timeline-content">\n                                                    <p>Many desktop publishing packages and web page editors now use Lorem.\n                                                    </p>\n                                                    <span class="vertical-date small text-muted"> 4:20 pm - 10.05.2014 </span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>'), "\n        "), "\n    ") ];
}));

}).call(this);
