// Animation function for more than one section
export const AnimatePage = (scroll) => {
  let serviceList = [...scroll.current.children];
  let winHeight = window.innerHeight / 1.5;
  serviceList.forEach((each) => {
    let itemTop = each.getBoundingClientRect().top;
    let itemBot = each.getBoundingClientRect().bottom;
    if (itemTop < winHeight) {
      each.classList.add("show");
      if (itemTop < 0 && itemBot < 100) {
        each.classList.remove("show");
      } else {
        each.classList.add("show");
      }
    } else {
      each.classList.remove("show");
    }
  });
};

// Animation function for just one section
export const AnimateOneSection = (scrollOne) => {
  let serviceList = scrollOne.current;
  let winHeight = window.innerHeight / 1.5;
  let itemTop = serviceList.getBoundingClientRect().top;
  let itemBot = serviceList.getBoundingClientRect().bottom;
  if (itemTop < winHeight) {
    serviceList.classList.add("show");
    if (itemTop < 0 && itemBot < 100) {
      serviceList.classList.remove("show");
    } else {
      serviceList.classList.add("show");
    }
  } else {
    serviceList.classList.remove("show");
  }
};
