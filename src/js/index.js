import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { getFollowers } from "./services/followers.js";
import { getFollowing } from "./services/following.js";
import { getEvents } from "./services/events.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js"


const searchBtn = document.getElementById('btn-search')
const searchInput = document.getElementById ('input-search')
async function getUserData(userName){
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const followersResponse = await getFollowers(userName)
    const followingResponse = await getFollowing(userName)
    const eventsResponse = await getEvents (userName)
    
const events = eventsResponse.filter((event) => {
    return event.type === "PushEvent" || event.type === "CreateEvent"
})
user.setInfo(userResponse)
user.setRepositories(repositoriesResponse)
user.setFollowers(followersResponse)

user.setFollowing(followingResponse)
user.setEvents(events) 

screen.renderUser(user)
    if(userResponse.message === "Not found"){
        screen.renderNotFound()        
        return
    }
}


searchBtn.addEventListener('click', () => {
    const userName   = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
    })

searchInput.addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed){
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0 ){
        alert('Preencha o campo com um nome de usuário do GitHub')
        return true
    }
}
