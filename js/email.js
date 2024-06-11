(function () {
    emailjs.init("T18UXDBEfDzKthsHR");
})();

function sendEmail(event) {
    event.preventDefault();
    const submitButton = document.querySelector('.form-control-submit-button');
    const loader = document.querySelector('.loader');

    // Show the loader and disable the submit button
    submitButton.disabled = true;
    submitButton.querySelector('.button-text').style.display = 'none';
    loader.style.display = 'inline-block';

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    emailjs.send("service_fb1ehaq", "template_f62zhet", {
        from_name: data?.name,
        email:data?.email,
        mobile: data?.mobile,
        message: data?.message,
        reply_to: "ankit.detroja.108@gmail.com",
    }).then(function (response) {
        // Hide the loader and enable the submit button
        submitButton.disabled = false;
        submitButton.querySelector('.button-text').style.display = 'inline';
        loader.style.display = 'none';
        document.getElementById("contactForm").reset();

        alert('Thank You!', 'We will contact you very soon!');
    }, function (error) {
        // Hide the loader and enable the submit button
        submitButton.disabled = false;
        submitButton.querySelector('.button-text').style.display = 'inline';
        loader.style.display = 'none';
        document.getElementById("contactForm").reset();

        alert('Failed!', "Something went wrong, Please try again.");
    });
}