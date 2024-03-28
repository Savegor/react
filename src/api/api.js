import axios from "axios";

let instance = axios.create(
    {
        withCredentials: true,
        headers: {
            "API-KEY": "e61e69ef-462f-4758-9eb8-c30b501e2797"
        },
        baseURL: `https://social-network.samuraijs.com/api/1.0/`
    }
)
// let instanceFollow = axios.create({},
//     {
//         withCredentials: true,
//         headers: {
//             "API-KEY": "27546f8d-a97a-4253-8dae-a95b715e0ddb"
//         },
//         baseURL: `https://social-network.samuraijs.com/api/1.0/`
//     }
// )

export const UsersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then (response => response.data)
    },
    Unfollow(userId = 0) {
        return instance.delete(`follow/${userId}`)
        .then (response => response.data)
    },
    Follow(userId = 0) {
        return instance.post(`follow/${userId}`)
        .then (response => response.data)
    },
    authMe() {
        return instance.get('auth/me').then(response => response.data)
    },
    getProfile(userId) {
        return instance.get('profile/' + userId).then(response => response.data)
    }
}