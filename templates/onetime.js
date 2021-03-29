const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = {
  {
  "FullName": "Гребенщиков Антон Васильевич",
  "passport": "5204 997996 выдан УВД Кировского АО гОмск",
  "DatePassport": "2004.07.02",
  "inn": "084-699-854-45",
  "BankAccount": "Нужно уточнить",
  "address": "644074 Омск Конева 30-40",
  "phone": "79961210675",
  "email": "godlyton@yandex.ru",
  "req": "Реализовать генерацию договора на разработку ПО по данным из json структуры",
  "DateContract": "2021.03.29",
  "DateStart": "2021.03.29",
  "DateStop": "2021.03.31",
  "cost": "15000",
  "cost_in_words": "Пятнадцать тысяч",
  "req1": "инициировать проект",
  "req2": "преобразовать шаблон и заполнить ссылками на переменные",
  "req3": "сгенерировать договор"
}
  
};

// Generate a report using the sample template provided by carbone module
// This LibreOffice template contains "Hello {d.firstname} {d.lastname} !"
// Of course, you can create your own templates!
carbone.render('./node_modules/carbone/examples/onetime.ott', data, function(err, result){
  if (err) {
    return console.log(err);
  }
  // write the result
  fs.writeFileSync('result.odt', result);
});
