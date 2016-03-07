var $, all_users;

$(function () {
	FetchUsers();
});

function FetchUsers() {
	$.get("users.txt", function (res) {
		all_users = JSON.parse(res);
		if (!$('.users button').size()) {
			$('.users').html('<br /><button onclick="SaveUsers()">Save</button');
		}
		for (var x in all_users) {
			if (!$('.users .'+x).size()) {
				$('.users').prepend('<div class="user_row"><span>' + x + '</span> <input type="text" value="'+all_users[x]+'" /></div>');
			}
		}
	});
}

function SaveUsers() {
	var new_users = {};
	$('.users .user_row').each(function () {
		var key = $(this).find('span').html();
		var value = $(this).find('input').val();
		new_users[key] = value;
	});
	$.post("/write_users.php", { text: JSON.stringify(new_users) }, function () {
		location.reload();
	});
}


function ClearUsers() {
	$.post("/write_users.php", { text: "{}" }, function () {
		location.reload();
	});
}

function ClearStatus() {
	$.post("/write_status.php", { text: "waiting" }, function () {
		location.reload();
	});
}

function StartQuestion() {
	$.post("/write_status.php", { text: "question" }, function () {
		$('.start_new_question').attr('disabled', 'disabled');
	});
	$.ajax({
		type: "GET",
		url: "/wait_for_buzz.php",
		async: true,
		cache: false,
		success: function (a) {
			alert(all_users[a] + " got there first!");
			$.post("/write_status.php", { text: "waiting" });
			$('.start_new_question').removeAttr('disabled');
		}
	}); 
}