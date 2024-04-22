
// left menu
$('.menu').click(()=>{
    $('#leftMenu').animate({ 'width':'250px' , 'padding':'2rem'},300);
    $('.menu').animate({'margin-left':'250px'},300);
})
// closeBtn 
$('#closeBtn').click(()=>{
    $('#leftMenu').animate({ 'width':'0','padding':0 },300);
    $('.menu').animate({'margin-left':'0'},300);
})

// ========================================
// scrolling menu
$('#leftMenu a').click(function() {
    let sectionId = $(this).attr('href');
    let sectionPosition = $(sectionId).offset().top;
    $('html,body').animate({'scrollTop':sectionPosition},2000);
});

// ========================================
// siger
let singersH = $(".singers-info h3");

for(let i=0;i<singersH.length;i++){
    singersH[i].addEventListener('click',()=>{
        // We use jQuery's siblings() method to select both .inner and .inner1 elements that are siblings of the clicked <h3> element.
        $(singersH[i]).siblings('.inner1, .inner').slideToggle(1000);
        // console.log($(singersH[i]).find('.inner'));
    });
}

// ===========================================
// textarea
/*
let msg = $("textarea");
let charsRminingNum = $("#charsNum");
msg.on("input",()=>{
    // console.log(`msg = ${msg.val()} \n length = ${msg.val().length}`);
    let maxChars = charsRminingNum.text();
    let currCharsNum = msg.val().length;
    if(currCharsNum < 100){
        let remaining = maxChars-1;
        charsRminingNum.text(remaining);
    }
    else{
        charsRminingNum.html(`your available character finished`);
    }
});
*/
let msg = $("textarea");
let charsRminingNum = $("#charsNum");
let maxChars = charsRminingNum.text();
msg.on("input",()=>{
    // console.log(`msg = ${msg.val()} \n length = ${msg.val().length}`);
    let currCharsNum = msg.val().length;
    let remaining = maxChars - currCharsNum;
    if(remaining <= 0){
        charsRminingNum.html(`your available character finished`);
    }
    else{
        charsRminingNum.text(remaining);
    }
});

// ===============================
// // Count 
// let days = $('.days').text();
// let hours = $('.hours').text();
// let mins = $('mins').text();
// let secs = $('.secs').text();
// let days = $('.days');
// let hours = $('.hours');
// let mins = $('.mins');
// let secs = $('.secs');

// // let currDate = new Date();
// // console.log(Date()); // Sun Apr 21 2024 21:59:32
// // console.log(currDate); // Sun Apr 21 2024 21:59:32
// // console.log(currDate.getDate()); // day is 21 
// // console.log(currDate.getHours()); // 22 hr
// // console.log(currDate.getSeconds()); // 40 secs
// // console.log(currDate.getMinutes()); // 16 mins

// let selectDate = new Date(2021,10,10,9,56,0);
// // console.log(selectDate); // Mon Jul 06 2026 23:10:05
// // console.log(selectDate.getDate()); // day is 6
// // console.log(selectDate.getHours()); // 23 hr
// // console.log(selectDate.getSeconds()); // 5 secs
// // console.log(selectDate.getMinutes()); // 10 mins

// // const [day , hr , m , sec] = [selectDate.getDate() , selectDate.getHours(), selectDate.getMinutes(), selectDate.getSeconds()];

// function remainDate ( day , hr , m , sec ){
//     let currDate = new Date();

//     let currDays = currDate.getDate();
//     let currHours = currDate.getHours();
//     let currMins = currDate.getMinutes();
//     let currSecs = currDate.getSeconds();

//     let remainDays = day - currDays;
//     let remainHours = hr - currHours;
//     let remainMins = m - currMins;
//     let remainSecs = sec - currSecs;

//     days.text(remainDays);
//     hours.text(remainHours);
//     mins.text(remainMins);
//     secs.text(remainSecs);

//     // days.text(1000)

//     // console.log(d);
// }

// $(window).on('load',()=>{
//     remainDate( selectDate.getDate(), selectDate.getHours(), selectDate.getMinutes(), selectDate.getSeconds() );
// })

// ======================================
// countDownToTime
$(window).on('load',()=>{
    countDownToTime('10 october 2025 9:56:00');
});
function countDownToTime(seletedDate){
    let future = new Date(seletedDate).getTime(); // get msecs
    future = future/1000;
    let now = new Date().getTime();
    now = now/1000;

    let diff = future-now; // secs

    let days = Math.floor(diff / (60*60*24));
    // console.log(days+'D'); // -925

    let hours = Math.floor( (diff - (days*(24*60*60))) / (60*60) );
    // console.log(`${hours} h`); //9

    let mins = Math.floor( (diff - (days*(24*60*60)) - (hours*60*60) ) / 60);
    // console.log(`${mins} m`);

    let secs = Math.floor( (diff - (days*(24*60*60)) - (hours*60*60) - (mins*60) ));
    // console.log(`${secs} s`);

    $('.days').html(`${days} D`);
    $('.hours').html(`${hours} h`);
    $('.mins').html(`${mins} m`);
    $('.secs').html(`${secs} s`);

    setInterval(()=>{
        countDownToTime(seletedDate)
    }, 1000);
}








