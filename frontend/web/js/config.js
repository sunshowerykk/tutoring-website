//require.js config
require.config({
    baseUrl: "/static",
    paths: {
        jquery: "lib/jquery-1.9.1.min",
        validate: "lib/jquery.validate.min",
        template: "js/template",
        BMap: "http://api.map.baidu.com/api?v=2.0&ak=ZluQPlXqSFZlPCxQvT1HXGQF",        
        echo:'lib/echo.min',
        iscroll:'lib/iscroll',
        tap:'lib/tap',
        fastclick:'lib/fastclick'
    },
    shim: {
		'BMap': {
		    exports: 'BMap'
		}
    }
});
