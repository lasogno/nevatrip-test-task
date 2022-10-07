export default () => {
  const container = document.createElement('div');
  container.classList.add('col');
  document.querySelector('.sum').replaceChildren(container);

  const form = document.createElement('form');
  form.classList.add('sum-form');
  container.append(form);

  const wrapper = document.createElement('div');
  wrapper.classList.add('mb-3');
  form.append(wrapper);

  const label = document.createElement('label');
  label.classList.add('form-label');
  label.setAttribute('for', 'quantity');
  label.textContent = 'Количество билетов:';
  wrapper.append(label);

  const input = document.createElement('input');
  input.classList.add('form-control');
  input.id = 'quantity';
  input.type = 'number';
  input.name = 'quantity';
  input.min = '1';
  wrapper.append(input);

  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary');
  button.type = 'submit';
  button.textContent = 'Посчитать';
  form.append(button);
};
