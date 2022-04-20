// vi anvender addEventListener for at bruge vores input til at gøre noget nyt
document.addEventListener("DOMContentLoaded", (event) => {
  
    document.getElementById("inputForm").addEventListener("submit", (event) => {
      event.preventDefault();

      // vi laver variabler til vores forskellige user inputs
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value; 
      const password = document.getElementById("password").value;
  
      // vi laver en variabel, som indeholder et user objekt. Herefter vi json ved anvende {}, og derefter giver objektet en række variabler
     
  
      // vi kalder på vores URL, og herefter giver den vores ønskede metode, som er "GET"
      fetch("http://localhost:3000/customer/user/create", {
        method: 'POST',
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }),
        headers:{          
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        //vi sender vores user videre i body som en streng således at vores server kan forstå det
      })
        .then((response) => response.json()) // vi laver et promise, som tager strengen fra serveren, og laver det til json
        .then((response) => {
          // vores repsonse er nu et json objekt
          if (response) {
            // hvis der er succesfuldt response bliver vi sendt til vores login html side
           console.log(response);
            // location.href = "/customer/index.html";
          }
        })
        .catch((err) => {
          // her "fanger" vi eventuelle fejl
          window.alert(err); // hvis noget går galt, fortæller vi brugeren, at noget er gået galt via en window alert
        });
    });
  });

