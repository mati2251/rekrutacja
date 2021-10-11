const validData = () => {
  let isValid = true;
  const firstName = document.getElementById('first-name').value
  if (!/^[a-z ,.'-]+$/i.test(firstName)) {
    isValid = false;
  }
  const secondName = document.getElementById('last-name').value;
  if (!/^[a-z ,.'-]+$/i.test(secondName)) {
    isValid = false;
  }
  const email = document.getElementById('email').value;
  if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    isValid = false;
  }
  if(!isValid){
    document.getElementById('alert').innerText = 'Złe dane!!!'
    return false;
  }
  else {
    document.getElementById('alert').innerText = ''
  }
}
