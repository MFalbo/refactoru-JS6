
// --------SOLUTION USING FORM SUBMIT BUTTON------------------

// $(document).on('ready', function() {

// 	$(document).on('click', '#show-form', function(){

// 		$('#input-form').toggle({
			
// 			duration: 100,
// 			start: function(){
// 				if($('#show-form').text() === "Show Form"){
// 					$('#show-form').text("Hide Form");
// 				}
// 				else{
// 					$('#show-form').text("Show Form");
// 				}
// 			}
// 		})

// 	})

// 	$('#input-form').submit(function(){

// 		$('#user-name').text($('#name').val());
// 		$('#bookPar').text($('#bio').val());
// 		$('#bioPar').text($('#books').val());
// 		$('#jsPar').text($('#libs').val());
		

// 		return false;
// 	});
  
// });


// -------SOLUTION WITH AUTO-SAVE INSTEAD OF SUBMIT BUTTON------------

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

		$('#name').blur(function(){$('#user-name').text($('#name').val())});
		$('#bio').blur(function(){$('#bookPar').text($('#bio').val())});
		$('#books').blur(function(){$('#bioPar').text($('#books').val())});
		$('#libs').blur(function(){$('#jsPar').text($('#libs').val())});
  
});