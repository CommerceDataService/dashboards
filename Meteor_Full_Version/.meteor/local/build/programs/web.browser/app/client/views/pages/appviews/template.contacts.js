(function(){
Template.__checkName("contacts");
Template["contacts"] = new Template("Template.contacts", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Contacts"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a2.jpg">\n                                <div class="m-t-xs font-bold">Graphics designer</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>John Smith</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a1.jpg">\n                                <div class="m-t-xs font-bold">CEO</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Alex Johnatan</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a3.jpg">\n                                <div class="m-t-xs font-bold">Marketing manager</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Monica Smith</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a4.jpg">\n                                <div class="m-t-xs font-bold">Sales manager</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Michael Zimber</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a5.jpg">\n                                <div class="m-t-xs font-bold">Graphics designer</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Sandra Smith</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a6.jpg">\n                                <div class="m-t-xs font-bold">Graphics designer</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Janet Carton</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a1.jpg">\n                                <div class="m-t-xs font-bold">CEO</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Alex Johnatan</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a2.jpg">\n                                <div class="m-t-xs font-bold">Graphics designer</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>John Smith</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a3.jpg">\n                                <div class="m-t-xs font-bold">Marketing manager</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Monica Smith</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a4.jpg">\n                                <div class="m-t-xs font-bold">Sales manager</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Michael Zimber</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a5.jpg">\n                                <div class="m-t-xs font-bold">Graphics designer</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Sandra Smith</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a6.jpg">\n                                <div class="m-t-xs font-bold">Graphics designer</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Janet Carton</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a1.jpg">\n                                <div class="m-t-xs font-bold">CEO</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>Alex Johnatan</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "contact-box"
  }, "\n                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    }
  }, "\n                        ", HTML.Raw('<div class="col-sm-4">\n                            <div class="text-center">\n                                <img alt="image" class="img-circle m-t-xs img-responsive" src="img/a2.jpg">\n                                <div class="m-t-xs font-bold">Graphics designer</div>\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div class="col-sm-8">\n                            <h3><strong>John Smith</strong></h3>\n                            <p><i class="fa fa-map-marker"></i> Riviera State 32/106</p>\n                            <address>\n                                <strong>Twitter, Inc.</strong><br>\n                                795 Folsom Ave, Suite 600<br>\n                                San Francisco, CA 94107<br>\n                                <abbr title="Phone">P:</abbr> (123) 456-7890\n                            </address>\n                        </div>'), "\n                        ", HTML.Raw('<div class="clearfix"></div>'), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
