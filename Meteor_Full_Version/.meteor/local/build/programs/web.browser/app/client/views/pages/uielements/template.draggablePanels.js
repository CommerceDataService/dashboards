(function(){
Template.__checkName("draggablePanels");
Template["draggablePanels"] = new Template("Template.draggablePanels", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Draggable panels"),
      category: Spacebars.call("UI Elements")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content  animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row",
    id: "sortable-view"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.Raw('<div class="ibox ">\n                    <div class="ibox-title">\n                        <h5>Drag&amp;Drop</h5>\n                        <div class="ibox-tools">\n                            <label class="label label-primary">You can drag and drop me to other box.</label>\n                        </div>\n                    </div>\n                    <div class="ibox-content">\n                        <h2>\n                            This is simple box container nr. 1\n                        </h2>\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown\n                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n                            remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>'), "\n                ", HTML.DIV({
    "class": "ibox "
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Drag&amp;Drop</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <h2>\n                            This is simple box container nr. 3\n                        </h2>\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown\n                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n                            remaining essentially unchanged.\n                        </p>\n                    </div>'), "\n                "), "\n\n            "), "\n            ", HTML.Raw('<div class="col-lg-6">\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>Drag&amp;Drop</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <h2>\n                            This is simple box container nr. 2\n                        </h2>\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown\n                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n                            remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>Drag&amp;Drop</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <h2>\n                            This is simple box container nr. 4\n                        </h2>\n                        <p>\n                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown\n                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\n                            remaining essentially unchanged.\n                        </p>\n                    </div>\n                </div>\n            </div>'), "\n\n        "), "\n    ") ];
}));

}).call(this);
