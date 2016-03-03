(function(){
Template.__checkName("calendar");
Template["calendar"] = new Template("Template.calendar", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Calendar"),
      category: Spacebars.call("App views")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content"
  }, "\n        ", HTML.DIV({
    "class": "row animated fadeInDown"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-3"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Draggable Events</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <div id="external-events">\n                            <p>Drag a event and drop into callendar.</p>\n                            <div class="external-event navy-bg">Go to shop and buy some products.</div>\n                            <div class="external-event navy-bg">Check the new CI from Corporation.</div>\n                            <div class="external-event navy-bg">Send documents to John.</div>\n                            <div class="external-event navy-bg">Phone to Sandra.</div>\n                            <div class="external-event navy-bg">Chat with Michael.</div>\n                            <p class="m-t">\n                                <input type="checkbox" id="drop-remove" class="i-checks" checked=""> <label for="drop-remove">remove after drop</label>\n                            </p>\n                        </div>\n                    </div>'), "\n                "), "\n                ", HTML.Raw('<div class="ibox float-e-margins">\n                    <div class="ibox-content">\n                        <h2>FullCalendar</h2> is a jQuery plugin that provides a full-sized, drag &amp; drop calendar like the one below. It uses AJAX to fetch events on-the-fly for each month and is\n                        easily configured to use your own feed format (an extension is provided for Google Calendar).\n                        <p>\n                            <a href="http://arshaw.com/fullcalendar/" target="_blank">FullCalendar documentation</a>\n                        </p>\n                    </div>\n                </div>'), "\n            "), "\n            ", HTML.Raw('<div class="col-lg-9">\n                <div class="ibox float-e-margins">\n                    <div class="ibox-title">\n                        <h5>Striped Table </h5>\n                        <div class="ibox-tools">\n                            <a class="collapse-link">\n                                <i class="fa fa-chevron-up"></i>\n                            </a>\n                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n                                <i class="fa fa-wrench"></i>\n                            </a>\n                            <ul class="dropdown-menu dropdown-user">\n                                <li><a href="#">Config option 1</a>\n                                </li>\n                                <li><a href="#">Config option 2</a>\n                                </li>\n                            </ul>\n                            <a class="close-link">\n                                <i class="fa fa-times"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class="ibox-content">\n                        <div id="calendar"></div>\n                    </div>\n                </div>\n            </div>'), "\n        "), "\n    ") ];
}));

}).call(this);
