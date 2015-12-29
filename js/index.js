$( document ).ready(function() {
	var photoLinkList = [
	"bridge-background.jpg", 
	"desert-background.jpg", 
	"mountain-background.jpg"
	];
	var currentPhoto = 0;
	var tutorial = false;

	//display default photo
	$("#displayedImg").attr("src", photoLinkList[currentPhoto]);

	$("#right").on( "click", function() {
		//check if last photo
		if(currentPhoto+1 === photoLinkList.length){
			//if last, loop to beginning
			currentPhoto = 0;
		}else{
			//if not last, switch to next photo
			currentPhoto++;
		}
		updateImg(photoLinkList[currentPhoto]);
	});
	$("#left").on( "click", function() {
		//check if first photo
		if(currentPhoto === 0){
			//if first, loop to last
			currentPhoto = photoLinkList.length-1;
		}else{
			//if not first, switch to previous photo
			currentPhoto--;
		}
		updateImg(photoLinkList[currentPhoto]);
	});
	$("#buttonFrame").on( "click", function() {
		//fade controls		
		$("#buttonFrame").fadeTo(500, 0, function(){});		
	});

	function updateImg(source) {
		$("#displayedImg").fadeTo(500,0,function(){
			$("#displayedImg").attr("src", source);
		});
		$("#displayedImg").fadeTo(500,1,function(){});
		
	}
	
});

