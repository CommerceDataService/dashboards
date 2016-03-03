(function(){
Template.__checkName("topNavbar");
Template["topNavbar"] = new Template("Template.topNavbar", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row border-bottom"
  }, "\n        ", HTML.NAV({
    "class": "navbar navbar-static-top",
    role: "navigation",
    style: "margin-bottom: 0"
  }, "\n            ", HTML.Raw('<div class="navbar-header">\n                <a id="navbar-minimalize" class="minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>\n                <form role="search" class="navbar-form-custom" action="search_results">\n                    <div class="form-group">\n                        <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">\n                    </div>\n                </form>\n            </div>'), "\n            ", HTML.UL({
    "class": "nav navbar-top-links navbar-right"
  }, "\n                ", HTML.Raw('<li>\n                    <span class="m-r-sm text-muted welcome-message"> Welcome to INSPINIA+ Admin Theme.</span>\n                </li>'), "\n                ", HTML.LI({
    "class": "dropdown"
  }, "\n                    ", HTML.Raw('<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">\n                        <i class="fa fa-envelope"></i>  <span class="label label-warning">16</span>\n                    </a>'), "\n                    ", HTML.UL({
    "class": "dropdown-menu dropdown-messages"
  }, "\n                        ", HTML.LI("\n                            ", HTML.DIV({
    "class": "dropdown-messages-box"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                    ", HTML.Raw('<img alt="image" class="img-circle" src="img/a7.jpg">'), "\n                                "), "\n                                ", HTML.Raw('<div class="media-body">\n                                    <small class="pull-right">46h ago</small>\n                                    <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>\n                                    <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>\n                                </div>'), "\n                            "), "\n                        "), "\n                        ", HTML.Raw('<li class="divider"></li>'), "\n                        ", HTML.LI("\n                            ", HTML.DIV({
    "class": "dropdown-messages-box"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                    ", HTML.Raw('<img alt="image" class="img-circle" src="img/a4.jpg">'), "\n                                "), "\n                                ", HTML.Raw('<div class="media-body ">\n                                    <small class="pull-right text-navy">5h ago</small>\n                                    <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br>\n                                    <small class="text-muted">Yesterday 1:21 pm - 11.06.2014</small>\n                                </div>'), "\n                            "), "\n                        "), "\n                        ", HTML.Raw('<li class="divider"></li>'), "\n                        ", HTML.LI("\n                            ", HTML.DIV({
    "class": "dropdown-messages-box"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                    ", HTML.Raw('<img alt="image" class="img-circle" src="img/profile.jpg">'), "\n                                "), "\n                                ", HTML.Raw('<div class="media-body ">\n                                    <small class="pull-right">23h ago</small>\n                                    <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>\n                                    <small class="text-muted">2 days ago at 2:30 am - 11.06.2014</small>\n                                </div>'), "\n                            "), "\n                        "), "\n                        ", HTML.Raw('<li class="divider"></li>'), "\n                        ", HTML.LI("\n                            ", HTML.DIV({
    "class": "text-center link-block"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, "\n                                    ", HTML.Raw('<i class="fa fa-envelope"></i>'), " ", HTML.Raw("<strong>Read All Messages</strong>"), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": "dropdown"
  }, "\n                    ", HTML.Raw('<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">\n                        <i class="fa fa-bell"></i>  <span class="label label-primary">8</span>\n                    </a>'), "\n                    ", HTML.UL({
    "class": "dropdown-menu dropdown-alerts"
  }, "\n                        ", HTML.LI("\n                            ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, "\n                                ", HTML.Raw('<div>\n                                    <i class="fa fa-envelope fa-fw"></i> You have 16 messages\n                                    <span class="pull-right text-muted small">4 minutes ago</span>\n                                </div>'), "\n                            "), "\n                        "), "\n                        ", HTML.Raw('<li class="divider"></li>'), "\n                        ", HTML.LI("\n                            ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                                ", HTML.Raw('<div>\n                                    <i class="fa fa-twitter fa-fw"></i> 3 New Followers\n                                    <span class="pull-right text-muted small">12 minutes ago</span>\n                                </div>'), "\n                            "), "\n                        "), "\n                        ", HTML.Raw('<li class="divider"></li>'), "\n                        ", HTML.LI("\n                            ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "gridOptions"
      }));
    }
  }, "\n                                ", HTML.Raw('<div>\n                                    <i class="fa fa-upload fa-fw"></i> Server Rebooted\n                                    <span class="pull-right text-muted small">4 minutes ago</span>\n                                </div>'), "\n                            "), "\n                        "), "\n                        ", HTML.Raw('<li class="divider"></li>'), "\n                        ", HTML.LI("\n                            ", HTML.DIV({
    "class": "text-center link-block"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "notifications"
      }));
    }
  }, "\n                                    ", HTML.Raw("<strong>See All Alerts</strong>"), "\n                                    ", HTML.Raw('<i class="fa fa-angle-right"></i>'), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n\n                ", HTML.LI("\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "\n                        ", HTML.Raw('<i class="fa fa-sign-out"></i>'), " Log out\n                    "), "\n                "), "\n                ", HTML.Raw('<li>\n                    <a class="right-sidebar-toggle">\n                        <i class="fa fa-tasks"></i>\n                    </a>\n                </li>'), "\n            "), "\n\n        "), "\n    ");
}));

}).call(this);
