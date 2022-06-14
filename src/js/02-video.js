import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGY_KEY = 'videoplayer-current-time';

const videoVimeo = document.querySelector('#vimeo-player');

const player = new Player(videoVimeo);

console.log(player);


const onPlay = function() {
    player.on('timeupdate', function(){
        console.log('the time was updated to: ' + player.duration);
    })

    // const currentTimePlayer = player.

    // localStorage.setItem(STORAGY_KEY, currentTimePlayer);

    // player.setCurrentTime(localStorage.getItem(STORAGY_KEY))
    // 
};

player.on('play', onPlay);


// throttle(onPlay,250)