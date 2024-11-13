const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        let userFollowers = user.followers.length;     
        let userFollowing = user.following.length;
        
        
        
        
        this.userProfile.innerHTML = 
                            `<div class = "info ">
                                 <img src = "${user.avatarUrl} alt= "foto de perfil do usuário">
                                 <div class = "data">
                                    <h1>${user.name ?? "O usuário não possui nome cadastrado "}</h1>  
                                    <p>${user.bio  ?? "O usuário não possui bio cadastrada 😢"}</p>
                                    <div class="follow">
                                        <h4>👥 ${userFollowers}Seguidores</h4>      
                                        <h4>👥 ${userFollowing} Seguindo</h4>      
                                    </div>
                                 </div>
                            </div>
                         ` 
    let repositoriesItens = "" 
    
    
    let repoLanguages = ""
        user.repositories.forEach(repo => {
        repoLanguages =`${repo.language}`
        if(repo.language === null){
            repoLanguages = "linguagem não identificada"
        }
        repositoriesItens += `<li><a href = "${repo.html_url}" target = "_blank"> ${repo.name} <br><br> <span>🍴 ${repo.forks}</span> <span>⭐️ ${repo.stargazers_count}</span> <span>👀 ${repo.watchers}</span> <span> 🧑🏻‍💻 ${repoLanguages}</span></li>`              
         })              
         if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">

                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
         }
                  
        let eventsList = ""
        user.events.forEach(event => {
        if(event.type === "PushEvent"){
            let eventMessage = event.payload.commits[0].message
            eventsList += `<li><span>${event.repo.name}</span> - ${eventMessage}</li>`
        } else {
         eventsList += `<li><span>${event.repo.name}</span> - Sem mensagem de commit</li>`
        }
        })
        
        this.userProfile.innerHTML += `<div class= "events">
                                        <h2>Eventos</h2>                                
                                        <ul>${eventsList}</ul>
                                        </div>`
              
        },

    renderNotFound(){
            this.userProfile.innerHTML = "<h3>Usuário não foi encontrado</h3>"
    }       
} 

    export { screen }