(function(){
Template.__checkName("video");
Template["video"] = new Template("Template.video", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Video"),
      category: Spacebars.call("UI Elements")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.Raw('<div class="row">\n            <div class="col-lg-12">\n                <div class="ibox float-e-margins">\n                    <div class="ibox-content text-center">\n\n                        <h2>\n                            <i class="fa fa-expand"> </i> Resize the window to see how behaves responsive video.\n                        </h2>\n                        <small>Just put video on <code>figure > iframe</code> element. Script will do the rest. </small>\n\n\n                    </div>\n                </div>\n            </div>\n        </div>'), "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Video window</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n                        <figure>\n                            <iframe width="425" height="349" src="http://www.youtube.com/embed/bwj2s_5e12U" frameborder="0" allowfullscreen=""></iframe>\n                        </figure>\n                    </div>'), "\n                "), "\n            "), "\n\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Video description</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content profile-content">\n                        <h4><strong>Microsoft\'s Concept of How 2019 Will Look Like - Official Video</strong></h4>\n                        <p><i class="fa fa-clock-o"></i> Uploaded on October 27, 2011</p>\n                        <h5>\n                            Science and Technology\n                        </h5>\n                        <p>\n                            What do you think the world will look like in 2019? Predicting future trends is usually done poorly by Analysts so company\'s seem to want to give consumer a glimpse of what\n                            they want the future to look like.\n                            <br>\n                            <br>\n                            <small>Microsoft has just released a video showcasing magical<br> gadget after magical gadget.</small>\n                            <br>\n                            <br>\n                            Earlier this month "Microsoft Office Labs Vision 2019,"\n                            was released and now we have "Productivity Future Vision (2011)". Both are inspiring and beautifully edited. </p>\n                        <div class="row m-t-md">\n                            <div class="col-md-3">\n                                <h5><strong>169</strong> Likes</h5>\n                            </div>\n                            <div class="col-md-9">\n                                <h5><strong>28</strong> Comments</h5>\n                            </div>\n                        </div>\n                    </div>'), "\n                "), "\n            "), "\n\n        "), "\n    ") ];
}));

}).call(this);
