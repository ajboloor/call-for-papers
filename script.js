var conferences = [
    { title: "Conference A", date: "2023-12-31T00:00:00" },
    { title: "Conference B", date: "2023-11-15T00:00:00" },
    { title: "Conference C", date: "2024-03-20T00:00:00" }
    // Add more conferences as needed
];

var conferencesDiv = document.getElementById("conferences");

conferences.forEach(function(conference) {
    var conferenceDiv = document.createElement("div");
    conferenceDiv.classList.add("conference");
    
    var titleElement = document.createElement("h2");
    titleElement.textContent = conference.title;
    conferenceDiv.appendChild(titleElement);
    
    var countdownElement = document.createElement("div");
    countdownElement.classList.add("countdown");
    conferenceDiv.appendChild(countdownElement);
    conferencesDiv.appendChild(conferenceDiv);

    var conferenceDate = new Date(conference.date).getTime();
    var countdown = setInterval(function() {
        var now = new Date().getTime();
        var distance = conferenceDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "EXPIRED";
        }
    }, 1000);
});
