(function(){
Template.__checkName("dashboard1");
Template["dashboard1"] = new Template("Template.dashboard1", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "row  border-bottom white-bg dashboard-header"
  }, "\n\n        ", HTML.DIV({
    "class": "col-sm-3"
  }, "\n            ", HTML.Raw("<h2>Welcome Amelia</h2>"), "\n            ", HTML.Raw("<small>You have 42 messages and 6 notifications.</small>"), "\n            ", Blaze._TemplateWith(function() {
    return Spacebars.call(view.lookup("notifications"));
  }, function() {
    return Spacebars.include(view.lookupTemplate("notificationList"));
  }), "\n        "), "\n        ", HTML.Raw('<div class="col-sm-6">\n            <div class="flot-chart dashboard-chart">\n                <div class="flot-chart-content" id="flot-dashboard-chart"></div>\n            </div>\n            <div class="row text-left">\n                <div class="col-xs-4">\n                    <div class=" m-l-md">\n                        <span class="h4 font-bold m-t block">$ 406,100</span>\n                        <small class="text-muted m-b block">Sales marketing report</small>\n                    </div>\n                </div>\n                <div class="col-xs-4">\n                    <span class="h4 font-bold m-t block">$ 150,401</span>\n                    <small class="text-muted m-b block">Annual sales revenue</small>\n                </div>\n                <div class="col-xs-4">\n                    <span class="h4 font-bold m-t block">$ 16,822</span>\n                    <small class="text-muted m-b block">Half-year revenue margin</small>\n                </div>\n\n            </div>\n        </div>'), "\n        ", HTML.Raw('<div class="col-sm-3">\n            <div class="statistic-box">\n                <h4>\n                    Project Beta progress\n                </h4>\n\n                <p>\n                    You have two project with not compleated task.\n                </p>\n\n                <div class="row text-center">\n                    <div class="col-lg-6">\n                        <canvas id="polarChart" width="80" height="80"></canvas>\n                        <h5>Kolter</h5>\n                    </div>\n                    <div class="col-lg-6">\n                        <canvas id="doughnutChart" width="78" height="78"></canvas>\n                        <h5>Maxtor</h5>\n                    </div>\n                </div>\n                <div class="m-t">\n                    <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>\n                </div>\n\n            </div>\n        </div>'), "\n\n    "), "\n    ", HTML.DIV({
    "class": "wrapper wrapper-content"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>New data for the report</h5>"), " ", HTML.Raw('<span class="label label-primary">IN+</span>'), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.DIV("\n\n                            ", HTML.Raw('<div class="pull-right text-right">\n\n                                <span class="bar_dashboard">5,3,9,6,5,9,7,3,5,2,4,7,3,2,7,9,6,4,5,7,3,2,1,0,9,5,6,8,3,2,1</span>\n                                <br>\n                                <small class="font-bold">$ 20 054.43</small>\n                            </div>'), "\n                            ", HTML.H4("NYS report new data!\n                                ", HTML.Raw("<br>"), "\n                                ", HTML.SMALL({
    "class": "m-r"
  }, HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "graphFlot"
      }));
    }
  }, " Check the stock price! "), " "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Read below comments</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content no-padding">\n                        <ul class="list-group">\n                            <li class="list-group-item">\n                                <p><a class="text-info" href="#">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                                <small class="block text-muted"><i class="fa fa-clock-o"></i> 1 minuts ago</small>\n                            </li>\n                            <li class="list-group-item">\n                                <p><a class="text-info" href="#">@Stock Man</a> Check this stock chart. This price is crazy! </p>\n                                <small class="block text-muted"><i class="fa fa-clock-o"></i> 2 hours ago</small>\n                            </li>\n                            <li class="list-group-item">\n                                <p><a class="text-info" href="#">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>\n                                <small class="block text-muted"><i class="fa fa-clock-o"></i> 2 minuts ago</small>\n                            </li>\n                            <li class="list-group-item ">\n                                <p><a class="text-info" href="#">@Jonathan Febrick</a> The standard chunk of Lorem Ipsum</p>\n                                <small class="block text-muted"><i class="fa fa-clock-o"></i> 1 hour ago</small>\n                            </li>\n                            <li class="list-group-item">\n                                <p><a class="text-info" href="#">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                                <small class="block text-muted"><i class="fa fa-clock-o"></i> 1 minuts ago</small>\n                            </li>\n                            <li class="list-group-item">\n                                <p><a class="text-info" href="#">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>\n                                <small class="block text-muted"><i class="fa fa-clock-o"></i> 2 minuts ago</small>\n                            </li>\n                        </ul>\n                    </div>'), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.Raw('<div class="ibox-title">\n                        <h5>Your daily feed</h5>\n                        <div class="ibox-tools">\n                            <span class="label label-warning-light">10 Messages</span>\n                        </div>\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.DIV("\n                            ", HTML.DIV({
    "class": "feed-activity-list"
  }, "\n\n                                ", HTML.DIV({
    "class": "feed-element"
  }, "\n                                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                        ", HTML.Raw('<img alt="image" class="img-circle" src="img/profile.jpg">'), "\n                                    "), "\n                                    ", HTML.Raw('<div class="media-body ">\n                                        <small class="pull-right">5m ago</small>\n                                        <strong>Monica Smith</strong> posted a new blog. <br>\n                                        <small class="text-muted">Today 5:60 pm - 12.06.2014</small>\n\n                                    </div>'), "\n                                "), "\n\n                                ", HTML.DIV({
    "class": "feed-element"
  }, "\n                                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                        ", HTML.Raw('<img alt="image" class="img-circle" src="img/a2.jpg">'), "\n                                    "), "\n                                    ", HTML.Raw('<div class="media-body ">\n                                        <small class="pull-right">2h ago</small>\n                                        <strong>Mark Johnson</strong> posted message on <strong>Monica Smith</strong> site. <br>\n                                        <small class="text-muted">Today 2:10 pm - 12.06.2014</small>\n                                    </div>'), "\n                                "), "\n                                ", HTML.DIV({
    "class": "feed-element"
  }, "\n                                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                        ", HTML.Raw('<img alt="image" class="img-circle" src="img/a3.jpg">'), "\n                                    "), "\n                                    ", HTML.Raw('<div class="media-body ">\n                                        <small class="pull-right">2h ago</small>\n                                        <strong>Janet Rosowski</strong> add 1 photo on <strong>Monica Smith</strong>. <br>\n                                        <small class="text-muted">2 days ago at 8:30am</small>\n                                    </div>'), "\n                                "), "\n                                ", HTML.DIV({
    "class": "feed-element"
  }, "\n                                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                        ", HTML.Raw('<img alt="image" class="img-circle" src="img/a4.jpg">'), "\n                                    "), "\n                                    ", HTML.Raw('<div class="media-body ">\n                                        <small class="pull-right text-navy">5h ago</small>\n                                        <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br>\n                                        <small class="text-muted">Yesterday 1:21 pm - 11.06.2014</small>\n                                        <div class="actions">\n                                            <a class="btn btn-xs btn-white"><i class="fa fa-thumbs-up"></i> Like </a>\n                                            <a class="btn btn-xs btn-white"><i class="fa fa-heart"></i> Love</a>\n                                        </div>\n                                    </div>'), "\n                                "), "\n                                ", HTML.DIV({
    "class": "feed-element"
  }, "\n                                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                        ", HTML.Raw('<img alt="image" class="img-circle" src="img/a5.jpg">'), "\n                                    "), "\n                                    ", HTML.Raw('<div class="media-body ">\n                                        <small class="pull-right">2h ago</small>\n                                        <strong>Kim Smith</strong> posted message on <strong>Monica Smith</strong> site. <br>\n                                        <small class="text-muted">Yesterday 5:20 pm - 12.06.2014</small>\n                                        <div class="well">\n                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n                                            Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                                        </div>\n                                        <div class="pull-right">\n                                            <a class="btn btn-xs btn-white"><i class="fa fa-thumbs-up"></i> Like </a>\n                                        </div>\n                                    </div>'), "\n                                "), "\n                                ", HTML.DIV({
    "class": "feed-element"
  }, "\n                                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                        ", HTML.Raw('<img alt="image" class="img-circle" src="img/profile.jpg">'), "\n                                    "), "\n                                    ", HTML.Raw('<div class="media-body ">\n                                        <small class="pull-right">23h ago</small>\n                                        <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>\n                                        <small class="text-muted">2 days ago at 2:30 am - 11.06.2014</small>\n                                    </div>'), "\n                                "), "\n                                ", HTML.DIV({
    "class": "feed-element"
  }, "\n                                    ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "profile"
      }));
    },
    "class": "pull-left"
  }, "\n                                        ", HTML.Raw('<img alt="image" class="img-circle" src="img/a7.jpg">'), "\n                                    "), "\n                                    ", HTML.Raw('<div class="media-body ">\n                                        <small class="pull-right">46h ago</small>\n                                        <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>\n                                        <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>\n                                    </div>'), "\n                                "), "\n                            "), "\n\n                            ", HTML.Raw('<button class="btn btn-primary btn-block m-t"><i class="fa fa-arrow-down"></i> Show More</button>'), "\n\n                        "), "\n\n                    "), "\n                "), "\n\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-4"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Alpha project</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content ibox-heading">\n                        <h3>You have meeting today!</h3>\n                        <small><i class="fa fa-map-marker"></i> Meeting is on 6:00am. Check your schedule to see detail.</small>\n                    </div>'), "\n                    ", HTML.Raw('<div class="ibox-content inspinia-timeline">\n\n                        <div class="timeline-item">\n                            <div class="row">\n                                <div class="col-xs-3 date">\n                                    <i class="fa fa-briefcase"></i>\n                                    6:00 am\n                                    <br>\n                                    <small class="text-navy">2 hour ago</small>\n                                </div>\n                                <div class="col-xs-7 content no-top-border">\n                                    <p class="m-b-xs"><strong>Meeting</strong></p>\n\n                                    <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the\n                                        sale.</p>\n\n                                    <p><span data-diameter="40" class="updating-chart">5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,4,7,3,2,9,8,7,4,5,1,2,9,5,4,7,2,7,7,3,5,2</span></p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="timeline-item">\n                            <div class="row">\n                                <div class="col-xs-3 date">\n                                    <i class="fa fa-file-text"></i>\n                                    7:00 am\n                                    <br>\n                                    <small class="text-navy">3 hour ago</small>\n                                </div>\n                                <div class="col-xs-7 content">\n                                    <p class="m-b-xs"><strong>Send documents to Mike</strong></p>\n                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="timeline-item">\n                            <div class="row">\n                                <div class="col-xs-3 date">\n                                    <i class="fa fa-coffee"></i>\n                                    8:00 am\n                                    <br>\n                                </div>\n                                <div class="col-xs-7 content">\n                                    <p class="m-b-xs"><strong>Coffee Break</strong></p>\n                                    <p>\n                                        Go to shop and find some products.\n                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="timeline-item">\n                            <div class="row">\n                                <div class="col-xs-3 date">\n                                    <i class="fa fa-phone"></i>\n                                    11:00 am\n                                    <br>\n                                    <small class="text-navy">21 hour ago</small>\n                                </div>\n                                <div class="col-xs-7 content">\n                                    <p class="m-b-xs"><strong>Phone with Jeronimo</strong></p>\n                                    <p>\n                                        Lorem Ipsum has been the industry\'s standard dummy text ever since.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="timeline-item">\n                            <div class="row">\n                                <div class="col-xs-3 date">\n                                    <i class="fa fa-user-md"></i>\n                                    09:00 pm\n                                    <br>\n                                    <small>21 hour ago</small>\n                                </div>\n                                <div class="col-xs-7 content">\n                                    <p class="m-b-xs"><strong>Go to the doctor dr Smith</strong></p>\n                                    <p>\n                                        Find some issue and go to doctor.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="timeline-item">\n                            <div class="row">\n                                <div class="col-xs-3 date">\n                                    <i class="fa fa-comments"></i>\n                                    12:50 pm\n                                    <br>\n                                    <small class="text-navy">48 hour ago</small>\n                                </div>\n                                <div class="col-xs-7 content">\n                                    <p class="m-b-xs"><strong>Chat with Monica and Sandra</strong></p>\n                                    <p>\n                                        Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n    ") ];
}));

Template.__checkName("notificationList");
Template["notificationList"] = new Template("Template.notificationList", (function() {
  var view = this;
  return HTML.UL({
    "class": "list-group clear-list m-t"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("."));
  }, function() {
    return [ "\n            ", Spacebars.include(view.lookupTemplate("notificationElement")), "\n        " ];
  }), "\n    ");
}));

Template.__checkName("notificationElement");
Template["notificationElement"] = new Template("Template.notificationElement", (function() {
  var view = this;
  return HTML.LI({
    "class": "list-group-item"
  }, "\n        ", HTML.SPAN({
    "class": "pull-right"
  }, "\n            ", Blaze.View("lookup:time", function() {
    return Spacebars.mustache(view.lookup("time"));
  }), "\n        "), "\n        ", HTML.SPAN({
    "class": function() {
      return [ "label label-", Spacebars.mustache(view.lookup("labelClass")) ];
    }
  }, Blaze.View("lookup:number", function() {
    return Spacebars.mustache(view.lookup("number"));
  })), " ", Blaze.View("lookup:content", function() {
    return Spacebars.mustache(view.lookup("content"));
  }), "\n    ");
}));

}).call(this);
