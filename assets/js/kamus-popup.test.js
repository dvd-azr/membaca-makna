// const dataKBBI = (async function () {
//     // return await fetch('./assets/data/kbbi-qt-data-test.json')
//     //     .then(response => response.json())
//     //     .then(hasil => hasil)
//     // const arti = await fetch('./assets/data/kbbi-qt-data-test.json');
//     // return await arti.json();

//     return await getDataFile('./assets/data/kbbi-qt-data-test.json')
// })();


$(document).ready(function () {


})

$('#viewerContainer').contextmenu(function (e) {
    let user_textSelect = document.getSelection(),
        userText = user_textSelect.toString().trim();

    if (userText == '' || userText == ' ') {
        return
    }

    kbbi(userText.trim())

    $(".card__wrapper").addClass("show");



    return false; //blocks default Webbrowser right click menu

}).on("click", function () {
    $(".card__wrapper").removeClass("show");
});
let load = 0;

// Mengambil data
function getDataFile(url) {
    return fetch(url)
        .then(response => response.json())
        .then(hasil => hasil)
}
let dataKBBI = [];

const kbbi = async function (text) {
    const cardEl = $('.cards .load_pencarian'),
        indikator = $('.indikator p');

    if (dataKBBI.length == 0) {
        dataKBBI = await getDataFile('./assets/data/kbbi/kbbi-qt-data.json')
        load++
        console.log("Ambil data : " + load);
    } else {
        console.log('msuk ke else');
        console.log(dataKBBI.length);

    }

    if (text.includes(' ')) {
        console.log("Mengandung spasi");
        cardEl.html(`<li class="card"><h3>" ${text} " mengandung spasi</h3></li>`);
        return;

    }

    // console.log(text.length);
    // console.log(text);
    // console.table(dataKBBI);
    let search = dataKBBI.filter(data => data.katakunci.substr(0, text.length) === text.toLowerCase())

    // let search = dataKBBI.filter(data => data.katakunci.match(text.toLowerCase()));
    // console.table(search);

    let el_li = '';
    search.map(hsl => {
        el_li += /*html*/ `<li class="card"><p class="small-scroll">${htmlspecialchars_decode(hsl.artikata)}</p></li>`
    });

    (search != '') ? cardEl.html(el_li): cardEl.html(`<li class="card"><h3>" ${text} " Tidak ditemukan dalam KBBI</h3></li>`);

    (search.length == 0) ? indikator.text('0'): indikator.text(search.length);

    // console.log(search.length);

    $('.cards').commentCards();

};

// merubah html karakter spesial yg terdapat dalam data Kbbi
function htmlspecialchars_decode(params) {
    return params.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
    // .replace(/--/g, '<hr>--')
}
$('.card__wrapper').on('click', 'button', function (e) {

    let cards = $('.cards');

    // console.log(this.className);
    cards.find(`.card.card--${this.className}`)[0].click();

})

$('#openFile').on('change', function (e) {
    console.log("buka file baru");

    console.log(e);

})