function bill()
{
    let a , b , c , d , e ,d1 , t; 
    a=document.getElementById("get1").value
    b=Number(document.getElementById("get2").value)
    c=Number(document.getElementById("get3").value)
    d=Number(document.getElementById("get4").value)
    e=b*c
    d1=e*(d/100)
    t=e-d1;
    document.getElementById("show1").innerHTML=a
    document.getElementById("show2").innerHTML=e

    document.getElementById("show3").innerHTML=d1
    document.getElementById("show4").innerHTML=t
}

function empty()
{
        
    document.getElementById("show1").innerHTML=""
    document.getElementById("show2").innerHTML=""

    document.getElementById("show3").innerHTML=""
    document.getElementById("show4").innerHTML=""

}