$(document).ready(function() { // Run this code when DOM is ready });

    // Change colour of booking form submit button upon mouseenter, return to green when mouse leaves button //

    $(".btn").mouseenter(function() {

        $(".btn").css("background-color", "#ffffff");

    });

    $(".btn").mouseleave(function() {

        $(".btn").css("background-color", "#93af36");

    });



    // Lightbox pop-up images //

    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true
    })

    // Submit button confirmation of form submission //

    $(".btn").click(function() {
        alert("Thank you for your enquiry, we will be in touch!");
    });

});