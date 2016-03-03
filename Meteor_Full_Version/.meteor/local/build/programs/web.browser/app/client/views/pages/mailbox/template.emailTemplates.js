(function(){
Template.__checkName("emailTemplates");
Template["emailTemplates"] = new Template("Template.emailTemplates", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Email templates"),
      category: Spacebars.call("Mailbox")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), HTML.Raw('\n\n    <div class="wrapper wrapper-content  animated fadeInRight">\n        <div class="row">\n            <div class="col-lg-12">\n                <div class="ibox ">\n                    <div class="ibox-title">\n                        <h5>Responsive transactional HTML email templates</h5>\n                    </div>\n                    <div class="ibox-content">\n                        <p>\n                            Transactional HTML emails. Each template is responsive and each has been tested in all the popular email clients. Credits to <a target="_blank" href="https://github.com/mailgun/transactional-email-templates">Maligun</a>\n                        </p>\n                        <div class="row">\n                            <div class="col-md-4">\n                                <h4>Basic action email</h4>\n                                <a href="email_templates/action.html" target="_blank">\n                                    <img src="img/email_1.jpg" class="img-responsive" alt="">\n                                </a>\n                            </div>\n                            <div class="col-md-4">\n                                <h4>Email alert </h4>\n                                <a href="email_templates/alert.html" target="_blank">\n                                    <img src="img/email_2.jpg" class="img-responsive" alt="">\n                                </a>\n                            </div>\n                            <div class="col-md-4">\n                                <h4>Billing email</h4>\n                                <a href="email_templates/billing.html" target="_blank">\n                                    <img src="img/email_3.jpg" class="img-responsive" alt="">\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>') ];
}));

}).call(this);
