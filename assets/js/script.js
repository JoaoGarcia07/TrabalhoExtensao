// Sistema EmailJS

const form = document.querySelector('form');

function emailSend(e) {
    e.preventDefault();
    const serviceID = 'service_xduoz2j';
    const templateID = 'template_muyovwo';

    const valor = {
        from_name: document.querySelector('#name').value,
        cidade: document.querySelector('#cidade').value,
        estado: document.querySelector('#estado').value,
        message: document.querySelector('#message').value
    };

    emailjs.send(serviceID, templateID, valor)
    .then(() => {
        console.log('SUCCESS!');
        form.reset();
    })
    .catch(err => console.log('FAILED...', err));
};

form.addEventListener('submit', emailSend);


// POP-UPS DOS PARQUES
document.querySelector("#button-ecoparque").addEventListener("click", () => {
    document.querySelector("#ecoparque").style = "display: block"
}
),
document.querySelector("#close-ecoparque").addEventListener("click", () => {
    document.querySelector("#ecoparque").style = "display: none"
}
),
document.querySelector("#button-bosqueclaro").addEventListener("click", () => {
    document.querySelector("#bosqueclaro").style = "display: block"
}
),
document.querySelector("#close-bosqueclaro").addEventListener("click", () => {
    document.querySelector("#bosqueclaro").style = "display: none"
}
),
document.querySelector("#button-verdesol").addEventListener("click", () => {
    document.querySelector("#verdesol").style = "display: block"
}
),
document.querySelector("#close-verdesol").addEventListener("click", () => {
    document.querySelector("#verdesol").style = "display: none"
}
),
document.querySelector("#button-jardimbrisa").addEventListener("click", () => {
    document.querySelector("#jardimbrisa").style = "display: block"
}
),
document.querySelector("#close-jardimbrisa").addEventListener("click", () => {
    document.querySelector("#jardimbrisa").style = "display: none"
}
),
document.querySelector("#button-parqueluar").addEventListener("click", () => {
    document.querySelector("#parqueluar").style = "display: block"
}
),
document.querySelector("#close-parqueluar").addEventListener("click", () => {
    document.querySelector("#parqueluar").style = "display: none"
}
),
document.querySelector("#button-parqueaurora").addEventListener("click", () => {
    document.querySelector("#parqueaurora").style = "display: block"
}
),
document.querySelector("#close-parqueaurora").addEventListener("click", () => {
    document.querySelector("#parqueaurora").style = "display: none"
}
)