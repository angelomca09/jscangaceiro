// Encontra os campos "input"
var campos = [
  document.querySelector("#data"),
  document.querySelector("#valor"),
  document.querySelector("#quantidade"),
];

// Encontra o elemento "tbody" do documento
var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function (event) {
    // Previne Emissão de Formulário
    event.preventDefault();

    // Cria elemento "tr"
    var tr = document.createElement("tr");

    // Para cada campo, cria um elemento "td" e o adiciona em "tr"
    campos.forEach(campo => {
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    // Cria e Adiciona o volume em "tr"
    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    // limpa campos
    campos[0].value = "";
    campos[1].value = 0;
    campos[0].value = 1;

    campos[0].focus();
});
