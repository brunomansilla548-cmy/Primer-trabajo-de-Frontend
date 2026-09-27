const formulario = document.querySelector("#formularioGasto");

const monto = document.querySelector("#monto");
const detalle = document.querySelector("#detalle");
const categoria = document.querySelector("#categoria");

const listaGastos = document.querySelector("#listaGastos");
const totalGastos = document.querySelector("#totalGastos");

let gastos = [];


// EVENTO DEL FORMULARIO

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // VALIDACIÓN

    if (
        monto.value === "" ||
        detalle.value.trim() === "" ||
        categoria.value === ""
    ) {
        alert("Por favor, completá todos los campos.");
        return;
    }


    // CREAR GASTO

    const gasto = {
        monto: Number(monto.value),
        detalle: detalle.value,
        categoria: categoria.value
    };


    gastos.push(gasto);

    mostrarGastos();

    formulario.reset();
});


// MOSTRAR GASTOS

function mostrarGastos() {

    listaGastos.innerHTML = "";

    let total = 0;


    gastos.forEach(function(gasto, indice) {

        total += gasto.monto;

        const li = document.createElement("li");

        li.classList.add("gasto");

        li.innerHTML = `
            <div class="info-gasto">
                <strong>${gasto.detalle}</strong>
                <span class="categoria">${gasto.categoria}</span>
                <span>$${gasto.monto}</span>
            </div>

            <button 
                class="eliminar"
                onclick="eliminarGasto(${indice})">
                Eliminar
            </button>
        `;

        listaGastos.appendChild(li);
    });


    totalGastos.textContent = `$${total}`;
}


// ELIMINAR GASTO

function eliminarGasto(indice) {

    gastos.splice(indice, 1);

    mostrarGastos();
}