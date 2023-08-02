import { User } from "../auth/Signup";


const serverUrl = 'http://localhost:3000/';
const usersUrl = `${serverUrl}users/`;
const userLoginUrl = `${serverUrl}users/Singin`;

export async function register(user: User): Promise<User> {
    const res = await fetch(`${usersUrl}Signup/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return res.json();
}
export async function login(user: User): Promise<User> {
    const res = await fetch(`${userLoginUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return res.json();
}