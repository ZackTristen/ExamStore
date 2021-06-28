

class ServiceGame {

    _url = 'http://localhost:3000';



    getResource = async () => {
        const response = await fetch(this._url)
        if (response.ok) {
            let result = await response.json()
            return result;

        } else {
            return ('ошибка http' + response.status)
        }
    }


}

export default ServiceGame;