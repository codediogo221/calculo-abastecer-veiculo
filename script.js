document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const alcoolInput = document.getElementById("ialcool");
    const gasolinaInput = document.getElementById("igasolina");
    
    if (alcoolInput.value.trim() === "" || gasolinaInput.value.trim() === "") {
        alert("Por favor, preencha ambos os campos.");
        return;
    }
    
    const alcoolPrice = parseFloat(alcoolInput.value.replace(',', '.'));
    const gasolinaPrice = parseFloat(gasolinaInput.value.replace(',', '.'));
    
    const resultadoDiv = document.getElementById("resultado");
    const resultadoC = alcoolPrice / gasolinaPrice;
    
    if (resultadoC < 0.7) {
        resultadoDiv.textContent = `Recomendação: Escolher Álcool (R$ ${alcoolPrice.toFixed(2).replace('.', ',')} por litro).`;
    } else {
        resultadoDiv.textContent = `Recomendação: Escolher Gasolina (R$ ${gasolinaPrice.toFixed(2).replace('.', ',')} por litro).`;
    }
});

function clearInputValues() {
    const alcoolInput = document.getElementById("ialcool");
    const gasolinaInput = document.getElementById("igasolina");

    alcoolInput.value = "";
    gasolinaInput.value = "";
    
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "";
}