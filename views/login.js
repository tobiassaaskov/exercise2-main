document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user"); // vi ønsker at få vores item fra vores key, som er user
  if (user) {
  // hvis der findes en user
    location.href = "/"; // bliver vi sendt til index html siden
  }; 

  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
   

    let body = {
      email: email,
      password: password
  }
    /*
    const user = {
      email: email,
      password: password,
    };
    */
    
    fetch("http://localhost:3000/customer/login", {
      method: 'POST',
        body: JSON.stringify(body),
        headers:{          
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        //vi sender vores user videre i body som en streng således at vores server kan forstå det
      })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          // localStorage.setItem("user", JSON.stringify(user)); // vi laver en ny række i locastorage, som indeholder to argumenter, som er hhv. key ("user") og value (vores json objekt).
          // location.href = `/?email=${email}`;
          window.alert(response)
        } else {
          window.alert("Ugyldig e-mailadresse eller adgangskode."); // hvis brugeren skriver noget forkert, udfører vi en window alert at oplysningerne er forkerte
        }
      })
      .catch((err) => {
        // her "fanger" vi eventuelle fejl
        window.alert(err); // hvis noget går galt, fortæller vi brugeren, at noget er gået galt via en window alert
      })
  });
});
