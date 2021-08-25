// work with local storage
export const checkIfStorageAvailable = (type) => {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return false;
    }
}

// transfer mockData to localStorage
export const initLocalStorageWithMockData = () => {
    const mockData = {

        // imitating server
        "users": [
            {
                "id": 0,
                "login": "user@user.com",
                "password": "user@user.com",
                "records": [
                    {
                        "id": 1,
                        "appointment": "lorem.0-1.ipsum@gmail.com",
                        "password": "dol#r-$it-@met"
                    },
                    {
                        "id": 2,
                        "appointment": "lorem.0-2.ipsum@gmail.com",
                        "password": "dol#r-$it-@met"
                    },
                    {
                        "id": 3,
                        "appointment": "lorem.0-3.ipsum@gmail.com",
                        "password": "dol#r-$it-@met"
                    },
                    {
                        "id": 4,
                        "appointment": "lorem.0-4.ipsum@gmail.com",
                        "password": "dol#r-$it-@met"
                    }
                ]
            },
            {
                "id": 1,
                "login": "user1@user.com",
                "password": "user1@user.com",
                "records": [
                    {
                        "id": 1,
                        "appointment": "lorem.1-1.ipsum@gmail.com",
                        "password": "dol#r-$it-@met"
                    },
                    {
                        "id": 2,
                        "appointment": "lorem.1-2.ipsum@gmail.com",
                        "password": "dol#r-$it-@met"
                    },
                    {
                        "id": 3,
                        "appointment": "lorem.1-3.ipsum@gmail.com",
                        "password": "dol#r-$it-@met"
                    },
                    {
                        "id": 4,
                        "appointment": "lorem.1-4.ipsum@gmail.com",
                        "password": "dol#r-$it-@met"
                    }
                ]
            },
            {
                "id": 2,
                "login": "user2@user.com",
                "password": "user2@user.com",
                "records": []
            }
        ],
        // this part really refers to localStorage of client
        "authentificatedId": 0
    }
   
     // add mock data only if no data is present

    
    try {
        JSON.parse(localStorage.users);
        JSON.parse(localStorage.authentificatedId);
      } catch (e) {
        localStorage.users = JSON.stringify(mockData.users)
        localStorage.authentificatedId = JSON.stringify(mockData.authentificatedId)
      }
  
    
}

export const createUserInLocalStorage = ({ login, password }) => {
    const temp = JSON.parse(localStorage.users)

    console.log(`temp:`, temp)
    
    const newUserId = JSON.parse(localStorage.users).length 
                        ? Math.max(...temp.map(el => el.id)) + 1 
                        : 1

    temp.push({
        "id": newUserId,
        "login": login,
        "password": password,
        "records": []
    })
    console.log('writing to local storage')
    localStorage.users = JSON.stringify(temp)     //перезалить на "фронт", да, затратно, но в нашем случае (без реального трафика по сети) так можно.

    localStorage.authentificatedId = JSON.stringify(newUserId)
}

export const listTakenIDsLoginsAndPasswords = () => {
    return JSON.parse(localStorage.users).map(dataset => ({id: dataset.id, login: dataset.login, password: dataset.password}))
}

export const getDataOfLoggedInUser = (id) => {
    console.log(`id =========`, id)
    console.log(`JSON.parse(localStorage.users)`, JSON.parse(localStorage.users))
    console.log(`JSON.parse(localStorage.users).filter(user => user.id === id)`, JSON.parse(localStorage.users).filter(user => user.id === id))
    return JSON.parse(localStorage.users).filter(user => user.id === id)[0]  //array of [{}] returned
}