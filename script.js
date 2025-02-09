document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let guests = document.getElementById("guests").value;
    let diet = document.getElementById("diet").value;
    let alcohol = document.getElementById("alcohol").value;
    let song = document.getElementById("song").value;

    alert(`Thank you for RSVPing, ${name}!\nGuests: ${guests}\nDiet: ${diet}\nAlcohol: ${alcohol}\nSong Request: ${song}`);

    this.reset();
});
