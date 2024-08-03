function cal() {
    let input=document.querySelector(".input");
    let txt=document.querySelector(".input").value;
    let totalcount=document.querySelector(".total");
    let remcount=document.querySelector(".rem");
    let maxlen=50;
    if (txt.length > maxlen) 
    {
        txt=txt.substring(0, maxlen);
        input.value=txt;
    }
    totalcount.innerText=txt.length;
    remcount.innerText=maxlen - txt.length;
}