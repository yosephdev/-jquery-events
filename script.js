$(document).ready(function () {


	$("#stream1_btn").on("click", function () {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function () {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function () {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});

	// $("body").mouseenter(function () {
	// 	$("body").css("background-color", "#e1e2e2");
	// });

	// $("body").mouseleave(function () {
	// 	$("body").css("background-color", "#81bbc9d9");
	// });

	// $("#stream1_btn").click(function(){
	// 	$(".stream1").hide("slow");
	// 	$(".stream2").hide("slow");
	// 	$(".stream3").hide("slow");
	// });

	// $("#stream2_btn").click(function(){
	// 	$(".stream1").hide("medium");
	// 	$(".stream2").hide("medium");
	// 	$(".stream3").hide("medium");
	// });

	// $("#stream3_btn").click(function(){
	// 	$(".stream1").hide(5000);
	// 	$(".stream2").hide(5000);
	// 	$(".stream3").hide(5000);
	// });
});

// Create the slideToggle effects each of the paragraphs and
    // buttons
    $("#button_effects1").click(function(){
        $('#par1').slideToggle(1000);
    });
    $("#button_effects2").click(function(){
        $('#par2').slideToggle(1000);
    });
    $("#button_effects3").click(function(){
        $('#par3').slideToggle(1000);
    });
    $("#button_effects4").click(function(){
        $('#par4').slideToggle(1000);
    });
    $("#button_effects5").click(function(){
        $('#par5').slideToggle(1000);
    });
    $("#button_effects6").click(function(){
        $('#par6').slideToggle(1000);
    });

    // Use the fadeTo effect when the mouse hovers over a specific button
    // and fadeTo again when the mouse is no longer hovering over the button
    $("#button_effects1").mouseenter(function(){
        $('#button_effects1').fadeTo(1000, 0.5);
    });
    $("#button_effects1").mouseleave(function(){
        $('#button_effects1').fadeTo(1000, 1);
    });

    $("#button_effects2").mouseenter(function(){
        $('#button_effects2').fadeTo(1000, 0.5);
    });
    $("#button_effects2").mouseleave(function(){
        $('#button_effects2').fadeTo(1000, 1);
    });

    $("#button_effects3").mouseenter(function(){
        $('#button_effects3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function(){
        $('#button_effects3').fadeTo(1000, 1);
    });

    $("#button_effects4").mouseenter(function(){
        $('#button_effects4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function(){
        $('#button_effects4').fadeTo(1000, 1);
    });

    $("#button_effects5").mouseenter(function(){
        $('#button_effects5').fadeTo(1000, 0.5);
    });
    $("#button_effects5").mouseleave(function(){
        $('#button_effects5').fadeTo(1000, 1);
    });

    $("#button_effects6").mouseenter(function(){
        $('#button_effects6').fadeTo(1000, 0.5);
    });
    $("#button_effects6").mouseleave(function(){
        $('#button_effects6').fadeTo(1000, 1);
    });
