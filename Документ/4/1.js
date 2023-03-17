// Таблица с `id="age-table"`
let table = document.getElementById('age-table')

// Все label в этой таблице
table.getElementsByTagName('label')

// Первый td в этой таблице
table.querySelector('td')

// Форма с name="search"
let form = document.getElementsByName('search')[0]

// Первый input в этой форме
form.querySelector('input')

// Последний input в этой форме
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]