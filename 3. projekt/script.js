/* MODE */

const btnLight = document.querySelector(".light");
const btnDark = document.querySelector(".dark");

const body = document.querySelector("body");
const header = document.querySelector("header");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const submit = document.querySelector(".submit");
const heading1 = document.querySelectorAll("h1");
const input = document.querySelectorAll("input");
const scroll = document.querySelector("#scrollToTop");
const footer = document.querySelector("footer");
const stika = document.querySelectorAll(".stika");
const passwordInputs = document.querySelectorAll(".password-input");
const paragraphText = document.querySelector(".result-text");
const menuIcon = document.querySelector(".menu-icon");
const hamburgerIcon = document.querySelector(".fa-solid");
const menuList = document.querySelector("nav");

btnLight.addEventListener("click", () => {
  body.style.color = "rgb(43, 160, 255)";
  header.style.backgroundColor = "rgb(43, 160, 255)";
  light.style.backgroundColor = "rgb(43, 160, 255)";
  dark.style.backgroundColor = "rgb(43, 160, 255)";
  submit.style.backgroundColor = "rgb(43, 160, 255)";
  scrollToTop.style.backgroundColor = "rgb(43, 160, 255)";
  footer.style.backgroundColor = "rgb(43, 160, 255)";

  heading1.forEach((heading1) => {
    heading1.style.backgroundColor = "rgb(43, 160, 255)";
  });

  input.forEach((input) => {
    input.style.borderBottom = "2px solid rgb(43, 160, 255)";
  });
});

btnDark.addEventListener("click", () => {
  body.style.color = "rgb(0, 48, 87)";
  header.style.backgroundColor = "rgb(0, 48, 87)";
  light.style.backgroundColor = "rgb(0, 48, 87)";
  dark.style.backgroundColor = "rgb(0, 48, 87)";
  submit.style.backgroundColor = "rgb(0, 48, 87)";
  scrollToTop.style.backgroundColor = "rgb(0, 48, 87)";
  footer.style.backgroundColor = "rgb(0, 48, 87)";

  heading1.forEach((heading1) => {
    heading1.style.backgroundColor = "rgb(0, 48, 87)";
  });

  input.forEach((input) => {
    input.style.borderBottom = "2px solid rgb(0, 48, 87)";
  });
});

/* PICTURE SCALE */

stika.forEach((stika) => {
  stika.addEventListener("mouseenter", () => {
    stika.style.transform = "scale(1.2)";
  });

  stika.addEventListener("mouseleave", () => {
    stika.style.transform = "scale(1)";
  });
});

class twoContentChecker {
  constructor(twoHTMLtags) {
    this.twoHTMLtags = twoHTMLtags;
  }

  /* PASSWORD */

  getInputContent = (input) => {
    return input.value;
  };

  insertContent = (htmlTag, content) => {
    htmlTag.textContent = content;
  };

  addClass = (htmlTag, className) => {
    htmlTag.classList.add(className);
  };

  removeClass = (htmlTag, className) => {
    htmlTag.classList.remove(className);
  };

  htmlTagCleaner = (input1Value, input2Value, htmlTag) => {
    if (input1Value == "" && input2Value == "") {
      htmlTag.textContent = "";
    }
  };
}

const inputChecker = new twoContentChecker(passwordInputs);

inputChecker.twoHTMLtags.forEach((oneInput) => {
  oneInput.addEventListener("input", () => {
    const password1Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[0]
    );
    const password2Value = inputChecker.getInputContent(
      inputChecker.twoHTMLtags[1]
    );

    if (password1Value == password2Value) {
      inputChecker.insertContent(paragraphText, "Hesla jsou shodné.");
      inputChecker.addClass(paragraphText, "valid");
      inputChecker.removeClass(paragraphText, "invalid");
    } else {
      inputChecker.insertContent(paragraphText, "Hesla nejsou shodné.");
      inputChecker.addClass(paragraphText, "invalid");
      inputChecker.removeClass(paragraphText, "valid");
    }

    inputChecker.htmlTagCleaner(password1Value, password2Value, paragraphText);
  });
});

/* SCROLL UP */

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* MENU ICON */

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] == "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
