/* Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>*/

let likeBtn = document.querySelector('.like-btn');
let nextComment = document.querySelector('.next-comment');
let commentText = document.querySelector('.comment');
let counterClickNext = 0;

let urlPhoto = () => `https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg`;

function MyAva(name, text, avatarUrl) {
  this.name = name;
  this.text = text;
  this.avatarUrl = avatarUrl;
  this.likes = 0;
  this.urlMy = urlPhoto;
}

let comment1 = new MyAva('Bill Gates', 'I know him!', 'https:avatar.ua/...');
let comment2 = new MyAva('James Arthur Gosling', 'Did he create something?', 'https:avatar.ua/...');
let comment3 = new MyAva('Barack Obama', 'This is my grandfather!', 'https:avatar.ua/...');
let comment4 = new MyAva('Valentin', 'Thank you!', 'https:avatar.ua/...');

let arrayComment = [comment1, comment2, comment3, comment4];
let currentComment = arrayComment[counterClickNext];

let commentClick = comment => {
  let divHtml = [];
  Object.keys(comment).forEach(element => {
    if (typeof comment[element] === 'function'){
      divHtml.push(`
        <div class="textComment">
          <p><b>${element}:</b></p>
          <p> <b>${comment[element]()}</p>
        </div>
      `);
    } else {
      divHtml.push(`
        <div class="textComment">
          <p><b>${element}:</b></p>
          <p>${comment[element]}</p>
        </div>
      `);
    }
  })
  commentText.innerHTML = divHtml.join('');
}

function counter () {
  arrayComment.forEach(comment => {
    comment.likes += 1;
  })
  commentClick(currentComment);
};

likeBtn.addEventListener('click', counter);

let texComment = () => {
  let comment = arrayComment[counterClickNext];
  currentComment = comment;
  counterClickNext++;
  if (counterClickNext > arrayComment.length -1) {
    counterClickNext = 0;
  }
  commentClick(comment);
}

window.addEventListener('load', texComment)
nextComment.addEventListener('click', texComment)

