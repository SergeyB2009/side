const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')

const cardArray = [
    {
        id: 0,
        title: 'Щит на насос 1',
        price: '60.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит.png'

    },
    {
        id: 1,
        title: 'Щит на насос 2',
        price: '61.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит.png'

    },
    {
        id: 2,
        title: 'Щит на насос 3',
        price: '62.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит.png'

    },
    {
        id: 3,
        title: 'Щит на насос 4',
        price: '63.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит.png'

    },
    {
        id: 4,
        title: 'Щит на насос 5',
        price: '64.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит.png'

    },
    {
        id: 5,
        title: 'Щит на насос 6',
        price: '65.000 Р',
        address: 'Зеленоград, 2022',
        date: '18 декабря 18:49',
        img: 'щит.png'

    }
]

const render = (cardList) => {
    cardWrapper.innerHTML = ''

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" style="width: 100%;" alt="${item.title}">
                </div>
                <h5 class="content-main__list-item--title">
                    ${item.title}
                </h5>
                <strong class="content-main__list-item--price">${item.price}</strong>

                <div class="content-main__list-item--desk-box">
                    <span class="content-main__list-item--desk">
                        ${item.address}
                    </span>
                                <span class="content-main__list-item--desk">
                        ${item.date}
                    </span>
                </div>
            </a>
            `)
    })
}

const filtredArray = (array, value) => {
    console.log(array);
    console.log(value);


    return array.filter((item) => {
        return item.title.includes(value)
    })
}

cardWrapper.style.justifyContent = `flex-start`
cardWrapper.style.gap = `30px`

render(cardArray)

searchBtn.addEventListener('click', () => {
    render(filtredArray(cardArray, searchInput.value))
})
