

class ServiceGame {

    _url = 'http://localhost:3000/main';

    getResource = async () => {
        const res = await fetch(this._url)
        const body = await res.json()
        return body;
    }


    

}

export default ServiceGame;

