const user = {
    avatarUrl:'',
    name: '',
    bio: '',
    userName: '', 
    followers: [],
    following: [],
    repositories: [],

    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.userName;
    },

    setFollowers(followers){
        this.followers = followers
    },

    setFollowing (following){
        this.following = following
    },

   setRepositories(repositories){
        this.repositories = repositories
   }, 
    setEvents(events){
         this.events = events
    }
}

export { user }