(function(){
Template.__checkName("errorOne");
Template["errorOne"] = new Template("Template.errorOne", (function() {
  var view = this;
  return HTML.Raw('<div class="middle-box text-center animated fadeInDown">\n        <h1>404</h1>\n        <h3 class="font-bold">Page Not Found</h3>\n\n        <div class="error-desc">\n            Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.\n            <form class="form-inline m-t" role="form">\n                <div class="form-group">\n                    <input type="text" class="form-control" placeholder="Search for page">\n                </div>\n                <button type="submit" class="btn btn-primary">Search</button>\n            </form>\n        </div>\n    </div>');
}));

}).call(this);
