var proxy=require('http-proxy-middleware');
exports.init=function(config, app)
{
	$.each(config, function(index, value){
	    app.use(proxy(index, {target:value, ws:true}));
	});
};  