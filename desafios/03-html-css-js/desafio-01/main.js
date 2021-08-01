function openMenuMobile(elem) {
  if (elem.classList.contains('change')) {
    elem.innerHTML = '<i class="fas fa-bars fa-2x"></i>'
  } else {
    elem.innerHTML = '<i class="fas fa-times fa-2x"></i>'
  }
  document.getElementById('menu-mobile').classList.toggle('active')
  elem.classList.toggle('change')
}

function closeMenuMobile(elem) {
  const menuMobile = document.getElementById('menu-mobile')
  const topBarMobile = document.getElementById('topbar-mobile')
  topBarMobile.innerHTML = '<i class="fas fa-bars fa-2x"></i>'
  topBarMobile.classList.toggle('change')
  menuMobile.classList.toggle('active')
}

window.onload = () => {
  const contactForm = document.querySelector('#contact-form')
  contactForm.addEventListener('submit', onSubmit)
}

function onSubmit(event) {
  event.preventDefault()

  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const phone = document.querySelector('#phone').value
  const message = document.querySelector('#message').value

  fetch('https://otterwise-fake-api.herokuapp.com/contact', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      message: message,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => {
      const responseForm = document.querySelector('#response-contact-form')
      if (json.type === 'Sucesso') {
        responseForm.innerText =
          'Recebemos a sua mensagem! Aguarde nosso contato.'
        const contactForm = document.querySelector('#contact-form')
        contactForm.reset()
      } else {
        responseForm.innerText = `Por favor, verifique as suas informações.`
        const idError = json.message
          .replace('O campo ', '')
          .replace(' não pode estar vazio!!', '')
        document.querySelector('#' + idError).classList = 'error'
        setTimeout(
          () => document.querySelector('#' + idError).removeAttribute('class'),
          2000
        )
      }
    })
}
