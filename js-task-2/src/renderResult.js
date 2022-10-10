import add from 'date-fns/add';
import ru from 'date-fns/locale/ru';
import differenceInMinutes from 'date-fns/differenceInMinutes';

export default (state) => {
  const container = document.createElement('div');
  container.classList.add('alert', 'alert-info', 'shadow');
  container.classList.add('col');
  document.querySelector('.result').replaceChildren(container);

  const pEl = document.createElement('p');

  let arrivalTime;
  const duration = state.backTime ? differenceInMinutes(add(new Date(state.backTime), {
    minutes: 50,
  }), new Date(state.currentTime), {
    locale: ru,
  }) : `${state.duration}`;

  if (state.backTime) {
    const result = add(new Date(state.backTime), {
      minutes: 50,
    });
    arrivalTime = result.toLocaleTimeString();
  } else {
    const result = add(new Date(state.currentTime), {
      minutes: 50,
    });
    arrivalTime = result.toLocaleTimeString();
  }

  pEl.textContent = `Выбрано количество билетов: ${state.quantity}. По маршруту ${state.currentRoute} путешествие займет у вас ${duration} минут. Стоимость поездки ${state.sum}р.
    Теплоход отправляется в ${new Date(state.currentTime).toLocaleTimeString()}, а прибудет в ${arrivalTime}.`;

  container.append(pEl);
};
