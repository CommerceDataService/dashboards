(function(){
Template.__checkName("orders");
Template["orders"] = new Template("Template.orders", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Orders"),
      category: Spacebars.call("Ecommerce")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight ecommerce"
  }, "\n\n\n        ", HTML.Raw('<div class="ibox-content m-b-sm border-bottom">\n            <div class="row">\n                <div class="col-sm-4">\n                    <div class="form-group">\n                        <label class="control-label" for="order_id">Order ID</label>\n                        <input type="text" id="order_id" name="order_id" value="" placeholder="Order ID" class="form-control">\n                    </div>\n                </div>\n                <div class="col-sm-4">\n                    <div class="form-group">\n                        <label class="control-label" for="status">Order status</label>\n                        <input type="text" id="status" name="status" value="" placeholder="Status" class="form-control">\n                    </div>\n                </div>\n                <div class="col-sm-4">\n                    <div class="form-group">\n                        <label class="control-label" for="customer">Customer</label>\n                        <input type="text" id="customer" name="customer" value="" placeholder="Customer" class="form-control">\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-sm-4">\n                    <div class="form-group">\n                        <label class="control-label" for="date_added">Date added</label>\n                        <div class="input-group date">\n                            <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input id="date_added" type="text" class="form-control" value="03/04/2014">\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-4">\n                    <div class="form-group">\n                        <label class="control-label" for="date_modified">Date modified</label>\n                        <div class="input-group date">\n                            <span class="input-group-addon"><i class="fa fa-calendar"></i></span><input id="date_modified" type="text" class="form-control" value="03/06/2014">\n                        </div>\n                    </div>\n                </div>\n                <div class="col-sm-4">\n                    <div class="form-group">\n                        <label class="control-label" for="amount">Amount</label>\n                        <input type="text" id="amount" name="amount" value="" placeholder="Amount" class="form-control">\n                    </div>\n                </div>\n            </div>\n\n        </div>'), "\n\n        ", HTML.DIV({
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
  }, "\n                            ", HTML.THEAD("\n                            ", HTML.TR("\n\n                                ", HTML.TH("Order ID"), "\n                                ", HTML.TH({
    "data-hide": "phone"
  }, "Customer"), "\n                                ", HTML.TH({
    "data-hide": "phone"
  }, "Amount"), "\n                                ", HTML.TH({
    "data-hide": "phone"
  }, "Date added"), "\n                                ", HTML.TH({
    "data-hide": "phone,tablet"
  }, "Date modified"), "\n                                ", HTML.TH({
    "data-hide": "phone"
  }, "Status"), "\n                                ", HTML.TH({
    "class": "text-right"
  }, "Action"), "\n\n                            "), "\n                            "), "\n                            ", HTML.TBODY("\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    3214\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $500.00\n                                "), "\n                                ", HTML.TD("\n                                    03/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    03/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    324\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $320.00\n                                "), "\n                                ", HTML.TD("\n                                    12/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    21/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    546\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $2770.00\n                                "), "\n                                ", HTML.TD("\n                                    06/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    04/08/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    6327\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $8560.00\n                                "), "\n                                ", HTML.TD("\n                                    01/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    05/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    642\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $6843.00\n                                "), "\n                                ", HTML.TD("\n                                    10/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    13/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-success"
  }, "Shipped"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    7435\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $750.00\n                                "), "\n                                ", HTML.TD("\n                                    04/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    14/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-success"
  }, "Shipped"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    3214\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $500.00\n                                "), "\n                                ", HTML.TD("\n                                    03/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    03/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    324\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $320.00\n                                "), "\n                                ", HTML.TD("\n                                    12/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    21/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    546\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $2770.00\n                                "), "\n                                ", HTML.TD("\n                                    06/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    04/08/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-danger"
  }, "Canceled"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    6327\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $8560.00\n                                "), "\n                                ", HTML.TD("\n                                    01/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    05/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    642\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $6843.00\n                                "), "\n                                ", HTML.TD("\n                                    10/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    13/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-success"
  }, "Shipped"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    7435\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $750.00\n                                "), "\n                                ", HTML.TD("\n                                    04/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    14/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    324\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $320.00\n                                "), "\n                                ", HTML.TD("\n                                    12/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    21/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-warning"
  }, "Expired"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    546\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $2770.00\n                                "), "\n                                ", HTML.TD("\n                                    06/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    04/08/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    6327\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $8560.00\n                                "), "\n                                ", HTML.TD("\n                                    01/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    05/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    642\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $6843.00\n                                "), "\n                                ", HTML.TD("\n                                    10/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    13/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-success"
  }, "Shipped"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    7435\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $750.00\n                                "), "\n                                ", HTML.TD("\n                                    04/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    14/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-success"
  }, "Shipped"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    3214\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $500.00\n                                "), "\n                                ", HTML.TD("\n                                    03/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    03/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    324\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $320.00\n                                "), "\n                                ", HTML.TD("\n                                    12/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    21/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    546\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $2770.00\n                                "), "\n                                ", HTML.TD("\n                                    06/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    04/08/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    6327\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $8560.00\n                                "), "\n                                ", HTML.TD("\n                                    01/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    05/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    642\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $6843.00\n                                "), "\n                                ", HTML.TD("\n                                    10/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    13/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-success"
  }, "Shipped"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    7435\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $750.00\n                                "), "\n                                ", HTML.TD("\n                                    04/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    14/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    324\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $320.00\n                                "), "\n                                ", HTML.TD("\n                                    12/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    21/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    546\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $2770.00\n                                "), "\n                                ", HTML.TD("\n                                    06/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    04/08/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    6327\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $8560.00\n                                "), "\n                                ", HTML.TD("\n                                    01/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    05/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    642\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $6843.00\n                                "), "\n                                ", HTML.TD("\n                                    10/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    13/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-success"
  }, "Shipped"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    7435\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $750.00\n                                "), "\n                                ", HTML.TD("\n                                    04/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    14/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-success"
  }, "Shipped"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    3214\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $500.00\n                                "), "\n                                ", HTML.TD("\n                                    03/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    03/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    324\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $320.00\n                                "), "\n                                ", HTML.TD("\n                                    12/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    21/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    546\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $2770.00\n                                "), "\n                                ", HTML.TD("\n                                    06/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    04/08/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    6327\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $8560.00\n                                "), "\n                                ", HTML.TD("\n                                    01/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    05/12/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    642\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $6843.00\n                                "), "\n                                ", HTML.TD("\n                                    10/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    13/07/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-success"
  }, "Shipped"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n                            ", HTML.TR("\n                                ", HTML.TD("\n                                    7435\n                                "), "\n                                ", HTML.TD("\n                                    Customer example\n                                "), "\n                                ", HTML.TD("\n                                    $750.00\n                                "), "\n                                ", HTML.TD("\n                                    04/04/2015\n                                "), "\n                                ", HTML.TD("\n                                    14/05/2015\n                                "), "\n                                ", HTML.TD("\n                                    ", HTML.SPAN({
    "class": "label label-primary"
  }, "Pending"), "\n                                "), "\n                                ", HTML.TD({
    "class": "text-right"
  }, "\n                                    ", HTML.DIV({
    "class": "btn-group"
  }, "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "View"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Edit"), "\n                                        ", HTML.BUTTON({
    "class": "btn-white btn btn-xs"
  }, "Delete"), "\n                                    "), "\n                                "), "\n                            "), "\n\n\n\n                            "), "\n                            ", HTML.TFOOT("\n                            ", HTML.TR("\n                                ", HTML.TD({
    colspan: "7"
  }, "\n                                    ", HTML.UL({
    "class": "pagination pull-right"
  }), "\n                                "), "\n                            "), "\n                            "), "\n                        "), "\n\n                    "), "\n                "), "\n            "), "\n        "), "\n\n\n    ") ];
}));

}).call(this);
