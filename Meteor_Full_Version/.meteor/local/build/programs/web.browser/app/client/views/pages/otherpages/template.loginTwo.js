(function(){
Template.__checkName("loginTwo");
Template["loginTwo"] = new Template("Template.loginTwo", (function() {
  var view = this;
  return HTML.DIV({
    "class": "loginColumns animated fadeInDown"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n\n            ", HTML.Raw('<div class="col-md-6">\n                <h2 class="font-bold">Welcome to IN+</h2>\n\n                <p>\n                    Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.\n                </p>\n\n                <p>\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n                </p>\n\n                <p>\n                    When an unknown printer took a galley of type and scrambled it to make a type specimen book.\n                </p>\n\n                <p>\n                    <small>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</small>\n                </p>\n\n            </div>'), "\n            ", HTML.DIV({
    "class": "col-md-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                    ", HTML.FORM({
    "class": "m-t",
    role: "form",
    action: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard1"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="form-group">\n                            <input type="email" class="form-control" placeholder="Username" required="">\n                        </div>'), "\n                        ", HTML.Raw('<div class="form-group">\n                            <input type="password" class="form-control" placeholder="Password" required="">\n                        </div>'), "\n                        ", HTML.Raw('<button type="submit" class="btn btn-primary block full-width m-b">Login</button>'), "\n\n                        ", HTML.Raw('<a href="#">\n                            <small>Forgot password?</small>\n                        </a>'), "\n\n                        ", HTML.Raw('<p class="text-muted text-center">\n                            <small>Do not have an account?</small>\n                        </p>'), "\n                        ", HTML.A({
    "class": "btn btn-sm btn-white btn-block",
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "register"
      }));
    }
  }, "Create an account"), "\n                    "), "\n                    ", HTML.Raw('<p class="m-t">\n                        <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>\n                    </p>'), "\n                "), "\n            "), "\n        "), HTML.Raw('\n        <hr>\n        <div class="row">\n            <div class="col-md-6">\n                Copyright Example Company\n            </div>\n            <div class="col-md-6 text-right">\n                <small>© 2014-2015</small>\n            </div>\n        </div>\n    '));
}));

}).call(this);
