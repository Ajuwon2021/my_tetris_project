const clear = new Audio('./audio/clear_sound.wav');
const rotate = new Audio('./audio/rotate_sound.wav');
const line = new Audio('./audio/success_sound.wav');
const end = new Audio('./audio/end_sound.wav');
const gameover = new Audio('./audio/gameover_sound.wav');
const move = new Audio('./audio/move_sound.wav');
const fall = new Audio('./audio/fall_sound.wav');

(function addBackgroundMusicEventListener() {
  // get the audio element and start music
  const audioElement = document.querySelector('audio');
  const playButton = document.querySelector('.music-button');
  playButton.addEventListener('click', function() {
    if (playButton.dataset.playing === 'false') {
      playButton.dataset.playing = 'true';
      audioElement.play();
    } else {
      audioElement.pause();
      playButton.dataset.playing = 'false';
    }
  })
})();
