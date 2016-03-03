(function(){
Template.__checkName("badgesLabels");
Template["badgesLabels"] = new Template("Template.badgesLabels", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Badges and labels"),
      category: Spacebars.call("UI Elements")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Badges</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <p>\n                            To add a badge style You have to add <code>.badge</code>class to element. To change a color od badge you can add extra class like <code>.badge-primary</code>.\n                        </p>\n                        <p><span class="badge">Plain</span></p>\n                        <p><span class="badge badge-primary">Primary</span></p>\n                        <p><span class="badge badge-info">Information</span></p>\n                        <p><span class="badge badge-success">Success</span></p>\n                        <p><span class="badge badge-warning">Warning</span></p>\n                        <p><span class="badge badge-danger">Danger</span></p>\n                    </div>'), "\n                "), "\n            "), "\n\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Labels</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <p>\n                            Analogic to badge. To add a label style You have to add <code>.label</code>class to element. To change a color od label you can add extra class like <code>.label-primary</code>.\n                        </p>\n                        <p><span class="label">Plain</span></p>\n                        <p><span class="label label-primary">Primary</span></p>\n                        <p><span class="label label-info">Information</span></p>\n                        <p><span class="label label-success">Success</span></p>\n                        <p><span class="label label-warning">Warning</span></p>\n                        <p><span class="label label-danger">Danger</span></p>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Progress Bars</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <h5>Basic ProgressBars</h5>\n                        <div class="progress">\n                            <div style="width: 35%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="35" role="progressbar" class="progress-bar progress-bar-success">\n                                <span class="sr-only">35% Complete (success)</span>\n                            </div>\n                        </div>\n\n                        <div class="progress progress-bar-default">\n                            <div style="width: 43%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" role="progressbar" class="progress-bar">\n                                <span class="sr-only">43% Complete (success)</span>\n                            </div>\n                        </div>\n\n                        <h5>Striped Progressbars</h5>\n\n                        <div class="progress progress-striped">\n                            <div style="width: 50%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" role="progressbar" class="progress-bar progress-bar-warning">\n                                <span class="sr-only">40% Complete (success)</span>\n                            </div>\n                        </div>\n\n                        <h5>Active Progressbars</h5>\n\n                        <div class="progress progress-striped active">\n                            <div style="width: 75%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" role="progressbar" class="progress-bar progress-bar-danger">\n                                <span class="sr-only">40% Complete (success)</span>\n                            </div>\n                        </div>\n\n                        <h5>Stacked Progressbars</h5>\n\n                        <div class="progress progress-striped active">\n                            <div style="width: 30%" class="progress-bar progress-bar-success">\n                                <span class="sr-only">30% Complete (success)</span>\n                            </div>\n                            <div style="width: 20%" class="progress-bar progress-bar-warning">\n                                <span class="sr-only">15% Complete (warning)</span>\n                            </div>\n                            <div style="width: 40%" class="progress-bar progress-bar-danger">\n                                <span class="sr-only">40% Complete (danger)</span>\n                            </div>\n                        </div>\n\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
