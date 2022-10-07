const buttonLists = document.querySelectorAll('.trip-card__buttons');

buttonLists.forEach((list) => {
    let index = 2;
    if (list.childElementCount <= 4) {
        return
    } else {
        for (index; index < list.childElementCount - 1; index += 1) {
            const current = list.querySelectorAll('.time-button')[index + 1];
            current.classList.add('visually-hidden')
        }
    }
    const moreButton = document.createElement('button');
    moreButton.textContent = 'еще...';
    moreButton.classList.add('time-button')
    list.append(moreButton);
    moreButton.addEventListener('click', (e) => {
        const closestList = moreButton.closest('.trip-card__buttons');
        const children = closestList.childNodes;
        children.forEach((node) => {
            console.log(node.nodeType)
            if (node.nodeType === 3) {
                return;
            }
            node.classList.remove('visually-hidden');
            moreButton.classList.add('visually-hidden')
        })
    })
})

