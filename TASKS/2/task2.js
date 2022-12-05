let div = document.createElement('div')

div.style.width = '100px'
div.style.height = "100px"
div.style.overflow = 'scroll'

document.body.append(div)

let result = div.offsetWidth - div.clientWidth

//alert(result)