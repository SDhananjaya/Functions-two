function data(){
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;

    document.getElementById("mini").innerHTML="result is:"+(parseInt(a)-(parseInt(b)));

    
   // window.alert("Addition of"+a+","+b+" is :"+(parseInt(a)+(parseInt(b))));
}