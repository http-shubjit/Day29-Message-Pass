const messageinput=document.getElementById("messageinput")
messageinput.addEventListener("keydown",function(event){
if(event.key=="Enter"){
    getmessage();
               }
})
function getmessage(){
    document.getElementById("messageoutput").innerHTML=messageinput.value;
    messageinput.value="";
}