import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        username: '',
    }),
    actions: {
        login(username: string, password: string) {
            if (username === 'admin' && password === '123456') {
                this.isLoggedIn = true;
                this.username = username;
                localStorage.setItem('user', JSON.stringify({
                    isLoggedIn: true,
                    username: username
                }));
                return true;
            }
            return false;
        },
        logout() {
            this.isLoggedIn = false;
            this.username = '';
            localStorage.removeItem('user');
        },
        init() {
            const user = localStorage.getItem('user');
            if (user) {
                try {
                    const parsedUser = JSON.parse(user);
                    this.isLoggedIn = parsedUser.isLoggedIn;
                    this.username = parsedUser.username;
                } catch (error) {
                    console.error('Failed to parse user data from localStorage', error);
                }
            }
        }
    },
});    