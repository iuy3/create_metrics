'use strict'

//got element div
var div = document.getElementById('mydiv')

//create table and element
var clientLeft = document.getElementById('clLeft')
var clientTop = document.getElementById('cltop')

clientLeft.append(div.clientLeft)
clientTop.append(div.clientTop)


var clientWidth = document.getElementById('clw')
var clientHight = document.getElementById('clh')

clientWidth.append(div.clientWidth)
clientHight.innerHTML = clientHight.innerHTML + "<strong>"+ div.clientHeight +"</strong>"



var offsetWidth = document.getElementById('offsetW')
var offsetHeight = document.getElementById('offsetH')

offsetHeight.append(div.offsetHeight)
offsetWidth.append(div.offsetWidth)


var scrollWidth = document.getElementById('scrollHeight')
var scrollHeight = document.getElementById('scrollWidth')

scrollWidth.append(div.scrollWidth)
scrollHeight.append(div.scrollHeight)





//прокрутка

var lastTR = document.body.childNodes[5].childNodes[1].lastElementChild 
lastTR.before('Прокрутка')


var scrollLeft = document.getElementById('scrollLEFT')
var scrollTop = document.getElementById('scrollTOP')

scrollLeft.append(div.scrollLeft)
scrollTop.append(div.scrollTop)









