$(document).ready(function() {
	$('input').val("");
});

$(document).on('click', 'button.add', function() {
	$firstName = $('#firstName').val();
	$lastName = $('#lastName').val(); 
	$email = $('#email').val(); 
	$number = $('#number').val(); 

	$('table').append("<tr><td>"+$firstName+"</td>"+"<td>"+$lastName+"</td>"+"<td>"+$email+"</td>"+"<td>"+$number+"</td></tr>");
});

//Resets Form Fields
$(document).on('click', 'button.reset', function() {
	$('input').val("");
});