// let studentName = document.querySelector("div.form-group input[id='student-name']")
// console.log(studentName)
// studentName.value = "Pinoy Dev"



let res;
const parentNode = document.querySelector('tbody#student-list')
//const parentNode = document.querySelector('tr.students')

    //all under the tbody elements(can use childNodes[index]))
res = parentNode.childNodes
res = parentNode.childNodes[1]
res = parentNode.childNodes[1].nodeName

    // get first child
res = parentNode.firstChild

    // get last child
res = parentNode.lastChild

    //get the next element of current node
res = parentNode.childNodes[0].nextSibling

    //get previous element
res = parentNode.childNodes[2].previousSibling

    //get node type - returns an integers equivalent to its nodename(text)
res = parentNode.childNodes[0].nodeType//text
res = parentNode.childNodes[3].nodeType//element

    //you can select 1 row stud list using index
res = parentNode.children
res = parentNode.children[1]//tinatanggal nito yung mga linebreak

    //get first element
res = parentNode.firstElementChild

    //get last element
res = parentNode.lastElementChild

    //get next element
res = parentNode.children[0].nextElementSibling//SAME => res = parentNode.children[1]

    //get next element
res = parentNode.children[1].previousElementSibling//SAME => res = parentNode.children[0]

    //get children of element
res = parentNode.children[0].children
parentNode.children[0].children[1].innerHTML = 'Hello'
parentNode.children[0].children[1].id = 'special-row'
// let tes = document.querySelector('#special-row')
// tes.style.color ='red'

    //count the child element
res = parentNode.childElementCount
 
// traversing from bottom to top
res = childNode = document.querySelector('.students')
// res = childNode.paret
console.log(res)


// let idNum = document.querySelector('input[id="id-number"]').value
// let studName = document.querySelector('input[id="student-name"]')
// let gender = document.querySelector('select[id="gender-select"]')
// let bday = document.querySelector('input[id="dob"]')

// let save = document.querySelector('#save')
// let table = document.querySelector('.table')

// save.addEventListener('click', ()=>{
    
// })

//https://www.youtube.com/watch?v=PxvF01G7ajM&t=0s