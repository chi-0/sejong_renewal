const rightShorcut = document.querySelector(".right_shortcut");
const topBtn = document.querySelector(".top_btn");
const wrap = document.querySelector(".wrap");

const rightBtnActive = () => {
  const pageYOffset = scrollY;

  if (pageYOffset <= 200){
    rightShorcut.style.display = "none";
    topBtn.style.display = "none";
  }else {
    rightShorcut.style.display = "block";
    topBtn.style.display = "block";
  }
}


const scrollHandler = () => {
  rightBtnActive();
}

const topBtnHandler = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

rightBtnActive();

window.addEventListener("scroll", scrollHandler);
topBtn.addEventListener("click", topBtnHandler);