////////////////////////////
// module kita sendiri
let { penjumlahan, pengurangan } = require('../myModules')

console.log(penjumlahan(10, 5))
console.log(pengurangan(20, 5))

///////////////////////////
// Javascript modules
let timers = require('timers')

timers.setTimeout(waktu = () => { console.log(`hello wii wuu wii wuu !!`) }, 2000)

let url = require('url')
let link = 'http://lin.id/data.html?tgl=12&bln=november'

let parsing = url.parse(link, true)

console.log(`Host :${parsing.host}`)
console.log(`Path :${parsing.pathname}`)
console.log(`Querry :${parsing.search}`)

////////////////////////////
//npm MODULES
let colors = require('colors')
console.log(`Hello`.rainbow)
console.log(`Hello`.red)
console.log(`Hello`.green)
console.log(`Hello`.blue)
console.log(`Hello`.bgWhite.black)

let moment = require('moment')
let today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
console.log(today)