

    var clicks = 0;
    function hello() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

    function buy() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}


