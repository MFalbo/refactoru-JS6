
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


	$('#input-form').submit(function(){		

		return false;

	});

// Update user name from form input
	$('#name').blur(function(){
		$('#user-name').text($('#name').val());
		$('#name').val('');

	});

// -------------BOOK COLUMN------------
// Update list of favorite books from form input
	$('#books').blur(function(){

		$('#bookPar').append("<li>" + $('#books').val() + "</li>");

	});
// Enable show and hide function of favorite books list
	$('.left').click(function(){
		$('#bookPar').slideToggle();
	})

// --------------Bio Column--------------
// Update bio information from form input
	$('#bio').blur(function(){$('#bioPar').text($('#bio').val())});
// Enable show and hide function of bio section
	$('.mid').click(function(){
		$('#bioPar').slideToggle();
	})

// --------------Libraries Column-----------
// Update favorite libraries from form input
	$('#libs').blur(function(){

		$('#jsPar').append("<li>" + $('#libs').val() + "</li>");

	});
// Enable show and hide function of libraries column
	$('.right').click(function(){
		$('#jsPar').slideToggle();
	})
  
});























