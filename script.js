function validateForm() {
  let name = document.forms["contact-form"]["name"].value;
  let textField = document.forms["contact-form"]["subject"].value;
  let email = document.forms["contact-form"]["email"].value;

  if (name == "") {
    alert("You must enter your first and last name");
    return false;
  }
  if (email == "") {
    alert("You must enter a valid email");
    return false;
  }

  if (textField == "") {
    alert("You must fill in a message");
    return false;
  }
}

function generateQuote() {
  let quotes = [
    '"I highly highly recommend this program to the first year class because having a mentor firstly allows you to meet more people at CMU and allows you attend so many cool networking events that can connect you to some really great opportunities and show you options at CMU that you may not have known about."',
    '"I think it was a good way to connect with other IS students, especially given that many students were remote"',
    '"my mentor helped me a lot in experiencing my first year of college"',
    '"Yes, it was a fun experience getting to know other people in the IS program I normally would not be connected to!"',
    '"I would recommend it as it allows you to connect with an upperclassman who can provide you tips and helpful advice. The mentors also have greater knowledge of different opportunities that they can help you find or learn about. "',
  ];
  let currQuote = document.getElementById("quote").innerHTML;
  document.getElementById("quote").innerHTML = currQuote.replace(
    currQuote,
    quotes[Math.floor(Math.random() * quotes.length)]
  );
}
