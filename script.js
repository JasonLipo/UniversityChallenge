var $, checkLogin, checkStatus, checkQuestion;

$(function () {
	LoginAjax();
	StatusAjax();
	SetIntervals();	
});

function SetIntervals() {
	
	checkLogin = setInterval(function () {
		LoginAjax();
	}, 2000);
	
	checkStatus = setInterval(function () {
		StatusAjax();
	}, 2000);
	
}

function LoginAjax() {
	$.get("/check.php", function (ch) {
		if (ch == "logout") {
			location.href='logout.php';
		}
	});	
}

function StatusAjax() {
	$.get("/status.php", function (st) {
		if (st == "waiting") {
			$('.wrapper').html('<div style="font-size: 90px; font-family: Arial; margin: 150px 0;">Waiting...</div>');
		}
		else if (st == "question") {
			PrepareQuestion();				
		}
		else {
			location.href='logout.php';
		}
	});
}

function PrepareQuestion() {
	
	$('.wrapper').html('<img src="red.png" class="buzzer red" /><img src="green.png" style="display:none;" class="buzzer green" />');
	
	clearInterval(checkStatus);
	clearInterval(checkLogin);
	
	$('.buzzer.red').mousedown(function () {
		$('.buzzer.red').hide();
		$('.buzzer.green').show();
		$.get("/buzz.php");
	});
	
	$.ajax({
		type: "GET",
		url: "/question_finish.php",
		async: true,
		cache: false,
		success: function () {
			SetIntervals();
		}
	});
	
}