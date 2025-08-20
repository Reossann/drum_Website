function handleKeyDown(e: KeyboardEvent): void{
    const audio = document.querySelector<HTMLAudioElement>(`audio[data-key="${e.key}"]`);
    const key = document.querySelector<HTMLDivElement>(`div[data-key="${e.key}"]`);
    if (!audio || !key){return}
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play()
;
}

window.addEventListener("keydown", handleKeyDown)