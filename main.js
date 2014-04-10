$(document).on('ready', function() {

	$(document).on('click', '#show-form', function(){
		$('#input-form').toggle();
	})

	$('#input-form').submit(function(){

		$('#user-name').text($('#name').val());
		$('#bookPar').text($('#bio').val());
		$('#bioPar').text($('#books').val());
		$('#jsPar').text($('#libs').val());
		

		return false;
	});
  
});