const renderThereorBack = (time) => {
  const container = document.querySelector('.time');
  const select = document.createElement('select');
  select.classList.add('form-select', 'time-select');
  const label = document.createElement('option');
  label.textContent = 'Выберите время';
  select.append(label);
  container.replaceChildren(select);
  time.map((elem) => {
    const option = document.createElement('option');
    const date = new Date(elem);
    const time = date.toLocaleTimeString();
    option.textContent = time;
    option.value = date;
    select.append(option);
  });
};

const renderTime = (state) => {
  switch (state.currentRoute) {
    case 'из A в B':
      renderThereorBack(state.there);
      state.backTime = '';
      document.querySelector('.back-time').replaceChildren('')
      break;
    case 'из B в A':
      renderThereorBack(state.back);
      state.backTime = '';
      document.querySelector('.back-time').replaceChildren('')
      break;
    case 'из A в B и обратно в А':
      renderThereorBack(state.there);
      break;
    default:
      throw new Error('Unknown route!');
  }
};

export default renderTime;
