export class User {
    id: string;
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    status: string;
    credits: string;
    token: string;
    password: string;
    loginstatus: string;
    refreshToken: string;
  
    constructor(data: any) {
        this.id = data.id;
        this.username = data.username;
        this.email = data.email;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.status = data.status;
        this.credits = data.credits;
        this.token = data.token;
        this.password = data.password;
        this.loginstatus = data.loginstatus;
        this.refreshToken = data.refreshToken;
    }


  }

  export class LoginObj {
    username: string;
    password: string;
  
    constructor(data: any) {
      this.username = data.username;
      this.password = data.password;
    }
  }