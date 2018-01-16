(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lista'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "\r\n	<div class=\"col-3 caja\">\r\n		<p class=\"text-center\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\r\n		<img class=\"img-fluid\" src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.path : stack1), depth0))
    + "."
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.thumbnail : depth0)) != null ? stack1.extension : stack1), depth0))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\r\n	</div>\r\n\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.blockHelperMissing.call(depth0,container.lambda(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.results : stack1), depth0),{"name":"data.results","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();