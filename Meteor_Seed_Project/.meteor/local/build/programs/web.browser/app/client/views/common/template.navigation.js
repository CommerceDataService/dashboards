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
    "class": "nav",
    id: "side-menu"
  }, "\n                ", HTML.Raw('<li class="nav-header">\n                    <div class="dropdown profile-element">\n                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">\n                            <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">Example user</strong>\n                             </span> <span class="text-muted text-xs block">user <b class="caret"></b></span> </span> </a>\n                        <ul class="dropdown-menu animated fadeInRight m-t-xs">\n                            <li><a href="#">Item</a></li>\n                            <li><a href="#">Item</a></li>\n                            <li class="divider"></li>\n                            <li><a href="#">Item</a></li>\n                        </ul>\n                    </div>\n                    <div class="logo-element">\n                        IN+\n                    </div>\n                </li>'), "\n                ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "pageOne"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "pageOne"
      }));
    }
  }, HTML.Raw('<i class="fa fa-dashboard"></i>'), " ", HTML.Raw('<span class="nav-label">Page one</span>'), " "), "\n                "), "          ", HTML.LI({
    "class": function() {
      return Spacebars.mustache(view.lookup("isActiveRoute"), Spacebars.kw({
        regex: "pageTwo"
      }));
    }
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "pageTwo"
      }));
    }
  }, HTML.Raw('<i class="fa fa-diamond"></i>'), " ", HTML.Raw('<span class="nav-label">Page two</span>'), " "), "\n                "), "\n            "), "\n\n        "), "\n    ");
}));

}).call(this);
