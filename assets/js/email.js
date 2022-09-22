const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const success = document.getElementById('success-message');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   submit.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_nep2qiv';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      reset.click();
      submit.value = 'Send Message';
      success.style.display = 'inline-block';
      setTimeout(() => {
        success.style.display = 'none';
      }, 5000);
    }, (err) => {
      submit.value = 'Send Message';
      console.log(err);
    });
});
