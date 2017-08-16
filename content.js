//don't need to check if doc has loaded bc this script is injected
//after DOM is complete

var cat = chrome.extension.getURL('cat.png');

$(document).ready(function() {
    changeCat();
})

document.onscroll = function(){
    changeCat();
}

function changeCat() {
    $('img').attr("src", cat);

    //for each is unnecessary because jquery already selects all of the img elements

    // $('img').each(function() {
    //     $(this).attr("src", cat);
    // })
}

//Old way to observe changes in the DOM
//Problem with MutationObserver is that it took a while for it to observe changes
//onscroll is more reactive

// var observer = new MutationObserver(function(mutation) {
//     $('img').each(function() {
//         $(this).attr("src", cat);
//
//     })
// });
//
// var config = {attributes: true, childList:true};
// observer.observe(document.body, config);
