//Alerta personalizada de formulario enviado
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
        Swal.fire('Gracias por contactar'
          )
    }    
}

// Esconder título en mobile al clickear el menú hamburguesa
function hideTitle(){
    let title = document.getElementById('title-huron');
    if(title.style.display != 'none'){
        title.style.display = 'none';
    }else{
        title.style.display = 'inline-block';
    }
}
