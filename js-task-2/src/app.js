import renderSum from "./renderSum.js";
import renderTime from "./renderTime.js";
import renderResult from "./renderResult.js";

export default () => {
    const state = {
        there: [
            '2021-08-21 18:00:00',
            '2021-08-21 18:30:00',
            '2021-08-21 18:45:00',
            '2021-08-21 19:00:00',
            '2021-08-21 19:15:00',
            '2021-08-21 21:00:00',
        ],
        back: [
            '2021-08-21 18:30:00',
            '2021-08-21 18:45:00',
            '2021-08-21 19:00:00',
            '2021-08-21 19:15:00',
            '2021-08-21 19:35:00',
            '2021-08-21 21:50:00',
            '2021-08-21 21:55:00',
        ],
        currentRoute: '',
        currentTime: '',
        quantity: 0,
        status: 'filling',
        duration: 0,
        sum: 0,
        thereAndBack: false,
    }

    const render = () => {
        switch (state.status) {
            case 'filling':
                break;
            case 'rendering time':
                renderTime(state);
                timeControl();
                break;
            case 'rendering quantity':
                renderSum(state);
                resultControl();
                break;
            case 'result':
                renderResult(state);
                break;
            default:
                throw new Error('Boom!')
        }
    }

    const selectElement = document.querySelector('.route-select');
    selectElement.addEventListener('change', (e) => {
        state.currentRoute = e.target.value;
        state.status = 'rendering time';
        if (e.target.value === 'из A в B и обратно в А') {
            state.thereAndBack = true;
        }
        render();
    })

    const timeControl = () => {
        const timeSelect = document.querySelector('.time-select');
        timeSelect.addEventListener('change', (e) => {
            console.log(e.target.value);
            state.currentTime = e.target.value;
            state.status = 'rendering quantity';
            render();
        });
    }

    const resultControl = () => {
        const form = document.querySelector('.sum-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const value = formData.get('quantity');
            console.log(value);
            console.log(e.target);
            state.quantity = value;
            const ticketCost = state.thereAndBack ? 1200 : 700;
            const duration = state.thereAndBack ? 100 : 50;
            state.sum = value * ticketCost;
            state.status = 'result';
            state.duration = duration;
            console.log(state);
            render();
        })
    }
    render()
}