
$(document).ready(function () {
    $("#unum").keyup(function () {
        $(".pak").css("display", this.value == 1 ? "block" : "none");
        $(".con1").css("display", this.value == 1 ? "none" : "block");
    });
});
function convertp2f(){
    var pkr = document.getElementById("amo").value;

    var usd =  pkr*0.00567710;
    var euro = pkr*0.005006;
    var riy  = pkr*0.0212919;
    var yu    = pkr*0.0358949;
    var dir =  pkr*0.0208519;
    var ye  =  pkr*0.653107;
    var pou =   pkr* 0.00417152;
    var ind =   pkr*0.423439 ;

    document.getElementById("ous").value=usd.toFixed(3);
    document.getElementById("oeu").value=euro.toFixed(3);
    document.getElementById("opo").value=pou.toFixed(3);
    document.getElementById("oyen").value=ye.toFixed(3);
    document.getElementById("osau").value=riy.toFixed(3);
    document.getElementById("oyuan").value=yu.toFixed(3);
    document.getElementById("ouae").value=dir.toFixed(3);
    document.getElementById("oinr").value=ind.toFixed(3);
}
$(document).ready(function () {
    $("#unum").keyup(function () {
        $(".foreign").css("display", this.value == 2 ? "block" : "none");
        $(".con1").css("display", this.value == 2 ? "none" : "block");
    });
});
function convertf2p()
{
    var forg= document.getElementById("amor").value;

var usdpk= forg*185.704224;
var eupk=forg*200.23175;
var popk=forg*232.43459;
var yepk=forg*1.5341049;
var rypk=forg*47.065752;
var yupk=forg*27.947992;
var drpk=forg*48.06038;
var inpk=forg*2.3671854;

document.getElementById("upk").value=usdpk.toFixed(3);
document.getElementById("epk").value=eupk.toFixed(3);
document.getElementById("ppk").value=popk.toFixed(3);
document.getElementById("yepk").value=yepk.toFixed(3);
document.getElementById("sapk").value=rypk.toFixed(3);
document.getElementById("yupk").value=yupk.toFixed(3);
document.getElementById("dmpk").value=drpk.toFixed(3);
document.getElementById("inpk").value=inpk.toFixed(3);


}
