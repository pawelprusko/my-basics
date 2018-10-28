document.addEventListener('DOMContentLoaded', function() {

    var table = document.querySelector('table');
    var orderId = document.querySelector('#orderId');
    var item = document.querySelector('#item');
    var quantity = document.querySelector('#quantity');
    var addBtn = document.querySelector('#addBtn');

    addBtn.addEventListener('click', function() {

        var idVal = orderId.value;
        var itemVal = item.value;
        var quaVal = quantity.value;

        var tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${idVal}</td>
            <td>${itemVal}</td>
            <td>${quaVal}</td>
        `;

        table.appendChild(tr);

        orderId.value = "";
        item.value = "";
        quantity.value = "";

    })



});

