const storiesjson = [
  {
    username: 'yash',
    dp: 'https://i.pinimg.com/564x/3b/95/0d/3b950d65116f0ecfa1d84516b929e6ee.jpg',
    profile:
      'https://i.pinimg.com/474x/8b/02/f9/8b02f94b2933ebff8b03f5dc53c53be7.jpg',
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
      'https://i.pinimg.com/564x/78/ca/df/78cadfb8994a98fc79096a119a967c4f.jpg',
  },
  {
    username: 'Doremon',
    dp: 'https://i.pinimg.com/564x/de/fe/ac/defeac12762d7603c274e4cd377e572a.jpg',
    profile:
      'https://i.pinimg.com/236x/fc/3d/66/fc3d661b38433609e38f700cb6fc5560.jpg',
  },
  {
    username: 'sinchain',
    dp: 'https://i.pinimg.com/736x/7e/ed/99/7eed9926be88cf56e377577574f48e5f.jpg',
    profile:
      'https://i.pinimg.com/236x/f7/fb/73/f7fb7365317ea8839d8fd47582973504.jpg',
  },
  {
    username: 'Nobita',
    dp: 'https://i.pinimg.com/564x/92/b9/8b/92b98b4f35cf7bc605ef9b3697a08f62.jpg',
    profile:
      'https://i.pinimg.com/564x/7d/25/03/7d2503f48f22ec135cca7ecf779bf7f8.jpg',
  },
];

const storiyan = document.querySelector('.storiyan');
storiesjson.forEach((elem, i) => {
  storiyan.innerHTML += ` <div class="story">
            <img
              src="${elem.dp}"
              alt=""
            />
          </div>`;
});

const posts = [
  {
    username: 'Yash',
    dp: 'https://i.pinimg.com/564x/3b/95/0d/3b950d65116f0ecfa1d84516b929e6ee.jpg',
    post: 'https://i.pinimg.com/474x/8b/02/f9/8b02f94b2933ebff8b03f5dc53c53be7.jpg',
    heart: 'ri-heart-3-fill',
    
  },
  {
    username: 'Pikachu',
    dp: 'https://i.pinimg.com/236x/56/89/cb/5689cbbbec5056f7272d196fff4c4c26.jpg',
    post: 'https://i.pinimg.com/236x/f8/9b/be/f89bbea135ee0db021d447fa2aba8600.jpg',
    heart: 'ri-heart-3-fill',
    
  },
  {
    username: 'Sizuka',
    dp: 'https://i.pinimg.com/236x/27/b5/ce/27b5ce532eefe91a39960267f48bf44c.jpg',
    post: 'https://i.pinimg.com/564x/78/ca/df/78cadfb8994a98fc79096a119a967c4f.jpg',
    heart: 'ri-heart-3-fill',
    
  },
  {
    username: 'Doremon',
    dp: 'https://i.pinimg.com/564x/de/fe/ac/defeac12762d7603c274e4cd377e572a.jpg',
    post: 'https://i.pinimg.com/236x/fc/3d/66/fc3d661b38433609e38f700cb6fc5560.jpg',
    heart: 'ri-heart-3-fill',
    
  },
  {
    username: 'Sinchain',
    dp: 'https://i.pinimg.com/736x/7e/ed/99/7eed9926be88cf56e377577574f48e5f.jpg',
    post: 'https://i.pinimg.com/236x/f7/fb/73/f7fb7365317ea8839d8fd47582973504.jpg',
    heart: 'ri-heart-3-fill',
    
  },
  {
    username: 'Nobita',
    dp: 'https://i.pinimg.com/564x/92/b9/8b/92b98b4f35cf7bc605ef9b3697a08f62.jpg',
    post: 'https://i.pinimg.com/564x/7d/25/03/7d2503f48f22ec135cca7ecf779bf7f8.jpg',
    heart: 'ri-heart-3-fill',
    
  },
];

const postdiv = document.querySelector('.postdiv');

posts.forEach((elem) => {
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
            <div class="love"><i class="${elem.heart}"></i></div>
            <div class="likes">
              <i class="ri-heart-fill red"></i>
              <i class="ri-chat-3-line"></i>
              <i class="ri-send-plane-line"></i>
              <i class="ri-bookmark-line bookmark"></i><br />
              <span>Liked 20</span>
            </div>
          </div>`;
});

const post = document.querySelectorAll('.post');
const love = document.querySelector('.love');
const red = document.querySelector('.red');

post.forEach((elem) => {
  elem.addEventListener('dblclick', () => {
    love.style.scale = 1;
    red.style.color = 'red';

    setTimeout(() => {
      love.style.scale = 0;
    }, 2000);
    console.log('first');
  });
});

red.addEventListener("click",)