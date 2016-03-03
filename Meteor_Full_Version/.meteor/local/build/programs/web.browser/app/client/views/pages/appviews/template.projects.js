(function(){
Template.__checkName("projects");
Template["projects"] = new Template("Template.projects", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Projects"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInUp"
  }, "\n\n        ", HTML.DIV({
    "class": "ibox"
  }, "\n            ", HTML.Raw('<div class="ibox-title">\n                <h5>All projects assigned to this account</h5>\n                <div class="ibox-tools">\n                    <a href="" class="btn btn-primary btn-xs">Create new project</a>\n                </div>\n            </div>'), "\n            ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                ", HTML.Raw('<div class="row m-b-sm m-t-sm">\n                    <div class="col-md-1">\n                        <button type="button" id="loading-example-btn" class="btn btn-white btn-sm"><i class="fa fa-refresh"></i> Refresh</button>\n                    </div>\n                    <div class="col-md-11">\n                        <div class="input-group"><input type="text" placeholder="Search" class="input-sm form-control"> <span class="input-group-btn">\n                                        <button type="button" class="btn btn-sm btn-primary"> Go!</button> </span></div>\n                    </div>\n                </div>'), "\n\n                ", HTML.DIV({
    "class": "project-list"
  }, "\n\n                    ", HTML.TABLE({
    "class": "table table-hover"
  }, "\n                        ", HTML.TBODY("\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-primary"
  }, "Active"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "Contract with Zender Company"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 14.08.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 48%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 48%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a3.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a1.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a2.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a4.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a5.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-primary"
  }, "Active"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "There are many variations of passages"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 11.08.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 28%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 28%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a7.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a6.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a3.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-default"
  }, "Unactive"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "Many desktop publishing packages and web"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 10.08.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 8%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 8%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a5.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a3.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-primary"
  }, "Active"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "Letraset sheets containing"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 22.07.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 83%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 83%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a2.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a3.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a1.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a7.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-primary"
  }, "Active"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "Contrary to popular belief"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 14.07.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 97%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 97%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a4.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-primary"
  }, "Active"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "Contract with Zender Company"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 14.08.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 48%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 48%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a1.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a2.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a4.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a5.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-primary"
  }, "Active"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "There are many variations of passages"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 11.08.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 28%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 28%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a7.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a6.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a3.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-default"
  }, "Unactive"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "Many desktop publishing packages and web"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 10.08.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 8%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 8%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a5.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a3.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-primary"
  }, "Active"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "Letraset sheets containing"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 22.07.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 83%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 83%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a2.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a3.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a1.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-primary"
  }, "Active"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "Contrary to popular belief"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 14.07.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 97%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 97%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a4.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        ", HTML.TR("\n                            ", HTML.TD({
    "class": "project-status"
  }, "\n                                ", HTML.SPAN({
    "class": "label label-primary"
  }, "Active"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-title"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "There are many variations of passages"), "\n                                ", HTML.BR(), "\n                                ", HTML.SMALL("Created 11.08.2014"), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-completion"
  }, "\n                                ", HTML.SMALL("Completion with: 28%"), "\n                                ", HTML.DIV({
    "class": "progress progress-mini"
  }, "\n                                    ", HTML.DIV({
    style: "width: 28%;",
    "class": "progress-bar"
  }), "\n                                "), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-people"
  }, "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a7.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a6.jpg"
  })), "\n                                ", HTML.A({
    href: ""
  }, HTML.IMG({
    alt: "image",
    "class": "img-circle",
    src: "img/a3.jpg"
  })), "\n                            "), "\n                            ", HTML.TD({
    "class": "project-actions"
  }, "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-folder"
  }), " View "), "\n                                ", HTML.A({
    href: "#",
    "class": "btn btn-white btn-sm"
  }, HTML.I({
    "class": "fa fa-pencil"
  }), " Edit "), "\n                            "), "\n                        "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
