const scriptURL = 'https://script.google.com/macros/s/AKfycbytzHS3l32-cvuLonsd2oEkDZyA2DuCIVIQGkQ8Lhsr7IWJpz0SgncY_W7P4Z6gctsc/exec'
const form = document.forms['contactForm']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you for contacting! We will get back to you soon."))
        .catch(error => console.error(error.message))
    document.getElementById("contactForm").reset();
});