(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ejemplo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"row\">\r\n	<h3 class=\"col-12 text-center\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.results : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.name : stack1), depth0))
    + "</h3>\r\n\r\n	<div class=\"col-12\">\r\n		<img src=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.results : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.thumbnail : stack1)) != null ? stack1.path : stack1), depth0))
    + "."
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.results : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.thumbnail : stack1)) != null ? stack1.extension : stack1), depth0))
    + "\" class=\"img-circle\" alt=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.results : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.name : stack1), depth0))
    + "\" width=\"304\" height=\"236\">\r\n	</div>\r\n\r\n	<div class=\"col-10 offset-1\">\r\n		<blockquote class=\"blockquote\">\r\n			<p class=\"text-center descripcion\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.results : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.description : stack1), depth0))
    + "</p>\r\n		</blockquote>\r\n		<br>\r\n		<img id=\"traducir\" src=\"spanish.png\" alt=\"Traducir\" width=\"64\" height=\"64\">\r\n	</div>\r\n\r\n	<div class=\"col-10 offset-1 mt-5\">\r\n		<blockquote class=\"blockquote\">\r\n			<p class=\"text-center descripcion-es\"></p>\r\n		</blockquote>\r\n	</div>\r\n	\r\n</div>\r\n\r\n";
},"useData":true});
})();