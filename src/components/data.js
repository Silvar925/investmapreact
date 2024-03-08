import { electricitySupply } from "./dataBase.js"

export const typeObjects = {
    participants: 'Участки',
    buildings: 'Здания',
    sites: 'Площадки',
    // "drainage": 'Водоотведение',
    // "waterSupply":'Водоснабжение',
    communication: 'Связь',
    regionalRoads: 'Региональные дороги',
    // "federalRoads": "Федеральные дороги",
    gasSupply: 'Газоснабжение',
    // "heatSupply":"Теплоснабжение",
    tariffs: 'Тарифы',
    mineralResources: 'Полезные ископаемые',
    electricitySupply: 'Электроснабжение',
    // "healthcare":"Здравоохранение",
    // "education":"Образование",
    // "employmentCenters":"Центры занятости"
}

export const listRegion = ['Черкесск', 'Карачаевсск', 'Карачаевский район', 'Усть - Джегутинский район', 'Абазинский район', 'Адыге - Хабльский район', 'Зеленчукский район', , 'Малокарачаевсктй район',
    'Ногайский район', 'Прикубанский район', 'Урупский район', 'Хабезский район'
]

export const allObjects = {
    electricitySupply: {
        electricitySupply: electricitySupply,
        onMarker: 'icons/PowerSupply_on.svg',
        offMarker: 'icons/PowerSupply_off.svg'
    }
}