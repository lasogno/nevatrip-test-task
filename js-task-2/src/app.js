import renderSum from './renderSum.js';
import renderTime from './renderTime.js';
import renderResult from './renderResult.js';
import renderBack from './renderBack.js';

export default () => {
  const state = {
    there: [
      '2021-08-21 18:00:00 UTC+3',
      '2021-08-21 18:30:00 UTC+3',
      '2021-08-21 18:45:00 UTC+3',
      '2021-08-21 19:00:00 UTC+3',
      '2021-08-21 19:15:00 UTC+3',
      '2021-08-21 21:00:00 UTC+3',
    ],
    back: [
      '2021-08-21 18:30:00 UTC+3',
      '2021-08-21 18:45:00 UTC+3',
      '2021-08-21 19:00:00 UTC+3',
      '2021-08-21 19:15:00 UTC+3',
      '2021-08-21 19:35:00 UTC+3',
      '2021-08-21 21:50:00 UTC+3',
      '2021-08-21 21:55:00 UTC+3',
    ],
    currentRoute: '',
    currentTime: '',
    backTime: '',
    quantity: 0,
    status: 'filling',
    duration: 50,
    sum: 0,
    thereAndBack: false,
  };

  const timeControl = () => {
    const timeSelect = document.querySelector('.time-select');
    timeSelect.addEventListener('change', (e) => {
      state.currentTime = e.target.value;
      if (state.thereAndBack) {
        state.status = 'rendering back-time';
      } else {
        state.status = 'rendering quantity';
      }
      render()
    });
  };

  const backTimeControl = () => {
    const timeSelect = document.querySelector('.time-select-back');
    timeSelect.addEventListener('change', (e) => {
      state.backTime = e.target.value;
      state.status = 'rendering quantity';
      render();
    });
  };

  const resultControl = () => {
    const form = document.querySelector('.sum-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const value = formData.get('quantity');
      state.quantity = value;
      const ticketCost = state.thereAndBack ? 1200 : 700;
      const duration = state.thereAndBack ? 100 : 50;
      state.duration = duration;
      state.sum = value * ticketCost;
      state.status = 'result';
      console.log(state);
      render();
    });
  };

  const render = () => {
    switch (state.status) {
      case 'filling':
        break;
      case 'rendering time':
        renderTime(state);
        timeControl();
        break;
      case 'rendering back-time':
        renderBack(state);
        backTimeControl();
        break;
      case 'rendering quantity':
        renderSum(state);
        resultControl();
        break;
      case 'result':
        renderResult(state);
        break;
      default:
        throw new Error('Boom!');
    }
  };

  const selectElement = document.querySelector('.route-select');
  selectElement.addEventListener('change', (e) => {
    state.currentRoute = e.target.value;
        state.status = 'rendering time';
        state.thereAndBack = e.target.value === 'из A в B и обратно в А' ? true : false;
    render();
  });

  render();
};
