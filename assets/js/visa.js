document.querySelectorAll('.input-cart-number').forEach(input => {
    input.addEventListener('keyup', updateCardNumber);
    input.addEventListener('change', updateCardNumber);
});

function updateCardNumber() {
    const inputs = document.querySelectorAll('.input-cart-number');
    let cardNumber = '';
    
    inputs.forEach(input => {
        cardNumber += input.value + ' ';
        if (input.value.length === 4) {
            const nextInput = input.nextElementSibling;
            if (nextInput && nextInput.classList.contains('input-cart-number')) {
                nextInput.focus();
            }
        }
    });
    console.log(cardNumber.trim());
    document.querySelector('.credit-card-box .number').textContent = cardNumber.trim();
}

document.getElementById('card-holder').addEventListener('keyup', updateCardHolder);
document.getElementById('card-holder').addEventListener('change', updateCardHolder);

function updateCardHolder() {
    const cardHolder = document.getElementById('card-holder').value;
    document.querySelector('.credit-card-box .card-holder div').textContent = cardHolder;
}

document.getElementById('card-expiration-month').addEventListener('change', updateExpirationDate);
document.getElementById('card-expiration-year').addEventListener('change', updateExpirationDate);

function updateExpirationDate() {
    const monthSelect = document.getElementById('card-expiration-month');
    const yearInput = document.getElementById('card-expiration-year');
    const monthIndex = monthSelect.selectedIndex + 1;
    const formattedMonth = monthIndex < 10 ? '0' + monthIndex : monthIndex;
    const year = yearInput.value.slice(2, 4);
    document.querySelector('.card-expiration-date div').textContent = `${formattedMonth}/${year}`;
}

const ccvInput = document.getElementById('card-ccv');

ccvInput.addEventListener('focus', () => {
    document.querySelector('.credit-card-box').classList.add('hover');
});

ccvInput.addEventListener('blur', () => {
    document.querySelector('.credit-card-box').classList.remove('hover');
});

ccvInput.addEventListener('keyup', updateCCV);
ccvInput.addEventListener('change', updateCCV);

function updateCCV() {
    const ccvValue = ccvInput.value;
    document.querySelector('.ccv div').textContent = ccvValue;
}

function getCreditCardType(accountNumber) {
    if (/^5[1-5]/.test(accountNumber)) {
        return 'mastercard';
    } else if (/^4/.test(accountNumber)) {
        return 'visa';
    } else if (/(5018|5020|5038|6304|6759|676[1-3])/.test(accountNumber)) {
        return 'maestro';
    } else {
        return 'unknown';
    }
}

document.getElementById('card-number').addEventListener('change', () => {
    const cardNumber = document.getElementById('card-number').value;
    console.log(getCreditCardType(cardNumber));
});