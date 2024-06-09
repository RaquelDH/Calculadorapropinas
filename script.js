// script.js
function calcularPropina() {
    const total = parseFloat(document.getElementById('total').value);
    const percentage = parseInt(document.getElementById('percentage').value);
    
    if (!isNaN(total) && !isNaN(percentage)) {
        const propina = total * (percentage / 100);
        const totalConPropina = total + propina;
        document.getElementById('result').innerHTML = `
            <p>Total de la cuenta: €${total.toFixed(2)}</p>
            <p>Propina (${percentage}%): €${propina.toFixed(2)}</p>
            <h2>Total a Pagar: €${totalConPropina.toFixed(2)}</h2>
        `;
    } else {
        document.getElementById('result').innerHTML = '<p>Por favor, ingrese números válidos.</p>';
    }
}
