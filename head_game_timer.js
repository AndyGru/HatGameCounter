// Таймер для игры в шляпу на 30 сек
// автор: Андрей Грушин

const hello = {
  beep:  [0.05, 0.05, 0.05, 0.05, 0.05],
  delay: [1.1, 1.2, 1.3, 1.6, 1.7],
};

const callSignals = {
  beep:  [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3,  1],
  delay: [0.1, 0.3, 0.5, 10,  20,  25,  26,  27,  28,  29,  30,  30.5, 31],
};


//

let btnStart = require('@amperka/button').connect(P1);
let led = require('@amperka/led').connect(P3);
let buzzer = require('@amperka/buzzer').connect(P5);

function setTimer(signal) {
  clearTimeout();
  for(let i=0; i < signal.beep.length; i++) {
    setTimeout((i) => {
      buzzer.beep(signal.beep[i]);
      led.blink(signal.beep[i]);
      console.log(signal.delay[i]);
    }, signal.delay[i] * 1000, i);
  }
}

//

setTimer(hello);

btnStart.on('click',() => {
  console.log('start');
  setTimer(callSignals);
});
