<!doctype html>
<html>
	<head>
		<title>University Challenge</title>
		<style>
			* { margin:0; padding:0; }
		</style>
		<script src="jquery.min.js"></script>
		<script src="admin.js"></script>
	</head>
	<body>
		<div class="wrapper" style="padding:20px;">
			<h1>Users</h1><br />
			<div class="users">
				No users
			</div>
			<br /><br />
			<button onclick="ClearUsers()">Clear users</button><br /><br />
			<button onclick="ClearStatus()">Clear status</button><br /><br />
			<button class="start_new_question" onclick="StartQuestion()">Start new question</button>
		</div>
	</body>
</html>