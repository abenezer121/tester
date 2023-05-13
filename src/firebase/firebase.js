import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBuHA26T7bwuR3cpxk1YLoTMNvqiRMfuYg",
    authDomain: "fir-push-notification-41fd2.firebaseapp.com",
    projectId: "fir-push-notification-41fd2",
    storageBucket: "fir-push-notification-41fd2.appspot.com",
    messagingSenderId: "805786388350",
    appId: "1:805786388350:web:dc7cc0ade0de235450d52f",
    measurementId: "G-7JML561EKH"
  };


 const firebase =  initializeApp(firebaseConfig);
export const messaging = getMessaging(firebase)



export const onBackgroundMessage = () =>
    new Promise((resolve) => {
        messaging.onBackgroundMessage((payload) => {
            resolve(payload)
        });
    })



  export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
    
      resolve(payload);
    });
});


export const Sendrequest = () => {
    console.log("Requesting User Permission......");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification User Permission Granted.");
  
        return getToken(messaging, { vapidKey: "BLsi5rjhoTQkUmLYOa8Kr5uLRrtwC46WxEhhm4NNlgQtkV9515zaGUZWrGjRZVa_ohcPb9HFOAUcID4yV8dUW7E" })
          .then((currentToken) => {
            if (currentToken) {
              console.log('Client Token: ', currentToken);
              
            } else {
              
              console.log('Failed to generate the registration token.');
            }
          })
          .catch((err) => {
            console.log('An error occurred when requesting to receive the token.', err);
          });
      } else {
        console.log("User Permission Denied.");
      }
    });
  }