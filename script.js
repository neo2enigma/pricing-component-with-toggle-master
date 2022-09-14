const priceElements = document.querySelectorAll('.price');
const toggle = document.querySelector('.switch');

const pricePlans = {
    'monthly': [19.99, 24.99, 39.99],
    'annual': [199.99, 249.99, 399.99]
};

function textOpacifier(element) {
    let i = 0;

    const interval = setInterval(() => {

        element.style.opacity = i;

        i += 0.05;

        if (i > 1)
            clearInterval(interval);

    }, 30);
}

function setPrice(plan = 'monthly') {
    let i = 0;

    priceElements.forEach(element => {

        element.lastElementChild.style.opacity = 0;

        textOpacifier(element.lastElementChild);

        element.lastElementChild.innerHTML = pricePlans[plan][i];

        i++;
    });


}

toggle.addEventListener('change', (e) => {
    const plan = e.target.checked ? 'annual' : 'monthly';
    setPrice(plan);

});
