console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const postElement = document.createElement("article");
postElement.classList.add("post");

const postContentElement = document.createElement("p");
postContentElement.classList.add("post__content");
postContentElement.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooterElement = document.createElement("footer");
postFooterElement.classList.add("post__footer");

const postUsernameElement = document.createElement("span");
postUsernameElement.classList.add("post__username");
postUsernameElement.textContent = "@username2";

const postLikeButtonElement = document.createElement("button");
postLikeButtonElement.classList.add("post__button");
postLikeButtonElement.textContent = "♥ Like";
postLikeButtonElement.addEventListener("click", handleLikeButtonClick);

postFooterElement.appendChild(postUsernameElement);
postFooterElement.appendChild(postLikeButtonElement);

postElement.appendChild(postContentElement);
postElement.appendChild(postFooterElement);

document.body.appendChild(postElement);
