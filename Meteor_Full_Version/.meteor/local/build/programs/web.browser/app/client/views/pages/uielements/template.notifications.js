(function(){
Template.__checkName("notifications");
Template["notifications"] = new Template("Template.notifications", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Notifications"),
      category: Spacebars.call("UI Elements")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeIn"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Alerts Styles</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div class="alert alert-success">\n                            How quickly daft jumping zebras vex. <a class="alert-link" href="#">Alert Link</a>.\n                        </div>\n                        <div class="alert alert-info">\n                            How quickly daft jumping zebras vex. <a class="alert-link" href="#">Alert Link</a>.\n                        </div>\n                        <div class="alert alert-warning">\n                            How quickly daft jumping zebras vex. <a class="alert-link" href="#">Alert Link</a>.\n                        </div>\n                        <div class="alert alert-danger">\n                            How quickly daft jumping zebras vex. <a class="alert-link" href="#">Alert Link</a>.\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Dismissable Alerts</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div class="alert alert-success alert-dismissable">\n                            <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>\n                            A wonderful serenity has taken possession. <a class="alert-link" href="#">Alert Link</a>.\n                        </div>\n                        <div class="alert alert-info alert-dismissable">\n                            <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>\n                            A wonderful serenity has taken possession. <a class="alert-link" href="#">Alert Link</a>.\n                        </div>\n                        <div class="alert alert-warning alert-dismissable">\n                            <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>\n                            A wonderful serenity has taken possession. <a class="alert-link" href="#">Alert Link</a>.\n                        </div>\n                        <div class="alert alert-danger alert-dismissable">\n                            <button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>\n                            A wonderful serenity has taken possession. <a class="alert-link" href="#">Alert Link</a>.\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n        "), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Tooltips and Popovers</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content text-center">\n                        <h4>Tooltip Demo <small>Background color more gentle.</small></h4>\n                        <div class="tooltip-demo">\n                            <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>\n                            <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>\n                            <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>\n                            <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>\n                        </div>\n                        <br>\n                        <h4>Clickable Popover Demo</h4>\n                        <div class="tooltip-demo">\n                            <button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n                                Popover on left\n                            </button>\n                            <button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n                                Popover on top\n                            </button>\n                            <button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n                                Popover on bottom\n                            </button>\n                            <button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n                                Popover on right\n                            </button>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n    ") ];
}));

}).call(this);
