const { createDecipheriv } = require('crypto');
const fs = require('fs'); // xử lý file
// const users = [
//   { id: 1, username: 'tuan', password: '123456'},
//   { id: 2, username: 'binh', password: '1234526' },
//   { id: 3, username: 'ha', password: '1234536' }
// ];

// // users => string
// fs.writeFile(
//   'users.txt', 
//   JSON.stringify(users),
//   {
//     flag: 'a'
//   },
//   (err) => {
//     console.log(err)
//   }
// )

// hàm để nối đuôi file 
// fs.appendFile
// giữ nguyên wrtiteFile chuyển cơ chế ghi đè thành nối đuôi

// CRUD => files
const addUser = async (user) => {
  try {
    const stringUsers = await fs
    .promises.readFile('users.json', { encoding: 'utf-8' });
    const users = JSON.parse(stringUsers);
    const newUsers = [
    ...users,
    { id: users.length + 1, ...user }
    ];
    await fs.promises.writeFile('users.json', JSON.stringify(newUsers));
  } catch (err) {
    console.log(err);
  }
}

const readUsers = async() => {
  try{
    const readUsers = await fs.promises.readFile('users.json', { encoding: "utf-8"});
    const users = JSON.parse(readUsers);
    console.log(users); 
  }catch(err){
    console.log((err));
  }
}

const readUser = async (id) => {
  try {
    const readUser = await fs.promises.readFile("users.json",{encoding:"utf-8"});
    const users = JSON.parse(readUser);
    const readID = users.filter(item => item.id === id)
    console.log(readID);
    // for(let i = 1; i < users.length; i++){
    //     if(users[i].id === id){
    //       console.log(users[i]);
    //     }
    // }
  } catch (error) {
    console.log(error);
  }
}

const updateUser = async (id, dataUpdate) => {
  try {
    const stringUsers = await fs.promises.readFile('users.json', {encoding:'utf-8'});
    const users = JSON.parse(stringUsers);
    const updateUsers = users.map(item => item.id === id ? {id,...dataUpdate}: item)
    console.log(updateUsers);
  } catch (error) {
    console.log(error);
  }
}

const deleteUser = async(id) => {
  try {
    const stringUsers = await fs.promises.readFile('users.json',{encoding:'utf-8'});
    const users = JSON.parse(stringUsers);
    const updateUser = users.filter(item => item.id !== id)
    console.log(updateUser);
  } catch (error) {
    console.log(error);
  }
}
