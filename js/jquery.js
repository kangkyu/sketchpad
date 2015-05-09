$(document).ready(function() {
	rowCreate(16);
	divCreate(16);
	defaultHover();
});

// create row
function rowCreate(n) {
	var row = ""
	for (var i = 0; i < n; i++) {
		row += "<div class=row></div>";
	}
	$("#wrapper").append(row);
	$(".row").css("height", 750/n)

};

// create box
function divCreate(n) {
	var box = "";
	for (var i = 0; i < n; i++) {
		box += "<div class=box></div>";
	}
	$(".row").append(box);
	$(".box").css("width", 960/n).css("height", 750/n)
};

function buttonHelper() {
	$(".box").remove();
	$(".row").remove();

	grid_size = prompt("Number of squares on each side (Max of 100): ")

	if (grid_size > 100){
		buttonHelper();
	}
	else{
		rowCreate(grid_size);
		divCreate(grid_size);
	}
}

function defaultHover(){
	$(".box").on("mouseenter", function(){
		$(this).css("background", "white")
	})
}


function default_button(){
	buttonHelper();
	defaultHover();
}

function gradient_button(){
	buttonHelper();

	$(".box").on("mouseenter", function(){
		$(this).css("opacity", $(this).css("opacity") * 0.70)
	})

};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function random_button(){
	buttonHelper();
	
	$(".box").on("mouseenter", function(){
		$(this).css("background", getRandomColor());
	})
}


function trail_button(){
	buttonHelper();

	$(".box").on("mouseenter", function(){
		$(this).animate({opacity: .1}, 400); 
	})

	$(".box").on("mouseleave", function(){
		$(this).animate({opacity: 1}, 1000); 
	})
}

function clean_up(){
	$(".box").css("background", "#004878").css("opacity", "1");
};


