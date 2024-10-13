document.getElementById('bogoForm').addEventListener('change', updateTotal);

function updateTotal() {
    let totalPrice = document.getElementById('totalPrice');
    let selectedOption = document.querySelector('input[name="unit"]:checked').value;
    let price = 0;

    switch (selectedOption) {
        case '1':
            price = 10;
            break;
        case '2':
            price = 18;
            break;
        case '3':
            price = 24;
            break;
    }

    totalPrice.innerText = `$${price}.00 USD`;
}
