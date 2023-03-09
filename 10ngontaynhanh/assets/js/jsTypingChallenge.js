	
	// Makes an initial challenge appear
	window.onload = function() {
		gettingReadyToPlay();
	}

	// Field declarations and initializations.
    var _wordsAllArray = new Array();
    var _counter = 61;
    var _t;
    var _isTimerOn = false;
    var _rightWords = [];
	var _wrongWords = [];
	var _rightKeystrokes = 0;
   	var _wrongKeystrokes = 0;

   	/*
   		Fills the Word Array with all words that are involved to the challenge.
   	*/
 	function fillWordArrayWithWords() {

 		_wordsAllArray = ['pháp','phim','đại','không','thú','thân','lực','chặt','như','quan','đặt','phó','khỏi','lửa','nhiệm','hiệp','máu','dự','tỉ','nhân','trường','buồn','tinh','huy','ngành','hành','tâm','vọng','mô','chú','tộc','ước','hạn','lợi','khai','thượng','chế','cấm','khắp','ấn','bọn','mắt','kỳ','cũng','thuốc','chi','hoặc','theo','ngược','sai','đói','kể','tập','thoại','giữa','đầu','toán','tư','biên','nguy','bỏ','cha','ơn','đỏ','mãi','phép','tướng','năng','tụ','sử','đảng','triều','cấp','bạo','tôi','môi','trạng','bố','thấp','con','chọn','ít','biệt','cảm','tung','chồng','thấy','hà','sao','nào','họp','tương','mời','bình','tay','độ','trống','hang','đoán','nghiêng','hoàng','thảo','dù','kỷ','mặt','sau','niên','quảng','ngôn','gây','tử','giảm','tích','trông','kỹ','hãy','cựu','tưởng','thái','đá','đó','nghị','bào','nhìn','phiếu','thuế','vốn','đích','khăn','lời','minh','thu','địa','xanh','xã','núi','phe','ứng','suy','đoạn','phía','lấy','lộ','làng','sản','lần','hóa','còn','chẳng','giờ','kẻ','mẹ','du','đôi','tận','nhưng','giống','kiểm','chính','loại','kiếm','cảng','hay','hiệu','coi','trả','khắc','so','vô','cuối','dạy','nghĩ','ký','vì','khá','tuy','cùng','đáp','những','vào','xây','bỗng','khi','quá','vệ','nhảy','hình','gồm','đồ','quên','riêng','miền','phát','cao','mọi','giữ','triển','bảo','đột','tù','bí','rất','đen','đơn','xét','đến','đài','dân','thủ','chạy','đổi','dương','nhanh','mới','sơ','trắng','nhớ','gió','nguyên','dài','cán','truyền','bờ','đỡ','trần','lành','biết','dẫn','nền','quay','tân','giải','chương','sân','cạnh','điện','bò','bức','lễ','đưa','thôi','khổ','âm','đi','nàng','dục','rơi','thư','cổ','phản','tổ','tổng','đứng','chức','lá','người','hương','đầy','hạt','đám','xấu','giấy','giác','tuyển','ông','bán','hải','hỗ','tờ','liệu','tai','sợ','tội','hổ','thực','rồi','bánh','yếu','ếch','chị','kiện','phóng','chăm','luật','họ','tượng','nhạc','mơ','tiêu','trợ','phút','đấy','cải','dùng','chàng','tranh','đòi','chó','kêu','xong','tuyên','là','thầy','đăng','kê','khác','mua','ban','tại','cướp','quang','lên','nhũng','sáu','tịch','kim','kính','hộ','ý','cung','ca','la','chủ','thiên','bốn','âu','sẽ','phi','ngại','sứ','nhóm','đô','về','mắc','liệt','hướng','thay','chất','khách','quy','quần','lạ','ngày','rừng','trai','suốt','mang','hùng','lịch','sĩ','tác','mở','và','vương','này','vũ','lẽ','được','lệnh','giang','ly','đa','mừng','hồng','loài','hưởng','lương','trí','hoàn','tục','căn','nhiêu','bài','chiếm','quyết','khối','thủy','thua','việt','gửi','cuộc','lai','chưa','kéo','thích','khu','rắn','đánh','trại','linh','kế','tỷ','chuyên','vấn','bảy','can','đạt','tháng','thoát','mà','xe','cơ','phí','động','bước','tỏ','gái','kia','tiết','nghiệp','nam','tố','tính','nghiệm','nay','mèo','tấn','cực','đoàn','bị','bạc','tấm','quen','nên','mặc','tiếp','hiện','nghỉ','mối','sở','nga','giành','đường','hầu','mất','quyền','dấu','rõ','lan','thiện','tiếng','thế','xuất','nữa','thứ','đọc','ngủ','hồi','trò','giam','nước','buộc','phú','giới','bất','kiểu','tình','bây','bang','thị','chuyện','cờ','cộng','lại','xa','từng','lý','dưới','từ','dụng','trẻ','lưới','hoa','tên','kinh','thịt','hàn','xin','mạnh','thần','thăm','với','biển','sư','sang','nhờ','danh','lòng','xúc','gòn','bắt','đàn','ngọc','trái','cầm','nhà','qua','ô','tòa','thuyền','thêm','ấy','cô','lao','tức','liền','đẹp','vội','khóc','bàn','châu','cá','đây','mức','giáo','các','sắc','mỹ','hoạch','ngôi','phân','phẩm','lâu','đấu','hạnh','quản','điểm','kích','lượng','bao','quý','rộng','dần','chân','ăn','ơi','chúng','ngồi','nỗi','giao','trước','tìm','cái','hậu','bạn','tài','vật','băng','nếu','tăng','thụ','tiền','vai','giả','hữu','đời','học','long','vui','nhằm','hơn','thúc','vậy','ty','bay','ai','cư','toàn','bản','màu','kết','tàn','ngay','đã','trách','tới','thể','hỏi','nghề','phải','vài','gặp','trở','gì','dành','chắn','vận','đẩy','sức','áo','lập','vườn','trăm','già','mại','liên','quốc','lệ','chùa','thuyết','văn','vùng','mục','thập','thí','tiểu','năm','nổi','sâu','nghĩa','sẵn','chung','nhiên','thanh','đức','nạn','cầu','rút','thắng','có','vòng','hết','ninh','trình','dung','quận','giận','binh','phá','bắc','triệu','mong','hội','nông','cả','phối','chấp','đều','sách','quân','cường','lính','lê','đau','giúp','nó','sóng','đêm','đội','chuyến','đâu','xác','báo','bé','thành','vi','cười','mỗi','phong','in','công','nằm','bởi','nội','lão','điều','trao','mai','an','ngoài','bom','đúng','môn','cũ','dậy','lẫn','tuần','nghệ','nuôi','phụ','chúa','lũ','buổi','vẫn','chợ','vua','khoa','tạo','thiệt','khẩu','may','phạt','đảo','nghiên','tàu','biện','cậu','đang','đốc','luyện','lãnh','xuyên','mưa','thông','thật','định','bộ','chữ','ngân','hai','diễn','chơi','chục','câu','cóc','xem','hàng','dư','thức','chiến','luận','đem','chia','tệ','qui','vụ','sát','bệnh','gian','yên','trên','trận','thuật','chắc','thiếu','sinh','tin','hiểu','giám','kém','lược','trực','quả','do','khoảng','nổ','số','xưa','áp','dễ','ta','xử','dám','dầu','phương','làm','biểu','luôn','phòng','nữ','càn','đình','ác','mấy','ủy','đợi','nhỏ','chứ','viên','món','ảnh','trang','cố','cục','đồng','lớn','gấu','chịu','phần','khó','giá','lúc','ngài','máy','tây','cỏ','gốc','đổ','trọng','bên','quán','tránh','song','phạm','hòa','hợp','vàng','đất','bà','đông','dứt','tra','phục','thường','trung','đề','nhất','đừng','nha','đuổi','tiện','bác','bắn','cứ','viết','bày','thuộc','của','nguồn','vẻ','nghi','dũng','thử','thiết','cách','phủ','thống','thỏ','tạm','bằng','góp','nghe','y','sơn','doanh','xảy','loan','càng','huyện','hồ','ra','quỳnh','đối','cáo','dịch','thương','chỉ','đảm','địch','trương','quanh','sông','ngờ','chiều','bụng','hạ','nắm','hệ','cây','thuận','vừa','sống','cửa','đóng','hôm','cảnh','nhập','lớp','chống','một','vợ','sắp','hy','cháu','nhau','lưu','chấm','lo','nghèo','duy','cuốn','biến','tường','nơi','tham','nặng','trị','tất','tín','gọi','tiên','dựng','mật','nguyễn','hại','để','hoạt','ủng','hãng','đặc','độc','tế','tốt','chuẩn','nhật','rằng','thi','lúa','trong','thẳng','cử','anh','viện','ở','đà','diện','dây','việc','ba','tiến','to','sài','di','lạc','án','đạo','thưởng','kiến','nhận','trời','mạng','xuống','bầu','em','chờ','ngăn','sáng','gà','cần','xuân','chuột','khả','sớm','tớ','mùa','chiếc','trào','chí','cánh','chuyển','tỉnh','gia','thời','tự','đáng','thất','chết','nhiều','vị','thậm','chim','vực','ngàn','đủ','đào','cho','vượt','a','nói','cứu','tuổi','bóng','tuyệt','ngoại','phúc','gần','lắm','tối','thì','á','yêu','tôn','khiến','hiểm','muốn','chứng','cập','chỗ','lỗi','trưởng','khí','mình','cụ','sự','đứa','uống','bại','ghi'];				
    }

	/*
		A simple countdown. If the countdown hits 0 seconds timer is stopped, 
		typing field disabled and score will be showing up.
	*/
    function countdown() {
		
		_counter--;
		_t = setTimeout("countdown()", 1000);
		getTimerTextfield().innerHTML = _counter;

		if(_counter == 0) {
			isTimerOn = false;
  			clearTimeout(_t);
  			getTypingTextfield().setAttribute("contentEditable", false); 
  			getTypingTextfield().value = ""
  			calculateScores();
		}
	}

	/*
		Starts the countdown if there is no timer running at the moment.
	*/
	function startCountdown() {
		if(!_isTimerOn) {
			_isTimerOn = true;
			countdown();
		}
	}

	/*
		Calculates the scores and displays it after the timer hits 0 seconds.
	*/
	function calculateScores() {

		var rightWords = _rightWords.length;
		var wrongWords = _wrongWords.length;
		var rightKeystrokes = _rightKeystrokes;
		var wrongKeystrokes = _wrongKeystrokes;
		var officialWPM = Math.floor( rightKeystrokes/((rightKeystrokes+wrongKeystrokes)/rightWords) );
		document.getElementById('test').hidden = true;
		getResultfield().innerHTML = "<br>" + 
			"<b>" + "*** K Ế T  Q U Ả ***" + "</b>" + "<br>"
			+ "<b>" + Math.min(Math.round(officialWPM/50*100,1)/10,10) + " điểm</b><br>"
			+ "<b>" + "Tốc độ: </b>" + officialWPM + " từ/phút (" + (rightKeystrokes + wrongKeystrokes) + " ký tự)" + "<br>"
			+ "<b>" + "Đúng: " + "</b>" + rightWords + " (" + rightKeystrokes + " ký tự)" + "<br>"
			+ "<b>" + "Từ sai: " + "</b>" + wrongWords + " (" + wrongKeystrokes + " ký tự)" + "<br><br>"
			+ '<button type="submit" class="btn btn-primary mb-2 w-25" onclick="document.location.reload()">↺</button>';
			if(window.localStorage.score==undefined) window.localStorage.score = "[]";
			score = JSON.parse(window.localStorage.score);
			score.push({
				time: (new Date()).toLocaleString("fr-FR"),
				speed: officialWPM,
				right: rightWords,
				wrong: wrongWords,
			});
			window.localStorage.score = JSON.stringify(score);
	}

	/*
		Deletes viewable content of the Typing Textfield as well as the Problem Textfield.
	*/
	function cleanUpFrontend() {
		document.getElementById("typingTextfield").innerHTML = "";
		document.getElementById("problemTextfield").innerHTML = "";
	}

	/*
		Deletes unviewable content of the Typing Textfield as well as the Problem Textfield.
	*/
    function cleanUpBackend() {
    	_wordsAllArray = [];
    }

    /*
    	Shuffles an given Array.
    */
    function shuffle(array) {
	    
	    var j, x, i;
	    
	    for (i = array.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = array[i - 1];
	        array[i - 1] = array[j];
	        array[j] = x;
	    }
}
	/*
		Shuffles the Word Array and generating a string with words that can be displayed. 
	*/
    function generateProblem() {
    	
    	cleanUpBackend();
 		fillWordArrayWithWords();
 		fillWordArrayWithWords();
 		fillWordArrayWithWords();
 		shuffle(_wordsAllArray);
 	}

	/*
		Uses the array to display the problem.
 	*/
 	function displayProblem() {
 		
 		cleanUpFrontend();
 		getProblemTextfield().innerHTML = _wordsAllArray.join(" ");
 	}

	/*
		Returns the Typing Textfield.
 	*/
 	function getTypingTextfield() {
 		return document.getElementById("typingTextfield");
 	}

	/*
		Returns the Problem Textfield.
 	*/
 	function getProblemTextfield() {
 		return document.getElementById("problemTextfield");
 	}

	/*
		Returns the body of the HTML document.	
 	*/
 	function getBody() {
 		return document.getElementsByTagName("BODY")[0];
 	}

	/*
		Returns the Timer Textfield.
 	*/
 	function getTimerTextfield() {
 		return document.getElementById("timerTextfield");
	}
	 
	function getResultfield() {
		return document.getElementById("resultTextfield");
	}

	/*
		Returns the Refresh Button.
 	*/
 	function getRefreshWordsButton() {
 		return document.getElementById("refreshButton");
 	}

	// This happens if a keyboard key has been pressed.
	getTypingTextfield().addEventListener("keypress", function checkKeyPress(e) {
		
		if(getProblemTextfield().innerHTML !== "") {
			startCountdown();
			getTypingTextfield().placeholder= "";
		}

		var currentWordOfString = stripHtml(_wordsAllArray[_rightWords.length + _wrongWords.length]);

		var SPACE = 32;

		if (e.keyCode == SPACE) {
			e.preventDefault();
			if(getTypingTextfield().value !== "") {
				console.log('1');
				if(getTypingTextfield().value === currentWordOfString) {
					_rightWords.push(currentWordOfString);
					_rightKeystrokes += currentWordOfString.length;
					
					_wordsAllArray[_rightWords.length + _wrongWords.length - 1] = '<span class="highlightRight">' + stripHtml(currentWordOfString) + '</span>';
					_wordsAllArray[_rightWords.length + _wrongWords.length] = '<span class="highlightCurrent">' + stripHtml(_wordsAllArray[_rightWords.length + _wrongWords.length]) + '</span>';

					displayProblem();
				} 
				else if(getTypingTextfield().value !== currentWordOfString) {
					_wrongWords.push(currentWordOfString);
					_wrongKeystrokes += currentWordOfString.length;
					
					_wordsAllArray[_rightWords.length + _wrongWords.length - 1] = '<span class="highlightWrong">' + stripHtml(currentWordOfString) + '</span>';
					_wordsAllArray[_rightWords.length + _wrongWords.length] = '<span class="highlightCurrent">' + stripHtml(_wordsAllArray[_rightWords.length + _wrongWords.length]) + '</span>';

					displayProblem();
				}
			}

			getTypingTextfield().value = "";
			$('#problemTextfield span').get(_rightWords.length + _wrongWords.length - 1).scrollIntoView();
			// $('#problemTextfield ').get(0).scrollIntoView();
		}
	});

	function stripHtml(html)
	{
		let tmp = document.createElement("DIV");
		tmp.innerHTML = html;
		return tmp.textContent || tmp.innerText || "";

	}
	/*
  		This is the method that is called everytime the Refresh button has been pressed.
  		It's mostly about cleaning up stuff that another challenge can be launched. 
  	*/
  	function gettingReadyToPlay() {
		
		getTypingTextfield().setAttribute("contentEditable", true); 
  		_counter = 61;
		_isTimerOn = false;
  		clearTimeout(_t);
  		getTimerTextfield().innerHTML = "60";
  		getTypingTextfield().placeholder="Gõ phím để bắt đầu";
  		
  		// No CSS used :/
  		getTypingTextfield().style.textAlign = "center";
  		// getTimerTextfield().style.textAlign = "center";
  		// getTimerTextfield().style.height = "30px";
  		// getTimerTextfield().style.width = "45px";
  		
  		_rightWords = [];
  		_wrongWords = [];
  		_rightKeystrokes = 0;
  		_wrongKeystrokes = 0;

  		cleanUpFrontend();
  		generateProblem();
  		displayProblem();
  }
