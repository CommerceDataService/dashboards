(function(){
Template.__checkName("emailView");
Template["emailView"] = new Template("Template.emailView", (function() {
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
        route: "emailCompose"
      }));
    },
    "class": "btn btn-white btn-sm",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Reply"
  }, HTML.Raw('<i class="fa fa-reply"></i>'), " Reply"), "\n                        ", HTML.Raw('<a href="#" class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top" title="Print email"><i class="fa fa-print"></i> </a>'), "\n                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    },
    "class": "btn btn-white btn-sm",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "Move to trash"
  }, HTML.Raw('<i class="fa fa-trash-o"></i>'), " "), "\n                    "), "\n                    ", HTML.Raw("<h2>\n                        View Message\n                    </h2>"), "\n                    ", HTML.Raw('<div class="mail-tools tooltip-demo m-t-md">\n\n\n                        <h3>\n                            <span class="font-noraml">Subject: </span>Aldus PageMaker including versions of Lorem Ipsum.\n                        </h3>\n                        <h5>\n                            <span class="pull-right font-noraml">10:15AM 02 FEB 2014</span>\n                            <span class="font-noraml">From: </span>alex.smith@corporation.com\n                        </h5>\n                    </div>'), "\n                "), "\n                ", HTML.DIV({
    "class": "mail-box"
  }, "\n\n\n                    ", HTML.Raw('<div class="mail-body">\n                        <p>\n                            Hello Jonathan!\n                            <br>\n                            <br>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer\n                            took a galley of type and scrambled it to make a type <strong>specimen book.</strong>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n                            essentially unchanged.\n                        </p>\n                        <p>\n                            It was popularised in the 1960s with the release <a href="#" class="text-navy">Letraset sheets</a>  containing Lorem Ipsum passages, and more recently with desktop publishing software\n                            like Aldus PageMaker including versions of Lorem Ipsum.\n                        </p>\n                        <p>\n                            There are many variations of passages of <strong>Lorem Ipsum</strong>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of.\n                        </p>\n                    </div>'), "\n                    ", HTML.Raw('<div class="mail-attachment">\n                        <p>\n                            <span><i class="fa fa-paperclip"></i> 2 attachments - </span>\n                            <a href="#">Download all</a>\n                            |\n                            <a href="#">View all images</a>\n                        </p>\n\n                        <div class="attachment">\n                            <div class="file-box">\n                                <div class="file">\n                                    <a href="#">\n                                        <span class="corner"></span>\n\n                                        <div class="icon">\n                                            <i class="fa fa-file"></i>\n                                        </div>\n                                        <div class="file-name">\n                                            Document_2014.doc\n                                            <br>\n                                            <small>Added: Jan 11, 2014</small>\n                                        </div>\n                                    </a>\n                                </div>\n\n                            </div>\n                            <div class="file-box">\n                                <div class="file">\n                                    <a href="#">\n                                        <span class="corner"></span>\n\n                                        <div class="image">\n                                            <img alt="image" class="img-responsive" src="img/p1.jpg">\n                                        </div>\n                                        <div class="file-name">\n                                            Italy street.jpg\n                                            <br>\n                                            <small>Added: Jan 6, 2014</small>\n                                        </div>\n                                    </a>\n\n                                </div>\n                            </div>\n                            <div class="file-box">\n                                <div class="file">\n                                    <a href="#">\n                                        <span class="corner"></span>\n\n                                        <div class="image">\n                                            <img alt="image" class="img-responsive" src="img/p2.jpg">\n                                        </div>\n                                        <div class="file-name">\n                                            My feel.png\n                                            <br>\n                                            <small>Added: Jan 7, 2014</small>\n                                        </div>\n                                    </a>\n                                </div>\n                            </div>\n                            <div class="clearfix"></div>\n                        </div>\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "mail-body text-right tooltip-demo"
  }, "\n                        ", HTML.A({
    "class": "btn btn-sm btn-white",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailCompose"
      }));
    }
  }, HTML.Raw('<i class="fa fa-reply"></i>'), " Reply"), "\n                        ", HTML.A({
    "class": "btn btn-sm btn-white",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailCompose"
      }));
    }
  }, HTML.Raw('<i class="fa fa-arrow-right"></i>'), " Forward"), "\n                        ", HTML.Raw('<button title="" data-placement="top" data-toggle="tooltip" type="button" data-original-title="Print" class="btn btn-sm btn-white"><i class="fa fa-print"></i> Print</button>'), "\n                        ", HTML.Raw('<button title="" data-placement="top" data-toggle="tooltip" data-original-title="Trash" class="btn btn-sm btn-white"><i class="fa fa-trash-o"></i> Remove</button>'), "\n                    "), "\n                    ", HTML.Raw('<div class="clearfix"></div>'), "\n\n\n                "), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
