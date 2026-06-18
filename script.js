const divContainer = document.querySelector(".container");

function pedirTexto(mensagem) {
  const texto = prompt(mensagem);

  if (texto === null || texto.trim() === "") {
    alert("Entrada inválida.");
    return null;
  }

  return texto.trim();
}

function pedirNumero(mensagem) {
  const texto = pedirTexto(mensagem);
  if (texto === null) return null;

  const numero = Number(texto.replace(",", "."));

  if (!Number.isFinite(numero)) {
    alert("Digite um número válido.");
    return null;
  }

  return numero;
}

function pedirInteiro(mensagem) {
  const numero = pedirNumero(mensagem);
  if (numero === null) return null;

  if (!Number.isInteger(numero)) {
    alert("Digite um número inteiro.");
    return null;
  }

  return numero;
}

function pedirNota(mensagem) {
  const nota = pedirNumero(mensagem);
  if (nota === null) return null;

  if (nota < 0 || nota > 10) {
    alert("A nota precisa ficar entre 0 e 10.");
    return null;
  }

  return nota;
}

function pedirListaNumeros(mensagem) {
  const texto = pedirTexto(mensagem);
  if (texto === null) return null;

  const partes = texto.split(",").map((item) => item.trim());

  if (partes.some((item) => item === "")) {
    alert("Digite apenas números separados por vírgula.");
    return null;
  }

  const numeros = partes.map((item) => Number(item));

  if (numeros.some((numero) => !Number.isFinite(numero))) {
    alert("Digite apenas números separados por vírgula.");
    return null;
  }

  return numeros;
}

function contarVogais(texto) {
  return (texto.match(/[aeiouáéíóúâêôãõà]/gi) || []).length;
}

function ehPrimo(numero) {
  if (!Number.isInteger(numero) || numero <= 1) return false;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }

  return true;
}

