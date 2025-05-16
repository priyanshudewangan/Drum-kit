window.addEventListener('keydown', function(e){                //This event listerner is run whenever we press a key
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0; // rewind from start
    audio.play();
    console.log(key);
    key.classList.add('playing');
});

function removeTransition(e){
    if(e.propertyName != 'transform') return;
    
    // console.log(this); //this is equal to actual key

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
