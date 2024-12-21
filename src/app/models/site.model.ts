export class Site {
    siteId: string;
    memId: string;
    email: string;
    name: string;
    userName: string;
    siteName: string;
    url: string;
    credits: string;
    token: string;
  
    constructor(data: any) {
      this.siteId = data.siteId;
      this.memId = data.memId;
      this.email = data.email;
      this.name = data.name;
      this.userName = data.userName;
      this.siteName = data.siteName;
      this.url = data.url;
      this.credits = data.credits;
      this.token = data.token;
    }
  }