$(document).ready(function(){ // Run this code when DOM is ready });

    $(".btn").mouseenter(function(){

        $(".btn").css("background-color","#ffffff");

    });

    $(".btn").mouseleave(function(){

        $(".btn").css("background-color","#93af36");

    });   


		    // Get the modal
		    var modal = document.getElementById('modal-box');

		    // Get the image and insert it inside the modal - use its "alt" text as a caption
		    var img = document.getElementById('propertyImage1');
		    var modalImg = document.getElementById("modal-img01");
		    img.onclick = function(){
		        modal.style.display = "block";
		        modalImg.src = this.src;
		    }

		    var img = document.getElementById('propertyImage2');
		    var modalImg = document.getElementById("modal-img01");
		    img.onclick = function(){
		        modal.style.display = "block";
		        modalImg.src = this.src;
		    }

		    var img = document.getElementById('propertyImage3');
		    var modalImg = document.getElementById("modal-img01");
		    img.onclick = function(){
		        modal.style.display = "block";
		        modalImg.src = this.src;
		    }

		    var img = document.getElementById('propertyImage4');
		    var modalImg = document.getElementById("modal-img01");
		    img.onclick = function(){
		        modal.style.display = "block";
		        modalImg.src = this.src;
		    }

		    // Get the <span> element that closes the modal
		    var span = document.getElementsByClassName("close")[0];

		    // When the user clicks on <span> (x), close the modal
		    span.onclick = function() { 
		        modal.style.display = "none";
		    }
			
});


