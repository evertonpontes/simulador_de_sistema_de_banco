# simulador de sistema de banco

Projeto feito em sala, para simular um sistema de banco. 

## Descrição do projeto

> O projeto da disciplina consiste na implementação de um **simulador de um sistema de banco**. Esse banco fictício deve possuir os quatro tipos básicos de contas abaixo:

* **Conta corrente :**
    - Debita uma taxa de 2% no saldo do usuário e permite saque diário.
* **Conta poupança :**
    - Atribui um lucro de 1% no saldo do usuário e permite saque semanal.
* **Investimento simples :**
    - Atribui um lucro de 3% no saldo do usuário, mas apenas permite saque mensal.
* **Investimento arriscado :**
    - Atribui um lucro de 6% ao saldo do usuário, mas apenas permite saque semestral.

> O processo de desenvolvimento desse simulador de sistema de banco ocorrerá através da implementação dos seguintes tópicos:

1. Implemente quatro mecanismos de recebimento de dados utilizando o comando `prompt`. O primeiro mecanismo deve receber o nome do cliente. O segundo
mecanismo deve receber o saldo base que esse usuário vai ter para simular. O terceiro mecanismo deve receber o tipo de saque que o usuário necessita fazer,
sendo eles: **(a) diário**, **(b) semanal**, **(c) mensal** e **(d) semestral**. O quarto mecanismo deve receber a quantidade de meses que deverão ser simulados.

2. Apresente na tela usando o comando `console.log()` e as técnicas de manipulação de dados a seguinte mensagem: 
    ``` sh
    “<Nome_do_usuário> possui <saldo> R$ e deseja realizar saques no período <tipo_saque> durante <n> meses”
    ```
    Complete os espaços em <> utilizando as variáveis recebidas no tópico 1.

3. Crie uma função chamada `contaCorrente()`, que recebe dois parâmetros: **(a) saldo** e **(b) meses**. Essa função, deve debitar 1% de juros no saldo do usuário para cada mês especificado. Realize essa diminuição de saldo, utilizando um for. Essa função deverá retornar o saldo do usuário após o cálculo de juros.

4. Crie uma função chamada ``contaPoupanca()`` que recebe dois parâmetros: **(a) saldo** e **(b) meses**. Essa função, deve atribuir um lucro de 1% de juros no saldo do usuário para cada mês especificado. Realize a adição desse saldo, utilizando um for. Essa função, deve retornar o saldo do usuário após o cálculo.

5. Crie uma função chamada ``investimentoSimples()`` que recebe dois parâmetros: **(a) saldo** e **(b) meses**. Essa função, deve atribuir um lucro de 3% de juros no
saldo do usuário para cada mês especificado. Realize a adição desse saldo, utilizando um for. Essa função, deve retornar o saldo do usuário após o cálculo.

6. Crie uma função chamada ``investimentoArriscado()`` que recebe dois parâmetros: **(a) saldo** e **(b) meses**. Essa função, deve atribuir um lucro de 6% de juros no saldo do usuário para cada mês especificado. Realize a adição desse saldo, utilizando um for. Essa função, deve retornar o saldo do usuário após o cálculo.

7. Utilizando o comando **switch**, crie casos, que redirecionam para as funções ``contaCorrente()``, ``contaPoupança()``, ``investimentoSimples()`` e ``investimentoArriscado()``. Esses casos devem se basear no tipo de saque que o usuário digitou no início do código (Tópico 1). Lembrando que os tipos de saque são: (a) diário, (b) semanal, (c) mensal e (d) semestral. No início do documento existe uma descrição que associa o tipo da conta a cada tipo de saque.

8. Após a execução do tópico 7, apresente na tela a seguinte mensagem: 
    ``` sh
    “O usuário <Nome usuário> terá o valor de <saldo novo> ao final de <n> meses”
    ```
    Utilize as técnicas de manipulação de dados para a implementação dessa frase. O item <saldo novo> deve ser o novo valor recebido através da implementação
    de um dos tipos de conta.

9. Após receber as variáveis requeridas no tópico 1, realize a seguinte condição utilizando um **if e else** se o saldo for menor do que 0, apresente na tela a seguinte mensagem: 
    ```sh
    “Informe um saldo maior do que 0”. 
    ```
    Se o saldo já for maior do que 0, então, direcione o código para o switch discutido no tópico 7.