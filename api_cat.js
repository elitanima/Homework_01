
class Api {
    constructor (user){
        this.url = `https://cats.petiteweb.dev/api/single/${user}/`;
        this.user = user;
    }

    getAllCats() {
        return fetch(`${this.url}show`);
        }

    getAllIdByCats() {
        return fetch(`${this.url}ids`);
    }

    getInfoAboutCatById(id) {
        return fetch(`${this.url}show/${id}`);
    }

    addCat(bodyOfCat) {
        return fetch(`${this.url}add`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(bodyOfCat)
        });
    }

    editCatInfo(body, id) {
        return fetch (`${this.url}update/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
    });
    }

    deleteCatById(id) {
        return fetch (`${this.url}delete/${id}`, {
        method: 'DELETE'
    });
    }
}