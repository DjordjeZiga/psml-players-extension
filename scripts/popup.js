let psmlCheck = document.getElementById('psmlCheck');
let bplCheck = document.getElementById('bplCheck');
var storage = chrome.storage.sync;

window.onload = function() {
    getPsmlState();
    getBplState();
}

psmlCheck.onclick = function() {
    if (psmlCheck.checked){
        savePSMLState(1);
    } else {
        savePSMLState(0);
    }
    chrome.tabs.query({url: "http://pesdb.net/*"}, function(tab) {
        chrome.tabs.reload(tab[0].id)
    });
};

bplCheck.onclick = function() {
    if (bplCheck.checked){
        saveBPLState(1);
    } else{
        saveBPLState(0);
    }
    chrome.tabs.query({url: "http://pesdb.net/*"}, function(tab) {
        chrome.tabs.reload(tab[0].id)
    });
};

function getPsmlState() {
    let psmlState;
    storage.get("psmlState",function (fetchedData) {
        psmlState = fetchedData.psmlState;
        if (psmlState === 1){
            psmlCheck.checked = true;
        }
    });
}

function getBplState() {
    let bplState;
    storage.get("bplState",function (fetchedData) {
        bplState = fetchedData.bplState;
        if (bplState === 1){
            bplCheck.checked = true;
        }
    });
}


function savePSMLState(value) {
    var data = {};
    data['psmlState'] = value
    storage.set({"psmlState": value}, function(){
        console.log('Value is set to ' + 'dsf');
    });
}

function saveBPLState(value) {
    var data = {};
    data['bplState'] = value
    storage.set({"bplState": value}, function(){
        console.log('Value is set to ' + 'dsf');
    });
}
