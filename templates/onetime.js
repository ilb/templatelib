const fs = require('fs');
const carbone = require('carbone');

// Data to inject
var data = {
  number_of_contract : '01',
  date_order : '26.03.2021',
  passport : 'серия 5204 №997996 выдан УВД Кировского АО гОмск',
  date_passport : '02.07.2004',
  inn : '084-699-854-45',
  bank_account : 'нужно уточнить',
  firstname : 'Антон',
  lastname : 'Гребенщиков',
  patronymic : 'Васильевич',
  adress : '644074 Омск Конева 30-40',
  phone : '79961210675',
  date_start : '26.03.2021',
  date_stop : '29.03.2021',
  requirements : 'Реализовать генерацию договора на разработку ПО из json структуры',
  req_1 : 'создать шаблон договора',
  req_2 : 'создать файл для с данными для заполнения шаблона',
  req_3 :  'заполнить поля договора используя corbone',
  cost : '15000',
  cost_in_words : 'пятнадцать тысяч рублей',
  email : 'ssuglazami@gmail.com',
  date_accept : '29.03.2021'
  
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
