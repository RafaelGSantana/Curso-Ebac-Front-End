import months from "./months.js";

const monthsWith30Days = months.filter((month) => {
   return month.days === 30
});

let toPrint = '';

monthsWith30Days.forEach(month => {
   toPrint += '→ ' + month.month + '<br />'
})

// reduce - executa funçao com todos os itens de um array e devolve um valor único
// acc - armazena a soma
// month - o que eu quero somar (itens do array)
let sumMonthDays = months.reduce((acc, item) => {
   return {days: acc.days + item.days}
})


// Map
let idadeCachorros = [2, 10, 7, 15, 19, 6, 4] ;

let idadeHumanaDosCachorros = idadeCachorros.map(item => {
   return item * 7;
})
document.getElementById('main').innerHTML = 
   toPrint + 
   '<br />Soma dos dias dos meses do ano = ' +
   sumMonthDays.days +
   '<br />Idade humana dos cachorros: ' +
   idadeHumanaDosCachorros + ' anos';