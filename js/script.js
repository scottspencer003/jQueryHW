	$(document).ready(function(){

			$("#socialMedia").delay(1000).animate({
				left:"+=64px"
			}, 250);

			$('#content').fadeIn(2000);


			$("#hide").click(function(){
        		$("#navBar").hide();
   		 	});
    		$("#show").click(function(){
        		$("#navBar").show();
   			 });

    		$(".icon1").hover(function() {
    			$(this).animate({
    				height: '70px',
    				width: '70px',
    			},100);
    			
    		},
    		function() {
    			$(this).animate({
    				height: '64px',
    				width: '64px',
    			},100);
    		});

    		$(".icon2").hover(function() {
    			$(this).animate({
    				height: '70px',
    				width: '70px',
    			},100);
    			
    		},
    		function() {
    			$(this).animate({
    				height: '64px',
    				width: '64px',
    			},100);
    		});

    		$(".icon3").hover(function() {
    			$(this).animate({
    				height: '70px',
    				width: '70px',
    			},100);
    			
    		},
    		function() {
    			$(this).animate({
    				height: '64px',
    				width: '64px',
    			},100);
    		});

    		$(".icon4").hover(function() {
    			$(this).animate({
    				height: '70px',
    				width: '70px',
    			},100);
    			
    		},
    		function() {
    			$(this).animate({
    				height: '64px',
    				width: '64px',
    			},100);
    		});

    		$(".icon5").hover(function() {
    			$(this).animate({
    				height: '70px',
    				width: '70px',
    			},100);
    			
    		},
    		function() {
    			$(this).animate({
    				height: '64px',
    				width: '64px',
    			},100);
    		});


		});











// 	$(document).ready(function(){
//     $("#hide").click(function(){
//         $("p").hide();
//     });
//     $("#show").click(function(){
//         $("p").show();
//     });
// });