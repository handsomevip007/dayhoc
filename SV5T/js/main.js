$(function(){
	//Chuyển hướng trang khi gặp ?redirect=
	if(window.location.search.indexOf('?redirect=')!=-1){
		window.location=decodeURIComponent(window.location.search.split('?redirect=')[1]);
	}
	
	//Điểu chỉnh MSSV sang dạng Kxx.xxx.xxx
	$('#inputstufind').keyup(function(){
		var txt=$('#inputstufind').val().toUpperCase();
		if(txt.length>0){
			txt=txt.replace(/[^0-9]/gi,'');
			txt='K'+txt;
			if(txt[3]!='.' && txt.length>=3) txt=txt.slice(0,3)+'.'+txt.slice(3);
			if(txt[7]!='.' && txt.length>=7) txt=txt.slice(0,7)+'.'+txt.slice(7);
			$('#inputstufindredirect').val('ketqua.html?sid='+txt);
			$('#inputstufind').val(txt);
		}
	});
	$('#inputstufind').keypress(function(){
		$('#inputstufind').keyup();
	});
	$('#inputstufind').focusout(function(){
		$('#inputstufind').keyup();
	});
	
	//Chọn cấp khi xem kết quả
	$('#kqCap+ul a').click(function(){
		$('#kqCap').html($(this).text() +'<span class="caret"></span>');
	});
});