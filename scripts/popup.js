let psmlRadio = document.getElementById('psmlRadio');
let bplRadio = document.getElementById('bplRadio');
var storage = chrome.storage.local;
psmlRadio.onclick = function() {
    saveSelectedLeague(1);
};
bplRadio.onclick = function() {
    saveSelectedLeague(2);
};

function saveSelectedLeague(value) {
    var data = {};
    data['selectedLeague'] = value
    chrome.storage.sync.set({"selectedLeague": value}, function(){
        console.log('Value is set to ' + 'dsf');
    });
}
