const scriptURL = 'https://script.google.com/macros/s/AKfycbzX2Wdst9LvB7eI-N-lmEZf7uwhX5svY3NEoy_VKArTpZyprH99OCSbs2KA7tPq47Qp/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})