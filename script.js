function updateRate() {

    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rate + "%";

}

function compute() {

    var amount = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    interest = (amount * ( 1 + (rate/100) * years ) ) - amount;

    var d = new Date();
    var interest_year = d.getFullYear() + years;

    if (amount >= 1) {
        result = "If you deposit <mark>" + amount + "</mark>, </br>" +
        "at an interest rate of <mark>" + rate + "%</mark>. </br>" +
        "You will receive an amount of <mark>" + interest + "</mark>, </br>" +
        "in the year <mark>" + interest_year + "</mark>";
    } else {
        alert("Please insert Positive Number.");
        document.querySelector("#principal").focus();
    }
    
}
        