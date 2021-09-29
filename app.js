
var btnTranslate = document.querySelector('#btn-click')
var txtInput = document.querySelector("#txt-Input")
var txtOutput = document.querySelector("#output")



btnTranslate.addEventListener("click", clickHandler) 
var murl ="https://api.funtranslations.com/translate/yoda.json"


function getTranslationUrl(text){
    return murl + "?" + "text=" + text

}

function errorHandler(error)
{
console.log('there is an error',error)
alert("something error")
}

function clickHandler(){
    var inputText = txtInput.value 


fetch (getTranslationUrl(inputText))
.then (response => response.json())


.then (json =>{
 var translatedText = json.contents.translated;
 txtOutput.innerText = translatedText;
})
.catch(errorHandler)
}