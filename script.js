const storiesjson = [
  {
    username: 'yash',
    dp: 'https://i.pinimg.com/564x/3b/95/0d/3b950d65116f0ecfa1d84516b929e6ee.jpg',
    profile:
      'https://i.pinimg.com/564x/0d/e2/1b/0de21b2931fcfd41e67d161eab554cd6.jpg',
  },
  {
    username: 'pikachu',
    dp: 'https://i.pinimg.com/236x/56/89/cb/5689cbbbec5056f7272d196fff4c4c26.jpg',
    profile:
      'https://i.pinimg.com/236x/f8/9b/be/f89bbea135ee0db021d447fa2aba8600.jpg',
  },
  {
    username: 'Sizuka',
    dp: 'https://i.pinimg.com/236x/27/b5/ce/27b5ce532eefe91a39960267f48bf44c.jpg',
    profile:
      'https://i.pinimg.com/564x/ae/83/d0/ae83d08b88b6c36ad3490abeb9838f00.jpg',
  },
  {
    username: 'Doremon',
    dp: 'https://i.pinimg.com/564x/de/fe/ac/defeac12762d7603c274e4cd377e572a.jpg',
    profile:
      'https://i.pinimg.com/236x/b7/a8/b6/b7a8b6de9b0ae6023a5c8539636b5f1c.jpg',
  },
  {
    username: 'sinchain',
    dp: 'https://i.pinimg.com/736x/7e/ed/99/7eed9926be88cf56e377577574f48e5f.jpg',
    profile:
      'https://i.pinimg.com/564x/bc/a7/6b/bca76b7272145daa458e99249b3722cc.jpg',
  },
  {
    username: 'Nobita',
    dp: 'https://i.pinimg.com/564x/92/b9/8b/92b98b4f35cf7bc605ef9b3697a08f62.jpg',
    profile:
      'https://i.pinimg.com/564x/9e/ef/3e/9eef3e421f514aae40269a5f9b002c26.jpg',
  },
];

const storiyan = document.querySelector('.storiyan');
storiesjson.forEach((elem, i) => {
  storiyan.innerHTML += ` <div class="story">
            <img
              src="${elem.dp}"
              alt="${i}"
            />
          </div>`;
});

const full = document.querySelector('#full');
const progress = document.querySelector('.progress');
const fullimg = document.querySelector('#full img');
const fullh5 = document.querySelector('#full h5');

var growth = 0;

storiyan.addEventListener('click', (event) => {
  if (event.target.localName == 'img') {
    full.style.display = 'block';
    full.style.backgroundImage = `url(${
      storiesjson[event.target.alt].profile
    })`;

    const clear = setInterval(() => {
      growth++;
      progress.style.width = growth + '%';
      console.log(growth);
    }, 30);

    setTimeout(() => {
      clearInterval(clear);
      growth = 0;
      full.style.display = 'none';
    }, 3000);
    fullh5.innerHTML = storiesjson[event.target.alt].username;
    fullimg.setAttribute('src', storiesjson[event.target.alt].dp);
  }
});

const posts = [
  {
    username: 'Yash',
    dp: 'https://i.pinimg.com/564x/3b/95/0d/3b950d65116f0ecfa1d84516b929e6ee.jpg',
    post: 'https://i.pinimg.com/474x/8b/02/f9/8b02f94b2933ebff8b03f5dc53c53be7.jpg',
  },
  {
    username: 'Pikachu',
    dp: 'https://i.pinimg.com/236x/56/89/cb/5689cbbbec5056f7272d196fff4c4c26.jpg',
    post: 'https://i.pinimg.com/236x/f8/9b/be/f89bbea135ee0db021d447fa2aba8600.jpg',
  },
  {
    username: 'Sizuka',
    dp: 'https://i.pinimg.com/236x/27/b5/ce/27b5ce532eefe91a39960267f48bf44c.jpg',
    post: 'https://i.pinimg.com/564x/ae/83/d0/ae83d08b88b6c36ad3490abeb9838f00.jpg',
  },
  {
    username: 'Doremon',
    dp: 'https://i.pinimg.com/564x/de/fe/ac/defeac12762d7603c274e4cd377e572a.jpg',
    post: 'https://i.pinimg.com/564x/2f/da/2e/2fda2ed191240e18a69f3490ddfa8e1d.jpg',
  },
  {
    username: 'Sinchain',
    dp: 'https://i.pinimg.com/736x/7e/ed/99/7eed9926be88cf56e377577574f48e5f.jpg',
    post: 'https://i.pinimg.com/236x/f7/fb/73/f7fb7365317ea8839d8fd47582973504.jpg',
  },
  {
    username: 'Nobita',
    dp: 'https://i.pinimg.com/564x/92/b9/8b/92b98b4f35cf7bc605ef9b3697a08f62.jpg',
    post: 'https://i.pinimg.com/736x/0e/7b/d3/0e7bd39c9f4cb0308194c5772376a489.jpg',
  },
];

const postdiv = document.querySelector('.postdiv');

posts.forEach((elem, i) => {
  postdiv.innerHTML += `  <div class="post">
            <div class="username">
              <img
                src="${elem.dp}"
                alt=""
              />
              <h4>${elem.username}</h4>
              <i class="ri-more-2-fill"></i>
            </div>
            <img
              src="${elem.post}"
              alt=""
            />
              <div class="likes">
         <h4> <i class="ri-heart-fill"></i></h4>
              <i class="ri-chat-3-line"></i>
              <i class="ri-send-plane-line"></i>
              <i class="ri-bookmark-line bookmark"></i><br />
              <span></span>
            </div>
          </div>`;
});
var count = 0;
const postss = document.querySelectorAll('.post');
const none = document.querySelectorAll('.likes h4');
const counts = document.querySelectorAll('.likes span');

postss.forEach((element, i) => {
  element.addEventListener('dblclick', (event) => {
    const love = document.createElement('h1');
    love.classList.add('love');
    love.innerHTML = `<i class="ri-heart-3-fill"></i>`;
    love.style.display = 'block';
    element.appendChild(love);
    counts[i].innerHTML = `Likes ${count + 1}`;
    setTimeout(() => {
      love.classList.remove('love');
      love.style.display = 'none';
    }, 500);
    none[i].style.color = 'red';
    none.forEach((none) => {
      none.addEventListener('click', () => {
        none.style.color = 'black';
      });
    });
  });
});
