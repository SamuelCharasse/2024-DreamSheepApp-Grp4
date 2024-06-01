import Pocketbase from 'pocketbase';
const pb = new Pocketbase('http://185.216.25.7:8000');



export async function SignUp(){
    await pb.collection('users').create({
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
        passwordConfirm:document.getElementById('password').value,
        username:document.getElementById('username').value
});
    console.log('User created');
}

// export async function SignIn(){
//     await pb.collection("users").authWithPassword({
//         document.getElementById('email').value,
//         document.getElementById('password').value
