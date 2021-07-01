

class ServiceGame {

    data = [{
        id: 1,
        name: "Red Dead Redemption 2",
        price: 10,
        sinopsis: "Red Dead Redemption 2 — компьютерная игра в жанрах action-adventure и шутера от третьего лица с открытым миром, разработанная Rockstar Studios и выпущенная Rockstar Games для консолей PlayStation 4 и Xbox One 26 октября 2018 года и для персональных компьютеров под управлением Windows 5 ноября 2019 года.",
        studio: "RockStar inc"
    },
    {
        id: 2,
        name: "Nioh 2",
        price: 12,
        sinopsis: "Nioh 2 — компьютерная игра в жанре Action/RPG, разработанная японской студией Team Ninja и издаваемая компаниями Koei Tecmo и Sony Interactive Entertainment для PlayStation 4. Выход игры состоялся 13 марта 2020 года",
        studio: "Bandai Namco inc"
    },
    {
        id: 3,
        name: "Dark Souls 3",
        price: 9,
        sinopsis: "Dark Souls III — компьютерная игра в жанре Action/RPG, разработанная компанией FromSoftware для платформ Windows, PlayStation 4 и Xbox One. Анонс игры произошёл 15 июня 2015 года на конференции Microsoft в рамках выставки «E3 2015». Выход игры состоялся 24 марта 2016 года в Японии для Xbox One и PS4.",
        studio: "From Software inc"
    },
    {
        id: 4,
        name: "Forza Horizon 4",
        price: 15,
        sinopsis: "Forza Horizon 4 — гоночная игра в жанре аркадной гонки с открытым миром, разработанная компанией Playground Games в сотрудничестве с Turn 10 Studios под издательством Microsoft Studios для игровой консоли Xbox One и ПК от Microsoft. Является четвёртой основной частью в серии Forza Horizon и одиннадцатой в серии Forza",
        studio: "Microsoft inc"
    },
    {
        id: 5,
        name: "Resident Evil Village",
        price: 15,
        sinopsis: "Resident Evil Village — компьютерная игра в жанре survival horror. Часть серии Resident Evil и продолжение Resident Evil 7: Biohazard. В качестве разработчика и издателя игры выступает компания Capcom. ",
        studio: "Capcom inc"
    },
    {
        id: 6,
        name: "Cyberpunk 2077",
        price: 18,
        sinopsis: "Cyberpunk 2077 — компьютерная игра в жанре action/RPG, разработанная и изданная польской студией CD Projekt. Действие игры происходит в 2077 году в Найт-Сити, вымышленном североамериканском городе из вселенной Cyberpunk",
        studio: "CD PROJECT RED inc"
    }]

    getResource = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.8) {
                    reject(new Error('OOOOPS!!!'))
                } else {
                    resolve(this.data)
                }
                
            }, 700)
        })
        
    }






    //Часть для работы с JSON-SERVER


    // _url = 'http://localhost:3000/main';

    // getResource = async () => {
    //     const res = await fetch(this._url)
    //     if (res.ok) {
    //         const body = await res.json()
    //         return await body;
    //     } else {
    //         console.log(`Произошла ошибка http ${res.status}`)
    //     }


    // }


    // getGame = async (id) => {
    //     let games = [];

    //     const body = await this.getResource();
    //     games = await body.games
    //     return await games[id];
    // }


}



export default ServiceGame;

