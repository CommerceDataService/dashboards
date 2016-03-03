(function(){
Template.__checkName("codeEditor");
Template["codeEditor"] = new Template("Template.codeEditor", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Code editor"),
      category: Spacebars.call("Miscellaneous")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content  animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox "
  }, "\n                    ", HTML.Raw('<div class="ibox-title">\n                        <h5>Code Editor - Basic example</h5>\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.Raw('<p class="m-b-lg">\n                            <strong>CodeMirror</strong> is a versatile text editor implemented in JavaScript for the browser. It is specialized for editing code, and comes with a number of language modes and addons that implement more advanced editing functionality.\n                        </p>'), "\n\n", HTML.TEXTAREA({
    id: "code1",
    value: "<script>\n    // Code goes here\n\n    // For demo purpose - animation css script\n    function animationHover(element, animation){\n        element = $(element);\n        element.hover(\n                function() {\n                    element.addClass('animated ' + animation);\n                },\n                function(){\n                    //wait for animation to finish before removing classes\n                    window.setTimeout( function(){\n                        element.removeClass('animated ' + animation);\n                    }, 2000);\n                });\n    }\n</script>\n"
  }), "\n                    "), "\n                "), "\n            "), "\n            ", HTML.DIV({
    "class": "col-lg-6"
  }, "\n                ", HTML.DIV({
    "class": "ibox "
  }, "\n                    ", HTML.Raw('<div class="ibox-title">\n                        <h5>Code Editor - Theme Example</h5>\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.Raw('<p class="m-b-lg">\n                            A rich programming API and a CSS theming system are available for customizing CodeMirror to fit your application, and extending it with new functionality. For mor info go to\n                            <a href="http://codemirror.net/" target="_blank">http://codemirror.net/</a>\n                        </p>'), "\n", HTML.TEXTAREA({
    id: "code2",
    value: "    var SpeechApp = angular.module('SpeechApp', []);\n\n    function VoiceCtrl($scope) {\n\n        $scope.said='...';\n\n        $scope.helloWorld = function() {\n            $scope.said = \"Hello world!\";\n        }\n\n        $scope.commands = {\n            'hello (world)': function() {\n                if (typeof console !== \"undefined\") console.log('hello world!')\n                $scope.$apply($scope.helloWorld);\n            },\n            'hey': function() {\n                if (typeof console !== \"undefined\") console.log('hey!')\n                $scope.$apply($scope.helloWorld);\n            }\n        };\n\n        annyang.debug();\n        annyang.init($scope.commands);\n        annyang.start();\n    }\n"
  }), "\n                    "), "\n\n                "), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
