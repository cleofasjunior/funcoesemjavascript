# 🟢 Calculadora Salarial em Node.js

> Resolução de desafio de lógica utilizando JavaScript moderno e modularização.

Este projeto demonstra a aplicação de lógica de programação para resolver problemas financeiros, implementado em JavaScript para execução no ambiente **Node.js**.

## 🎯 Regras de Negócio
O cálculo do salário segue a fórmula:
`Salário Líquido = (Bruto - Imposto) + Benefícios`

| Faixa Salarial | Imposto |
| :--- | :---: |
| Até R$ 1.100,00 | 5% |
| De R$ 1.100,01 a R$ 2.500,00 | 10% |
| Acima de R$ 2.500,00 | 15% |

## 🛠️ Estrutura do Projeto
O código foi organizado seguindo boas práticas de **Separação de Responsabilidades**:
* `src/index.js`: Interface de linha de comando (CLI) e interação com o usuário.
* `src/services/salaryService.js`: Lógica pura de cálculo (testável e reutilizável).

## 🚀 Como Rodar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone o repositório:
   ```bash
   git clone [https://github.com/cleofasjunior/funcoesemjavascript.git](https://github.com/cleofasjunior/funcoesemjavascript.git)
3. Execute o projeto:
   ```bash
   node src/index.js

Desenvolvido por Cleófas Júnior