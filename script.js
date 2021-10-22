document.body.addEventListener('keydown', teclaDown);
// document.body.addEventListener('keyup', teclaUp);

// function teclaUp() {
//     document.querySelector('.destaque').classList.remove('destaque');
// }



function teclaDown(event) {
    playSound(event.code.toLowerCase());
    
}

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`.${sound}`);

    if (audioElement) {
        audioElement.currentTime = 0; //volta para inicio do audio
        audioElement.play();
    }

    if (keyElement) {
        destaqueTecla(keyElement);
    }
    
}

function destaqueTecla(keyElement) {
    keyElement.classList.add('destaque');
    setTimeout(()=>{
        keyElement.classList.remove('destaque');
    }, 300);
}


function tocar() {
    let teclas = document.querySelector('.inputComposer').value;
    if (teclas.length > 0) {
        let wait=0;
        // let audioDuration=0;
        for (let i in teclas) {
            // let audioElement = document.querySelector(`#s_key${teclas[i]}`);
            
            setTimeout(()=>{
                playSound(`key${teclas[i]}`);
            }, wait);

            // if (audioElement) {
            //     audioDuration += audioElement.duration;
            // } else {
            //     audioDuration += 1;
            // }
            
            wait+=250;
            
        }
    }
}

