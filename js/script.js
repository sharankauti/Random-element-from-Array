var Button = document.querySelector('.emojiButton');
var emojis = document.querySelector('.emojiclass');

Button.addEventListener('click',()=>{
   (
    function showEmoji(){
        const emojiArray = ['😒','😂','😍','😉','😎','😜','🤔','😘','😁','🤢','🙄','😋','🤐' ];
        emojis.innerHTML = emojiArray[Math.floor(Math.random() * emojiArray.length)]
        }
   )()
})

