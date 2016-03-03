(function(){
Template.__checkName("issueTracker");
Template["issueTracker"] = new Template("Template.issueTracker", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Issue tracker"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content  animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.Raw('<div class="ibox-title">\n                        <h5>Issue list</h5>\n                        <div class="ibox-tools">\n                            <a href="" class="btn btn-primary btn-xs">Add new issue</a>\n                        </div>\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.Raw('<div class="m-b-lg">\n\n                            <div class="input-group">\n                                <input type="text" placeholder="Search issue by name..." class=" form-control">\n                                    <span class="input-group-btn">\n                                        <button type="button" class="btn btn-white"> Search</button>\n                                    </span>\n                            </div>\n                            <div class="m-t-md">\n\n                                <div class="pull-right">\n                                    <button type="button" class="btn btn-sm btn-white"> <i class="fa fa-comments"></i> </button>\n                                    <button type="button" class="btn btn-sm btn-white"> <i class="fa fa-user"></i> </button>\n                                    <button type="button" class="btn btn-sm btn-white"> <i class="fa fa-list"></i> </button>\n                                    <button type="button" class="btn btn-sm btn-white"> <i class="fa fa-pencil"></i> </button>\n                                    <button type="button" class="btn btn-sm btn-white"> <i class="fa fa-print"></i> </button>\n                                    <button type="button" class="btn btn-sm btn-white"> <i class="fa fa-cogs"></i> </button>\n                                </div>\n\n                                <strong>Found 61 issues.</strong>\n\n\n\n                            </div>\n\n                        </div>'), "\n\n                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                            ", HTML.TABLE({
    "class": "table table-hover issue-tracker"
  }, "\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-primary"
  }, "Added"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-23\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            This is issue with the coresponding note\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Adrian Novak\n                                    "), "\n                                    ", HTML.TD("\n                                        12.02.2015 10:00 am\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "0.52,1.041"), "\n                                        2d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Mag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Rag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-primary"
  }, "Added"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-17\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            Desktop publishing packages and web page editors now use Lorem Ipsum as their default model text\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Anna Smith\n                                    "), "\n                                    ", HTML.TD("\n                                        10.02.2015 05:32 am\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "3,2"), "\n                                        2d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Rag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-primary"
  }, "Added"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-12\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            It is a long established fact that a reader will be\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Anthony Jackson\n                                    "), "\n                                    ", HTML.TD("\n                                        02.03.2015 06:02 am\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "1,2"), "\n                                        1d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Mag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-primary"
  }, "Added"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-11\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Monica Proven\n                                    "), "\n                                    ", HTML.TD("\n                                        01.10.2015 11:02 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "4,2"), "\n                                        3d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Rag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-warning"
  }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-07\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            Always free from repetition, injected humour, or non-characteristic words etc.\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Alex Ferguson\n                                    "), "\n                                    ", HTML.TD("\n                                        28.11.2015 05:10 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "1,2"), "\n                                        2d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-warning"
  }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-07\n                                        "), "\n\n                                        ", HTML.SMALL('\n                                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit am\n                                        '), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Mark Conor\n                                    "), "\n                                    ", HTML.TD("\n                                        18.09.2015 06:20 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "3,2"), "\n                                        3d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Mag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-warning"
  }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-06\n                                        "), "\n\n                                        ", HTML.SMALL('\n                                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit am\n                                        '), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Carol Jackson\n                                    "), "\n                                    ", HTML.TD("\n                                        11.03.2015 07:30 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "3,2"), "\n                                        2d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Mag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-warning"
  }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-05\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            Content here, content here', making it look like readable English. Many desktop\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Carol Jackson\n                                    "), "\n                                    ", HTML.TD("\n                                        05.04.2015 08:40 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "3,2"), "\n                                        2d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Mag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-warning"
  }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-04\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            Virginia, looked up one of the more obscure Latin words, consectetur\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Monica Smith\n                                    "), "\n                                    ", HTML.TD("\n                                        10.06.2014 08:10 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "5,7"), "\n                                        4d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Mag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Cag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-warning"
  }, "Fixed"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-03\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            Injected humour, or randomised words which don't l\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Anna Johnson\n                                    "), "\n                                    ", HTML.TD("\n                                        13.05.2014 09:20 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "2,7"), "\n                                        3d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Cag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-danger"
  }, "Bug"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-44\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            This is issue with the coresponding note\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Adrian Novak\n                                    "), "\n                                    ", HTML.TD("\n                                        12.02.2015 10:00 am\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "0.52,1.041"), "\n                                        2d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Mag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Rag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-danger"
  }, "Bug"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-41\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            Desktop publishing packages and web page editors now use Lorem Ipsum as their default model text\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Anna Smith\n                                    "), "\n                                    ", HTML.TD("\n                                        10.02.2015 05:32 am\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "3,2"), "\n                                        2d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Rag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-danger"
  }, "Bug"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-34\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            It is a long established fact that a reader will be\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Anthony Jackson\n                                    "), "\n                                    ", HTML.TD("\n                                        02.03.2015 06:02 am\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "1,2"), "\n                                        1d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Mag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-danger"
  }, "Bug"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-46\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Monica Proven\n                                    "), "\n                                    ", HTML.TD("\n                                        01.10.2015 11:02 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "4,2"), "\n                                        3d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Rag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-danger"
  }, "Bug"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-51\n                                        "), "\n\n                                        ", HTML.SMALL("\n                                            Always free from repetition, injected humour, or non-characteristic words etc.\n                                        "), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Alex Ferguson\n                                    "), "\n                                    ", HTML.TD("\n                                        28.11.2015 05:10 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "1,2"), "\n                                        2d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                ", HTML.TR("\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "label label-danger"
  }, "Bug"), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "issue-info"
  }, "\n                                        ", HTML.A({
    href: "#"
  }, "\n                                            ISSUE-52\n                                        "), "\n\n                                        ", HTML.SMALL('\n                                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit am\n                                        '), "\n                                    "), "\n                                    ", HTML.TD("\n                                        Mark Conor\n                                    "), "\n                                    ", HTML.TD("\n                                        18.09.2015 06:20 pm\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.SPAN({
    "class": "pie"
  }, "3,2"), "\n                                        3d\n                                    "), "\n                                    ", HTML.TD({
    "class": "text-right"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Tag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Mag"), "\n                                        ", HTML.BUTTON({
    "class": "btn btn-white btn-xs"
  }, " Dag"), "\n                                    "), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n                    "), "\n\n                "), "\n            "), "\n        "), "\n\n\n    ") ];
}));

}).call(this);
