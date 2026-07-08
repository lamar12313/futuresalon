const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const notes = document.getElementById("notes").value;

    const message =
`🌸 *New Booking - Future Beauty Salon*

👤 Name: ${name}

📞 Phone: ${phone}

💄 Service: ${service}

📅 Date: ${date}

🕒 Time: ${time}

📝 Notes: ${notes}`;

    const whatsapp =
`https://wa.me/966501883588?text=${encodeURIComponent(message)}`;

    window.open(whatsapp, "_blank");

});