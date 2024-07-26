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
             <div class="usertop"> <img
                src="${elem.dp}"
                alt=""
              />
              <h4>${elem.username}</h4></div>
              <i class="ri-more-2-fill"></i>
            </div>
            <img
              src="${elem.post}"
              alt=""
            />
              <div class="likes">
         <h4> <i class="ri-heart-fill"></i></h4>
              <i class="ri-chat-3-line chat"></i>
              <i class="ri-send-plane-line"></i>
              <i class="ri-bookmark-line bookmark"></i><br />
              <span></span>
            </div>
          </div>`;
  // ==----------------

  // -----------------------------
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
    none.forEach((none, i) => {
      none.addEventListener('click', () => {
        none.style.color = 'black';
        counts[i].innerHTML = '';
      });
    });
    // ---------------------------------------

    // -----------------------------------------
  });
  //

  //
});

const chat = document.querySelectorAll('.chat'); //button
const comments = document.querySelector('.comments');
const topLine = document.querySelector('.top-line');
const emoji = document.querySelectorAll('.emoji h2');
const input = document.querySelector('input');
const inputImg = document.querySelector('.input img');
const send = document.querySelector('.input h3');
const msgReply = document.querySelector('.msg-reply');

var inputValue;
var cmtbox;

posts.forEach((elem, i) => {
  emoji[i].addEventListener('click', (event) => {
    inputValue = input.value += event.target.innerHTML;
  });

  topLine.addEventListener('click', () => {
    comments.style.display = 'none';
    setTimeout(() => {
      cmtbox.innerHTML = '';
    }, 1000);
  });
  chat[i].addEventListener('click', (event) => {
    comments.style.display = 'block';
    inputImg.src = `${elem.dp}`;

    send.addEventListener('click', () => {
      cmtbox = document.querySelector('.cmt-msg');
      cmtbox.innerHTML = `<div class="cmt-msg-img">
                    <img
                      src="${elem.dp}"
                      alt=""
                    />
                    <div class="reply">
                      <p class="">${elem.username}</p>
                      <p class="msg-reply">${
                        inputValue ? inputValue : input.value
                      }</p>
                      <span>reply</span>
                    </div>
                  </div>
                  <p><i class="ri-heart-fill"></i></p>`;
      input.value = '';
      inputValue = '';
      console.log('first');
    });
  });
});

const fullMsg = document.querySelector('.full-msg');
const txtMsg = document.querySelector('.txt-msg');
const leftArrow = document.querySelector('.leftArrow');

txtMsg.addEventListener('click', () => {
  fullMsg.style.right = 0;
});

leftArrow.addEventListener('click', () => {
  fullMsg.style.right = '100%';
});

const msgData = [
  {
    id: 1,
    imgUrl:
      'https://i.pinimg.com/474x/55/bb/dd/55bbdd0c2ea258b352f4d1adfc278a54.jpg',
    username: 'Shivam',
    icon: 'ri-camera-line',
  },
  {
    id: 2,
    imgUrl:
      'https://i.pinimg.com/736x/e5/77/5a/e5775a963815d5d9b18187a99f00061a.jpg',
    username: 'Shubham',
    icon: 'ri-camera-line',
  },
  {
    id: 3,
    imgUrl:
      'https://i.pinimg.com/564x/69/57/53/6957535e7417dc07fffca71636136229.jpg',
    username: 'Sourabh',
    icon: 'ri-camera-line',
  },
  {
    id: 4,
    imgUrl:
      'https://i.pinimg.com/564x/8f/f4/83/8ff483dff5b5e739ff54db5e4dc17a96.jpg',
    username: 'Payal',
    icon: 'ri-camera-line',
  },
];

const msgImg = document.querySelector('.msgImg');

msgData.forEach((msgData, i) => {
  msgImg.innerHTML += ` <div class="userImg">
              <div class="msgImg1">
                <img
                  src="${msgData.imgUrl}"
                  alt=""
                />
                <h5>${msgData.username}</h5>
              </div>
              <i class="ri-camera-line"></i>
            </div>`;
  const userList = document.querySelectorAll('.userImg');
  const fullMsg = document.querySelector('.allChats');

  userList.forEach((list, i) => {
    list.addEventListener('click', (e) => {
      const chats = document.createElement('div');
      chats.classList.add('chats');

      // ------
      chats.innerHTML = `
             <div class="ChatUser">
              <div class="chattop">
                <i class="ri-arrow-left-line chatLeft"></i>
                <img
                  src="${msgData.imgUrl}"
                  alt="${i}"
                />
                <h2><span>${msgData.username}</span><i class="ri-arrow-down-s-line"></i></h2>
              </div>
              <div class="call">
                <i class="ri-phone-line"></i> <i class="ri-video-on-line"></i>
              </div>
            </div>
            <div class="midImg">
              <img
                src="${msgData.imgUrl}"
                alt="${i}"
              />
              <h3><span>${msgData.username}</span></h3>
          
              <button>View Profile</button>
            </div>
            <div class="msgList"></div>
            <div class="btms">
              <div class="sendMsg">
               <div class="CamMsg"> <i class="ri-camera-line camera"></i>
                <input type="text" placeholder="Message..." /></div>
                <div class="btmsLink">
                  <i class="ri-mic-line"></i>
                  <i class="ri-gallery-line"></i>
                  <i class="ri-emoji-sticker-line"></i>
                  <i class="ri-add-circle-line"></i>
                </div>
                <h4>Send</h4>
              </div>
            </div>
          `;
      //--------------------
      fullMsg.appendChild(chats);
      console.log(i, 'enter');
      fullMsg.style.display = 'block';

      const chatLeft = document.querySelector('.chatLeft');
      chatLeft.addEventListener('click', (e) => {
        fullMsg.style.display = 'none';
        chats.innerHTML = '';
      });
      const ChatUser = document.querySelector('.ChatUser img');
      const midImg = document.querySelector('.midImg img');
      const midImgh3 = document.querySelector('.ChatUser span');
      const midImgh = document.querySelector('.midImg span');

      ChatUser.setAttribute('src', list.children[0].childNodes[1].src);
      midImg.setAttribute('src', list.children[0].childNodes[1].src);
      midImgh3.innerHTML = list.children[0].children[1].innerHTML;
      midImgh.innerHTML = list.children[0].children[1].innerHTML;

      //---------------------------------------------------------
      const sendInput = document.querySelector('.btms input');
      const btmsLink = document.querySelector('.btmsLink');
      const sendMsg = document.querySelector('.sendMsg h4');
      const msgList = document.querySelector('.msgList');

      sendInput.addEventListener('click', () => {
        btmsLink.style.display = 'none';
        sendMsg.style.display = 'block';
      });

      sendMsg.addEventListener('click', () => {
        console.log('first');

        const h4 = document.createElement('h4');
        h4.classList.add('self');
        const a = (h4.innerHTML = sendInput.value);
        msgList.appendChild(h4);
        sendInput.value = '';
        const profileImg = document.querySelector('.midImg');
        profileImg.style.display = 'none';
        btmsLink.style.display = 'block';
        sendMsg.style.display = 'none';
        setTimeout(() => {
          const replyM = document.createElement('h4');
          replyM.classList.add('reply');
          replyM.innerHTML = a;
          msgList.appendChild(replyM);
        }, 1000);
      });

      //----------------------------------------------
    });
  });
});

{
  /* <h4 class="self">Helloasdasdassssssss</h4>
            <h4 class="reply">Hello</h4>  */
}
