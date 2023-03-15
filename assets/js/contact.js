/*jshint esversion: 6 */

/**
 * Add email.js to contact form to send email directly to gmail account.
 * @param {sendEmail} contactForm 
 */

function sendMail(contactForm) {
    emailjs.send("service_xm3vl8h","dcgame", {
        "from_name" : contactForm.name.value,
        "message" : contactForm.message.value,
        "from_email" : contactForm.email.value,
        "reply_to" : contactForm.email.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            swal("Thank you!", "Your message has been sent", "success"); // Use sweet alert to provide stlyed alert box for successfully sent message.
            contactForm.reset(); // Reset form after successful submission.
        },
        function(error) {
            console.log("FAILED", error);
            swal("Oh dear!", "Something went wrong, please try again", "error"); // Use sweet alert to provide stlyed alert box for unsuccessfully sent message.
        });
        return false; // Prevents form from submitting if there's an error.
}

/**
 * Button functions
 */
 function hangmanButton(){
    window.location.replace("hangman.html");
}
function quizButton(){
    window.location.replace("quiz.html");
}
function indexButton(){
    window.location.replace("index.html");
}

