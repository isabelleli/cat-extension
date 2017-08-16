//don't need to check if doc has loaded bc this script is injected
//after DOM is complete

var cat = chrome.extension.getURL('cat.png');

var observer = new MutationObserver(function(mutation) {
    console.log('hi');
    $('img').each(function() {
        $(this).attr("src", cat);

    })
});

var config = {attributes: true, childList:true};
observer.observe(document.body, config);
