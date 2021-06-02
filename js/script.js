
function title(text) {
    return '<h1>${text}</h1>'
   }

function firstPage() {

    
    
    const headers = Array.from(document.querySelectorAll('.email'))
    const joined = Array.from(document.querySelectorAll('.joined-details'))
    const name = Array.from(document.querySelectorAll('h3'))
    const images = Array.from(document.querySelectorAll('img'))
    for (r = 0; r < 10; r++) {
        const container = document.querySelector('#demo')
        container.insertAdjacentHTML('beforeend', title(headers[r].textContent) + "<br/>")
        document.querySelector('.sb-name').insertAdjacentHTML('beforeend', name[r].textContent + "<br/>")
        document.querySelector('.sb-joined-details').insertAdjacentHTML('beforeend', joined[r].textContent + "<br/>")
        document.querySelector('.sb-avatar').insertAdjacentHTML('beforebegin', images[r].outerHTML + "<br/>")
    }


}



function secondPage() {
    const headers = Array.from(document.querySelectorAll('.email'))
    const joined = Array.from(document.querySelectorAll('.joined-details'))
    const name = Array.from(document.querySelectorAll('h3'))
    const images = Array.from(document.querySelectorAll('img'))
    for (r = 0; r < 10; r++) {
        document.querySelector('.sb-email').insertAdjacentHTML('beforeend', headers[r].textContent + "<br/>")
        document.querySelector('.sb-name').insertAdjacentHTML('beforeend', name[r].textContent + "<br/>")
        document.querySelector('.sb-joined-details').insertAdjacentHTML('beforeend', joined[r].textContent + "<br/>")
        document.querySelector('.sb-avatar').insertAdjacentHTML('beforebegin', images[r].outerHTML + "<br/>")
    }

}

function thirdPage() {
    const headers = Array.from(document.querySelectorAll('.email'))
    const joined = Array.from(document.querySelectorAll('.joined-details'))
    const name = Array.from(document.querySelectorAll('h3'))
    const images = Array.from(document.querySelectorAll('img'))
    for (r = 0; r < 10; r++) {
        document.querySelector('.sb-email').insertAdjacentHTML('beforeend', headers[r].textContent + "<br/>")
        document.querySelector('.sb-name').insertAdjacentHTML('beforeend', name[r].textContent + "<br/>")
        document.querySelector('.sb-joined-details').insertAdjacentHTML('beforeend', joined[r].textContent + "<br/>")
        document.querySelector('.sb-avatar').insertAdjacentHTML('beforebegin', images[r].outerHTML + "<br/>")
    }

}

function fourthPage() {
    const headers = Array.from(document.querySelectorAll('.email'))
    const joined = Array.from(document.querySelectorAll('.joined-details'))
    const name = Array.from(document.querySelectorAll('h3'))
    const images = Array.from(document.querySelectorAll('img'))
    for (r = 0; r < 10; r++) {
        document.querySelector('.sb-email').insertAdjacentHTML('beforeend', headers[r].textContent + "<br/>")
        document.querySelector('.sb-name').insertAdjacentHTML('beforeend', name[r].textContent + "<br/>")
        document.querySelector('.sb-joined-details').insertAdjacentHTML('beforeend', joined[r].textContent + "<br/>")
        document.querySelector('.sb-avatar').insertAdjacentHTML('beforebegin', images[r].outerHTML + "<br/>")
    }

}

function fifthPage() {
    const headers = Array.from(document.querySelectorAll('.email'))
    const joined = Array.from(document.querySelectorAll('.joined-details'))
    const name = Array.from(document.querySelectorAll('h3'))
    const images = Array.from(document.querySelectorAll('img'))
    for (r = 0; r < 10; r++) {
        document.querySelector('.sb-email').insertAdjacentHTML('beforeend', headers[r].textContent + "<br/>")
        document.querySelector('.sb-name').insertAdjacentHTML('beforeend', name[r].textContent + "<br/>")
        document.querySelector('.sb-joined-details').insertAdjacentHTML('beforeend', joined[r].textContent + "<br/>")
        document.querySelector('.sb-avatar').insertAdjacentHTML('beforebegin', images[r].outerHTML + "<br/>")
    }

}

function sixthPage() {
    const headers = Array.from(document.querySelectorAll('.email'))
    const joined = Array.from(document.querySelectorAll('.joined-details'))
    const name = Array.from(document.querySelectorAll('h3'))
    const images = Array.from(document.querySelectorAll('img'))
    for (r = 0; r < 10; r++) {
        document.querySelector('.sb-email').insertAdjacentHTML('beforeend', headers[r].textContent + "<br/>")
        document.querySelector('.sb-name').insertAdjacentHTML('beforeend', name[r].textContent + "<br/>")
        document.querySelector('.sb-joined-details').insertAdjacentHTML('beforeend', joined[r].textContent + "<br/>")
        document.querySelector('.sb-avatar').insertAdjacentHTML('beforebegin', images[r].outerHTML + "<br/>")
    }

}