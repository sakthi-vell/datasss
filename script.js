function go(event) {
    event.preventDefault();

    // name
    let username = document.getElementById("name").value;
    let span = document.getElementById("nameerror");
    if (username !== "" && /^[A-Z/s]+$/.test(username)) {
        span.textContent = "  ";
        span.style.color = "black";

    }
    else {

        span.textContent = " ERROR : enter the name in uppercase";
        span.style.color = "red";
    }
    //age
    let AGE = document.getElementById("age").value;
    let age1 = document.getElementById("ageerror");
    if (AGE > 18) {
        age1.textContent = "  ";
        age1.style.color = "black";

    }
    else {

        age1.textContent = "  ERROR: insert the number  18 above ";
        age1.style.color = "red";
    }


    // Mail

    let EMAIL = document.getElementById("email").value;
    let aa = document.getElementById("mailerror");
    if (EMAIL !== "" && /^[a-z]+$/.test(EMAIL)) {
        aa.textContent = "  ";
        aa.style.color = "black";

    }
    else {

        aa.textContent = "ERROR : enter the mail - id in lowercase";
        aa.style.color = "red";
    }

    // number
    let NUMBER1 = document.getElementById("number1").value;
    let bb = document.getElementById("numerror");
    if (NUMBER1 !== "") {
        bb.textContent = "  ";
        bb.style.color = "black";

    }
    else {

        bb.textContent = "  ERROR: insert the number ";
        bb.style.color = "red";
    }

    // number2
    let number2 = document.getElementById("number2").value;
    let cc = document.getElementById("numerror2");
    if (number2 !== "") {

        cc.textContent = "  ";
        cc.style.color = "black";

    }
    else {

        cc.textContent = "  ERROR: insert the number ";
        cc.style.color = "red";
    }
    //  HIGHT
    let HEIGHT = document.getElementById("height").value;
    let hhh = document.getElementById("highterror");

    if (HEIGHT >= 150) { }
    else {
        hhh.textContent = " ERROR: enter  the  valid height";
        hhh.style.color = "red";
    }

    // weight
    let WEIGHT = document.getElementById("weight").value;
    let w = document.getElementById("wighterror");

    if ((0 < WEIGHT) && (WEIGHT <= 100)) { console.log("HI") }
    else {
        w.textContent = "  ERROR: enter  the  valid weight ";
        w.style.color = "red";
    }
    // address
    let ADDRESS = document.getElementById("address").value;
    let dd = document.getElementById("addresserror");
    if (ADDRESS !== " " && /^[A-Za-z0-9/s]+$/.test(ADDRESS)) {

        dd.textContent = "   ";
        dd.style.color = "black";
        console.log("vhbdhf");

    }
    else {
        dd.textContent = " ERROR: insert the address ";
        dd.style.color = "red";
        console.log("sakhti");
    }



    // pincode
    let PINCODE = document.getElementById("b").value;
    let ee = document.getElementById("berror");
    if (PINCODE !== "" && /^[0-9]+$/.test(PINCODE)) {
        ee.textContent = "  ";
        ee.style.color = "black";

    }
    else {

        ee.textContent = "  ERROR: insert valid pincode  ";
        ee.style.color = "red";
    }

    //   district
    let vel = ["tirupur", "coimbatore", "erode", "trichy", "madurai", "chennai", "salem"];

    let DISTRICT = document.getElementById("dist").value.toLowerCase();
    let ff = document.getElementById("derror");
    if (vel.includes(DISTRICT)  ) {
        ff.textContent = ""
        ff.style.color = "green"
    }
    else {
        ff.textContent = "ERROR: insert the valid district ";
        ff.style.color = "red";
    }


    document.getElementById("successMsg").innerHTML = "form completed successfully";

}

