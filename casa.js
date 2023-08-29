const reviewForm = document.getElementById("reviewForm");
const confirmationMessage = document.getElementById("confirmationMessage");
const submittedComment = document.getElementById("submittedComment");
const commentText = document.getElementById("commentText");

reviewForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const comment = document.getElementById("comment").value;

  // Update submitted comment section
  commentText.textContent = `Rating: ${'★'.repeat(rating)}\n${comment}\n- ${name}`;
  submittedComment.classList.remove("hidden");

  // Simulate sending data to a server
  setTimeout(function() {
    reviewForm.reset();
    confirmationMessage.classList.remove("hidden");
    setTimeout(function() {
      confirmationMessage.classList.add("hidden");
    }, 3000);
  }, 1000);
});




const shareBtn = document.querySelector(".share-btn");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

shareBtn.addEventListener("click", () => {
  if (card1.getAttribute("data-toggle1") === "true") {
    card1.setAttribute("data-toggle1", false);
    card2.setAttribute("data-toggle2", false);
    card3.setAttribute("data-toggle3", false);
    card4.setAttribute("data-toggle4", false);
  } else if (card1.getAttribute("data-toggle1") === "false") {
    card1.setAttribute("data-toggle1", true);
    card2.setAttribute("data-toggle2", true);
    card3.setAttribute("data-toggle3", true);
    card4.setAttribute("data-toggle4", true);
  }
});