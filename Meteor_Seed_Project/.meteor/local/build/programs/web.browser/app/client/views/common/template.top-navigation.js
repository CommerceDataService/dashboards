(function(){
Template.__checkName("topNavigation");
Template["topNavigation"] = new Template("Template.topNavigation", (function() {
  var view = this;
  return HTML.DIV({
    "class": "row border-bottom white-bg"
  }, "\n        ", HTML.NAV({
    "class": "navbar navbar-static-top",
    role: "navigation"
  }, "\n            ", HTML.Raw('<div class="navbar-header">\n                <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed" type="button">\n                    <i class="fa fa-reorder"></i>\n                </button>\n                <a href="#" class="navbar-brand">Inspinia</a>\n            </div>'), "\n            ", HTML.DIV({
    "class": "navbar-collapse collapse",
    id: "navbar"
  }, "\n                ", HTML.UL({
    "class": "nav navbar-nav"
  }, "\n                    ", HTML.LI({
    "class": "active"
  }, "\n                        ", HTML.A({
    "aria-expanded": "false",
    role: "button",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "layouts"
      }));
    }
  }, " Back to main Layout page"), "\n                    "), "\n                    ", HTML.Raw('<li class="dropdown">\n                        <a aria-expanded="false" role="button" href="#" class="dropdown-toggle" data-toggle="dropdown"> Menu item <span class="caret"></span></a>\n                        <ul role="menu" class="dropdown-menu">\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                        </ul>\n                    </li>'), "\n                    ", HTML.Raw('<li class="dropdown">\n                        <a aria-expanded="false" role="button" href="#" class="dropdown-toggle" data-toggle="dropdown"> Menu item <span class="caret"></span></a>\n                        <ul role="menu" class="dropdown-menu">\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                        </ul>\n                    </li>'), "\n                    ", HTML.Raw('<li class="dropdown">\n                        <a aria-expanded="false" role="button" href="#" class="dropdown-toggle" data-toggle="dropdown"> Menu item <span class="caret"></span></a>\n                        <ul role="menu" class="dropdown-menu">\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                        </ul>\n                    </li>'), "\n                    ", HTML.Raw('<li class="dropdown">\n                        <a aria-expanded="false" role="button" href="#" class="dropdown-toggle" data-toggle="dropdown"> Menu item <span class="caret"></span></a>\n                        <ul role="menu" class="dropdown-menu">\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                            <li><a href="">Menu item</a></li>\n                        </ul>\n                    </li>'), "\n\n                "), "\n                ", HTML.UL({
    "class": "nav navbar-top-links navbar-right"
  }, "\n                    ", HTML.LI("\n                        ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "\n                            ", HTML.Raw('<i class="fa fa-sign-out"></i>'), " Log out\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ");
}));

}).call(this);
