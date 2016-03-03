(function(){
Template.__checkName("dataTables");
Template["dataTables"] = new Template("Template.dataTables", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Data tables"),
      category: Spacebars.call("Tables")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-title"
  }, "\n                        ", HTML.Raw("<h5>Basic Data Tables example with responsive plugin</h5>"), "\n                        ", Spacebars.include(view.lookupTemplate("iboxTools")), "\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                        ", HTML.TABLE({
    "class": "table table-striped table-bordered table-hover dataTables-example"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n                                ", HTML.TH("Rendering engine"), "\n                                ", HTML.TH("Browser"), "\n                                ", HTML.TH("Platform(s)"), "\n                                ", HTML.TH("Engine version"), "\n                                ", HTML.TH("CSS grade"), "\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Trident"), "\n                                ", HTML.TD("Internet\n                                    Explorer 4.0\n                                "), "\n                                ", HTML.TD("Win 95+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "4"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Trident"), "\n                                ", HTML.TD("Internet\n                                    Explorer 5.0\n                                "), "\n                                ", HTML.TD("Win 95+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Trident"), "\n                                ", HTML.TD("Internet\n                                    Explorer 5.5\n                                "), "\n                                ", HTML.TD("Win 95+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "5.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Trident"), "\n                                ", HTML.TD("Internet\n                                    Explorer 6\n                                "), "\n                                ", HTML.TD("Win 98+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "6"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Trident"), "\n                                ", HTML.TD("Internet Explorer 7"), "\n                                ", HTML.TD("Win XP SP2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "7"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Trident"), "\n                                ", HTML.TD("AOL browser (AOL desktop)"), "\n                                ", HTML.TD("Win XP"), "\n                                ", HTML.TD({
    "class": "center"
  }, "6"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Firefox 1.0"), "\n                                ", HTML.TD("Win 98+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.7"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Firefox 1.5"), "\n                                ", HTML.TD("Win 98+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Firefox 2.0"), "\n                                ", HTML.TD("Win 98+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Firefox 3.0"), "\n                                ", HTML.TD("Win 2k+ / OSX.3+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.9"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Camino 1.0"), "\n                                ", HTML.TD("OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Camino 1.5"), "\n                                ", HTML.TD("OSX.3+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Netscape 7.2"), "\n                                ", HTML.TD("Win 95+ / Mac OS 8.6-9.2"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.7"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Netscape Browser 8"), "\n                                ", HTML.TD("Win 98SE+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.7"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Netscape Navigator 9"), "\n                                ", HTML.TD("Win 98+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Mozilla 1.0"), "\n                                ", HTML.TD("Win 95+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Mozilla 1.1"), "\n                                ", HTML.TD("Win 95+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Mozilla 1.2"), "\n                                ", HTML.TD("Win 95+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.2"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Mozilla 1.3"), "\n                                ", HTML.TD("Win 95+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Mozilla 1.4"), "\n                                ", HTML.TD("Win 95+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.4"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Mozilla 1.5"), "\n                                ", HTML.TD("Win 95+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Mozilla 1.6"), "\n                                ", HTML.TD("Win 95+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.6"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Mozilla 1.7"), "\n                                ", HTML.TD("Win 98+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.7"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Mozilla 1.8"), "\n                                ", HTML.TD("Win 98+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Seamonkey 1.1"), "\n                                ", HTML.TD("Win 98+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Gecko"), "\n                                ", HTML.TD("Epiphany 2.20"), "\n                                ", HTML.TD("Gnome"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("Safari 1.2"), "\n                                ", HTML.TD("OSX.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "125.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("Safari 1.3"), "\n                                ", HTML.TD("OSX.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "312.8"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("Safari 2.0"), "\n                                ", HTML.TD("OSX.4+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "419.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("Safari 3.0"), "\n                                ", HTML.TD("OSX.4+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "522.1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("OmniWeb 5.5"), "\n                                ", HTML.TD("OSX.4+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "420"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("iPod Touch / iPhone"), "\n                                ", HTML.TD("iPod"), "\n                                ", HTML.TD({
    "class": "center"
  }, "420.1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Webkit"), "\n                                ", HTML.TD("S60"), "\n                                ", HTML.TD("S60"), "\n                                ", HTML.TD({
    "class": "center"
  }, "413"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 7.0"), "\n                                ", HTML.TD("Win 95+ / OSX.1+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 7.5"), "\n                                ", HTML.TD("Win 95+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 8.0"), "\n                                ", HTML.TD("Win 95+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 8.5"), "\n                                ", HTML.TD("Win 95+ / OSX.2+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 9.0"), "\n                                ", HTML.TD("Win 95+ / OSX.3+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 9.2"), "\n                                ", HTML.TD("Win 88+ / OSX.3+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera 9.5"), "\n                                ", HTML.TD("Win 88+ / OSX.3+"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Opera for Wii"), "\n                                ", HTML.TD("Wii"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Nokia N800"), "\n                                ", HTML.TD("N800"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Presto"), "\n                                ", HTML.TD("Nintendo DS browser"), "\n                                ", HTML.TD("Nintendo DS"), "\n                                ", HTML.TD({
    "class": "center"
  }, "8.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C/A", HTML.SUP("1")), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("KHTML"), "\n                                ", HTML.TD("Konqureror 3.1"), "\n                                ", HTML.TD("KDE 3.1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "3.1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("KHTML"), "\n                                ", HTML.TD("Konqureror 3.3"), "\n                                ", HTML.TD("KDE 3.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "3.3"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("KHTML"), "\n                                ", HTML.TD("Konqureror 3.5"), "\n                                ", HTML.TD("KDE 3.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "3.5"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Tasman"), "\n                                ", HTML.TD("Internet Explorer 4.5"), "\n                                ", HTML.TD("Mac OS 8-9"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Tasman"), "\n                                ", HTML.TD("Internet Explorer 5.1"), "\n                                ", HTML.TD("Mac OS 7.6-9"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Tasman"), "\n                                ", HTML.TD("Internet Explorer 5.2"), "\n                                ", HTML.TD("Mac OS 8-X"), "\n                                ", HTML.TD({
    "class": "center"
  }, "1"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("NetFront 3.1"), "\n                                ", HTML.TD("Embedded devices"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeA"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("NetFront 3.4"), "\n                                ", HTML.TD("Embedded devices"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "A"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("Dillo 0.8"), "\n                                ", HTML.TD("Embedded devices"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("Links"), "\n                                ", HTML.TD("Text only"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeX"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("Lynx"), "\n                                ", HTML.TD("Text only"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "X"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("IE Mobile"), "\n                                ", HTML.TD("Windows Mobile 6"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeC"
  }, "\n                                ", HTML.TD("Misc"), "\n                                ", HTML.TD("PSP browser"), "\n                                ", HTML.TD("PSP"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "C"), "\n                            "), "\n                            ", HTML.TR({
    "class": "gradeU"
  }, "\n                                ", HTML.TD("Other browsers"), "\n                                ", HTML.TD("All others"), "\n                                ", HTML.TD("-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "-"), "\n                                ", HTML.TD({
    "class": "center"
  }, "U"), "\n                            "), "\n                            "), "\n                            ", HTML.TFOOT("\n                            ", HTML.TR("\n                                ", HTML.TH("Rendering engine"), "\n                                ", HTML.TH("Browser"), "\n                                ", HTML.TH("Platform(s)"), "\n                                ", HTML.TH("Engine version"), "\n                                ", HTML.TH("CSS grade"), "\n                            "), "\n                            "), "\n                        "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

}).call(this);
