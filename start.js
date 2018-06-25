

// setting up window.store//
function injectScript(file_path) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    document.getElementsByTagName('body')[0].appendChild(script);
}
console.log("injecting init");
injectScript(chrome.extension.getURL('init.js'));
console.log("injected init");


chrome.runtime.onMessage.addListener( function getter(data) {
 	injectJs(data);	
});

function injectJs(data) {
        var scr = document.createElement("script");
        scr.type= "text/javascript";
        scr.textContent = load(data) ; 
        console.log(scr);
        (document.body).appendChild(scr);  
}

////code///////////////////////////////////////////////
function load(data){
	var actualCode = '(' + function(num,msg,rand){
        'use strict';
        console.log(num+" "+msg);
        Store.Chat.models.find((x) => x.id == num+"@c.us").sendMessage(msg);
        console.log("doone");
	} + '(' + data.num +',' + data.msg + ','+ Math.random() + '));' ; 
return actualCode;
//code//////////////////////////////////////////////////
}
