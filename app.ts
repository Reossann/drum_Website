// キーが押された時に実行される関数
function playSound(e: KeyboardEvent): void {
  const audio = document.querySelector<HTMLAudioElement>(`audio[data-key="${e.key}"]`);
  const key = document.querySelector<HTMLDivElement>(`div[data-key="${e.key}"]`);

  if (!audio || !key) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

// アニメーションが終わった時に実行される関数
function removeTransition(e: TransitionEvent): void {
  if (e.propertyName !== 'transform') return;
  (e.target as HTMLElement).classList.remove('playing');
}

// 1. すべての.key要素を取得
let keys = document.querySelectorAll<HTMLDivElement>('.key');
// 2. それぞれのキーに、transitionendイベントの監視を設定
keys.forEach(key => key.addEventListener('transitionend', removeTransition as EventListener));

// ページ全体でキーボードが押されるのを監視
window.addEventListener('keydown', playSound);

export {};