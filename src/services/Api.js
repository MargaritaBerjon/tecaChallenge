const ENDPOINT = 'https://8aa984db-d4a4-403f-827c-54242f3875cd.mock.pstmn.io';

const getUsersFromAPI = (id) => fetch(ENDPOINT + `/recruitment/fullstack/users?id=${id}`, {
    method: "GET",
})
    .then(response => response.json())
    .then(users => users.data)

// const updateUsersFromAPI = (id) => fetch(ENDPOINT + `/recruitment/fullstack/users?id=${id}`, {
//     method: "POST",
// })
//     .then(response => response.json())
//     .then(res => res)

export { getUsersFromAPI };