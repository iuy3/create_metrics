

let div = document.getElementById('mydiv')




/*
Свойство elem.scrollTop содержит размер прокрученной области при 
отсчёте сверху. А как подсчитать размер прокрутки снизу 
(назовём его scrollBottom)?

Напишите соответствующее выражение для произвольного элемента elem.

P.S. Проверьте: если прокрутки нет вообще или элемент
полностью прокручен – оно должно давать 0.
*/



let tr = document.getElementById('td')

let scrollBottom = div.scrollHeight - div.scrollTop - div.clientHight
//tr.append(div.scrollTop)
//tr.append(scrollBottom)



//task_2
let result = div.offsetWidth-div.clientWidth
console.log(result);