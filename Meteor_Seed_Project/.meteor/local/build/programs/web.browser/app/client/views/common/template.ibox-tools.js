(function(){
Template.__checkName("iboxTools");
Template["iboxTools"] = new Template("Template.iboxTools", (function() {
  var view = this;
  return HTML.Raw('<div class="ibox-tools">\n        <a class="collapse-link">\n            <i class="fa fa-chevron-up"></i>\n        </a>\n        <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n            <i class="fa fa-wrench"></i>\n        </a>\n        <ul class="dropdown-menu dropdown-user">\n            <li><a href="#">Config option 1</a>\n            </li>\n            <li><a href="#">Config option 2</a>\n            </li>\n        </ul>\n        <a class="close-link">\n            <i class="fa fa-times"></i>\n        </a>\n    </div>');
}));

}).call(this);
