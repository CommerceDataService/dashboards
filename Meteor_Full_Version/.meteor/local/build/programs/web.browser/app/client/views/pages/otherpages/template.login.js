(function(){
Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.DIV({
    "class": "middle-box text-center loginscreen animated fadeInDown"
  }, "\n        ", HTML.DIV("\n            ", HTML.Raw('<div>\n\n                <h1 class="logo-name">IN+</h1>\n\n            </div>'), "\n            ", HTML.Raw("<h3>Welcome to IN+</h3>"), "\n            ", HTML.Raw("<p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.\n            </p>"), "\n            ", HTML.Raw("<p>Login in. To see it in action.</p>"), "\n            ", HTML.FORM({
    "class": "m-t",
    role: "form",
    action: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard1"
      }));
    }
  }, "\n                ", HTML.Raw('<div class="form-group">\n                    <input type="email" class="form-control" placeholder="Username" required="">\n                </div>'), "\n                ", HTML.Raw('<div class="form-group">\n                    <input type="password" class="form-control" placeholder="Password" required="">\n                </div>'), "\n                ", HTML.Raw('<button type="submit" class="btn btn-primary block full-width m-b">Login</button>'), "\n\n                ", HTML.Raw('<a href="#"><small>Forgot password?</small></a>'), "\n                ", HTML.Raw('<p class="text-muted text-center"><small>Do not have an account?</small></p>'), "\n                ", HTML.A({
    "class": "btn btn-sm btn-white btn-block",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "register"
      }));
    }
  }, "Create an account"), "\n            "), "\n            ", HTML.Raw('<p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>'), "\n        "), "\n    ");
}));

}).call(this);
