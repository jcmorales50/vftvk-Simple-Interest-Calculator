function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;    
    var years = document.getElementById("years").value;

    var interest = principal * years * rate/100;
    var today = new Date();
    var year = parseInt(today.getFullYear()) + parseInt(years);

    if (principal !="" & principal > 0) {
        document.getElementById("result").innerHTML = '<hr>If you deposit <mark>' + principal + '</mark>,<br>at an interest rate of <mark>' + rate + '%</mark>.<br> You will receive an amount of <mark>' + interest + '</mark>,<br> in the year <mark>' + year + '</mark><hr><br>';        
  
    } else alert("Enter a positive principal amount");

}

function slider_update()
{
    var rate = document.getElementById("rate");
    var rate_text = document.getElementById("rate_text");

    var valor = parseFloat(rate.value).toFixed(2);
    if (valor < 10) {
        valor = "0" + valor;
    }

    rate_text.innerHTML = valor +"%"; 
}

function clean ()
{
    document.getElementById("result").innerHTML = "";
}
        