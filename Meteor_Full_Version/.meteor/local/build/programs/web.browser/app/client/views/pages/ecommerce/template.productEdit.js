(function(){
Template.__checkName("productEdit");
Template["productEdit"] = new Template("Template.productEdit", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Product edit"),
      category: Spacebars.call("Ecommerce")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight ecommerce"
  }, "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "tabs-container"
  }, "\n                    ", HTML.Raw('<ul class="nav nav-tabs">\n                        <li class="active"><a data-toggle="tab" href="#tab-1"> Product info</a></li>\n                        <li class=""><a data-toggle="tab" href="#tab-2"> Data</a></li>\n                        <li class=""><a data-toggle="tab" href="#tab-3"> Discount</a></li>\n                        <li class=""><a data-toggle="tab" href="#tab-4"> Images</a></li>\n                    </ul>'), "\n                    ", HTML.DIV({
    "class": "tab-content"
  }, "\n                        ", HTML.Raw('<div id="tab-1" class="tab-pane active">\n                            <div class="panel-body">\n\n                                <fieldset class="form-horizontal">\n                                    <div class="form-group"><label class="col-sm-2 control-label">Name:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="Product name"></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Price:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="$160.00"></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Description:</label>\n                                        <div class="col-sm-10">\n                                            <div class="summernote">\n                                                <h3>Lorem Ipsum is simply</h3>\n                                                dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the industry\'s</strong> standard dummy text ever since the 1500s,\n                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic\n                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic\n                                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n                                                <br>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Meta Tag Title:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="..."></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Meta Tag Description:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="Sheets containing Lorem"></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Meta Tag Keywords:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="Lorem, Ipsum, has, been"></div>\n                                    </div>\n                                </fieldset>\n\n                            </div>\n                        </div>'), "\n                        ", HTML.Raw('<div id="tab-2" class="tab-pane">\n                            <div class="panel-body">\n\n                                <fieldset class="form-horizontal">\n                                    <div class="form-group"><label class="col-sm-2 control-label">ID:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="543"></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Model:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="..."></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Location:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="location"></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Tax Class:</label>\n                                        <div class="col-sm-10">\n                                            <select class="form-control">\n                                                <option>option 1</option>\n                                                <option>option 2</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Quantity:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="Quantity"></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Minimum quantity:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="2"></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Sort order:</label>\n                                        <div class="col-sm-10"><input type="text" class="form-control" placeholder="0"></div>\n                                    </div>\n                                    <div class="form-group"><label class="col-sm-2 control-label">Status:</label>\n                                        <div class="col-sm-10">\n                                            <select class="form-control">\n                                                <option>option 1</option>\n                                                <option>option 2</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </fieldset>\n\n\n                            </div>\n                        </div>'), "\n                        ", HTML.DIV({
    id: "tab-3",
    "class": "tab-pane"
  }, "\n                            ", HTML.DIV({
    "class": "panel-body"
  }, "\n\n                                ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                                    ", HTML.TABLE({
    "class": "table table-stripped table-bordered"
  }, "\n\n                                        ", HTML.THEAD("\n                                        ", HTML.TR("\n                                            ", HTML.TH("\n                                                Group\n                                            "), "\n                                            ", HTML.TH("\n                                                Quantity\n                                            "), "\n                                            ", HTML.TH("\n                                                Discount\n                                            "), "\n                                            ", HTML.TH({
    style: "width: 20%"
  }, "\n                                                Date start\n                                            "), "\n                                            ", HTML.TH({
    style: "width: 20%"
  }, "\n                                                Date end\n                                            "), "\n                                            ", HTML.TH("\n                                                Actions\n                                            "), "\n                                        "), "\n                                        "), "\n                                        ", HTML.TBODY("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.SELECT({
    "class": "form-control"
  }, "\n                                                    ", HTML.OPTION({
    selected: ""
  }, "Group 1"), "\n                                                    ", HTML.OPTION("Group 2"), "\n                                                    ", HTML.OPTION("Group 3"), "\n                                                    ", HTML.OPTION("Group 4"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "10"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "$10.00"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.SELECT({
    "class": "form-control"
  }, "\n                                                    ", HTML.OPTION({
    selected: ""
  }, "Group 1"), "\n                                                    ", HTML.OPTION("Group 2"), "\n                                                    ", HTML.OPTION("Group 3"), "\n                                                    ", HTML.OPTION("Group 4"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "10"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "$10.00"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.SELECT({
    "class": "form-control"
  }, "\n                                                    ", HTML.OPTION({
    selected: ""
  }, "Group 1"), "\n                                                    ", HTML.OPTION("Group 2"), "\n                                                    ", HTML.OPTION("Group 3"), "\n                                                    ", HTML.OPTION("Group 4"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "10"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "$10.00"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.SELECT({
    "class": "form-control"
  }, "\n                                                    ", HTML.OPTION({
    selected: ""
  }, "Group 1"), "\n                                                    ", HTML.OPTION("Group 2"), "\n                                                    ", HTML.OPTION("Group 3"), "\n                                                    ", HTML.OPTION("Group 4"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "10"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "$10.00"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.SELECT({
    "class": "form-control"
  }, "\n                                                    ", HTML.OPTION({
    selected: ""
  }, "Group 1"), "\n                                                    ", HTML.OPTION("Group 2"), "\n                                                    ", HTML.OPTION("Group 3"), "\n                                                    ", HTML.OPTION("Group 4"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "10"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "$10.00"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.SELECT({
    "class": "form-control"
  }, "\n                                                    ", HTML.OPTION({
    selected: ""
  }, "Group 1"), "\n                                                    ", HTML.OPTION("Group 2"), "\n                                                    ", HTML.OPTION("Group 3"), "\n                                                    ", HTML.OPTION("Group 4"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "10"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "$10.00"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.SELECT({
    "class": "form-control"
  }, "\n                                                    ", HTML.OPTION({
    selected: ""
  }, "Group 1"), "\n                                                    ", HTML.OPTION("Group 2"), "\n                                                    ", HTML.OPTION("Group 3"), "\n                                                    ", HTML.OPTION("Group 4"), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "10"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "$10.00"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.DIV({
    "class": "input-group date"
  }, "\n                                                    ", HTML.SPAN({
    "class": "input-group-addon"
  }, HTML.I({
    "class": "fa fa-calendar"
  })), HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "07/01/2014"
  }), "\n                                                "), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n\n                                        "), "\n\n                                    "), "\n                                "), "\n\n                            "), "\n                        "), "\n                        ", HTML.DIV({
    id: "tab-4",
    "class": "tab-pane"
  }, "\n                            ", HTML.DIV({
    "class": "panel-body"
  }, "\n\n                                ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                                    ", HTML.TABLE({
    "class": "table table-bordered table-stripped"
  }, "\n                                        ", HTML.THEAD("\n                                        ", HTML.TR("\n                                            ", HTML.TH("\n                                                Image preview\n                                            "), "\n                                            ", HTML.TH("\n                                                Image url\n                                            "), "\n                                            ", HTML.TH("\n                                                Sort order\n                                            "), "\n                                            ", HTML.TH("\n                                                Actions\n                                            "), "\n                                        "), "\n                                        "), "\n                                        ", HTML.TBODY("\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.IMG({
    src: "img/gallery/2s.jpg"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    disabled: "",
    value: "http://mydomain.com/images/image1.png"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "1"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.IMG({
    src: "img/gallery/1s.jpg"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    disabled: "",
    value: "http://mydomain.com/images/image2.png"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "2"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.IMG({
    src: "img/gallery/3s.jpg"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    disabled: "",
    value: "http://mydomain.com/images/image3.png"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "3"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.IMG({
    src: "img/gallery/4s.jpg"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    disabled: "",
    value: "http://mydomain.com/images/image4.png"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "4"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.IMG({
    src: "img/gallery/5s.jpg"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    disabled: "",
    value: "http://mydomain.com/images/image5.png"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "5"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.IMG({
    src: "img/gallery/6s.jpg"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    disabled: "",
    value: "http://mydomain.com/images/image6.png"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "6"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        ", HTML.TR("\n                                            ", HTML.TD("\n                                                ", HTML.IMG({
    src: "img/gallery/7s.jpg"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    disabled: "",
    value: "http://mydomain.com/images/image7.png"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    value: "7"
  }), "\n                                            "), "\n                                            ", HTML.TD("\n                                                ", HTML.BUTTON({
    "class": "btn btn-white"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " "), "\n                                            "), "\n                                        "), "\n                                        "), "\n                                    "), "\n                                "), "\n\n                            "), "\n                        "), "\n                    "), "\n                "), "\n            "), "\n        "), "\n\n    ") ];
}));

}).call(this);
