
let user = 'test'; // добавление пользователя
const api_cat = new Api (user);

let objCat = {
    id: 2,
    name: "Имя кота",
    favorite: true,
    rate: 10,
    age: 1,
    description: "Описание кота",
    image: "Ссылка на изображение кота"
};

let editCat = {
    name: "Измененное имя кота",
    favorite: true,
    rate: 8,
    age: 7,
    description: "Измененное описание кота",
    image: "Измененная ссылка на изображение кота"
};

// promise.then

// // Показать всех котов
// api_cat.getAllCats().then(response => response.json()).then(data => console.log(data));

// // Показать ID всех котов
// api_cat.getAllIdByCats().then(response => response.json()).then(data => console.log(data));

// // Показать кота по ID
// api_cat.getInfoAboutCatById(1).then(response => response.json()).then(data => console.log(data));

// // Добавить нового кота
// api_cat.addCat(objCat).then(response => response.json()).then(data => console.log(data));

// // Изменить информацию о коте по ID
// api_cat.editCatInfo(editCat, 2).then(response => response.json()).then(data => console.log(data));

// //Удалить кота по ID
// api_cat.deleteCatById(2).then(response => response.json()).then(data => console.log(data));




// async/await

// Показать всех котов
async function getAllCats() {
    const res = await api_cat.getAllCats();
    const data = await res.json();
    console.log(data);
};
// getAllCats();

// Показать ID всех котов
const getAllIdByCats = async () => {
    const res = await api_cat.getAllIdByCats();
    const data = await res.json();
    console.log(data);
};
// getAllIdByCats();

// Показать кота по ID
const getInfoAboutCatById = async (id) => {
    const res = await api_cat.getInfoAboutCatById(id);
    const data = await res.json();
    console.log(data);
};
// getInfoAboutCatById(2);

//Добавить нового кота
const addCat = async (body) => {
    const res = await api_cat.addCat(body);
    const data = await res.json();
    console.log(data);
};
// addCat(objCat);

// Изменить информацию о коте по ID
const editCatInfo = async (body, id) => {
    const res = await api_cat.editCatInfo(body, id);
    const data = await res.json();
    console.log(data);
};
// editCatInfo(editCat, 2)

//Удалить кота по ID
const deleteCatById = async (id) => {
    const res = await api_cat.deleteCatById(id);
    const data = await res.json();
    console.log(data);
};
// deleteCatById(2);


