(function(){
Template.__checkName("emailCompose");
Template["emailCompose"] = new Template("Template.emailCompose", (function() {
  var view = this;
  return HTML.DIV({
    "class": "wrapper wrapper-content"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-3"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content mailbox-content"
  }, "\n                        ", HTML.DIV({
    "class": "file-manager"
  }, "\n                            ", HTML.A({
    "class": "btn btn-block btn-primary compose-mail",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailCompose"
      }));
    }
  }, "Compose Mail"), "\n                            ", HTML.Raw('<div class="space-25"></div>'), "\n                            ", HTML.Raw("<h5>Folders</h5>"), "\n                            ", HTML.UL({
    "class": "folder-list m-b-md",
    style: "padding: 0"
  }, "\n                                ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, " ", HTML.Raw('<i class="fa fa-inbox "></i>'), " Inbox ", HTML.Raw('<span class="label label-warning pull-right">16</span>'), " ")), "\n                                ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, " ", HTML.Raw('<i class="fa fa-envelope-o"></i>'), " Send Mail")), "\n                                ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, " ", HTML.Raw('<i class="fa fa-certificate"></i>'), " Important")), "\n                                ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, " ", HTML.Raw('<i class="fa fa-file-text-o"></i>'), " Drafts ", HTML.Raw('<span class="label label-danger pull-right">2</span>'))), "\n                                ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, " ", HTML.Raw('<i class="fa fa-trash-o"></i>'), " Trash")), "\n                            "), "\n                            ", HTML.Raw("<h5>Categories</h5>"), "\n                            ", HTML.Raw('<ul class="category-list" style="padding: 0">\n                                <li><a href="#"> <i class="fa fa-circle text-navy"></i> Work </a></li>\n                                <li><a href="#"> <i class="fa fa-circle text-danger"></i> Documents</a></li>\n                                <li><a href="#"> <i class="fa fa-circle text-primary"></i> Social</a></li>\n                                <li><a href="#"> <i class="fa fa-circle text-info"></i> Advertising</a></li>\n                                <li><a href="#"> <i class="fa fa-circle text-warning"></i> Clients</a></li>\n                            </ul>'), "\n\n                            ", HTML.Raw('<h5 class="tag-title">Labels</h5>'), "\n                            ", HTML.Raw('<ul class="tag-list" style="padding: 0">\n                                <li><a href=""><i class="fa fa-tag"></i> Family</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Work</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Home</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Children</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Holidays</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Music</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Photography</a></li>\n                                <li><a href=""><i class="fa fa-tag"></i> Film</a></li>\n                            </ul>'), "\n                            ", HTML.Raw('<div class="clearfix"></div>'), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-9 animated fadeInRight"
  }, "\n                ", HTML.DIV({
    "class": "mail-box-header"
  }, "\n                    ", HTML.DIV({
    "class": "pull-right tooltip-demo"
  }, "\n                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    },
    "class": "btn btn-white btn-sm",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Move to draft folder"
  }, HTML.Raw('<i class="fa fa-pencil"></i>'), " Draft"), "\n                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    },
    "class": "btn btn-danger btn-sm",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Discard email"
  }, HTML.Raw('<i class="fa fa-times"></i>'), " Discard"), "\n                    "), "\n                    ", HTML.Raw("<h2>\n                        Compse mail\n                    </h2>"), "\n                "), "\n                ", HTML.DIV({
    "class": "mail-box"
  }, "\n\n\n                    ", HTML.Raw('<div class="mail-body">\n\n                        <form class="form-horizontal" method="get">\n                            <div class="form-group"><label class="col-sm-2 control-label">To:</label>\n\n                                <div class="col-sm-10"><input type="text" class="form-control" value="alex.smith@corporat.com"></div>\n                            </div>\n                            <div class="form-group"><label class="col-sm-2 control-label">Subject:</label>\n\n                                <div class="col-sm-10"><input type="text" class="form-control" value=""></div>\n                            </div>\n                        </form>\n\n                    </div>'), "\n\n                    ", HTML.Raw('<div class="mail-text h-200">\n\n                        <div class="summernote">\n                            <h3>Hello Jonathan! </h3>\n                            dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the industry\'s</strong> standard dummy text ever since the 1500s,\n                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic\n                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n                            <br>\n                            <br>\n\n                        </div>\n                        <div class="clearfix"></div>\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "mail-body text-right tooltip-demo"
  }, "\n                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    },
    "class": "btn btn-sm btn-primary",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Send"
  }, HTML.Raw('<i class="fa fa-reply"></i>'), " Send"), "\n                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    },
    "class": "btn btn-white btn-sm",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Discard email"
  }, HTML.Raw('<i class="fa fa-times"></i>'), " Discard"), "\n                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    },
    "class": "btn btn-white btn-sm",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Move to draft folder"
  }, HTML.Raw('<i class="fa fa-pencil"></i>'), " Draft"), "\n                    "), "\n                    ", HTML.Raw('<div class="clearfix"></div>'), "\n\n\n\n                "), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
