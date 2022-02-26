
$(document).ready(function () {
    $("#unum").keyup(function () {
        $(".pak").css("display", this.value == 1 ? "block" : "none");
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

    document.getElementById("ous").value=usd;
    document.getElementById("oeu").value=euro;
    document.getElementById("opo").value=pou;
    document.getElementById("oyen").value=ye;
    document.getElementById("osau").value=riy;
    document.getElementById("oyuan").value=yu;
    document.getElementById("ouae").value=dir;
    document.getElementById("oinr").value=ind;
}
$(document).ready(function () {
    $("#unum").keyup(function () {
        $(".foreign").css("display", this.value == 2 ? "block" : "none");
    });
});
function convertf2p()
{
    var forg= document.getElementById("amor").value;

var usdpk= forg*176.50298;
var eupk=forg*200.23175;
var popk=forg*239.91344;
var yepk=forg*1.5341049;
var rypk=forg*47.065752;
var yupk=forg*27.947992;
var drpk=forg*48.06038;
var inpk=forg*2.3671854;

document.getElementById("upk").value=usdpk;
document.getElementById("epk").value=eupk;
document.getElementById("ppk").value=popk;
document.getElementById("yepk").value=yepk;
document.getElementById("sapk").value=rypk;
document.getElementById("yupk").value=yupk;
document.getElementById("dmpk").value=drpk;
document.getElementById("inpk").value=inpk;


}
