let psmlCheck = document.getElementById('psmlCheck');
let ppmlCheck = document.getElementById('ppmlCheck');
let bplCheck = document.getElementById('bplCheck');
var storage = chrome.storage.sync;

window.onload = function() {
    getPsmlState();
    getPpmlState();
    getBplState();
}

psmlCheck.onclick = function() {
    if (psmlCheck.checked){
        savePSMLState(1);
    } else {
        savePSMLState(0);
    }
    chrome.tabs.query({url: "https://pesdb.net/*"}, function(tab) {
        chrome.tabs.reload(tab[0].id)
    });
};

bplCheck.onclick = function() {
    if (bplCheck.checked){
        saveBPLState(1);
    } else{
        saveBPLState(0);
    }
    chrome.tabs.query({url: "https://pesdb.net/*"}, function(tab) {
        chrome.tabs.reload(tab[0].id)
    });
};

ppmlCheck.onclick = function() {
    if (ppmlCheck.checked){
        savePPMLState(1);
    } else {
        savePPMLState(0);
    }
    chrome.tabs.query({url: "https://pesdb.net/*"}, function(tab) {
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

function getPpmlState() {
    let ppmlState;
    storage.get("ppmlState",function (fetchedData) {
        ppmlState = fetchedData.ppmlState;
        if (ppmlState === 1){
            ppmlCheck.checked = true;
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
    });
}

function savePPMLState(value) {
    var data = {};
    data['ppmlState'] = value
    storage.set({"ppmlState": value}, function(){
    });
}

function saveBPLState(value) {
    var data = {};
    data['bplState'] = value
    storage.set({"bplState": value}, function(){
    });
}
