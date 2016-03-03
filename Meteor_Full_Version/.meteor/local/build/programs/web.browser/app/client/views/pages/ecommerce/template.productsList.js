(function(){
Template.__checkName("productsList");
Template["productsList"] = new Template("Template.productsList", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Products list"),
      category: Spacebars.call("Ecommerce")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight ecommerce"
  }, "\n\n\n        ", HTML.Raw('<div class="ibox-content m-b-sm border-bottom">\n            <div class="row">\n                <div class="col-sm-4">\n                    <div class="form-group">\n                        <label class="control-label" for="product_name">Product Name</label>\n                        <input type="text" id="product_name" name="product_name" value="" placeholder="Product Name" class="form-control">\n                    </div>\n                </div>\n                <div class="col-sm-2">\n                    <div class="form-group">\n                        <label class="control-label" for="price">Price</label>\n                        <input type="text" id="price" name="price" value="" placeholder="Price" class="form-control">\n                    </div>\n                </div>\n                <div class="col-sm-2">\n                    <div class="form-group">\n                        <label class="control-label" for="quantity">Quantity</label>\n                        <input type="text" id="quantity" name="quantity" value="" placeholder="Quantity" class="form-control">\n                    </div>\n                </div>\n                <div class="col-sm-4">\n                    <div class="form-group">\n                        <label class="control-label" for="status">Status</label>\n                        <select name="status" id="status" class="form-control">\n                            <option value="1" selected="">Enabled</option>\n                            <option value="0">Disabled</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n        </div>'), "\n\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n\n                        ", HTML.TABLE({
    "class": "footable table table-stripped toggle-arrow-tiny",
    "data-page-size": "15"
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n\n                                ", HTML.TH({
    "data-toggle": "true"
  }, "Product Name"), "\n                                ", HTML.TH({
    "data-hide": "phone"
  }, "Model"), "\n                                ", HTML.TH({
    "data-hide": "all"
  }, "Description"), "\n                                ", HTML.TH({
    "data-hide": "phone"
  }, "Price"), "\n                                ", HTML.TH({
    "data-hide": "phone,tablet"
  }, "Quantity"), "\n                                ", HTML.TH({
    "data-hide": "phone"
  }, "Status"), "\n                                ", HTML.TH({
    "class": "text-right",
    "data-sort-ignore": "true"
  }, "Action"), "\n\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 1\n                                "), "\n                                ", HTML.TD("\n                                    Model 1\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $50.00\n                                "), "\n                                ", HTML.TD("\n                                    1000\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 2\n                                "), "\n                                ", HTML.TD("\n                                    Model 2\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $40.00\n                                "), "\n                                ", HTML.TD("\n                                    4300\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 3\n                                "), "\n                                ", HTML.TD("\n                                    Model 3\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $22.00\n                                "), "\n                                ", HTML.TD("\n                                    300\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-danger"
  }, "Disabled"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 4\n                                "), "\n                                ", HTML.TD("\n                                    Model 4\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $67.00\n                                "), "\n                                ", HTML.TD("\n                                    2300\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 5\n                                "), "\n                                ", HTML.TD("\n                                    Model 5\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $76.00\n                                "), "\n                                ", HTML.TD("\n                                    800\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-warning"
  }, "Low stock"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 6\n                                "), "\n                                ", HTML.TD("\n                                    Model 6\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $60.00\n                                "), "\n                                ", HTML.TD("\n                                    6000\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-danger"
  }, "Disabled"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 7\n                                "), "\n                                ", HTML.TD("\n                                    Model 7\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $32.00\n                                "), "\n                                ", HTML.TD("\n                                    700\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-danger"
  }, "Disabled"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 8\n                                "), "\n                                ", HTML.TD("\n                                    Model 8\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $86.00\n                                "), "\n                                ", HTML.TD("\n                                    5180\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 9\n                                "), "\n                                ", HTML.TD("\n                                    Model 9\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $97.00\n                                "), "\n                                ", HTML.TD("\n                                    450\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 10\n                                "), "\n                                ", HTML.TD("\n                                    Model 10\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $43.00\n                                "), "\n                                ", HTML.TD("\n                                    7600\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 1\n                                "), "\n                                ", HTML.TD("\n                                    Model 1\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $50.00\n                                "), "\n                                ", HTML.TD("\n                                    1000\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 2\n                                "), "\n                                ", HTML.TD("\n                                    Model 2\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $40.00\n                                "), "\n                                ", HTML.TD("\n                                    4300\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 3\n                                "), "\n                                ", HTML.TD("\n                                    Model 3\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $22.00\n                                "), "\n                                ", HTML.TD("\n                                    300\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-warning"
  }, "Low stock"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 4\n                                "), "\n                                ", HTML.TD("\n                                    Model 4\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $67.00\n                                "), "\n                                ", HTML.TD("\n                                    2300\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 5\n                                "), "\n                                ", HTML.TD("\n                                    Model 5\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $76.00\n                                "), "\n                                ", HTML.TD("\n                                    800\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 6\n                                "), "\n                                ", HTML.TD("\n                                    Model 6\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $60.00\n                                "), "\n                                ", HTML.TD("\n                                    6000\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 7\n                                "), "\n                                ", HTML.TD("\n                                    Model 7\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $32.00\n                                "), "\n                                ", HTML.TD("\n                                    700\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 8\n                                "), "\n                                ", HTML.TD("\n                                    Model 8\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $86.00\n                                "), "\n                                ", HTML.TD("\n                                    5180\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 9\n                                "), "\n                                ", HTML.TD("\n                                    Model 9\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $97.00\n                                "), "\n                                ", HTML.TD("\n                                    450\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    Example product 10\n                                "), "\n                                ", HTML.TD("\n                                    Model 10\n                                "), "\n                                ", HTML.TD("\n                                    It is a long established fact that a reader will be distracted by the readable\n                                    content of a page when looking at its layout. The point of using Lorem Ipsum is\n                                    that it has a more-or-less normal distribution of letters, as opposed to using\n                                    'Content here, content here', making it look like readable English.\n                                "), "\n                                ", HTML.TD("\n                                    $43.00\n                                "), "\n                                ", HTML.TD("\n                                    7600\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Enable"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                    "), "\n                                "), "\n                            "), "\n\n\n                            "), "\n                            ", HTML.TFOOT("\n                            ", HTML.TR("\n                                ", HTML.TD({
    colspan: "6"
  }, "\n                                    ", HTML.UL({
    "class": "pagination pull-right"
  }), "\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n        "), "\n\n\n    ") ];
}));

}).call(this);
