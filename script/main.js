let clientNome = prompt('Digite seu nome de usuário.');
let saldoBase = prompt('Digite o seu saldo.');
let saque = prompt('Digite o tipo de saque que deseja realizar. Ex.: "diário", "semanal", "mensal" ou "semestral".');
let meses = prompt('Digite a quantidade de meses.');

tipoSaque = ['diário', 'semanal', 'mensal', 'semestral'];

console.log(clientNome + ' possui ' + saldoBase + 
    ' R$ e deseja realizar saques no período ' + saque + 
    ' durante ' + meses + '.');

function contaCorrente(a,b) {
    let saldoF = Number(a);
    for (let index = 0; index < b; index++) {
        saldoF = saldoF - (saldoF * .01)
    }
    return saldoF.toFixed(2);
};

function contaPoupanca(a,b) {
    let saldoF = Number(a);
    for (let index = 0; index < b; index++) {
        saldoF = saldoF + (saldoF * .01)
    }
    return saldoF.toFixed(2);
};

function investimentoSimples(a,b) {
    let saldoF = Number(a);
    for (let index = 0; index < b; index++) {
        saldoF = saldoF + (saldoF * .03)
    }
    return saldoF.toFixed(2);
};

function investimentoArriscado(a,b) {
    let saldoF = Number(a);
    for (let index = 0; index < b; index++) {
        saldoF = saldoF + (saldoF * .06)
    }
    return saldoF.toFixed(2);
};

let saldoNovo = 0;

function saldoValidacao(saldo) {
    if (saldo == 0 | saldo == null) {
        alert("Informe um saldo maior do que 0")
        saldoBase = prompt('Digite o seu saldo.')
        saldoValidacao(saldoBase)

    }else{
        
        switch (saque) {
            case tipoSaque[0]:
                saldoNovo = contaCorrente(saldoBase, meses)
                break;
        
            case tipoSaque[1]:
                saldoNovo = contaPoupanca(saldoBase, meses)
                break;
        
            case tipoSaque[2]:
                saldoNovo = investimentoSimples(saldoBase, meses)
                break;
        
            case tipoSaque[3]:
                saldoNovo = investimentoArriscado(saldoBase, meses)
                break;
        
            default:
                alert('ERRO! Saque não encontrado.')
                saque = prompt('Digite o tipo de saque que deseja realizar. Ex.: "diário", "semanal", "mensal" ou "semestral".');
                saldoValidacao(saldo)
        
        };
    };
};

let saldoValidado = saldoValidacao(saldoBase);

if (saldoNovo > 0) {
    console.log("O usuário " + clientNome + " terá o valor de " + saldoNovo + 
    " ao final de " + meses + " meses.")
};
