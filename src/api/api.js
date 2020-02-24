import * as axios from 'axios';

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "26fc23bd-deca-4ede-8fd9-36ce41f66b6d"} 
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId) {
        return instance.get(`profile/` + userId);
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}



// export const getUsers2 = (currentPage, pageSize) => {
//     return instance.get(`follow?page=${currentPage}&count=${pageSize}`).then(response => response.data)
// }

