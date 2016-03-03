(function(){
Template.__checkName("mailbox");
Template["mailbox"] = new Template("Template.mailbox", (function() {
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
  }, "\n\n                    ", HTML.FORM({
    method: "get",
    action: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard1"
      }));
    },
    "class": "pull-right mail-search"
  }, "\n                        ", HTML.Raw('<div class="input-group">\n                            <input type="text" class="form-control input-sm" name="search" placeholder="Search email">\n                            <div class="input-group-btn">\n                                <button type="submit" class="btn btn-sm btn-primary">\n                                    Search\n                                </button>\n                            </div>\n                        </div>'), "\n                    "), "\n                    ", HTML.Raw("<h2>\n                        Inbox (16)\n                    </h2>"), "\n                    ", HTML.Raw('<div class="mail-tools tooltip-demo m-t-md">\n                        <div class="btn-group pull-right">\n                            <button class="btn btn-white btn-sm"><i class="fa fa-arrow-left"></i></button>\n                            <button class="btn btn-white btn-sm"><i class="fa fa-arrow-right"></i></button>\n\n                        </div>\n                        <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left" title="Refresh inbox"><i class="fa fa-refresh"></i> Refresh</button>\n                        <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Mark as read"><i class="fa fa-eye"></i> </button>\n                        <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Mark as important"><i class="fa fa-exclamation"></i> </button>\n                        <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Move to trash"><i class="fa fa-trash-o"></i> </button>\n\n                    </div>'), "\n                "), "\n                ", HTML.DIV({
    "class": "mail-box"
  }, "\n\n                    ", HTML.TABLE({
    "class": "table table-hover table-mail"
  }, "\n                        ", HTML.TBODY("\n                        ", HTML.TR({
    "class": "unread"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Anna Smith")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Lorem ipsum dolor noretek imit set.")), "\n                            ", HTML.TD({
    "class": ""
  }, HTML.I({
    "class": "fa fa-paperclip"
  })), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "6.10 AM"), "\n                        "), "\n                        ", HTML.TR({
    "class": "unread"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks",
    checked: ""
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Jack Nowak")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Aldus PageMaker including versions of Lorem Ipsum.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "8.22 PM"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Facebook"), " ", HTML.SPAN({
    "class": "label label-warning pull-right"
  }, "Clients"), " "), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Many desktop publishing packages and web page editors.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jan 16"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Mailchip")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "There are many variations of passages of Lorem Ipsum.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "Mar 22"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Alex T."), " ", HTML.SPAN({
    "class": "label label-danger pull-right"
  }, "Documents")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Lorem ipsum dolor noretek imit set.")), "\n                            ", HTML.TD({
    "class": ""
  }, HTML.I({
    "class": "fa fa-paperclip"
  })), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "December 22"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Monica Ryther")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "The standard chunk of Lorem Ipsum used.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jun 12"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Sandra Derick")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Contrary to popular belief.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "May 28"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Patrick Pertners"), " ", HTML.SPAN({
    "class": "label label-info pull-right"
  }, "Adv")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "If you are going to use a passage of Lorem ")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "May 28"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Michael Fox")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Humour, or non-characteristic words etc.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "Dec 9"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Damien Ritz")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Oor Lorem Ipsum is that it has a more-or-less normal.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jun 11"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Anna Smith")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Lorem ipsum dolor noretek imit set.")), "\n                            ", HTML.TD({
    "class": ""
  }, HTML.I({
    "class": "fa fa-paperclip"
  })), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "6.10 AM"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Jack Nowak")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Aldus PageMaker including versions of Lorem Ipsum.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "8.22 PM"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Mailchip")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "There are many variations of passages of Lorem Ipsum.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "Mar 22"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Alex T."), " ", HTML.SPAN({
    "class": "label label-warning pull-right"
  }, "Clients")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Lorem ipsum dolor noretek imit set.")), "\n                            ", HTML.TD({
    "class": ""
  }, HTML.I({
    "class": "fa fa-paperclip"
  })), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "December 22"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Monica Ryther")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "The standard chunk of Lorem Ipsum used.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jun 12"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Sandra Derick")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Contrary to popular belief.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "May 28"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Patrick Pertners"), " "), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "If you are going to use a passage of Lorem ")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "May 28"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Michael Fox")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Humour, or non-characteristic words etc.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "Dec 9"), "\n                        "), "\n                        ", HTML.TR({
    "class": "read"
  }, "\n                            ", HTML.TD({
    "class": "check-mail"
  }, "\n                                ", HTML.INPUT({
    type: "checkbox",
    "class": "i-checks"
  }), "\n                            "), "\n                            ", HTML.TD({
    "class": "mail-ontact"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Damien Ritz")), "\n                            ", HTML.TD({
    "class": "mail-subject"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Oor Lorem Ipsum is that it has a more-or-less normal.")), "\n                            ", HTML.TD({
    "class": ""
  }), "\n                            ", HTML.TD({
    "class": "text-right mail-date"
  }, "Jun 11"), "\n                        "), "\n                        "), "\n                    "), "\n\n\n                "), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
