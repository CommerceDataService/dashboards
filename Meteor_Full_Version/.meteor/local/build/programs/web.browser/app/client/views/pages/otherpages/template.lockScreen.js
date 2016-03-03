(function(){
Template.__checkName("lockScreen");
Template["lockScreen"] = new Template("Template.lockScreen", (function() {
  var view = this;
  return [ HTML.Raw('<div class="lock-word animated fadeInDown">\n        <span class="first-word">LOCKED</span><span>SCREEN</span>\n    </div>\n    '), HTML.DIV({
    "class": "middle-box text-center lockscreen animated fadeInDown"
  }, "\n        ", HTML.DIV("\n            ", HTML.Raw('<div class="m-b-md">\n                <img alt="image" class="img-circle circle-border" src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg">\n            </div>'), "\n            ", HTML.Raw("<h3>John Smith</h3>"), "\n            ", HTML.Raw("<p>Your are in lock screen. Main app was shut down and you need to enter your passwor to go back to app.</p>"), "\n            ", HTML.FORM({
    "class": "m-t",
    role: "form",
    action: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard1"
      }));
    }
  }, "\n                ", HTML.Raw('<div class="form-group">\n                    <input type="password" class="form-control" placeholder="******" required="">\n                </div>'), "\n                ", HTML.Raw('<button type="submit" class="btn btn-primary block full-width">Unlock</button>'), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
