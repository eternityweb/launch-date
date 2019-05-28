function getTimeRemaining(date) {
    var today = Date.parse(date) - Date.parse(new Date()),
        days = Math.floor(today / (1000 * 60 * 60 * 24)),
        status = 'Launch in '+days+' days';

    if (Math.sign(days)  < 0) {
        status = Math.abs(days)+' days past launch';
    }

    return (status);
}

function launchDate(date) {
    $('body').append('<div id="launch_date"></div>');
    $('#launch_date').css({
        'user-select':'none',
        'position':'fixed',
        'bottom':'0',
        'left':'0',
        'padding':'.5em',
        'background':'#FFEB3B',
        'font-size':'12px',
        'opacity':'.6',
        'z-index':'9999',
        'font-family':'Arial'});

    var time = getTimeRemaining(date);
    $('#launch_date').text(time);
}

document.addEventListener('DOMContentLoaded', function() {
    var deadline = $('#launch-date-init').attr('data-date');
        deadline = new Date(Date.parse(new Date(deadline)));

    launchDate(deadline);
});
