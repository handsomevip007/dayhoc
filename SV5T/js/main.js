$(function(){
	var id='', pass='', lv='';
	//Tooltip
	$('[data-tooltip="tooltip"]').tooltip();
    $('[data-popover="popover"]').popover();   
	//Chuyển hướng trang khi gặp ?redirect=
	if(window.location.search.indexOf('?redirect=')!=-1){
		window.location=decodeURIComponent(window.location.search.split('?redirect=')[1]);
	}
	//Lưu quyền đăng nhập khi vào trang
	if(typeof(Storage) !== 'undefined'){
		id = sessionStorage.uid;
		pass=sessionStorage.upass;
		lv=sessionStorage.ulv;
		window.sessionStorage.uid ='';
		window.sessionStorage.upass='';
		window.sessionStorage.ulv=''
		window.onbeforeunload = function(){
			window.sessionStorage.uid = id;
			window.sessionStorage.upass=pass;
			window.sessionStorage.ulv=lv
		}
	}
	//Kiểm tra đăng nhập
	if(lv>0){
		$('.navbar-right li:nth(0)').remove();
	}else{
		$('.navbar-right li:nth(1),.navbar-right li:nth(2)').remove();
	}
	//Điểu chỉnh MSSV sang dạng Kxx.xxx.xxx
	$('#inputstufind').keyup(function(){
		var txt=$('#inputstufind').val().toUpperCase();
		if(txt.length>0){
			$('#findremove').show();
			txt=txt.replace(/[^0-9]/gi,'');
			txt='K'+txt;
			if(txt[3]!='.' && txt.length>=3) txt=txt.slice(0,3)+'.'+txt.slice(3);
			if(txt[7]!='.' && txt.length>=7) txt=txt.slice(0,7)+'.'+txt.slice(7);
			$('#inputstufindredirect').val('ketqua.html?sid='+txt+'&lv=LCH');
			$('#inputstufind').val(txt);
		}else{
			$('#findremove').hide();
		}
	});
	$('#inputstufind').keypress(function(){$('#inputstufind').keyup()});
	$('#inputstufind').focusout(function(){$('#inputstufind').keyup()});
	$('#findremove').click(function(){
		$('#inputstufind').val('').focus();
		$(this).hide();
	});
	//Xử lý dữ liệu trang kết quả
	if(window.location.href.indexOf('ketqua.html')!=-1){
		$('#kqCap').html('cấp '+((window.location.search.indexOf('HSV')!=-1)? 'HSV Trường' : 'Liên Chi Hội') +'<span class="caret"></span>');
		var sid=window.location.href.split('?sid=')[1].split('&lv=')[0];
		$('#kqCap+ul a:nth(0)').attr('href','../SV5T/ketqua.html?sid='+sid+'&lv=HSV');
		$('#kqCap+ul a:nth(1)').attr('href','../SV5T/ketqua.html?sid='+sid+'&lv=LCH');
		$('#kqmssv').text(sid);
	}
	//Xử lý dữ liệu trang đăng nhập
	if(window.location.href.indexOf('dangnhap.html')!=-1){
		if(typeof(Storage) !== 'undefined') {
			if(window.location.search.indexOf('?act=thoat')!=-1){
				id=pass=lv='';
				window.location.href='../SV5T/index.html';
			}else if(lv>0){
				window.location.href='../SV5T/quantri.html';
			}
			$('#login').submit(function(){
				var mid = $('#uid').val();
				var mpass = $('#pwd').val();
				mpass = md5(md5(mpass)+mpass);
				if(mid.toLowerCase()=='adminsv5t' && mpass=='86f3059b228c8acf99e69734b6bb32cc'){
					id=mid;
					pass=mpass;
					lv=1;
				}else{
					$('#loginlogwarn').show();
				}
			});
		}else{
			$('#loginform').remove();
			$('#loginwarn').show();
		}
	}
	//Xử lý dữ liệu trang điều khiển
	if(window.location.href.indexOf('quantri.html')!=-1){
		if(lv<=0){
			window.location.href='../SV5T/dangnhap.html';
		}
		//Điều hướng
		if(window.location.search.indexOf('pl=')!=-1){
			var t=window.location.search.split('pl=')[1].slice(0,2);
			$('[href="#pl'+t+'"]').click();
		}else{
			$('[href="#plTQ"]').click();
		}
		//Thêm hoạt động
		$('#HDthangHD,#HDnamHD,#HDdonviHD,#HDtukhoaHD').change(function(){
			var tg='', thang=$('#HDthangHD').val(), nam=($('#HDnamHD').val())%100;
			if(thang>=9 && thang<=12){
				tg=nam+''+(nam+1)+'1';
			}else if(thang >=1 && thang<=5){
				tg=(nam-1)+''+nam+'2';
			}else{
				tg=(nam-1)+''+nam+'3';
			}
			$('#HDmaHD').val($('#HDdonviHD').val()+tg+'@'+$('#HDtukhoaHD').val());
		});
		$('#HDlamlai').click(function(){
			$('#HDthemHD input,#HDghchuHD').val('');;
		});
		//Xoá hoạt động
		$('button[del]').click(function(e){
			$(this).popover({title: "Xác nhận", content: '<button del2="'+$(this).attr('del')+'" class="btn btn-danger btn-xs" role="button">XOÁ</button>', html: true, placement: "top"});
			if($(this).attr('c')!='1'){
				$(this).attr('c','1').click();
				$('button[del2]').click(function(){
					$(this).parents('tr').remove();
				});
			}
		});
	}
		
	
});