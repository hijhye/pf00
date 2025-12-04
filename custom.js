let proj1Pre = document.querySelector("#proj1Pre");
let proj1Next = document.querySelector("#proj1Next");
let proj1SubT = document.querySelector("#proj1SubT");
let proj1Text = document.querySelector("#proj1Text");
let proj1Img = document.querySelector("#proj1Img");
let proj1siteLink = document.querySelector("#proj1siteLink");
let proj1liAll = document.querySelectorAll(".proj1 li");

let proj1List = [
  {
    subTitle: "EV GAME",
    text: "자바스크립트를 활용하여 숫자맞추기 게임을 만들었습니다.",
    imgsrc: "img/js01.png",
    src: "https://hijhye.github.io/EVgame/",
  },
  {
    subTitle: "TODOO",
    text: "자바스크립트를 활용하여 투두 리스트를 만들었습니다.",
    imgsrc: "img/js02.png",
    src: "https://hijhye.github.io/TODOO/",
  },
  {
    subTitle: "WEATHER MOOD",
    text: "자바스크립트와 open weather api를 활용하여 날씨 정보 사이트를 구현했습니다.",
    imgsrc: "img/js03.png",
    src: "https://hijhye.github.io/weatherMood/",
  },
  {
    subTitle: "LET'S MOVIE",
    text: "자바스크립트와 TMDB api를 활용하여 카테고리별 영화목록, 영화별 상세 설명, 검색 기능을 구현했습니다.",
    imgsrc: "img/js04.png",
    src: "https://hijhye.github.io/movie/",
  },
];

let i = 0;
Pro1render();
proj1Next.addEventListener("click", function () {
  if (i < proj1List.length - 1) {
    i++;
  } else if (i == proj1List.length - 1) {
    i = 0;
  }
  Pro1render();
});

proj1Pre.addEventListener("click", function () {
  if (i > 0) {
    i--;
  } else if (i == 0) {
    i = proj1List.length - 1;
  }
  Pro1render();
});

setInterval(function () {
  if (i < proj1List.length - 1) {
    i++;
  } else if (i == proj1List.length - 1) {
    i = 0;
  }
  Pro1render();
}, 4000);

proj1liAll.forEach((proj1li, index) => {
  proj1li.addEventListener("click", function () {
    i = index;
    proj1liAll.forEach((proj1li) => {
      proj1li.classList.remove("on");
    });
    proj1li.classList.add("on");
    Pro1render();
  });
});

function Pro1render() {
  proj1liAll.forEach((proj1li) => {
    proj1li.classList.remove("on");
  });
  proj1liAll[i].classList.add("on");
  proj1SubT.textContent = `${proj1List[i].subTitle}`;
  proj1Img.src = `${proj1List[i].imgsrc}`;
  proj1Text.textContent = `${proj1List[i].text}`;
  proj1siteLink.href = `${proj1List[i].src}`;
}

document.addEventListener("mousemove", (e) => {
  let mouseX = e.pageX - 15;
  let mouseY = e.pageY - 15;

  let cursor = document.querySelector(".cursor02");
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
  cursor.style.display = "block";
});

let proj2li = document.querySelectorAll(".proj2 li");
let proj2TextwrapAll = document.querySelectorAll(".proj2 .textWrap");
console.log(proj2TextwrapAll);
proj2li.forEach((item, index) => {
  item.addEventListener("mouseenter", function () {
    proj2li.forEach((item) => {
      item.style.width = "15%";
    });
    item.style.width = "40%";
    console.log(index);
    proj2TextwrapAll.forEach((proj2Textwrap) => {
      proj2Textwrap.style.display = "none";
    });
    proj2TextwrapAll[index].style.display = "flex";
  });
});
proj2li.forEach((item) => {
  item.addEventListener("mouseleave", function () {
    proj2li.forEach((item) => {
      item.style.width = "20%";
    });
    proj2TextwrapAll.forEach((proj2Textwrap) => {
      proj2Textwrap.style.display = "none";
    });
  });
});
