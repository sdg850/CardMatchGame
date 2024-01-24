class AudioController {
  bgMusic: HTMLAudioElement;
  flipSound: HTMLAudioElement;
  matchSound: HTMLAudioElement;
  victorySound: HTMLAudioElement;
  gameOverSound: HTMLAudioElement;

  constructor() {
    this.bgMusic = new Audio("src/assets/Audio/creepy.mp3");
    this.flipSound = new Audio("src/assets/Audio/flip.wav");
    this.matchSound = new Audio("src/assets/Audio/match.wav");
    this.victorySound = new Audio("src/assets/Audio/victory.wav");
    this.gameOverSound = new Audio("src/assets/Audio/gameOver.wav");
    this.bgMusic.volume = 0.5;
    this.bgMusic.loop = true;
  }
  startMusic() {
    this.bgMusic.play();
  }
  stopMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
  }
  flip() {
    this.flipSound.play();
  }
  match() {
    this.matchSound.play();
  }
  victory() {
    this.stopMusic();
    this.victorySound.play();
  }
  gameOver() {
    this.stopMusic();
    this.gameOverSound.play();
  }
}

const AudioControllerGame = new AudioController();

export default AudioControllerGame;
