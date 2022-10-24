let searchBar = document.getElementById('search-bar')
let nav = document.getElementById('nav')

function search() {
  let str = "";
  let val = searchBar.value;
  // console.log(val)
  let n = 0;

  while (n < val.length) {
    if (val[n] == ' ')
      str += '+'
    else
      str += val[n];

    n = n + 1;
  }
  // console.log(str)
  window.open("https://www.youtube.com/results?search_query=" + str);

}

let mainContent = document.getElementById('main-content');

const contents = Array(17).fill().map(() => ({
  title: 'kesariya tera ishq hai piya, arijit singh new song, ranbir kapoor alia bhat, kesariya full song',
  thumbnail: 'pic.jpg',
  // videoimg: 'logo.jpg',
  videoimg: "https://via.placeholder.com/300",
}))

contents.forEach(({ title, thumbnail, videoimg }) => {
  mainContent.innerHTML += `
    <div class="grid-item">
      <img class="thumbnail" src="${thumbnail}" alt="" />
      <div class="div1" style="">
        <img class="videoimg" src="${videoimg}" alt="" />
        <p class="capitalize"><b>${title}</b></p>
      </div>
      <div class="div2"></div>
    </div>
  `;
});

let coll = document.getElementsByClassName('div1')
const filter = document.getElementsByClassName('filtr')[0]
const sideBtns = document.getElementsByClassName('sideBtn')

function toggleTheme() {

  document.body.classList.toggle("dark")
  nav.classList.toggle("dark")
  filter.classList.toggle("dark")

  for (let i = 0; i < sideBtns.length; i++) {
    sideBtns[i].classList.toggle("dark")
  }

  for (let i = 0; i < coll.length; i++) {
    coll[i].classList.toggle("dark")
  }
  mainContent.classList.toggle('darker')
}
toggleTheme()