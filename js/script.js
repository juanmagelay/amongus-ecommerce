
// $('.btn-enviar').click(function(){

//     let errores = '';

//     //Validando nombre

//     if($('.input-nombre').val() == ''){

//         errores += '<p>Escriba un nombre</p>';
//     }

//     if($('.input-email').val() == ''){

//         errores += '<p>Escriba un correo</p>';
//     }

//     if($('.input-mensaje').val() == ''){

//         errores += '<p>Escriba un mensaje</p>';
//     }


// });

// const $form = document.querySelector('.form');

// $form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {

//     event.preventDefault()
//     const form = new FormData(this)
//     console.log(form.get('name'))
// }

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    }) 
    if (response.ok) {
        this.reset()
        alert('Gracias por contactar')
    }    
}




