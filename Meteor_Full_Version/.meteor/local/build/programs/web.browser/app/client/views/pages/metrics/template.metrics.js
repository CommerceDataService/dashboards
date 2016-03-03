(function(){
Template.__checkName("metrics");
Template["metrics"] = new Template("Template.metrics", (function() {
  var view = this;
  return HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, HTML.Raw('\n        <div class="row">\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5 class="m-b-md">Server status Q12</h5>\n                        <h2 class="text-navy">\n                            <i class="fa fa-play fa-rotate-270"></i> Up\n                        </h2>\n                        <small>Last down 42 days ago</small>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content ">\n                        <h5 class="m-b-md">Server status Q13</h5>\n                        <h2 class="text-navy">\n                            <i class="fa fa-play fa-rotate-270"></i> Up\n                        </h2>\n                        <small>Last down 42 days ago</small>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5 class="m-b-md">Server status Q42</h5>\n                        <h2 class="text-danger">\n                            <i class="fa fa-play fa-rotate-90"></i> Down\n                        </h2>\n                        <small>Server down since 4 days</small>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5 class="m-b-md">Server status Q43</h5>\n                        <h2 class="text-danger">\n                            <i class="fa fa-play fa-rotate-90"></i> Down\n                        </h2>\n                        <small>Server down since 4:32 pm.</small>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class="row">\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Visits in last 24h</h5>\n                        <h2>198 009</h2>\n                        <div id="sparkline1"></div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Visits week</h5>\n                        <h2>65 000</h2>\n                        <div id="sparkline2"></div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Last month</h5>\n                        <h2>680 900</h2>\n                        <div id="sparkline3"></div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Avarage time</h5>\n                        <h2>00:06:40</h2>\n                        <div id="sparkline4"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Usage</h5>\n                        <h2>65%</h2>\n                        <div class="progress progress-mini">\n                            <div style="width: 68%;" class="progress-bar"></div>\n                        </div>\n\n                        <div class="m-t-sm small">Server down since 4:32 pm.</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Usage</h5>\n                        <h2>50%</h2>\n                        <div class="progress progress-mini">\n                            <div style="width: 78%;" class="progress-bar"></div>\n                        </div>\n\n                        <div class="m-t-sm small">Server down since 4:32 pm.</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Usage</h5>\n                        <h2>14%</h2>\n                        <div class="progress progress-mini">\n                            <div style="width: 38%;" class="progress-bar progress-bar-danger"></div>\n                        </div>\n\n                        <div class="m-t-sm small">Server down since 4:32 pm.</div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Usage</h5>\n                        <h2>20%</h2>\n                        <div class="progress progress-mini">\n                            <div style="width: 28%;" class="progress-bar progress-bar-danger"></div>\n                        </div>\n\n                        <div class="m-t-sm small">Server down since 4:32 pm.</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class="row">\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Percentage distribution</h5>\n                        <h2>42/20</h2>\n                        <div class="text-center">\n                            <div id="sparkline5"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Percentage division</h5>\n                        <h2>100/54</h2>\n                        <div class="text-center">\n                            <div id="sparkline6"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Percentage distribution</h5>\n                        <h2>685/211</h2>\n                        <div class="text-center">\n                            <div id="sparkline7"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Percentage division</h5>\n                        <h2>240/32</h2>\n                        <div class="text-center">\n                            <div id="sparkline8"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Income</h5>\n                        <h1 class="no-margins">886,200</h1>\n                        <div class="stat-percent font-bold text-navy">98% <i class="fa fa-bolt"></i></div>\n                        <small>Total income</small>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Income last month</h5>\n                        <h1 class="no-margins">1 738,200</h1>\n                        <div class="stat-percent font-bold text-navy">98% <i class="fa fa-bolt"></i></div>\n                        <small>Total income</small>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Income last day</h5>\n                        <h1 class="no-margins">-200,100</h1>\n                        <div class="stat-percent font-bold text-danger">12% <i class="fa fa-level-down"></i></div>\n                        <small>Total income</small>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="ibox">\n                    <div class="ibox-content">\n                        <h5>Income all</h5>\n                        <h1 class="no-margins">54,200</h1>\n                        <div class="stat-percent font-bold text-danger">24% <i class="fa fa-level-down"></i></div>\n                        <small>Total income</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n        '), HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-3"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.Raw("<h5>All new alerts</h5>"), "\n                        ", HTML.TABLE({
    "class": "table table-stripped small m-t-md"
  }, "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD({
    "class": "no-borders"
  }, "\n                                    ", HTML.I({
    "class": "fa fa-circle text-navy"
  }), "\n                                "), "\n                                ", HTML.TD({
    "class": "no-borders"
  }, "\n                                    Example element 1\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.I({
    "class": "fa fa-circle text-navy"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Example element 2\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.I({
    "class": "fa fa-circle text-navy"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Example element 3\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-3"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.Raw("<h5>Alerts</h5>"), "\n                        ", HTML.TABLE({
    "class": "table table-stripped small m-t-md"
  }, "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD({
    "class": "no-borders"
  }, "\n                                    ", HTML.I({
    "class": "fa fa-circle text-navy"
  }), "\n                                "), "\n                                ", HTML.TD({
    "class": "no-borders"
  }, "\n                                    Example element 1\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.I({
    "class": "fa fa-circle text-navy"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Example element 2\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.I({
    "class": "fa fa-circle text-navy"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Example element 3\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-3"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.Raw("<h5>All messages</h5>"), "\n                        ", HTML.TABLE({
    "class": "table table-stripped small m-t-md"
  }, "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD({
    "class": "no-borders"
  }, "\n                                    ", HTML.I({
    "class": "fa fa-circle text-danger"
  }), "\n                                "), "\n                                ", HTML.TD({
    "class": "no-borders"
  }, "\n                                    Example element 1\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.I({
    "class": "fa fa-circle text-danger"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Example element 2\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.I({
    "class": "fa fa-circle text-danger"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Example element 3\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-3"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.Raw("<h5>Last notification</h5>"), "\n                        ", HTML.TABLE({
    "class": "table table-stripped small m-t-md"
  }, "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD({
    "class": "no-borders"
  }, "\n                                    ", HTML.I({
    "class": "fa fa-circle text-danger"
  }), "\n                                "), "\n                                ", HTML.TD({
    "class": "no-borders"
  }, "\n                                    Example element 1\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.I({
    "class": "fa fa-circle text-danger"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Example element 2\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    ", HTML.I({
    "class": "fa fa-circle text-danger"
  }), "\n                                "), "\n                                ", HTML.TD("\n                                    Example element 3\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n\n\n\n    ");
}));

}).call(this);
