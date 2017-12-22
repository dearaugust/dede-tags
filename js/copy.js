var cfg = {
	path: "ZeroClipboard.swf",
	copy: function(){
	return $(this).siblings().text();
	},
	beforeCopy:function(){
		$(this).css("color","orange");
	},
	afterCopy:function(){
		var $copysuc = $('<div class="alert alert-success" role="alert">复制成功</div>');
		$("body").find(".alert").remove().end().append($copysuc);
		$copysuc.css({
			"position":"fixed",
			"z-index":"999",
			"bottom":"50%",
			"left":"50%",
			"margin":"0 0 -20px -80px"
		});
		$(".alert").fadeOut(2000);
		$(this).css("color","");
	}
};
$(document).ready(function(){
    $(".taglink a").mouseover(function(){
		if(!$(this).data('init')){$(this).zclip(cfg);$(this).data('init',true)}
	})
});