(function(){
Template.__checkName("register");
Template["register"] = new Template("Template.register", (function() {
  var view = this;
  return HTML.DIV({
    "class": "middle-box text-center loginscreen animated fadeInDown"
  }, HTML.Raw('\n        <div>\n            <h1 class="logo-name">IN+</h1>\n        </div>\n        <h3>Register to IN+</h3>\n\n        <p>Create account to see it in action.</p>\n\n        '), HTML.FORM({
    "class": "m-t",
    role: "form",
    action: "#"
  }, "\n            ", HTML.Raw('<div class="form-group">\n                <input type="text" class="form-control" placeholder="Name" required="">\n            </div>'), "\n            ", HTML.Raw('<div class="form-group">\n                <input type="email" class="form-control" placeholder="Email" required="">\n            </div>'), "\n            ", HTML.Raw('<div class="form-group">\n                <input type="password" class="form-control" placeholder="Password" required="">\n            </div>'), "\n            ", HTML.Raw('<div class="form-group">\n                <div class="checkbox i-checks"><label> <input type="checkbox"><i></i> Agree the terms and policy\n                </label></div>\n            </div>'), "\n            ", HTML.Raw('<button type="submit" class="btn btn-primary block full-width m-b">Register</button>'), "\n\n            ", HTML.Raw('<p class="text-muted text-center">\n                <small>Already have an account?</small>\n            </p>'), "\n            ", HTML.A({
    "class": "btn btn-sm btn-white btn-block",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "login"
      }));
    }
  }, "Login"), "\n        "), HTML.Raw('\n        <p class="m-t">\n            <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>\n        </p>\n    '));
}));

}).call(this);
