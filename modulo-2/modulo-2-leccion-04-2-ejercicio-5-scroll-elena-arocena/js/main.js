"use strict";

const div = document.querySelector('.div')

window.addEventListener("scroll", () => {
  if (window.scrollY>250) {
      div.classList.add("pink");
      div.classList.remove("blue");

  } else  {
      div.classList.add("blue");
      div.classList.remove("pink");
    }
  }
)


text.addEventListener('mouseover', () => {
  console.log(text.innerHTML += 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, aliquid vitae. Mollitia exercitationem quis labore molestias quo, ipsum quibusdam, provident, ipsam ex fugit architecto atque facilis veritatis ipsa quod excepturi.'); 
});