(function(){
Template.__checkName("navigation");
Template["navigation"] = new Template("Template.navigation", (function() {
  var view = this;
  return HTML.NAV({
    "class": "navbar-default navbar-static-side",
    role: "navigation"
  }, "\n        ", HTML.DIV({
    "class": "sidebar-collapse"
  }, "\n\n            ", HTML.Raw("<!-- Close canvas menu used only on OffCanvas page -->"), "\n            ", HTML.Raw("<!-- You can remove this tag if you dont use offCanvas menu -->"), "\n            ", HTML.Raw('<a class="close-canvas-menu"><i class="fa fa-times"></i></a>'), "\n            ", HTML.Raw("<!-- End offCanvas menu toggle -->"), "\n\n            ", HTML.UL({
    "class": "nav metismenu",
    id: "side-menu"
  }, "\n                ", HTML.LI({
    "class": "nav-header"
  }, "\n                    ", HTML.DIV({
    "class": "dropdown profile-element"
  }, " ", HTML.Raw('<span>\n                            <img alt="image" class="img-circle" src="img/profile_small.jpg">\n                             </span>'), "\n                        ", HTML.Raw('<a data-toggle="dropdown" class="dropdown-toggle" href="#">\n                            <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong>\n                             </span> <span class="text-muted text-xs block">Art Director <b class="caret"></b></span> </span> </a>'), "\n                        ", HTML.UL({
    "class": "dropdown-menu animated fadeInRight m-t-xs"
  }, "\n                            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "Profile")), "\n                            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "contacts"
      }));
    }
  }, "Contacts")), "\n                            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, "Mailbox")), "\n                            ", HTML.Raw('<li class="divider"></li>'), "\n                            ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "Logout")), "\n                        "), "\n                    "), "\n                    ", HTML.Raw('<div class="logo-element">\n                        IN+\n                    </div>'), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dashboard1|dashboard2|dashboard3|dashboard4l|dashboard5"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-th-large"></i> <span class="nav-label" data-i18n="nav.dashboard">Dashboards</span> <span class="fa arrow"></span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dashboard1|dashboard2|dashboard3|dashboard4l|dashboard5",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dashboard1"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard1"
      }));
    }
  }, "Dashboard v.1")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dashboard2"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard2"
      }));
    }
  }, "Dashboard v.2")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dashboard3"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard3"
      }));
    }
  }, "Dashboard v.3")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dashboard4l"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard4l"
      }));
    }
  }, "Dashboard v.4")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dashboard5"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard5"
      }));
    }
  }, "Dashboard v.5 ", HTML.Raw('<span class="label label-primary pull-right">NEW</span>'))), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "layouts"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "layouts"
      }));
    }
  }, HTML.Raw('<i class="fa fa-diamond"></i>'), " ", HTML.Raw('<span class="nav-label" data-i18n="nav.layouts">Layouts</span>'), " "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "c3charts|graphFlot|graphMorris|graphRickshaw|graphChartJs|graphPeity|graphSparkline|graphChartist"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-bar-chart-o"></i> <span class="nav-label" data-i18n="nav.graphs">Graphs</span><span class="fa arrow"></span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "c3charts|graphFlot|graphMorris|graphRickshaw|graphChartJs|graphPeity|graphSparkline|graphChartist",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "graphFlot"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "graphFlot"
      }));
    }
  }, "Flot Charts")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "graphRickshaw"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "graphRickshaw"
      }));
    }
  }, "Rickshaw Charts")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "graphChartJs"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "graphChartJs"
      }));
    }
  }, "Chart.js")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "graphChartist"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "graphChartist"
      }));
    }
  }, "Chartist")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "c3charts"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "c3charts"
      }));
    }
  }, "c3 charts")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "graphPeity"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "graphPeity"
      }));
    }
  }, "Peity Charts")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "graphSparkline"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "graphSparkline"
      }));
    }
  }, "Sparkline Charts")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "mailbox|emailView|emailCompose|emailTemplates"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-envelope"></i> <span class="nav-label" data-i18n="nav.mailbox">Mailbox </span><span class="label label-warning pull-right">16/24</span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "mailbox|emailView|emailCompose|emailTemplates",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "mailbox"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "mailbox"
      }));
    }
  }, "Inbox")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "emailView"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailView"
      }));
    }
  }, "Email view")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "emailCompose"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailCompose"
      }));
    }
  }, "Compose email")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "emailTemplates"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emailTemplates"
      }));
    }
  }, "Email templates")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "metrics"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "metrics"
      }));
    }
  }, HTML.Raw('<i class="fa fa-pie-chart"></i>'), " ", HTML.Raw('<span class="nav-label" data-i18n="nav.metrics">Metrics</span>'), " "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "widgets"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "widgets"
      }));
    }
  }, HTML.Raw('<i class="fa fa-flask"></i>'), " ", HTML.Raw('<span class="nav-label" data-i18n="nav.widgets">Widgets</span>'), " "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "markdown|formBasic|formAdvanced|formWizard|formUpload|textEditor"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-edit"></i> <span class="nav-label" data-i18n="nav.forms">Forms</span><span class="fa arrow"></span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "markdown|formBasic|formAdvanced|formWizard|formUpload|textEditor",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "formBasic"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "formBasic"
      }));
    }
  }, "Basic form")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "formAdvanced"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "formAdvanced"
      }));
    }
  }, "Advanced Plugins")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "formWizard"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "formWizard"
      }));
    }
  }, "Wizard")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "formUpload"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "formUpload"
      }));
    }
  }, "File Upload")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "textEditor"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "textEditor"
      }));
    }
  }, "Text Editor")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "markdown"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "markdown"
      }));
    }
  }, "Markdown")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "contacts2|profile2|voteList|contacts|profile|projects|projectDetail|teamsBoard|clients|fullHeight|fileManager|calendar|issueTracker|blog|article|faq|timelineOne|pinBoard|socialFeed"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-desktop"></i> <span class="nav-label" data-i18n="nav.appviews">App Views</span>  <span class="pull-right label label-primary">SPECIAL</span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "contacts2|profile2|voteList|contacts|profile|projects|projectDetail|teamsBoard|clients|fullHeight|fileManager|Calendar|issueTracker|blog|article|faq|timelineOne|pinBoard|socialFeed",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "contacts"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "contacts"
      }));
    }
  }, "Contacts")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "profile"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "Profile")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "profile2"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile2"
      }));
    }
  }, "Profile 2")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "contacts2"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "contacts2"
      }));
    }
  }, "Contact 2")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "projects"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projects"
      }));
    }
  }, "Projects")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "projectDetail"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "projectDetail"
      }));
    }
  }, "Project detail")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "teamsBoard"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "teamsBoard"
      }));
    }
  }, "Teams board")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "socialFeed"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "socialFeed"
      }));
    }
  }, "Social feed")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "clients"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "clients"
      }));
    }
  }, "Clients")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "fullHeight"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "fullHeight"
      }));
    }
  }, "Outlook view")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "voteList"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "voteList"
      }));
    }
  }, "Vote list")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "fileManager"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "fileManager"
      }));
    }
  }, "File manager")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "calendar"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "calendar"
      }));
    }
  }, "Calendar")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "issueTracker"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "issueTracker"
      }));
    }
  }, "Issue tracker")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "blog"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "blog"
      }));
    }
  }, "Blog")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "article"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "article"
      }));
    }
  }, "Article")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "faq"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "faq"
      }));
    }
  }, "FAQ")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "timelineOne"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "timelineOne"
      }));
    }
  }, "Timeline")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "pinBoard"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "pinBoard"
      }));
    }
  }, "Pin board")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "searchResult|invoice|emptyPage"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-files-o"></i> <span class="nav-label" data-i18n="nav.otherpages">Other Pages</span><span class="fa arrow"></span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "searchResult|invoice|emptyPage",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "searchResult"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "searchResult"
      }));
    }
  }, "Search results")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "lockScreen"
      }));
    }
  }, "Lockscreen")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "invoice"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "invoice"
      }));
    }
  }, "Invoice")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "Login")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "loginTwo"
      }));
    }
  }, "Login v.2")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "forgotPassword"
      }));
    }
  }, "Forgot password")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "register"
      }));
    }
  }, "Register")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "errorOne"
      }));
    }
  }, "404 Page")), "\n                        ", HTML.LI(HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "errorTwo"
      }));
    }
  }, "500 Page")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "emptyPage"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "emptyPage"
      }));
    }
  }, "Empty page")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "clipboard|i18support|tour|truncate|loadingButtons|masonry|toastrNotification|nestableList|agileBoard|timelineTwo|diff|idleTimer|spinners|liveFavicon|googleMaps|codeEditor|modalWindow|forumView|validation|treeView|chatView|sweetAlert"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-globe"></i> <span class="nav-label" data-i18n="nav.miscellaneous">Miscellaneous</span><span class="label label-info pull-right">NEW</span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "clipboard|i18support|tour|truncate|loadingButtons|masonry|toastrNotification|nestableList|agileBoard|timelineTwo|diff|idleTimer|spinners|liveFavicon|googleMaps|codeEditor|modalWindow|forumView|validation|treeView|chatView|sweetAlert",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "toastrNotification"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "toastrNotification"
      }));
    }
  }, "Notification")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "nestableList"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "nestableList"
      }));
    }
  }, "Nestable list")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "agileBoard"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "agileBoard"
      }));
    }
  }, "Agile board")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "timelineTwo"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "timelineTwo"
      }));
    }
  }, "Timeline v.2")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "diff"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "diff"
      }));
    }
  }, "Diff")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "i18support"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "i18support"
      }));
    }
  }, "i18 support")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "sweetAlert"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "sweetAlert"
      }));
    }
  }, "Sweet alert")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "idleTimer"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "idleTimer"
      }));
    }
  }, "Idle timer")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "truncate"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "truncate"
      }));
    }
  }, "Truncate")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "spinners"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "spinners"
      }));
    }
  }, "Spinners")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "liveFavicon"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "liveFavicon"
      }));
    }
  }, "Live favicon")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "googleMaps"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "googleMaps"
      }));
    }
  }, "Google maps")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "codeEditor"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "codeEditor"
      }));
    }
  }, "Code editor")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "modalWindow"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "modalWindow"
      }));
    }
  }, "Modal window")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "clipboard"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "clipboard"
      }));
    }
  }, "Clipboard")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "forumView"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "forumView"
      }));
    }
  }, "Forum view")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "validation"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "validation"
      }));
    }
  }, "Validation")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "treeView"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "treeView"
      }));
    }
  }, "Tree view")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "loadingButtons"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "loadingButtons"
      }));
    }
  }, "Loading buttons")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "chatView"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "chatView"
      }));
    }
  }, "Chat view")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "masonry"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "masonry"
      }));
    }
  }, "Masonry")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tour"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "tour"
      }));
    }
  }, "Tour")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "resizeablePanels|typography|icons|draggablePanels|buttons|video|tabsPanels|notifications|badgesLabels|tabs"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-flask"></i> <span class="nav-label" data-i18n="nav.uielements">UI Elements</span><span class="fa arrow"></span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "resizeablePanels|typography|icons|draggablePanels|buttons|video|tabsPanels|notifications|badgesLabels|tabs",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "typography"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "typography"
      }));
    }
  }, "Typography")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "icons"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "icons"
      }));
    }
  }, "Icons")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "draggablePanels"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "draggablePanels"
      }));
    }
  }, "Draggable Panels")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "resizeablePanels"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "resizeablePanels"
      }));
    }
  }, "Resizeable Panels")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "buttons"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "buttons"
      }));
    }
  }, "Buttons")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "video"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "video"
      }));
    }
  }, "Video")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tabsPanels"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "tabsPanels"
      }));
    }
  }, "Panels")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tabs"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "tabs"
      }));
    }
  }, "Tabs")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "notifications"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "notifications"
      }));
    }
  }, HTML.Raw("Notifications &amp; Tooltips"))), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "badgesLabels"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "badgesLabels"
      }));
    }
  }, "Badges, Labels, Progress")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "gridOptions"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "gridOptions"
      }));
    }
  }, HTML.Raw('<i class="fa fa-laptop"></i>'), " ", HTML.Raw('<span class="nav-label" data-i18n="nav.gridoptions">Grid options</span>')), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tableStatic|dataTables|fooTables"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-table"></i> <span class="nav-label" data-i18n="nav.tables">Tables</span><span class="fa arrow"></span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tableStatic|dataTables|fooTables",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "tableStatic"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "tableStatic"
      }));
    }
  }, "Static Tables")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "fooTables"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "fooTables"
      }));
    }
  }, "Foo tables")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "dataTables"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dataTables"
      }));
    }
  }, "Data Tables")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "shopingCart|productDetail|payments|productsGrid|productsList|productEdit|orders"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-shopping-cart"></i> <span class="nav-label" data-i18n="nav.ecommerce">E-commerce</span><span class="fa arrow"></span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "shopingCart|productDetail|payments|productsGrid|productsList|productEdit|orders",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "productsGrid"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "productsGrid"
      }));
    }
  }, "Products grid")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "productsList"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "productsList"
      }));
    }
  }, "Product list")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "productEdit"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "productEdit"
      }));
    }
  }, "Product edit")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "productDetail"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "productDetail"
      }));
    }
  }, "Product Detail")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "shopingCart"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "shopingCart"
      }));
    }
  }, "Cart")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "orders"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "orders"
      }));
    }
  }, "Orders")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "payments"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "payments"
      }));
    }
  }, "Credit Card form")), "\n                    "), "\n                "), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "slick|gallery|carusela"
      }));
    }
  }, "\n                    ", HTML.Raw('<a href="#"><i class="fa fa-picture-o"></i> <span class="nav-label" data-i18n="nav.gallery">Gallery</span><span class="fa arrow"></span></a>'), "\n                    ", HTML.UL({
    "class": function() {
      return [ "nav nav-second-level collapse ", Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "slick|gallery|carusela",
        className: "in"
      })) ];
    }
  }, "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "gallery"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "gallery"
      }));
    }
  }, "Lightbox Gallery")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "carusela"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "carusela"
      }));
    }
  }, "Bootstrap Carousel")), "\n                        ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "slick"
      }));
    }
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "slick"
      }));
    }
  }, "Slick Carousel")), "\n\n                    "), "\n                "), "\n                ", HTML.Raw('<li>\n                    <a href="#"><i class="fa fa-sitemap"></i> <span class="nav-label" data-i18n="nav.menulevels">Menu Levels </span><span class="fa arrow"></span></a>\n                    <ul class="nav nav-second-level">\n                        <li>\n                            <a href="#">Third Level <span class="fa arrow"></span></a>\n                            <ul class="nav nav-third-level">\n                                <li>\n                                    <a href="#">Third Level Item</a>\n                                </li>\n                                <li>\n                                    <a href="#">Third Level Item</a>\n                                </li>\n                                <li>\n                                    <a href="#">Third Level Item</a>\n                                </li>\n\n                            </ul>\n                        </li>\n                        <li><a href="#">Second Level Item</a></li>\n                        <li>\n                            <a href="#">Second Level Item</a></li>\n                        <li>\n                            <a href="#">Second Level Item</a></li>\n                    </ul>\n                </li>'), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "cssAnimations"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "cssAnimations"
      }));
    }
  }, HTML.Raw('<i class="fa fa-magic"></i>'), " ", HTML.Raw('<span class="nav-label" data-i18n="nav.animations">CSS Animations </span>'), HTML.Raw('<span class="label label-info pull-right">62</span>')), "\n                "), "\n                ", HTML.LI({
    "class": "special_link"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "landing"
      }));
    }
  }, HTML.Raw('<i class="fa fa-database"></i>'), " ", HTML.Raw('<span class="nav-label" data-i18n="nav.landing">Landing page</span>')), "\n                "), "\n            "), "\n\n        "), "\n    ");
}));

}).call(this);