const btns = [
  {
    nome: "Ex. 1 - Antecessor",
    func: () => {
      // tava somando 1, ai dava o sucessor. coloquei -1 e tratei entrada vazia.
      const valor = pedirNumero("Digite um número:");
      if (valor === null) return;

      alert(`O antecessor de ${valor} é ${valor - 1}`);
    },
  },
  {
    nome: "Ex. 2 - Área Retângulo",
    func: () => {
      // faltava conferir se base e altura eram numeros validos e maiores que zero.
      const base = pedirNumero("Digite a base:");
      if (base === null) return;

      const altura = pedirNumero("Digite a altura:");
      if (altura === null) return;

      if (base <= 0 || altura <= 0) {
        alert("Base e altura precisam ser maiores que zero.");
        return;
      }

      alert(`A área é ${base * altura}`);
    },
  },
  {
    nome: "Ex. 3 - Maior que 10",
    func: () => {
      // o 10 tava entrando como maior tambem, mas maior que 10 é só acima dele.
      const valor = pedirNumero("Digite um número:");
      if (valor === null) return;

      alert(valor > 10 ? "É MAIOR QUE 10!" : "NÃO É MAIOR QUE 10!");
    },
  },
  {
    nome: "Ex. 4 - Positivo ou Negativo",
    func: () => {
      // zero tava caindo como negativo. separei esse caso pra nao dar resposta errada.
      const valor = pedirNumero("Digite um número:");
      if (valor === null) return;

      if (valor > 0) {
        alert("Positivo");
      } else if (valor < 0) {
        alert("Negativo");
      } else {
        alert("Zero não é positivo nem negativo.");
      }
    },
  },
  {
    nome: "Ex. 5 - Pode Votar?",
    func: () => {
      // dava pra colocar ano nada a ver e a idade ficava estranha, então conferi os anos.
      const anoAtual = pedirInteiro("Ano atual:");
      if (anoAtual === null) return;

      const nascimento = pedirInteiro("Ano de nascimento:");
      if (nascimento === null) return;

      if (anoAtual <= 0 || nascimento <= 0 || nascimento > anoAtual) {
        alert("Confira os anos digitados.");
        return;
      }

      const idade = anoAtual - nascimento;
      alert(idade >= 16 ? "Pode votar." : "Não pode votar.");
    },
  },
  {
    nome: "Ex. 6 - Soma",
    func: () => {
      // se digitasse letra a soma virava NaN, agora ele só soma se for numero.
      const a = pedirNumero("Digite o 1º número:");
      if (a === null) return;

      const b = pedirNumero("Digite o 2º número:");
      if (b === null) return;

      alert(`Soma: ${a + b}`);
    },
  },
  {
    nome: "Ex. 7 - Divisão",
    func: () => {
      // a condição do zero tava ao contrario, por isso aparecia Infinity na tela.
      const a = pedirNumero("Digite o dividendo:");
      if (a === null) return;

      const b = pedirNumero("Digite o divisor:");
      if (b === null) return;

      alert(b === 0 ? "Divisão por zero!" : `Resultado: ${a / b}`);
    },
  },
  {
    nome: "Ex. 8 - Subtração",
    func: () => {
      // aqui a conta tava ok, mas faltava validar antes de subtrair.
      const a = pedirNumero("Digite o primeiro número:");
      if (a === null) return;

      const b = pedirNumero("Digite o segundo número:");
      if (b === null) return;

      alert(`Resultado: ${a - b}`);
    },
  },
  {
    nome: "Ex. 9 - Multiplicação",
    func: () => {
      // era pra multiplicar, mas tinha uma divisao ali no meio.
      const a = pedirNumero("Digite o primeiro número:");
      if (a === null) return;

      const b = pedirNumero("Digite o segundo número:");
      if (b === null) return;

      alert(`Resultado: ${a * b}`);
    },
  },
  {
    nome: "Ex. 10 - Maior entre 2",
    func: () => {
      // quando era diferente ele dizia que o primeiro era maior sempre, arrumei a comparação.
      const a = pedirNumero("Digite o primeiro número:");
      if (a === null) return;

      const b = pedirNumero("Digite o segundo número:");
      if (b === null) return;

      if (a === b) {
        alert(`${a} e ${b} são iguais`);
      } else {
        alert(`${Math.max(a, b)} é maior`);
      }
    },
  },
  {
    nome: "Ex. 11 - 1 a 10",
    func: () => {
      // o for parava no 9, coloquei pra ir ate o 10.
      let resultado = "";

      for (let i = 1; i <= 10; i++) resultado += i + " ";

      alert(resultado.trim());
    },
  },
  {
    nome: "Ex. 12 - Soma 1 a 100",
    func: () => {
      // começava no 0 sem precisar, deixei do 1 ate 100 igual o enunciado.
      let soma = 0;

      for (let i = 1; i <= 100; i++) soma += i;

      alert(`Soma: ${soma}`);
    },
  },
  {
    nome: "Ex. 13 - 100 a 1",
    func: () => {
      // tava começando no 101, ai sobrava um numero. corrigi pra 100.
      let resultado = "";

      for (let i = 100; i >= 1; i--) resultado += i + " ";

      alert(resultado.trim());
    },
  },
  {
    nome: "Ex. 14 - Pares até 50",
    func: () => {
      // esse nao tinha bug pesado, só deixei a saida mais de boa de ler.
      const pares = [];

      for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) pares.push(i);
      }

      alert(pares.join(", "));
    },
  },
  {
    nome: "Ex. 15 - Múltiplos de 5",
    func: () => {
      // aqui tava tranquilo, só mantive o intervalo certinho ate 100.
      const multiplos = [];

      for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) multiplos.push(i);
      }

      alert(multiplos.join(", "));
    },
  },
  {
    nome: "Ex. 16 - Quantos Pares (10 nums)",
    func: () => {
      // tava contando impar no lugar de par, troquei o resto pra pegar par.
      let pares = 0;

      for (let i = 0; i < 10; i++) {
        const num = pedirInteiro(`Digite o número ${i + 1}:`);
        if (num === null) return;
        if (num % 2 === 0) pares++;
      }

      alert(`Quantidade de pares: ${pares}`);
    },
  },
  {
    nome: "Ex. 17 - Maior de 5 números",
    func: () => {
      // começava o maior em 0, ai com numeros negativos dava errado.
      let maior = null;

      for (let i = 0; i < 5; i++) {
        const num = pedirNumero(`Digite o número ${i + 1}:`);
        if (num === null) return;
        if (maior === null || num > maior) maior = num;
      }

      alert(`Maior número: ${maior}`);
    },
  },
  {
    nome: "Ex. 18 - Média de 5 Notas",
    func: () => {
      // pedia 6 notas e dividia por 5, ai a media ficava nada a ver.
      let soma = 0;

      for (let i = 0; i < 5; i++) {
        const nota = pedirNota(`Digite a nota ${i + 1}:`);
        if (nota === null) return;
        soma += nota;
      }

      alert(`Média: ${(soma / 5).toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 19 - Ordem Crescente?",
    func: () => {
      // a ordem tava certa, mas faltava barrar texto ou campo vazio.
      const nums = [];

      for (let i = 0; i < 5; i++) {
        const numero = pedirNumero(`Digite o número ${i + 1}:`);
        if (numero === null) return;
        nums.push(numero);
      }

      const crescente = nums.every((val, i, arr) => i === 0 || arr[i - 1] < val);
      alert(crescente ? "Está em ordem crescente." : "Não está em ordem crescente.");
    },
  },
  {
    nome: "Ex. 20 - Soma até 0",
    func: () => {
      // se colocasse letra a soma quebrava. agora só aceita numero e 0 para.
      let soma = 0;

      while (true) {
        const num = pedirNumero("Digite um número (0 para parar):");
        if (num === null) return;
        if (num === 0) break;
        soma += num;
      }

      alert(`Soma total: ${soma}`);
    },
  },
  {
    nome: "Ex. 21 - Nomes com A",
    func: () => {
      // o exercicio era com A, mas o filtro tava procurando B e pedia nome a mais.
      const nomes = [];

      for (let i = 0; i < 5; i++) {
        const nome = pedirTexto(`Digite o nome ${i + 1}:`);
        if (nome === null) return;
        if (nome.toLowerCase().startsWith("a")) nomes.push(nome);
      }

      alert(`Nomes com A: ${nomes.join(" - ")}`);
    },
  },
  {
    nome: "Ex. 22 - Contar vogais",
    func: () => {
      // se nao tivesse vogal dava erro no length, arrumei pra voltar 0.
      const texto = pedirTexto("Digite um texto:");
      if (texto === null) return;

      alert(`Quantidade de vogais: ${contarVogais(texto)}`);
    },
  },
  {
    nome: "Ex. 23 - Número primo",
    func: () => {
      // a regra de primo tava invertida, fiz a checagem basica de novo.
      const num = pedirInteiro("Digite um número:");
      if (num === null) return;

      alert(ehPrimo(num) ? "É primo" : "Não é primo");
    },
  },
  {
    nome: "Ex. 24 - Inverter nome",
    func: () => {
      // ele só repetia o nome normal, agora inverte as letras mesmo.
      const nome = pedirTexto("Digite seu nome:");
      if (nome === null) return;

      alert(`Nome invertido: ${nome.split("").reverse().join("")}`);
    },
  },
  {
    nome: "Ex. 25 - Tabuada",
    func: () => {
      // tava com sinal de soma na tabuada e parava no 9, corrigi isso.
      const num = pedirNumero("Digite um número para ver a tabuada:");
      if (num === null) return;

      let resultado = "";

      for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
      }

      alert(resultado);
    },
  },
  {
    nome: "Ex. 26 - Média enquanto positivo",
    func: () => {
      // o contador começava em 1 e bagunçava a media, agora conta só o que foi digitado.
      let soma = 0;
      let cont = 0;

      while (true) {
        const num = pedirNumero("Digite um número positivo (negativo para parar):");
        if (num === null) return;
        if (num < 0) break;

        soma += num;
        cont++;
      }

      alert(cont ? `Média: ${(soma / cont).toFixed(1)}` : "Nenhum número positivo digitado.");
    },
  },
  {
    nome: "Ex. 27 - Encontrar número em array",
    func: () => {
      // o numero vinha como texto, por isso o includes nao achava o valor.
      const lista = [3, 7, 9, 12, 15];
      const busca = pedirNumero("Digite um número para buscar:");
      if (busca === null) return;

      alert(lista.includes(busca) ? "Encontrado" : "Não encontrado");
    },
  },
  {
    nome: "Ex. 28 - Fatorial",
    func: () => {
      // o loop parava antes do n, ai o fatorial ficava menor.
      const n = pedirInteiro("Digite um número para calcular o fatorial:");
      if (n === null) return;

      if (n < 0) {
        alert("Fatorial não existe para número negativo.");
        return;
      }

      let fat = 1;
      for (let i = 2; i <= n; i++) fat *= i;

      alert(`Fatorial de ${n} é ${fat}`);
    },
  },
  {
    nome: "Ex. 29 - Converter temperatura",
    func: () => {
      // a formula tava com 5/9, mas Celsius pra Fahrenheit usa 9/5.
      const c = pedirNumero("Digite a temperatura em Celsius:");
      if (c === null) return;

      const f = (c * 9) / 5 + 32;
      alert(`${c}°C = ${f.toFixed(2)}°F`);
    },
  },
  {
    nome: "Ex. 30 - Dias da semana",
    func: () => {
      // usava n + 1 e pulava um dia na lista.
      const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
      const n = pedirInteiro("Digite um número de 0 a 6:");
      if (n === null) return;

      alert(dias[n] ?? "Dia inválido");
    },
  },
  {
    nome: "Ex. 31 - Palíndromo",
    func: () => {
      // comparava minusculo com maiusculo, ai quase nunca dava palindromo.
      const palavra = pedirTexto("Digite uma palavra:");
      if (palavra === null) return;

      const normalizada = palavra.toLowerCase();
      const invertida = normalizada.split("").reverse().join("");
      alert(normalizada === invertida ? "É um palíndromo" : "Não é um palíndromo");
    },
  },
  {
    nome: "Ex. 32 - Soma de Pares",
    func: () => {
      // era soma dos pares, mas tava somando os impares.
      let soma = 0;

      for (let i = 0; i < 10; i++) {
        const num = pedirInteiro(`Número ${i + 1}:`);
        if (num === null) return;
        if (num % 2 === 0) soma += num;
      }

      alert(`Soma dos pares: ${soma}`);
    },
  },
  {
    nome: "Ex. 33 - Média Idades",
    func: () => {
      // somava 5 idades e dividia por 4, por isso a media saia errada.
      let soma = 0;

      for (let i = 0; i < 5; i++) {
        const idade = pedirInteiro(`Idade ${i + 1}:`);
        if (idade === null) return;
        if (idade < 0) {
          alert("Idade não pode ser negativa.");
          return;
        }
        soma += idade;
      }

      alert(`Média das idades: ${(soma / 5).toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 34 - Soma até negativo",
    func: () => {
      // o while começava em 0 e nem rodava, então a soma sempre ficava zero.
      let soma = 0;

      while (true) {
        const n = pedirNumero("Digite um número (negativo para parar):");
        if (n === null) return;
        if (n < 0) break;
        soma += n;
      }

      alert(`Soma total: ${soma}`);
    },
  },
  {
    nome: "Ex. 35 - Contar palavras",
    func: () => {
      // tirava 1 do total de palavras e espaço extra atrapalhava.
      const frase = pedirTexto("Digite uma frase:");
      if (frase === null) return;

      const palavras = frase.trim().split(/\s+/);
      alert(`Número de palavras: ${palavras.length}`);
    },
  },
  {
    nome: "Ex. 36 - Notas >= 7",
    func: () => {
      // dizia >= 7, mas o if só pegava maior que 7.
      let count = 0;

      for (let i = 0; i < 6; i++) {
        const nota = pedirNota(`Nota ${i + 1}:`);
        if (nota === null) return;
        if (nota >= 7) count++;
      }

      alert(`${count} notas são maiores ou iguais a 7`);
    },
  },
  {
    nome: "Ex. 37 - Multiplicação acumulada",
    func: () => {
      // multiplicação começando em 0 sempre fica 0, mudei pra começar em 1.
      let total = 1;

      for (let i = 0; i < 4; i++) {
        const numero = pedirNumero(`Número ${i + 1}:`);
        if (numero === null) return;
        total *= numero;
      }

      alert(`Multiplicação total: ${total}`);
    },
  },
  {
    nome: "Ex. 38 - Par ou ímpar",
    func: () => {
      // tava usando resto por 3, mas par/impar é com 2.
      const n = pedirInteiro("Digite um número:");
      if (n === null) return;

      alert(n % 2 === 0 ? "Par" : "Ímpar");
    },
  },
  {
    nome: "Ex. 39 - Converter para maiúsculas",
    func: () => {
      // pedia maiuscula, mas o codigo transformava pra minuscula.
      const texto = pedirTexto("Digite um texto:");
      if (texto === null) return;

      alert(texto.toUpperCase());
    },
  },
  {
    nome: "Ex. 40 - Contar letras",
    func: () => {
      // ele contava as partes separadas por espaço, nao as letras.
      const palavra = pedirTexto("Digite uma palavra:");
      if (palavra === null) return;

      alert(`Quantidade de letras: ${palavra.replace(/\s/g, "").length}`);
    },
  },
  {
    nome: "Ex. 41 - Tabuada",
    func: () => {
      // dependia do JS converter sozinho, coloquei validação antes.
      const n = pedirNumero("Digite um número para ver sua tabuada:");
      if (n === null) return;

      let resultado = "";

      for (let i = 1; i <= 10; i++) {
        resultado += `${n} x ${i} = ${n * i}\n`;
      }

      alert(resultado);
    },
  },
  {
    nome: "Ex. 42 - Fatorial",
    func: () => {
      // a conta tava boa, mas aceitava negativo e numero quebrado.
      const n = pedirInteiro("Digite um número para calcular o fatorial:");
      if (n === null) return;

      if (n < 0) {
        alert("Fatorial não existe para número negativo.");
        return;
      }

      let fat = 1;
      for (let i = 2; i <= n; i++) fat *= i;

      alert(`Fatorial de ${n} é ${fat}`);
    },
  },
  {
    nome: "Ex. 43 - Nomes com A",
    func: () => {
      // só pegava a minusculo, agora tanto faz A ou a.
      const texto = pedirTexto("Digite nomes separados por vírgula:");
      if (texto === null) return;

      const nomes = texto.split(",").map((nome) => nome.trim()).filter(Boolean);
      const filtrados = nomes.filter((nome) => nome.toLowerCase().startsWith("a"));

      alert(`Nomes que começam com A: ${filtrados.join(", ")}`);
    },
  },
  {
    nome: "Ex. 44 - Média até 0",
    func: () => {
      // o 0 vinha como texto e nao parava, e a soma podia virar texto tambem.
      let soma = 0;
      let count = 0;

      while (true) {
        const n = pedirNumero("Digite um número (0 para parar):");
        if (n === null) return;
        if (n === 0) break;

        soma += n;
        count++;
      }

      alert(count ? `Média: ${(soma / count).toFixed(2)}` : "Nenhum número válido");
    },
  },
  {
    nome: "Ex. 45 - Contar vogais",
    func: () => {
      // sem vogal o match dava null, então tratei pra contar zero.
      const texto = pedirTexto("Digite um texto:");
      if (texto === null) return;

      alert(`Quantidade de vogais: ${contarVogais(texto)}`);
    },
  },
  {
    nome: "Ex. 46 - Nomes invertidos",
    func: () => {
      // split sem passar espaço nao separava o nome completo.
      const nome = pedirTexto("Digite seu nome completo:");
      if (nome === null) return;

      const invertido = nome.split(/\s+/).reverse().join(" ");
      alert(`Nome invertido: ${invertido}`);
    },
  },
  {
    nome: "Ex. 47 - Soma array fixo",
    func: () => {
      // a soma tava ok, só botei o 0 no reduce pra nao depender do primeiro item.
      const numeros = [1, 2, 3, 4, 5];
      const soma = numeros.reduce((acc, n) => acc + n, 0);

      alert(`Soma: ${soma}`);
    },
  },
  {
    nome: "Ex. 48 - Procurar em array",
    func: () => {
      // a busca ficava minuscula e a lista nao, ai nao batia.
      const nomes = ["Ana", "João", "Pedro", "Maria"];
      const busca = pedirTexto("Quem você quer procurar?");
      if (busca === null) return;

      const encontrou = nomes.some((nome) => nome.toLowerCase() === busca.toLowerCase());
      alert(encontrou ? `${busca} está na lista` : `${busca} não está na lista`);
    },
  },
  {
    nome: "Ex. 49 - Maior número",
    func: () => {
      // Math.max ate converte, mas se entrar letra ja estraga o resultado.
      const numeros = pedirListaNumeros("Digite números separados por vírgula:");
      if (numeros === null) return;

      alert(`Maior número: ${Math.max(...numeros)}`);
    },
  },
  {
    nome: "Ex. 50 - Números ímpares",
    func: () => {
      // o prompt volta texto, então converti antes de testar se é impar.
      const impares = [];

      for (let i = 0; i < 5; i++) {
        const n = pedirInteiro("Digite um número:");
        if (n === null) return;
        if (n % 2 !== 0) impares.push(n);
      }

      alert(`Ímpares digitados: ${impares.join(", ")}`);
    },
  },
  {
    nome: "Ex. 51 - Número Primo",
    func: () => {
      // numero menor que 2 tava passando como primo, corrigi a regra.
      const n = pedirInteiro("Digite um número:");
      if (n === null) return;

      alert(ehPrimo(n) ? "É primo" : "Não é primo");
    },
  },
  {
    nome: "Ex. 52 - Média Ponderada",
    func: () => {
      // tava contando com conversao automatica do JS, melhor validar as notas.
      const n1 = pedirNota("Nota 1:");
      if (n1 === null) return;

      const n2 = pedirNota("Nota 2:");
      if (n2 === null) return;

      const n3 = pedirNota("Nota 3:");
      if (n3 === null) return;

      const media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
      alert(`Média Ponderada: ${media.toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 53 - Maior de 3 números",
    func: () => {
      // a ideia do Math.max tava certa, só faltava validar os 3 numeros.
      const n1 = pedirNumero("Número 1:");
      if (n1 === null) return;

      const n2 = pedirNumero("Número 2:");
      if (n2 === null) return;

      const n3 = pedirNumero("Número 3:");
      if (n3 === null) return;

      alert(`Maior: ${Math.max(n1, n2, n3)}`);
    },
  },
  {
    nome: "Ex. 54 - Celsius para Fahrenheit",
    func: () => {
      // o calculo tava certo, mas o valor vinha do prompt sem nenhuma checagem.
      const c = pedirNumero("Temperatura em Celsius:");
      if (c === null) return;

      const f = (c * 9) / 5 + 32;
      alert(`${c}°C = ${f.toFixed(2)}°F`);
    },
  },
  {
    nome: "Ex. 55 - Fahrenheit para Celsius",
    func: () => {
      // mesma coisa aqui, faltava validar antes de calcular.
      const f = pedirNumero("Temperatura em Fahrenheit:");
      if (f === null) return;

      const c = ((f - 32) * 5) / 9;
      alert(`${f}°F = ${c.toFixed(2)}°C`);
    },
  },
  {
    nome: "Ex. 56 - Contar negativos",
    func: () => {
      // tava comparando texto convertido na sorte, mudei pra numero validado.
      let count = 0;

      for (let i = 0; i < 5; i++) {
        const n = pedirNumero("Digite um número:");
        if (n === null) return;
        if (n < 0) count++;
      }

      alert(`Negativos digitados: ${count}`);
    },
  },
  {
    nome: "Ex. 57 - Somar positivos",
    func: () => {
      // zero entrava junto como positivo, deixei só os maiores que zero.
      let soma = 0;

      for (let i = 0; i < 5; i++) {
        const n = pedirNumero("Digite um número:");
        if (n === null) return;
        if (n > 0) soma += n;
      }

      alert(`Soma dos positivos: ${soma}`);
    },
  },
  {
    nome: "Ex. 58 - Nome ao contrário",
    func: () => {
      // nome é string e nao tem reverse direto, tem que separar as letras.
      const nome = pedirTexto("Digite seu nome:");
      if (nome === null) return;

      alert(`Ao contrário: ${nome.split("").reverse().join("")}`);
    },
  },
  {
    nome: "Ex. 59 - Contagem regressiva",
    func: () => {
      // o alert mostrava o array meio largado, só formatei a lista.
      const contagem = [];

      for (let i = 10; i >= 1; i--) {
        contagem.push(i);
      }

      alert(contagem.join(", "));
    },
  },
  {
    nome: "Ex. 60 - Diferença entre dois números",
    func: () => {
      // a conta dependia do prompt virar numero sozinho, então validei.
      const n1 = pedirNumero("Digite o primeiro número:");
      if (n1 === null) return;

      const n2 = pedirNumero("Digite o segundo número:");
      if (n2 === null) return;

      alert(`Diferença: ${Math.abs(n1 - n2)}`);
    },
  },
  {
    nome: "Ex. 61 - Verificar vogal",
    func: () => {
      // letra maiuscula nao pegava e dava pra digitar mais de uma letra.
      const letra = pedirTexto("Digite uma letra:");
      if (letra === null) return;

      if (letra.length !== 1) {
        alert("Digite só uma letra.");
        return;
      }

      alert("aeiouáéíóúâêôãõà".includes(letra.toLowerCase()) ? "É uma vogal" : "Não é uma vogal");
    },
  },
  {
    nome: "Ex. 62 - Verificar par ou ímpar",
    func: () => {
      // funcionava meio no automatico, mas com letra dava ruim. deixei inteiro validado.
      const n = pedirInteiro("Digite um número:");
      if (n === null) return;

      alert(n % 2 === 0 ? "Par" : "Ímpar");
    },
  },
  {
    nome: "Ex. 63 - Soma até N",
    func: () => {
      // o for parava antes do N, ai faltava somar o ultimo.
      const n = pedirInteiro("Digite um número:");
      if (n === null) return;

      if (n < 1) {
        alert("Digite um número inteiro maior que zero.");
        return;
      }

      let soma = 0;
      for (let i = 1; i <= n; i++) soma += i;

      alert(`Soma de 1 até ${n}: ${soma}`);
    },
  },
  {
    nome: "Ex. 64 - Fatorial",
    func: () => {
      // aceitava texto/negativo no fatorial, travei pra inteiro certo.
      const n = pedirInteiro("Digite um número:");
      if (n === null) return;

      if (n < 0) {
        alert("Fatorial não existe para número negativo.");
        return;
      }

      let fat = 1;
      for (let i = 2; i <= n; i++) fat *= i;

      alert(`Fatorial de ${n}: ${fat}`);
    },
  },
  {
    nome: "Ex. 65 - Contar vogais",
    func: () => {
      // mesmo problema das vogais: se nao tivesse nenhuma, quebrava.
      const texto = pedirTexto("Digite um texto:");
      if (texto === null) return;

      alert(`Vogais: ${contarVogais(texto)}`);
    },
  },
  {
    nome: "Ex. 66 - Mostrar pares até N",
    func: () => {
      // o N vinha como texto, então converti antes de montar os pares.
      const n = pedirInteiro("Digite um número:");
      if (n === null) return;

      if (n < 1) {
        alert("Digite um número inteiro maior que zero.");
        return;
      }

      const pares = [];
      for (let i = 2; i <= n; i += 2) pares.push(i);

      alert(`Pares até ${n}: ${pares.join(", ")}`);
    },
  },
  {
    nome: "Ex. 67 - Mostrar ímpares até N",
    func: () => {
      // ia só antes do N, então se o N fosse impar ele nao aparecia.
      const n = pedirInteiro("Digite um número:");
      if (n === null) return;

      if (n < 1) {
        alert("Digite um número inteiro maior que zero.");
        return;
      }

      const impares = [];
      for (let i = 1; i <= n; i += 2) impares.push(i);

      alert(`Ímpares até ${n}: ${impares.join(", ")}`);
    },
  },
  {
    nome: "Ex. 68 - Repetir nome",
    func: () => {
      // a quantidade vinha texto, e Array com texto pode dar erro bem chato.
      const nome = pedirTexto("Digite seu nome:");
      if (nome === null) return;

      const vezes = pedirInteiro("Quantas vezes repetir?");
      if (vezes === null) return;

      if (vezes < 0) {
        alert("A quantidade não pode ser negativa.");
        return;
      }

      alert(Array(vezes).fill(nome).join("\n"));
    },
  },
  {
    nome: "Ex. 69 - Converter minutos em horas",
    func: () => {
      // minutos vinha do prompt como texto e ainda aceitava negativo.
      const min = pedirInteiro("Digite minutos:");
      if (min === null) return;

      if (min < 0) {
        alert("Os minutos não podem ser negativos.");
        return;
      }

      const horas = Math.floor(min / 60);
      const resto = min % 60;
      alert(`${min} minutos = ${horas}h e ${resto}min`);
    },
  },
  {
    nome: "Ex. 70 - Calcular IMC",
    func: () => {
      // peso vinha texto e altura zero quebrava o IMC.
      const peso = pedirNumero("Digite seu peso (kg):");
      if (peso === null) return;

      const altura = pedirNumero("Digite sua altura (m):");
      if (altura === null) return;

      if (peso <= 0 || altura <= 0) {
        alert("Peso e altura precisam ser maiores que zero.");
        return;
      }

      const imc = peso / (altura * altura);
      alert(`IMC: ${imc.toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 71 - Dobrar valores de array",
    func: () => {
      // no alert os valores original e dobrado estavam trocados.
      const arr = [1, 2, 3, 4, 5];
      const dobrado = arr.map((n) => n * 2);

      alert(`Original: ${arr}\nDobrados: ${dobrado}`);
    },
  },
  {
    nome: "Ex. 72 - Filtrar maiores que 10",
    func: () => {
      // maior que 10 nao inclui o 10, então troquei pra >.
      const arr = [5, 12, 8, 130, 44];
      const maiores = arr.filter((n) => n > 10);

      alert(`Maiores que 10: ${maiores}`);
    },
  },
  {
    nome: "Ex. 73 - Encontrar nome 'Ana'",
    func: () => {
      // procurava ana minusculo, mas na lista tava Ana.
      const nomes = ["Carlos", "Ana", "João"];
      const encontrou = nomes.includes("Ana");

      alert(encontrou ? "Ana encontrada" : "Ana não está na lista");
    },
  },
  {
    nome: "Ex. 74 - Contar elementos em array",
    func: () => {
      // tava tirando 1 do length sem motivo nenhum.
      const arr = ["a", "b", "c", "d"];

      alert(`Total de elementos: ${arr.length}`);
    },
  },
  {
    nome: "Ex. 75 - Criar objeto pessoa",
    func: () => {
      // idade tava como texto, deixei como numero mesmo.
      const pessoa = { nome: "Lucas", idade: 30 };

      alert(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    },
  },
  {
    nome: "Ex. 76 - Adicionar propriedade em objeto",
    func: () => {
      // o objeto tava congelado, ai nao dava pra colocar idade.
      const pessoa = { nome: "Maria" };
      pessoa.idade = 25;

      alert(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    },
  },
  {
    nome: "Ex. 77 - Somar valores de array",
    func: () => {
      // a soma funcionava, só coloquei 0 no reduce pra ficar mais seguro.
      const arr = [10, 20, 30];
      const soma = arr.reduce((acc, val) => acc + val, 0);

      alert(`Soma dos valores: ${soma}`);
    },
  },
  {
    nome: "Ex. 78 - Obter chaves de objeto",
    func: () => {
      // pedia as chaves do objeto, mas mostrava os valores.
      const obj = { nome: "Pedro", idade: 40 };

      alert(`Chaves: ${Object.keys(obj).join(", ")}`);
    },
  },
  {
    nome: "Ex. 79 - Obter valores de objeto",
    func: () => {
      // aqui era o contrario, pedia valores e mostrava as chaves.
      const obj = { nome: "Ana", idade: 22 };

      alert(`Valores: ${Object.values(obj).join(", ")}`);
    },
  },
  {
    nome: "Ex. 80 - Verificar propriedade no objeto",
    func: () => {
      // marca tava null e mesmo assim dizia que tinha marca.
      const carro = { modelo: "Fusca", marca: null };

      alert(carro.marca ? "Tem marca" : "Não tem marca");
    },
  },
  {
    nome: "Ex. 81 - Verificar número primo",
    func: () => {
      // esse tava bem bugado: 1 dava primo e o teste do divisor tava invertido.
      const n = pedirInteiro("Digite um número:");
      if (n === null) return;

      alert(ehPrimo(n) ? "É primo" : "Não é primo");
    },
  },
  {
    nome: "Ex. 82 - Contar números negativos",
    func: () => {
      // o filtro tava contando positivo em vez de negativo.
      const arr = [1, -2, 3, -4, 5];
      const negativos = arr.filter((n) => n < 0).length;

      alert(`Números negativos: ${negativos}`);
    },
  },
  {
    nome: "Ex. 83 - Filtrar números maiores que 10",
    func: () => {
      // o filtro pegava os menores/iguais a 10, não os maiores.
      const arr = [1, 15, 3, 20, 7];
      const maioresQue10 = arr.filter((n) => n > 10);

      alert(`Números maiores que 10: ${maioresQue10}`);
    },
  },
  {
    nome: "Ex. 84 - Multiplicar todos os números de um array",
    func: () => {
      // no reduce tava somando, mas o exercicio era multiplicar.
      const arr = [2, 3, 4];
      const resultado = arr.reduce((acc, curr) => acc * curr, 1);

      alert(`O resultado da multiplicação é ${resultado}`);
    },
  },
  {
    nome: "Ex. 85 - Verificar se um número está dentro de um intervalo",
    func: () => {
      // com || quase tudo caia dentro do intervalo, troquei por &&.
      const num = pedirNumero("Digite um número:");
      if (num === null) return;

      const intervaloMin = 10;
      const intervaloMax = 20;

      if (num >= intervaloMin && num <= intervaloMax) {
        alert("O número está dentro do intervalo!");
      } else {
        alert("O número está fora do intervalo!");
      }
    },
  },
  {
    nome: "Ex. 86 - Contar os elementos de um array",
    func: () => {
      // colocaram length + 1, ai aparecia um elemento a mais.
      const arr = [1, 2, 3, 4, 5];

      alert(`O array tem ${arr.length} elementos`);
    },
  },
  {
    nome: "Ex. 87 - Ordenar um array de números",
    func: () => {
      // sort com true/false nao ordena direito numero, usei a - b.
      const arr = [5, 3, 8, 1];

      arr.sort((a, b) => a - b);
      alert(`Array ordenado: ${arr}`);
    },
  },
  {
    nome: "Ex. 88 - Trocar a primeira e a última letra de uma palavra",
    func: () => {
      // antes só mandava a primeira letra pro final, nao trocava com a ultima.
      const palavra = pedirTexto("Digite uma palavra:");
      if (palavra === null) return;

      if (palavra.length < 2) {
        alert(`Nova palavra: ${palavra}`);
        return;
      }

      const novaPalavra = palavra.at(-1) + palavra.slice(1, -1) + palavra.charAt(0);
      alert(`Nova palavra: ${novaPalavra}`);
    },
  },
  {
    nome: "Ex. 89 - Remover espaços de uma string",
    func: () => {
      // replace de espaço por espaço nao muda nada, troquei por vazio.
      const texto = pedirTexto("Digite um texto com espaços:");
      if (texto === null) return;

      const textoSemEspacos = texto.replace(/\s/g, "");
      alert(`Texto sem espaços: ${textoSemEspacos}`);
    },
  },
  {
    nome: "Ex. 90 - Verificar se uma string contém uma palavra",
    func: () => {
      // texto ficava minusculo e palavra maiuscula, ai nunca batia.
      const texto = pedirTexto("Digite um texto:");
      if (texto === null) return;

      const palavra = pedirTexto("Digite uma palavra para verificar:");
      if (palavra === null) return;

      alert(
        texto.toLowerCase().includes(palavra.toLowerCase())
          ? "A palavra está no texto"
          : "A palavra não está no texto"
      );
    },
  },
  {
    nome: "Ex. 91 - Contar o número de palavras em uma string",
    func: () => {
      // tirava 1 das palavras e espaço sobrando bagunçava a conta.
      const texto = pedirTexto("Digite um texto:");
      if (texto === null) return;

      const numPalavras = texto.trim().split(/\s+/).length;
      alert(`O texto tem ${numPalavras} palavras`);
    },
  },
  {
    nome: "Ex. 92 - Inverter um número",
    func: () => {
      // só transformava em texto, mas nao invertia os digitos.
      const num = pedirInteiro("Digite um número:");
      if (num === null) return;

      const sinal = num < 0 ? "-" : "";
      const numInvertido = sinal + Math.abs(num).toString().split("").reverse().join("");
      alert(`Número invertido: ${numInvertido}`);
    },
  },
  {
    nome: "Ex. 93 - Verificar se um array contém um número",
    func: () => {
      // o array tem numeros, mas o prompt vinha como texto.
      const arr = [1, 2, 3, 4, 5];
      const num = pedirNumero("Digite um número:");
      if (num === null) return;

      alert(arr.includes(num) ? "O número está no array" : "O número não está no array");
    },
  },
  {
    nome: "Ex. 94 - Trocar todos os 'a' de uma string por 'o'",
    func: () => {
      // tava trocando a por a, ou seja, ficava igual.
      const texto = pedirTexto("Digite um texto:");
      if (texto === null) return;

      const novoTexto = texto.replace(/a/gi, "o");
      alert(`Novo texto: ${novoTexto}`);
    },
  },
  {
    nome: "Ex. 95 - Remover números negativos de um array",
    func: () => {
      // o filtro mantinha os negativos, bem o contrario do pedido.
      const arr = [1, -2, 3, -4, 5];
      const positivos = arr.filter((n) => n >= 0);

      alert(`Array sem negativos: ${positivos}`);
    },
  },
  {
    nome: "Ex. 96 - Somar os quadrados de um array",
    func: () => {
      // fazia n + n, mas quadrado é n * n.
      const arr = [1, 2, 3, 4];
      const somaQuadrados = arr
        .map((n) => n * n)
        .reduce((acc, curr) => acc + curr, 0);

      alert(`Soma dos quadrados: ${somaQuadrados}`);
    },
  },
  {
    nome: "Ex. 97 - Contar o número de letras 'a' em um texto",
    func: () => {
      // o split dava uma contagem a mais, usei match pra contar só os a.
      const texto = pedirTexto("Digite um texto:");
      if (texto === null) return;

      const numA = (texto.match(/a/gi) || []).length;
      alert(`Número de 'a': ${numA}`);
    },
  },
  {
    nome: "Ex. 98 - Repetir uma palavra X vezes",
    func: () => {
      // repetia uma vez a menos e nem via se a quantidade prestava.
      const palavra = pedirTexto("Digite uma palavra:");
      if (palavra === null) return;

      const vezes = pedirInteiro("Quantas vezes deseja repetir a palavra?");
      if (vezes === null) return;

      if (vezes < 0) {
        alert("A quantidade não pode ser negativa.");
        return;
      }

      alert(palavra.repeat(vezes));
    },
  },
  {
    nome: "Ex. 99 - Substituir um número por outro em um array",
    func: () => {
      // a troca tava invertida: procurava o novo e colocava o antigo.
      const arr = [1, 2, 3, 4];
      const numeroAntigo = pedirNumero("Digite o número a ser substituído:");
      if (numeroAntigo === null) return;

      const numeroNovo = pedirNumero("Digite o novo número:");
      if (numeroNovo === null) return;

      const novoArray = arr.map((n) => (n === numeroAntigo ? numeroNovo : n));
      alert(`Novo array: ${novoArray}`);
    },
  },
  {
    nome: "Ex. 100 - Encontrar o maior número em um array",
    func: () => {
      // usava Math.min, ai mostrava o menor quando era pra ser o maior.
      const arr = [1, 5, 10, -20, 3];

      alert(`O maior número é ${Math.max(...arr)}`);
    },
  },
];

btns.forEach((btn) => {
  const btnExercicio = document.createElement("button");
  btnExercicio.textContent = btn.nome;
  btnExercicio.addEventListener("click", btn.func);
  divContainer.appendChild(btnExercicio);
});
