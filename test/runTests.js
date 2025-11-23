const assert = require('assert');
const path = require('path');

// Importa o módulo a ser testado
const { calculateTax, calculateNetSalary } = require(path.join(__dirname, '..', 'src', 'services', 'src', 'services', 'salaryService'));

function run() {
    console.log('Executando testes...');

    // Testes para calculateTax
    assert.strictEqual(calculateTax(1100), 1100 * 0.05, 'Imposto para 1100 deve ser 5%');
    assert.strictEqual(calculateTax(1100.01), 1100.01 * 0.10, 'Imposto para 1100.01 deve ser 10%');
    assert.strictEqual(calculateTax(2500), 2500 * 0.10, 'Imposto para 2500 deve ser 10%');
    assert.strictEqual(calculateTax(2500.01), 2500.01 * 0.15, 'Imposto acima de 2500 deve ser 15%');

    // Testes para calculateNetSalary
    const net1 = calculateNetSalary(2000, 200); // 10% imposto -> 200 de imposto
    assert.strictEqual(net1, 2000 - (2000 * 0.10) + 200, 'Salário líquido para 2000 + 200 benefícios');

    const net2 = calculateNetSalary(3000, 100); // 15% imposto -> 450 de imposto
    assert.strictEqual(net2, 3000 - (3000 * 0.15) + 100, 'Salário líquido para 3000 + 100 benefícios');

    console.log('✅ Todos os testes passaram.');
}

try {
    run();
    process.exit(0);
} catch (err) {
    console.error('❌ Testes falharam:', err.message);
    console.error(err);
    process.exit(1);
}
