(function(){
Template.__checkName("shopingCart");
Template["shopingCart"] = new Template("Template.shopingCart", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Shoping cart"),
      category: Spacebars.call("Ecommerce")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n\n\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-md-9"
  }, "\n\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.Raw('<div class="ibox-title">\n                        <span class="pull-right">(<strong>5</strong>) items</span>\n                        <h5>Items in your cart</h5>\n                    </div>'), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n\n                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                            ", HTML.TABLE({
    "class": "table shoping-cart-table"
  }, "\n\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD({
    width: "90"
  }, "\n                                        ", HTML.DIV({
    "class": "cart-product-imitation"
  }, "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "desc"
  }, "\n                                        ", HTML.H3("\n                                            ", HTML.A({
    href: "#",
    "class": "text-navy"
  }, "\n                                                Desktop publishing software\n                                            "), "\n                                        "), "\n                                        ", HTML.P({
    "class": "small"
  }, "\n                                            It is a long established fact that a reader will be distracted by the readable\n                                            content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                        "), "\n                                        ", HTML.DL({
    "class": "small m-b-none"
  }, "\n                                            ", HTML.DT("Description lists"), "\n                                            ", HTML.DD("A description list is perfect for defining terms."), "\n                                        "), "\n\n                                        ", HTML.DIV({
    "class": "m-t-sm"
  }, "\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-gift"
  }), " Add gift package"), "\n                                            |\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " Remove item"), "\n                                        "), "\n                                    "), "\n\n                                    ", HTML.TD("\n                                        $180,00\n                                        ", HTML.S({
    "class": "small text-muted"
  }, "$230,00"), "\n                                    "), "\n                                    ", HTML.TD({
    width: "65"
  }, "\n                                        ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "1"
  }), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.H4("\n                                            $180,00\n                                        "), "\n                                    "), "\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                            ", HTML.TABLE({
    "class": "table shoping-cart-table"
  }, "\n\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD({
    width: "90"
  }, "\n                                        ", HTML.DIV({
    "class": "cart-product-imitation"
  }, "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "desc"
  }, "\n                                        ", HTML.H3("\n                                            ", HTML.A({
    href: "#",
    "class": "text-navy"
  }, "\n                                                Text editor\n                                            "), "\n                                        "), "\n                                        ", HTML.P({
    "class": "small"
  }, "\n                                            There are many variations of passages of Lorem Ipsum available\n                                        "), "\n                                        ", HTML.DL({
    "class": "small m-b-none"
  }, "\n                                            ", HTML.DT("Description lists"), "\n                                            ", HTML.DD("List is perfect for defining terms."), "\n                                        "), "\n\n                                        ", HTML.DIV({
    "class": "m-t-sm"
  }, "\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-gift"
  }), " Add gift package"), "\n                                            |\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " Remove item"), "\n                                        "), "\n                                    "), "\n\n                                    ", HTML.TD("\n                                        $50,00\n                                        ", HTML.S({
    "class": "small text-muted"
  }, "$63,00"), "\n                                    "), "\n                                    ", HTML.TD({
    width: "65"
  }, "\n                                        ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "2"
  }), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.H4("\n                                            $100,00\n                                        "), "\n                                    "), "\n\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                            ", HTML.TABLE({
    "class": "table shoping-cart-table"
  }, "\n\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD({
    width: "90"
  }, "\n                                        ", HTML.DIV({
    "class": "cart-product-imitation"
  }, "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "desc"
  }, "\n                                        ", HTML.H3("\n                                            ", HTML.A({
    href: "#",
    "class": "text-navy"
  }, "\n                                                CRM software\n                                            "), "\n                                        "), "\n                                        ", HTML.P({
    "class": "small"
  }, "\n                                            Distracted by the readable\n                                            content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                        "), "\n                                        ", HTML.DL({
    "class": "small m-b-none"
  }, "\n                                            ", HTML.DT("Description lists"), "\n                                            ", HTML.DD("A description list is perfect for defining terms."), "\n                                        "), "\n\n                                        ", HTML.DIV({
    "class": "m-t-sm"
  }, "\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-gift"
  }), " Add gift package"), "\n                                            |\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " Remove item"), "\n                                        "), "\n                                    "), "\n\n                                    ", HTML.TD("\n                                        $110,00\n                                    "), "\n                                    ", HTML.TD({
    width: "65"
  }, "\n                                        ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "1"
  }), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.H4("\n                                            $110,00\n                                        "), "\n                                    "), "\n\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                            ", HTML.TABLE({
    "class": "table shoping-cart-table"
  }, "\n\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD({
    width: "90"
  }, "\n                                        ", HTML.DIV({
    "class": "cart-product-imitation"
  }, "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "desc"
  }, "\n                                        ", HTML.H3("\n                                            ", HTML.A({
    href: "#",
    "class": "text-navy"
  }, "\n                                                PM software\n                                            "), "\n                                        "), "\n                                        ", HTML.P({
    "class": "small"
  }, "\n                                            Readable content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                        "), "\n                                        ", HTML.DL({
    "class": "small m-b-none"
  }, "\n                                            ", HTML.DT("Description lists"), "\n                                            ", HTML.DD("A description list is perfect for defining terms."), "\n                                        "), "\n\n                                        ", HTML.DIV({
    "class": "m-t-sm"
  }, "\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-gift"
  }), " Add gift package"), "\n                                            |\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " Remove item"), "\n                                        "), "\n                                    "), "\n\n                                    ", HTML.TD("\n                                        $130,00\n                                    "), "\n                                    ", HTML.TD({
    width: "65"
  }, "\n                                        ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "1"
  }), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.H4("\n                                            $130,00\n                                        "), "\n                                    "), "\n\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    "), "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.DIV({
    "class": "table-responsive"
  }, "\n                            ", HTML.TABLE({
    "class": "table shoping-cart-table"
  }, "\n\n                                ", HTML.TBODY("\n                                ", HTML.TR("\n                                    ", HTML.TD({
    width: "90"
  }, "\n                                        ", HTML.DIV({
    "class": "cart-product-imitation"
  }, "\n                                        "), "\n                                    "), "\n                                    ", HTML.TD({
    "class": "desc"
  }, "\n                                        ", HTML.H3("\n                                            ", HTML.A({
    href: "#",
    "class": "text-navy"
  }, "\n                                                Photo editor\n                                            "), "\n                                        "), "\n                                        ", HTML.P({
    "class": "small"
  }, "\n                                            Page when looking at its layout. The point of using Lorem Ipsum is\n                                        "), "\n                                        ", HTML.DL({
    "class": "small m-b-none"
  }, "\n                                            ", HTML.DT("Description lists"), "\n                                            ", HTML.DD("A description list is perfect for defining terms."), "\n                                        "), "\n\n                                        ", HTML.DIV({
    "class": "m-t-sm"
  }, "\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-gift"
  }), " Add gift package"), "\n                                            |\n                                            ", HTML.A({
    href: "#",
    "class": "text-muted"
  }, HTML.I({
    "class": "fa fa-trash"
  }), " Remove item"), "\n                                        "), "\n                                    "), "\n\n                                    ", HTML.TD("\n                                        $700,00\n                                    "), "\n                                    ", HTML.TD({
    width: "65"
  }, "\n                                        ", HTML.INPUT({
    type: "text",
    "class": "form-control",
    placeholder: "1"
  }), "\n                                    "), "\n                                    ", HTML.TD("\n                                        ", HTML.H4("\n                                            $70,00\n                                        "), "\n                                    "), "\n\n                                "), "\n                                "), "\n                            "), "\n                        "), "\n\n                    "), "\n                    ", HTML.Raw('<div class="ibox-content">\n\n                        <button class="btn btn-primary pull-right"><i class="fa fa fa-shopping-cart"></i> Checkout</button>\n                        <button class="btn btn-white"><i class="fa fa-arrow-left"></i> Continue shopping</button>\n\n                    </div>'), "\n                "), "\n\n            "), "\n            ", HTML.Raw('<div class="col-md-3">\n\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>Cart Summary</h5>\n                    </div>\n                    <div class="ibox-content">\n                            <span>\n                                Total\n                            </span>\n                        <h2 class="font-bold">\n                            $390,00\n                        </h2>\n\n                        <hr>\n                            <span class="text-muted small">\n                                *For United States, France and Germany applicable sales tax will be applied\n                            </span>\n                        <div class="m-t-sm">\n                            <div class="btn-group">\n                                <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-shopping-cart"></i> Checkout</a>\n                                <a href="#" class="btn btn-white btn-sm"> Cancel</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class="ibox">\n                    <div class="ibox-title">\n                        <h5>Support</h5>\n                    </div>\n                    <div class="ibox-content text-center">\n\n\n\n                        <h3><i class="fa fa-phone"></i> +43 100 783 001</h3>\n                            <span class="small">\n                                Please contact with us if you have any questions. We are avalible 24h.\n                            </span>\n\n\n                    </div>\n                </div>\n\n                <div class="ibox">\n                    <div class="ibox-content">\n\n                        <p class="font-bold">\n                            Other products you may be interested\n                        </p>\n\n                        <hr>\n                        <div>\n                            <a href="#" class="product-name"> Product 1</a>\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n                        <hr>\n                        <div>\n                            <a href="#" class="product-name"> Product 2</a>\n                            <div class="small m-t-xs">\n                                Many desktop publishing packages and web page editors now.\n                            </div>\n                            <div class="m-t text-righ">\n\n                                <a href="#" class="btn btn-xs btn-outline btn-primary">Info <i class="fa fa-long-arrow-right"></i> </a>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>'), "\n        "), "\n\n\n\n\n    ") ];
}));

}).call(this);
