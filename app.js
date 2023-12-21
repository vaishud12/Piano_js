const pianokeys = document.querySelectorAll('.key')

function playSound(newUrl) {
    new Audio(newUrl).play()
}
    


pianokeys.forEach((pianokey,i)=>{

    const newUrl = '24-piano-keys/key' + (i+1) + '.mp3'
    pianokey.addEventListener('click', ()=> playSound(newUrl))
})