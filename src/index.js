const readline = require('readline');
const { calculateNetSalary, calculateTax } = require('./services/salaryService');

// Configura a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== 🚀 Calculadora Salarial (Node.js) ===");

// Pergunta 1: Salário Bruto
rl.question('Digite o valor bruto do salário: R$ ', (salaryInput) => {
    const grossSalary = parseFloat(salaryInput);

    if (isNaN(grossSalary)) {
        console.error("❌ Valor inválido! Digite apenas números.");
        rl.close();
        return;
    }

    // Pergunta 2: Benefícios
    rl.question('Digite o valor dos benefícios: R$ ', (benefitsInput) => {
        const benefits = parseFloat(benefitsInput);

        if (isNaN(benefits)) {
            console.error("❌ Valor inválido!");
            rl.close();
            return;
        }

        // Processamento
        const tax = calculateTax(grossSalary);
        const netSalary = calculateNetSalary(grossSalary, benefits);

        // Saída Formatada (Intl.NumberFormat para moeda BRL)
        const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

        console.log("\n--- 📊 Resultado ---");
        console.log(`Salário Bruto: ${formatter.format(grossSalary)}`);
        console.log(`Imposto:      -${formatter.format(tax)}`);
        console.log(`Benefícios:   +${formatter.format(benefits)}`);
        console.log("--------------------");
        console.log(`💰 Líquido:    ${formatter.format(netSalary)}`);

        rl.close();
    });
});