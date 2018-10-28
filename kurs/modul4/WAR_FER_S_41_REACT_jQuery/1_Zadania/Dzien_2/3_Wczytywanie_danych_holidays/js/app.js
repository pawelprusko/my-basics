$(function() {
    var url = 'https://holidayapi.com/v1/holidays?key=e3af13b1-a8ed-4a6e-942b-e0376b7e8db8&country=US&year=2017&month=10';
    var list = $('#holidayDates');
    
    $.ajax({
        url: url
    }).done(function(data) {
        var holidays = data.holidays;
        for(var i = 0; i < holidays.length; i++) {
            var holidayName = holidays[i].name;
            var holidayDate = holidays[i].date
            // TEMPLATE STRING ES6
            var listEl = $(`
                <li>
                    <h3 class="holiday-name">
                        ${holidayName}
                    </h3>
                <date class="holiday-date">${holidayDate}</date>
                </li>
            `);
            list.append(listEl);
        }
    })
});