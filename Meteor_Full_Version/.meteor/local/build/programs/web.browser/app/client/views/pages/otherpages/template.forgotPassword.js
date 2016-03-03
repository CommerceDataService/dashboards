(function(){
Template.__checkName("forgotPassword");
Template["forgotPassword"] = new Template("Template.forgotPassword", (function() {
  var view = this;
  return HTML.DIV({
    "class": "passwordBox animated fadeInDown"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n\n            ", HTML.DIV({
    "class": "col-md-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                    ", HTML.Raw('<h2 class="font-bold">Forgot password</h2>'), "\n\n                    ", HTML.Raw("<p>\n                        Enter your email address and your password will be reset and emailed to you.\n                    </p>"), "\n\n                    ", HTML.DIV({
    "class": "row"
  }, "\n\n                        ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                            ", HTML.FORM({
    "class": "m-t",
    role: "form",
    action: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard1"
      }));
    }
  }, "\n                                ", HTML.Raw('<div class="form-group">\n                                    <input type="email" class="form-control" placeholder="Email address" required="">\n                                </div>'), "\n\n                                ", HTML.Raw('<button type="submit" class="btn btn-primary block full-width m-b">Send new password</button>'), "\n\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), HTML.Raw('\n        <hr>\n        <div class="row">\n            <div class="col-md-6">\n                Copyright Example Company\n            </div>\n            <div class="col-md-6 text-right">\n                <small>© 2014-2015</small>\n            </div>\n        </div>\n    '));
}));

}).call(this);
