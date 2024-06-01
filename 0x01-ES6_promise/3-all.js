import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup () {
  uploadPhoto().then((photo) => {
    return photo.body;
  }).then((body) => {
    createUser().then((user) => {
      console.log(body, user.firstName, user.lastName);
    }).catch(() => {
      console.log('signup system offline');
    });
  }).catch(() => {
    console.log('Signup system offline');
  });
}
