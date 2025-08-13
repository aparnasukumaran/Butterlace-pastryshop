
// active navbar
let nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
}

// __________________________________________________________________

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  })
})

// __________________________________________________________________

// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 127, 100);
  counter("count2", 100, 576, 250);
  counter("count3", 0, 420, 300);
  counter("count4", 0, 170, 200);
});

// __________________________________________________________________

// scrol reveal
ScrollReveal({
  // reset : true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.text-content h2,.text-center h2', { origin: 'top' });
ScrollReveal().reveal('.card', { origin: 'bottom' });
ScrollReveal().reveal('.left-column,.first-box,.para1', { origin: 'left' });
ScrollReveal().reveal('.right-column,.second-box', { origin: 'right' });

// __________________________________________________________________

//subscription alert
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("emailInput").value.trim();

  if (email && document.getElementById("emailInput").checkValidity()) {
    alert("🎉 Thank you for subscribing!");
    this.reset();
  }
});

// __________________________________________________________________

// order
document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".orderBtn");
  const modal = document.getElementById("orderModal");
  const closeModal = document.getElementById("closeModal");
  const orderForm = document.getElementById("orderForm");

  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    orderForm.reset();
  });

  // Close modal when clicking outside the box
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      orderForm.reset();
    }
  });

  // Close modal & reset form on submit
  orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = orderForm.querySelector("[name='name']").value;
    const email = orderForm.querySelector("[name='email']").value;
    const phone = orderForm.querySelector("[name='phone']").value;
    const item = orderForm.querySelector("[name='item']").value;
    const quantity = orderForm.querySelector("[name='quantity']").value;
    const flavor = orderForm.querySelector("[name='flavor']").value;
    const customMessage = orderForm.querySelector("[name='customMessage']").value;
    const date = orderForm.querySelector("[name='date']").value;
    const time = orderForm.querySelector("[name='time']").value;
    const address = orderForm.querySelector("[name='address']").value;
    const payment = orderForm.querySelector("[name='payment']").value;

    // WhatsApp message
    const message = `
🍰 *New Order Request* 🍰

 Name: ${name}
 Email: ${email}
 Phone: ${phone}
 Item: ${item}
 Quantity: ${quantity}
 Flavor: ${flavor}
 Custom Message: ${customMessage}
 Delivery Date: ${date}
 Delivery Time: ${time}
 Address: ${address}
 Payment Method: ${payment}
`;


    const encodedMessage = encodeURIComponent(message);


    const phoneNumber = "7306214887";

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // Close modal and reset form
    modal.style.display = "none";
    orderForm.reset();
  });
});

// __________________________________________________________________

// read more
// first
document.getElementById("readMoreLink").addEventListener("click", function () {
  let moreText = document.getElementById("moreText");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    this.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    this.textContent = "Read More";
  }
});

// second
document.getElementById("readMoreLinktwo").addEventListener("click", function () {
  let moreTextTwo = document.getElementById("moreTextTwo");

  if (moreTextTwo.style.display === "none") {
    moreTextTwo.style.display = "inline";
    this.textContent = "Read Less";
  } else {
    moreTextTwo.style.display = "none";
    this.textContent = "Learn More";
  }
});

// third
document.getElementById("pointsBtn").addEventListener("click", function () {
  let pointsShow = document.getElementById("points");

  if (pointsShow.style.display === "none") {
    pointsShow.style.display = "inline";
    this.textContent = "Read Less";
  } else {
    pointsShow.style.display = "none";
    this.textContent = "Learn More";
  }
});


// seasonal menu
document.getElementById("learnBtn").addEventListener("click", function () {
  let menu = document.getElementById("seasonalMenu");

  if (menu.style.display === "none") {
    menu.style.display = "block";
    this.textContent = "Show Less";
  } else {
    menu.style.display = "none";
    this.textContent = "Learn More";
  }
});

