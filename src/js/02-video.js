import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGY_KEY = 'videoplayer-current-time';

const videoVimeo = document.querySelector('#vimeo-player');

const player = new Player(videoVimeo);

console.log(player);

const localStorageItem = localStorage.getItem(STORAGY_KEY);

if(localStorageItem){
    player.setCurrentTime(localStorage.getItem(STORAGY_KEY));    
} 
player.on('timeupdate', throttle(getTime,1000));

function getTime() {
    player.getCurrentTime()
            .then(prom => {
                console.log(prom);
                localStorage.setItem(STORAGY_KEY,prom);
            });

}

// throttle(onPlay,250)