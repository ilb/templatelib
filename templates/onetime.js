const fs = require('fs');
const carbone = require('carbone');

carbone.set({
  lang: "ru",
  timezone:"Europe/Samara"
});

// Data to inject
var data = {
  {
  "FullName": "Гребенщиков Антон Васильевич",
  "passport": "5204 997996 выдан УВД Кировского АО гОмск",
  "DatePassport": "20040702",
  "inn": "084-699-854-45",
  "BankAccount": "Нужно уточнить",
  "address": "644074 Омск Конева 30-40",
  "phone": "79961210675",
  "email": "godlyton@yandex.ru",
  "req": "Реализовать генерацию договора на разработку ПО по данным из json структуры",
  "DateContract": "20210329",
  "DateStart": "20210329",
  "DateStop": "20210331",
  "cost": "15000",
  "cost_in_words": "Пятнадцать тысяч",
  "req1": "инициировать проект",
  "req2": "преобразовать шаблон и заполнить ссылками на переменные",
  "req3": "сгенерировать договор"
}
  
};


carbone.render('./node_modules/carbone/examples/onetime.ott', data, function(err, result){
  if (err) {
    return console.log(err);
  }
  // write the result
  fs.writeFileSync('result.odt', result);
});
