import User from '.';

export async function getUser(email: string, password: string) {
    const user = await User.create({
            email: email,
            password: password
    });

    if(user) {
        return user;
    } else {
        throw new Error('User not found');
    }
}