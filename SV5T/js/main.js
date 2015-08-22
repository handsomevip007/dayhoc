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
			$('#inputstufindredirect').val('ketqua.html?sid='+txt+'&lv=LCH');
			$('#inputstufind').val(txt);
		}
	});
	$('#inputstufind').keypress(function(){
		$('#inputstufind').keyup();
	});
	$('#inputstufind').focusout(function(){
		$('#inputstufind').keyup();
	});
	
	//Đọc dữ liệu khi vào trang kết quả
	$('#kqCap').html('cấp '+((window.location.search.indexOf('HSV')!=-1)? 'HSV Trường' : 'Liên Chi Hội') +'<span class="caret"></span>');
	var sid=window.location.href.split('?sid=')[1].split('&lv=')[0];
	$('#kqCap+ul a:nth(0)').attr('href','../SV5T/ketqua.html?sid='+sid+'&lv=HSV');
	$('#kqCap+ul a:nth(1)').attr('href','../SV5T/ketqua.html?sid='+sid+'&lv=LCH');
	$('#kqmssv').text(sid);
});