(() => {

  const mainWrap = document.querySelector(".main_wrap");
  const mainLeftBtn = document.querySelector(".main_left");
  const mainRightBtn = document.querySelector(".main_right");
  let mainNum = 1;

  const mainAutoSlide =  setInterval(() => {
    mainNum++;

    if(mainNum === 11){
      mainNum = 1;
    }

    mainWrap.style.backgroundImage = `url(./images/main/main_${mainNum}.jpg)`;
  }, 5000)

  const mainLeftHandler = () => {
    mainNum--;

    if(mainNum === 0){
      mainNum = 10;
    }

    mainWrap.style.backgroundImage = `url(./images/main/main_${mainNum}.jpg)`;
    clearInterval(mainAutoSlide);
  }

  const mainRightHandler = () => {  
    mainNum++;

    if(mainNum === 11){
      mainNum = 1;
    }

    mainWrap.style.backgroundImage = `url(./images/main/main_${mainNum}.jpg)`;
    clearInterval(mainAutoSlide);
  };

  mainRightBtn.addEventListener("click", mainRightHandler);
  mainLeftBtn.addEventListener("click", mainLeftHandler);

})();