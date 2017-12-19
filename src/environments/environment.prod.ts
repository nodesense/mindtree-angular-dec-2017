console.log("PRODUCTIOM ENV LOADED");

export const environment = {
  production: true,

  //point to production url
  apiEndPoint: 'http://localhost:7070/delayed',
  authEndPoint: 'http://localhost:7070/oauth/token'
};
