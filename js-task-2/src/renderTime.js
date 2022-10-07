import add from 'date-fns/add';

const renderThereorBack = (state, time) => {
    const container = document.createElement('div');
    container.classList.add('col')
    document.querySelector('.time').replaceChildren(container);
    const select = document.createElement('select');
    select.classList.add('form-select', 'time-select');
    const label = document.createElement('option');
    label.textContent = 'Выберите время';
    select.append(label);
    container.append(select);
    time.map((elem) => {
        const option = document.createElement('option');
        const date = new Date(elem);
        const time = date.toLocaleString().split(',')[1];
        option.textContent = time;
        select.append(option);
    })
};

const renderThereAndBack = (state) => {
    renderThereorBack(state, state.there);
    console.log(state.currentTime)

    const timeParsing = state.currentTime.split(':');
    const [hour, minute, second] = timeParsing;

    console.log(hour)

    const result = add(new Date(2021, 8, 21, hour, minute, second), {
        minutes: state.duration,
      })

    const arrivalTime = result.toTimeString().split(' ')[0];

      console.log(arrivalTime)  
}

const renderTime = (state) => {
    switch(state.currentRoute) {
        case 'из A в B':
            renderThereorBack(state, state.there);
            break;
        case 'из B в A':
            renderThereorBack(state, state.back);
            break;
        case 'из A в B и обратно в А':
            renderThereAndBack(state);
            break;
        default:
            throw new Error('Unknown route!')
    }

};

export default renderTime;