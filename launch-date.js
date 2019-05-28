function getTimeRemaining(date) {
    var today = Date.parse(date) - Date.parse(new Date());
    var days = Math.floor(today / (1000 * 60 * 60 * 24));

    console.log(date)

    var flavor = 'Launch in '+days+' days';

    if (Math.sign(days)  < 0) {
        flavor = days+'days past launch';
    }

    return (flavor);
}

function launchDate(date) {
    $('body').append('<div id="launch_date">');
    $('#launch_date').css({'user-select':'none','position':'fixed','bottom':'0','left':'0','padding':'.5em','background':'#FFEB3B','font-size':'12px','opacity':'.6','z-index':'9999','font-family':'Arial'});

    console.log('Launch-Date Func')

    $('#launch_date').innerHTML = getTimeRemaining(date);
}

document.addEventListener('DOMContentLoaded', function() {

    console.log('Launch-Date Init')

    var deadline = $('#launch-date-init').attr('data-date');
    console.log(deadline)
        deadline = new Date(Date.parse(new Date(deadline)));
        console.log(deadline)

    launchDate(deadline);
});
