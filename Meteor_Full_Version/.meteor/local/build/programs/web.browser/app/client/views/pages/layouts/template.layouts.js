(function(){
Template.__checkName("layouts");
Template["layouts"] = new Template("Template.layouts", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Layouts")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-12">\n                <div class="ibox float-e-margins">\n                    <div class="ibox-content text-center p-md">\n\n                        <h2><span class="text-navy">INSPINIA - Responsive Admin Theme</span>\n                            is provided with two main layouts <br>three skins and separate configure options.</h2>\n\n                        <p>\n                            All config options you can trun on/off from the theme box configuration (green icon on the left side of page).\n                        </p>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content text-center p-md"
  }, "\n\n                        ", HTML.Raw('<h4 class="m-b-xxs">Top navigation, centered content layout</h4>'), "\n                        ", HTML.Raw("<small>(optional layout)</small>"), "\n                        ", HTML.Raw("<p>Avalible configure options</p>"), "\n                        ", HTML.Raw('<span class="simple_tag">Scroll navbar</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Top fixed navbar</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Boxed layout</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Scroll footer</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Fixed footer</span>'), "\n                        ", HTML.DIV({
    "class": "m-t-md"
  }, "\n                            ", HTML.Raw("<p>Check the Dashboard v.4 with top navigation layout</p>"), "\n                            ", HTML.DIV({
    "class": "p-lg "
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard4"
      }));
    }
  }, HTML.Raw('<img class="img-responsive img-shadow" src="img/dashbard4_2.jpg" alt="">')), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n            "), "\n\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content text-center p-md"
  }, "\n\n                        ", HTML.Raw('<h4 class="m-b-xxs">Basci left side nabigation layout </h4>'), HTML.Raw("<small>(main layout)</small>"), "\n                        ", HTML.Raw("<p>Avalible configure options</p>"), "\n                        ", HTML.Raw('<span class="simple_tag">Collapse menu</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Fixed sidebar</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Scroll navbar</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Top fixed navbar</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Boxed layout</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Scroll footer</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Fixed footer</span>'), "\n                        ", HTML.DIV({
    "class": "m-t-md"
  }, "\n                            ", HTML.Raw("<p>Check the Dashboard v.4 with basic layout</p>"), "\n                            ", HTML.DIV({
    "class": "p-lg"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard4l"
      }));
    }
  }, HTML.Raw('<img class="img-responsive img-shadow" src="img/dashbard4_1.jpg" alt="">')), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n            "), "\n\n\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content text-center p-md"
  }, "\n\n                        ", HTML.Raw('<h4 class="m-b-xxs">Full height - Outlook view <span class="label label-primary">NEW</span></h4>'), "\n                        ", HTML.Raw("<small>(optional layout)</small>"), "\n                        ", HTML.Raw("<p>Avalible configure options</p>"), "\n                        ", HTML.Raw('<span class="simple_tag">Scroll navbar</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Boxed layout</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Scroll footer</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Fixed footer</span>'), "\n                        ", HTML.DIV({
    "class": "m-t-md"
  }, "\n                            ", HTML.Raw("<p>Check the Outlook view in in full height page</p>"), "\n                            ", HTML.DIV({
    "class": "p-lg "
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "fullHeight"
      }));
    }
  }, HTML.Raw('<img class="img-responsive img-shadow" src="img/full_height.jpg" alt="">')), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n            "), "\n\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content text-center p-md"
  }, "\n\n                        ", HTML.Raw('<h4 class="m-b-xxs">Off canvas menu <span class="label label-primary">NEW</span></h4>'), "\n                        ", HTML.Raw("<small>(optional layout)</small>"), "\n                        ", HTML.Raw("<p>Avalible configure options</p>"), "\n                        ", HTML.Raw('<span class="simple_tag">Collapse menu</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Fixed sidebar</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Top fixed navbar</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Boxed layout</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Scroll footer</span>'), "\n                        ", HTML.Raw('<span class="simple_tag">Fixed footer</span>'), "\n                        ", HTML.DIV({
    "class": "m-t-md"
  }, "\n                            ", HTML.Raw("<p>Check the off canvas menu on example article page</p>"), "\n                            ", HTML.DIV({
    "class": "p-lg"
  }, "\n                                ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "offCanvas"
      }));
    }
  }, HTML.Raw('<img class="img-responsive img-shadow" src="img/off_canvas.jpg" alt="">')), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n\n            "), "\n\n\n        "), "\n\n\n    ") ];
}));

}).call(this);
