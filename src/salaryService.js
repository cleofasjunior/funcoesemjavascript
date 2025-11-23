/**
 * Calcula o imposto baseado no salário bruto.
 * Regra de Negócio:
 * - 0 a 1100: 5%
 * - 1100.01 a 2500: 10%
 * - Maior que 2500: 15%
 * * @param {number} grossSalary - Salário bruto
 * @returns {number} Valor do imposto
 */
function calculateTax(grossSalary) {
    let taxRate;

    if (grossSalary >= 0 && grossSalary <= 1100) {
        taxRate = 0.05;
    } else if (grossSalary > 1100 && grossSalary <= 2500) {
        taxRate = 0.10;
    } else {
        taxRate = 0.15;
    }

    return grossSalary * taxRate;
}

/**
 * Calcula o salário líquido final.
 * @param {number} grossSalary 
 * @param {number} benefits 
 * @returns {number}
 */
function calculateNetSalary(grossSalary, benefits) {
    const tax = calculateTax(grossSalary);
    return (grossSalary - tax) + benefits;
}

// Exporta as funções para serem usadas em outros arquivos (Módulo CommonJS)
module.exports = { calculateNetSalary, calculateTax };