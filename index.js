const searchField = document.querySelector('.top input')
const addInput = document.querySelector('.bottom input')
const uel = document.querySelector('ul')
const heading = document.querySelector('h1')

// defining constants for search 

const lists = document.querySelectorAll('ul div li')
// console.log(lists)
// console.log(heading.parentElement)
// console.log(uel.children)



addInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        if (e.target.value && e.target.value.length >= 1) {
            uel.innerHTML += `<div><li>${e.target.value.toLowerCase()}</li><i class="fa-regular fa-trash-can"></i></div>`
            console.log(uel.children)
            e.target.value = ''       
        }    
    }
})

uel.addEventListener('click', (e) => {
    // if(e.target.classList.contains('fa-regular')) this also works 
    if (e.target.tagName === 'I') {
        console.dir(e.target)
        e.target.parentElement.remove()
    }
})

searchField.addEventListener('input', (e) => {
    Array.from(uel.children)
    .filter(todo => {
        if (!todo.children[0].innerText.toLowerCase().includes(searchField.value.toLowerCase())) {
            todo.classList.add('hide')
        }
        if (todo.children[0].innerText.toLowerCase().includes(searchField.value.toLowerCase())) {
            todo.classList.remove('hide')
        }
    })
})




// for (let l of lists) {
//     searchField.addEventListener('keyup', (e) => {
//     if (e.key === 'Enter') {
//         const search = e.target.value 
//         if (l.innerText.includes(e.target.value)) {
//             console.log('found it')
//             console.log(uel.indexOf(l))
//         } else {
//             console.log('Couldnt find')
//         }
//     }
// })
// }

// lists.forEach((l, index) => {
//     searchField.addEventListener('change', (e) => {
//     if (e.key === 'Enter') {
//         const search = e.target.value 
//         if (l.innerText.includes(e.target.value)) {
            // console.log('found it')
            // console.log(index)
        // } else {
            // console.log('Couldnt find')
            // console.log(index)
            // const filte = lists.filter(todos => )
            // l.parentElement.style.display = 'none'

        // }
    // }
// })
// })

// lists.forEach((l, index) => {
//     searchField.addEventListener('input', (e) => {
//         if (!l.innerText.includes(e.target.value)) {
//             l.parentElement.style.display = 'none'
//         }
//     })
// })

let lixt = Array.from(lists)
// lixt.push(addInput.value)
// console.log(lixtt)

// console.log(lixt)

// lixt.forEach((l, index) => {
//     searchField.addEventListener('change', (e) => {
//         if (l.innerText.includes(e.target.value)) {
//             const filtr = lixt.filter(todo => index === index)
//             console.log(filtr)
//         }
//     })
// })


// lixt.forEach((l, index) => {
//     searchField.addEventListener('input', (e) => {
//         if (!l.innerText.includes(e.target.value)) {
//             l.parentElement.classList.add('hide')
//         } 
//         if (l.innerText.includes(e.target.value)) {
//             l.parentElement.classList.remove('hide')
//         } 
//     })
// })

// Array.from(uel.children).forEach((div) => {
//     searchField.addEventListener('input', (e) => {
//         if (!div.children[0].innerText.includes(searchField.value)) {
//             div.classList.add('hide')
//         }
//         if (div.children[0].innerText.includes(searchField.value)) {
//             div.classList.remove('hide')
//         }
//     })
// })




    // .forEach((todo) => todo.classList.add('hide'))










