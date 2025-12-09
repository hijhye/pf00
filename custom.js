gsap.registerPlugin(ScrollTrigger);

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

let proj4SubT = document.querySelector("#proj4SubT");
let proj4ListBoard = document.querySelector("#proj4ListBoard");

let proj4Text = document.querySelector("#proj4Text");
let proj4List = [
  {
    category: "디자인",
    subTitle: "생일축하해 포스터",
    text: "일러스트 포스터를 디자인해 제작했습니다.",
    imgsrc: "img/poster01.png",
  },
  {
    category: "영상",
    subTitle: "해커톤행사 스케치영상",
    text: "3일간 진행된 해커톤 행사의 스케치영상을 제작했습니다.",
    imgsrc: "img/video01.png",
  },
  {
    category: "영상",
    subTitle: "마을기업 다큐멘터리",
    text: "마을기업에 대한 이야기를 다큐멘터리로 제작했습니다.",
    imgsrc: "img/video02.png",
  },
  {
    category: "영상",
    subTitle: "음악회 스케치영상",
    text: "세계여행을 컨셉으로 진행된 음악회의 스케치영상을 제작했습니다.",
    imgsrc: "img/video03.png",
  },
  {
    category: "디자인",
    subTitle: "생중계용 레이아웃 디자인",
    text: "디스플레이 미래기술 포럼이라는 주제로 진행된 온오프라인 행사의 생중계용 레이아웃을 제작했습니다.",
    imgsrc: "img/design01.png",
  },
  {
    category: "디자인",
    subTitle: "캐릭터 디자인",
    text: "캐릭터 컨셉을 기획하고 디자인하여 컵을 제작했습니다.",
    imgsrc: "img/character.png",
  },
];

let card = "";

proj4List.forEach((item) => {
  card += `
              <li>
              <div></div>
                <h4>${item.category}</h4>
                <img src="${item.imgsrc}">
              </li>
  `;
});
proj4ListBoard.innerHTML = card;

let proj4ListAll = document.querySelectorAll("#proj4ListBoard li");
let totalCards = proj4ListAll.length;

console.log(proj4ListAll);
proj4ListAll.forEach((item, index) => {
  item.style.zIndex = totalCards - index;
  item.addEventListener("mouseenter", () => {
    proj4SubT.textContent = `${proj4List[index].subTitle}`;
    proj4Text.textContent = `${proj4List[index].text}`;
    item.style.transform =
      "perspective(800px) rotateY(-30deg) translateY(-100px)";
  });
  item.addEventListener("mouseleave", () => {
    item.style.transform = "perspective(800px) rotateY(-30deg) translateY(0px)";
  });
});

gsap.to("#proj4ListBoard", {
  x: "-1500px",
  scrollTrigger: {
    trigger: ".proj4",
    start: "top 10%",
    end: "+200%",
    scrub: 3,
    pin: true,
  },
});

const cursor01 = document.querySelector(".cursor01");
const cursor02 = document.querySelector(".cursor02");
const cursor03 = document.querySelector(".cursor03");
const cursor04 = document.querySelector(".cursor04");
const allCursors = [cursor01, cursor02, cursor03, cursor04];

document.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX - 15;
  let mouseY = e.clientY - 15;
  let activeCursor = null;

  if (e.target.closest("header") || e.target.closest(".intro")) {
    activeCursor = cursor01;
  } else if (
    e.target.closest(".proj1") ||
    e.target.closest(".proj2") ||
    e.target.closest(".proj3")
  ) {
    activeCursor = cursor02;
  } else if (e.target.closest(".proj4")) {
    activeCursor = cursor03;
  } else if (e.target.closest(".outro")) {
    activeCursor = cursor04;
  }

  allCursors.forEach((cursor) => {
    if (cursor) cursor.style.display = "none";
  });

  if (activeCursor) {
    activeCursor.style.display = "block";
    activeCursor.style.left = mouseX + "px";
    activeCursor.style.top = mouseY + "px";
  }
});

let bubbles = document.querySelectorAll(".bubble");
bubbles.forEach((bubble) => {
  let randomX = Math.random() * 100;
  let randomY = Math.random() * 100;
  let randomScale = Math.random();
  bubble.style.left = `${randomX}%`;
  bubble.style.top = `${randomY}%`;
  bubble.style.transform = `scale(${randomScale})`;
});
