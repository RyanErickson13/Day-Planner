$(document).ready(function() {

    let timeEl = $('<p>');
    let dayEl = $('<p>');
    let box1 = $('#div1');
    let box2 = $('#div2');
    let box3 = $('#div3');
    let box4 = $('#div4');
    let box5 = $('#div5');
    let box12 = $('#div12');
    let box11 = $('#div11');
    let box10 = $('#div10');
    let box9 = $('#div9');

    box1.val(localStorage.getItem('Entry1'));
    box2.val(localStorage.getItem('Entry2'));
    box3.val(localStorage.getItem('Entry3'));
    box4.val(localStorage.getItem('Entry4'));
    box5.val(localStorage.getItem('Entry5'));
    box9.val(localStorage.getItem('Entry9'));
    box10.val(localStorage.getItem('Entry10'));
    box11.val(localStorage.getItem('Entry11'));
    box12.val(localStorage.getItem('Entry12'));

    let button9 = $('#btn9');
    let button10 = $('#btn10');
    let button11 = $('#btn11');
    let button12 = $('#btn12');
    let button1 = $('#btn1');
    let button2 = $('#btn2');
    let button3 = $('#btn3');
    let button4 = $('#btn4');
    let button5 = $('#btn5');
    let clearBtn = $('#clearBtn');

    var timeNow = parseInt(moment().format('HH'));

    function clear() {
        localStorage.clear();

        box1.val('');
        box2.val('');
        box3.val('');
        box4.val('');
        box5.val('');
        box9.val('');
        box10.val('');
        box11.val('');
        box12.val('');
    }

    function tick() {

        dayEl.text(moment().format('LL'));
        timeEl.text(moment().format('hh:mm:ssA'));
        $('.jumbotron').append(dayEl);
        $('.jumbotron').append(timeEl);

    }

    function checkTime() {

        if (parseInt(box12.attr('data-hour')) > timeNow) {
            box12.removeClass('past present future');
            box12.addClass('future');

        } else if (parseInt(box12.attr('data-hour')) === timeNow) {
            box12.removeClass('past present future');
            box12.addClass('present');
        
        }
        //I do not see an error in this code but it says I do could you please comment on where it would be?