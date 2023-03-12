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
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}