(function(){
Template.__checkName("gridOptions");
Template["gridOptions"] = new Template("Template.gridOptions", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Grid options")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Grid options</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.Raw("<p>See how aspects of the Bootstrap grid system work across multiple devices with a handy table.</p>"), "\n                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                            ", HTML.TABLE({
    "class": "table table-bordered table-striped"
  }, "\n                                ", HTML.THEAD("\n                                ", HTML.TR("\n                                    ", HTML.TH(), "\n                                    ", HTML.TH("\n                                        Extra small devices\n                                        ", HTML.SMALL("Phones (", HTML.CharRef({
    html: "&lt;",
    str: "<"
  }), "768px)"), "\n                                    "), "\n                                    ", HTML.TH("\n                                        Small devices\n                                        ", HTML.SMALL("Tablets (", HTML.CharRef({
    html: "&ge;",
    str: "≥"
  }), "768px)"), "\n                                    "), "\n                                    ", HTML.TH("\n                                        Medium devices\n                                        ", HTML.SMALL("Desktops (", HTML.CharRef({
    html: "&ge;",
    str: "≥"
  }), "992px)"), "\n                                    "), "\n                                    ", HTML.TH("\n                                        Large devices\n                                        ", HTML.SMALL("Desktops (", HTML.CharRef({
    html: "&ge;",
    str: "≥"
  }), "1200px)"), "\n                                    "), "\n                                "), "\n                                "), "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TH("Grid behavior"), "\n                                    ", HTML.TD("Horizontal at all times"), "\n                                    ", HTML.TD({
    colspan: "3"
  }, "Collapsed to start, horizontal above breakpoints"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Max container width"), "\n                                    ", HTML.TD("None (auto)"), "\n                                    ", HTML.TD("750px"), "\n                                    ", HTML.TD("970px"), "\n                                    ", HTML.TD("1170px"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Class prefix"), "\n                                    ", HTML.TD("\n                                        ", HTML.CODE(".col-xs-"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.CODE(".col-sm-"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.CODE(".col-md-"), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.CODE(".col-lg-"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("# of columns"), "\n                                    ", HTML.TD({
    colspan: "4"
  }, "12"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Max column width"), "\n                                    ", HTML.TD({
    "class": "text-muted"
  }, "Auto"), "\n                                    ", HTML.TD("60px"), "\n                                    ", HTML.TD("78px"), "\n                                    ", HTML.TD("95px"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Gutter width"), "\n                                    ", HTML.TD({
    colspan: "4"
  }, "30px (15px on each side of a column)"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Nestable"), "\n                                    ", HTML.TD({
    colspan: "4"
  }, "Yes"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Offsets"), "\n                                    ", HTML.TD({
    colspan: "4"
  }, "Yes"), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TH("Column ordering"), "\n                                    ", HTML.TD({
    colspan: "4"
  }, "Yes"), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n                        ", HTML.Raw("<p>Grid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any\n                            <code>.col-md-</code> class to an element will not only affect its styling on medium devices but also on large devices if a\n                            <code>.col-lg-</code> class is not present.</p>"), "\n\n                    "), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Stacked-to-horizontal</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n\n                        <p>Using a single set of\n                            <code>.col-md-*</code> grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any\n                            <code>.row</code>.</p>\n                        <div class="row show-grid">\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                            <div class="col-md-1">.col-md-1</div>\n                        </div>\n                        <div class="row show-grid">\n                            <div class="col-md-8">.col-md-8</div>\n                            <div class="col-md-4">.col-md-4</div>\n                        </div>\n                        <div class="row show-grid">\n                            <div class="col-md-4">.col-md-4</div>\n                            <div class="col-md-4">.col-md-4</div>\n                            <div class="col-md-4">.col-md-4</div>\n                        </div>\n                        <div class="row show-grid">\n                            <div class="col-md-6">.col-md-6</div>\n                            <div class="col-md-6">.col-md-6</div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Mobile and desktop</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n\n                        <p>Don\'t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding\n                            <code>.col-xs-*</code>\n                            <code>.col-md-*</code> to your columns. See the example below for a better idea of how it all works.</p>\n                        <div class="row show-grid">\n                            <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>\n                            <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n                        </div>\n                        <div class="row show-grid">\n                            <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n                            <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n                            <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n                        </div>\n                        <div class="row show-grid">\n                            <div class="col-xs-6">.col-xs-6</div>\n                            <div class="col-xs-6">.col-xs-6</div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Mobile, tablet, desktops</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n\n                        <p>Build on the previous example by creating even more dynamic and powerful layouts with tablet\n                            <code>.col-sm-*</code> classes.</p>\n                        <div class="row show-grid">\n                            <div class="col-xs-12 col-sm-6 col-md-8">.col-xs-12 .col-sm-6 .col-md-8</div>\n                            <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>\n                        </div>\n                        <div class="row show-grid">\n                            <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n                            <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n                            <!-- Optional: clear the XS cols if their content doesn\'t match in height -->\n                            <div class="clearfix visible-xs"></div>\n                            <div class="col-xs-6 col-sm-4">.col-xs-6 .col-sm-4</div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Responsive column resets</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n\n                        <p>With the four tiers of grids available you\'re bound to run into issues where, at certain breakpoints, your columns don\'t clear quite right as one is taller than the other. To fix that, use a combination of a\n                            <code>.clearfix</code> and our <a href="#responsive-utilities">responsive utility classes</a>.</p>\n                        <div class="row show-grid">\n                            <div class="col-xs-6 col-sm-3">\n                                .col-xs-6 .col-sm-3\n                                <br>Resize your viewport or check it out on your phone for an example.\n                            </div>\n                            <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>\n\n                            <!-- Add the extra clearfix for only the required viewport -->\n                            <div class="clearfix visible-xs"></div>\n\n                            <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>\n                            <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Offsetting columns</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n\n                        <p>Move columns to the right using\n                            <code>.col-md-offset-*</code> classes. These classes increase the left margin of a column by\n                            <code>*</code> columns. For example,\n                            <code>.col-md-offset-4</code> moves\n                            <code>.col-md-4</code> over four columns.</p>\n                        <div class="row show-grid">\n                            <div class="col-md-4">.col-md-4</div>\n                            <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>\n                        </div>\n                        <div class="row show-grid">\n                            <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>\n                            <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>\n                        </div>\n                        <div class="row show-grid">\n                            <div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Nesting columns</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <p>To nest your content with the default grid, add a new\n                            <code>.row</code> and set of\n                            <code>.col-md-*</code> columns within an existing\n                            <code>.col-md-*</code> column. Nested rows should include a set of columns that add up to 12.</p>\n                        <div class="row show-grid">\n                            <div class="col-md-9">\n                                Level 1: .col-md-9\n                                <div class="row show-grid">\n                                    <div class="col-md-6">\n                                        Level 2: .col-md-6\n                                    </div>\n                                    <div class="col-md-6">\n                                        Level 2: .col-md-6\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Column ordering</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <p>Easily change the order of our built-in grid columns with\n                            <code>.col-md-push-*</code> and\n                            <code>.col-md-pull-*</code> modifier classes.</p>\n                        <div class="row show-grid">\n                            <div class="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3</div>\n                            <div class="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9</div>\n                        </div>\n                    </div>'), "\n                "), "\n\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
