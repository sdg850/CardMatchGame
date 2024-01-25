import Creepy from "../assets/Audio/creepy.mp3";
import Flip from "../assets/Audio/flip.wav";
import Match from "../assets/Audio/match.wav";
import Victory from "../assets/Audio/victory.wav";
import GameOver from "../assets/Audio/gameOver.wav";

class AudioController {
  bgMusic: HTMLAudioElement;
  flipSound: HTMLAudioElement;
  matchSound: HTMLAudioElement;
  victorySound: HTMLAudioElement;
  gameOverSound: HTMLAudioElement;

  constructor() {
    this.bgMusic = new Audio(Creepy);
    this.flipSound = new Audio(Flip);
    this.matchSound = new Audio(Match);
    this.victorySound = new Audio(Victory);
    this.gameOverSound = new Audio(GameOver);
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
