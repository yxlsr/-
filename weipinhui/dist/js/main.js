console.log("加载完成");


/*
	配置我们引入的所有的插件
	AMD规范
 */
require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"parabola": "parabola",
		"index": "index",
		"slide": "slide"
	},
	shim: {
		"jquery-cookie": ["jquery"],
		//抛物线不支持AMD规范
		"parabola": {
			exports: "_"
		}
	}
})

//调用对应的模块
require(["index", "slide"], function(index, slide){
	index.index();
	slide.banner();
})