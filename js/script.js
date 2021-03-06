$(document).ready(function() {

	function command(cmd) {
		$("#console")[0].innerHTML += "<strong>$ " + $("<span>").html(cmd).text() + "</strong><br />";

		$.ajax({
			type: "POST",
			data: {command: cmd},
			url: "php/ajax.php",
			success: function(res) {
				var data = JSON.parse(res);
				$("#console")[0].innerHTML += data["response"] + "<br />";
				$(window).scrollTop($(document).height());
				
				userprofile(data["data"]);
			}
		});

		$("#command")[0].value = "";
	}

	$("#command").keypress(function(event) {
		if ( event.which == 13 ) {
			event.preventDefault();
			command($(this)[0].value);
		}
	});

	command("init");

});