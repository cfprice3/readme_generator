const api = { 
    getUser(username) { 
        this.username = username;
        return `https://api.github.com/users/`+ `${this.username}`
    }
  };
  
  module.exports = api
