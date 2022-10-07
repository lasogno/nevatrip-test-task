import add from 'date-fns/add';

export default (state) => {
    const container = document.createElement('div');
    container.classList.add('col');
    document.querySelector('.result').replaceChildren(container);

    const pEl = document.createElement('p');

    const timeParsing = state.currentTime.split(':');
    const [hour, minute, second] = timeParsing;

    const result = add(new Date(2021, 8, 21, hour, minute, second), {
        minutes: state.duration,
      })

    const arrivalTime = result.toTimeString().split(' ')[0];

    pEl.textContent = `Выбрано количество билетов: ${state.quantity}. По маршруту ${state.currentRoute} путешествие займет у вас ${state.duration} минут. Стоимость поездки ${state.sum}р.
    Теплоход отправляется в ${state.currentTime}, а прибудет в ${arrivalTime}.`;

    container.append(pEl);
}