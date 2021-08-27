// imitating server
const DEFAULT_USERS_CONTENT = [
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
]

const DEFAULT_LOGGED_ID = 0

// LOCAL STORAGE KEYS
// const for keys to deal with localStorage object 
// via 'getItem' and 'setItem' methods
// without taking key-string in brackets... just like types in REDUX 
export const LOGGED_IN = "LOGGED_IN"
export const USERS_DB = "USERS_DB"

// shorthand to deal with localStorage object via 'getItem' and 'setItem' methods + performing necessary JSON transformations
export const GET = (key) => {try { return JSON.parse(localStorage.getItem(key)) } catch (error) { return null } }
export const SET = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
// say aliases:
export const GET_LOGGED_ID = () => GET(LOGGED_IN) 
export const GET_DB = () => GET(USERS_DB)

export const SET_DB = (value) => {
    console.log(`writing value=${value} to DB: `, value)
    SET(USERS_DB, value)
}
export const SET_LOGGED_ID = (value) => SET(LOGGED_IN, value)

// deletion from localStorage is not implemented as is not accessible from page ...

export const checkOrInitDefaultLocalStorageContent = () => {
    try {
        const storage = window['localStorage'];
        const x = '__storage_test_1__';
        const y = '__storage_test_2__';
        storage.setItem(x, x);
        storage.removeItem(x);
        storage.y = y;
        delete storage.y;
        console.log("Object 'localStorage' available. Success.");
    } catch (error) {
        alert("Objest 'loacalStorage' is unavailable due to error:" + error)
        console.log("Object 'localStorage' is unavailable due to error: " + error);
    }

    // check if 'localStorage' has valid content for key 'contentRelatedToUsers', otherwise 'upload' default content
    // deem it as our server, we communicate with to store data (create, update & delete new records)
    if (!GET_DB()) SET_DB(DEFAULT_USERS_CONTENT)
    

    // check if 'localStorage' has valid content for key 'previouslyLoggedUserId', otherwise 'upload' default content
    // deem it as our client user ID, which we use to upload previously saved client's database of passwords into REDUX STORAGE
    if (!GET_LOGGED_ID()) SET_LOGGED_ID(DEFAULT_LOGGED_ID)
}

export const GET_USERDATA_OF_LOGGED_USER = () => {
    const result = GET_DB().filter(userData => userData.id === GET_LOGGED_ID())    
    if (result.length === 1) return result[0]
    throw new Error("Trouble happened when getting LOGGED IN user data")
}


const generateNextUserId = function* () {
    let lastId = 0
    GET_DB().forEach(userDataSet => { if (userDataSet.id >= lastId) lastId = userDataSet.id }) // I do not want to store last id in a separate variable
    while (true)
        yield ++lastId;
}()


const getActualListOfCredentials = () => GET_DB().map(userDataSet => ({ 'id': userDataSet.id, 'login': userDataSet.login, 'password': userDataSet.password }))


export const checkIfLoginIsUnique = (login) => {
    // (before registration) check login for uniqueness => if it is unique, then boolean 'true' is returned
    if (!login) throw new Error("login was not specified for checking its uniqueness")
    return getActualListOfCredentials().filter(datatset => datatset.login === login).length === 1 ? true : false
}


export const getUserDataForGivenCredentials = (login, password) => {
    // (before logging in) check both login and password to match with any existing user => if true -  userData object for matching user is returned
    if (!login || !password) throw new Error("login and\or password were not specified for checking credentials match")
    const searchResult = getActualListOfCredentials().filter(datatset => datatset.login === login && datatset.password === password)
    return searchResult.length === 1 ? searchResult[0] : null
}

export const registerUserAndSetLoggedInAndReturnUserData = (login, password) => {
    // after job is done -- returns userData object  of new user to dispatch it later in REDUX
    // в нашем случае (без реального трафика по сети) можно без оптимизаций
    const id = generateNextUserId.next().value
    const newUserData = {
        "id": id,
        "login": login,
        "password": password,
        "records": []
    }
    SET_DB(GET_DB().push(newUserData))
    SET_LOGGED_ID(id)
    return newUserData
}







// login
                        // const foundMatch = listTakenIDsLoginsAndPasswords()
                        //     .filter(elem => {return elem.login === values.login.trim() && elem.password === values.password}) //array of [{}] returned
                        // if (!foundMatch.length) {
                        //     alert("User with such login and/or passwsord does not exist.")
                        // }

                        // console.log(`foundMatch`, foundMatch) 
                        // console.log("getDataOfLoggedInUser(foundMatch[0].id)", getDataOfLoggedInUser(foundMatch[0].id))


                        // dispatch(loginUser(getDataOfLoggedInUser(foundMatch[0].id))) // take first and only element

//register
   // createUserInLocalStorage({login: values.login.trim(), password: values.password })

                        // const foundMatch = listTakenIDsLoginsAndPasswords()
                        //     .filter(elem => {return elem.login === values.login.trim() && elem.password === values.password}) //array of [{}] returned
                        // if (!foundMatch.length) {
                        //     alert("User with such login and/or passwsord does not exist.")
                        // }
                        // console.log(`foundMatch`, foundMatch) 
                        // console.log("getDataOfLoggedInUser(foundMatch[0].id)", getDataOfLoggedInUser(foundMatch[0].id))


                        // dispatch(loginUser(getDataOfLoggedInUser(foundMatch[0].id)))

                        // history.push("/");


                        // console.log("REGISTERING...")