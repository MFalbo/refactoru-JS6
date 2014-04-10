$(document).on('ready', function() {

	$(document).on('click', '#show-form', function(){

		$('#input-form').toggle({
			
			duration: 100,
			start: function(){
				if($('#show-form').text() === "Show Form"){
					$('#show-form').text("Hide Form");
				}
				else{
					$('#show-form').text("Show Form");
				}
			}
		})

	})

	$('#input-form').submit(function(){

		$('#user-name').text($('#name').val());
		$('#bookPar').text($('#bio').val());
		$('#bioPar').text($('#books').val());
		$('#jsPar').text($('#libs').val());
		

		return false;
	});
  
});