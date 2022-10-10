import compareAsc from 'date-fns/compareAsc';
import add from 'date-fns/add';

const renderBack = (state) => {
  const selectBack = document.createElement('select');
  selectBack.classList.add('form-select', 'time-select-back');

  const labelBack = document.createElement('option');
  labelBack.textContent = 'Выберите обратное время';
  selectBack.append(labelBack);
  document.querySelector('.back-time').replaceChildren(selectBack);

  const filtered = state.back.filter((elem) => {
    const date = new Date(elem);
    const currDate = add(new Date(state.currentTime), {
      minutes: 50,
    });

    const result = compareAsc(date, currDate);
    return result !== -1;
  });

  filtered.map((elem) => {
    const option = document.createElement('option');
    const date = new Date(elem);
    const time = date.toLocaleTimeString();
    option.textContent = time;
    option.value = date;
    selectBack.append(option);
    return option;
  });
};

export default renderBack;
