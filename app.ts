function handleKeyDown(e: KeyboardEvent): void{
    const audio = document.querySelector<HTMLAudioElement>(`audio[data-key="${e.key}"]`);
    if (audio){
    audio.play();}
    else{return}

}

window.addEventListener("keydown", handleKeyDown)