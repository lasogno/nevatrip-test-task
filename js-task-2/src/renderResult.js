import add from 'date-fns/add';
import intervalToDuration from 'date-fns/intervalToDuration';
import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import ru from 'date-fns/locale/ru';

export default (state) => {
  const container = document.createElement('div');
  container.classList.add('alert', 'alert-primary');
  container.classList.add('col');
  document.querySelector('.result').replaceChildren(container);

  const pEl = document.createElement('p');

  let arrivalTime;
  const duration = state.backTime ? formatDistanceStrict(new Date(state.currentTime), new Date(state.backTime), {
    locale: ru,
  }) : `${state.duration} минут`;

  if (state.backTime) {
    const result = add(new Date(state.backTime), {
      minutes: 50,
    });
    console.log(result);
    arrivalTime = result.toLocaleTimeString();
    console.log(arrivalTime);
  } else {
    const result = add(new Date(state.currentTime), {
      minutes: 50,
    });
    arrivalTime = result.toLocaleTimeString();
  }

  pEl.textContent = `Выбрано количество билетов: ${state.quantity}. По маршруту ${state.currentRoute} путешествие займет у вас ${duration}. Стоимость поездки ${state.sum}р.
    Теплоход отправляется в ${new Date(state.currentTime).toLocaleTimeString()}, а прибудет в ${arrivalTime}.`;

  container.append(pEl);
};
