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
    console.log(date);
    const time = date.toLocaleString().split(',')[1];
    option.textContent = time;
    option.value = date;
    select.append(option);
  });
};

const renderThereAndBack = (state) => {
  const container = document.querySelector('.time');
  const wrapper = document.createElement('div');

  const selectThere = document.createElement('select');
  selectThere.classList.add('form-select', 'time-select');

  const label = document.createElement('option');
  label.textContent = 'Выберите время';
  selectThere.append(label);
  wrapper.append(selectThere);

  container.replaceChildren(wrapper);

  state.there.map((elem) => {
    const option = document.createElement('option');
    const date = new Date(elem);
    const time = date.toLocaleString();
    option.textContent = time;
    option.value = date;
    selectThere.append(option);
  });

  const selectBack = document.createElement('select');
  selectBack.classList.add('form-select', 'time-select-back');

  const labelBack = document.createElement('option');
  labelBack.textContent = 'Выберите обратное время';
  selectBack.append(labelBack);
  wrapper.append(selectBack);

  state.back.map((elem) => {
    const option = document.createElement('option');
    const date = new Date(elem);
    const thereDate = new Date(state.currentTime);
    const time = date.toLocaleString();
    option.textContent = time;
    option.value = date;
    selectBack.append(option);
  });
};

const renderTime = (state) => {
  switch (state.currentRoute) {
    case 'из A в B':
      renderThereorBack(state.there);
      break;
    case 'из B в A':
      renderThereorBack(state.back);
      break;
    case 'из A в B и обратно в А':
      renderThereAndBack(state);
      break;
    default:
      throw new Error('Unknown route!');
  }
};

export default renderTime;
