// const makeRequest = url => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.open('GET', url);

//     request.onload = () => {
//       console.log(request.status);
//       if (request.status === 200) {
//         const response = JSON.parse(request.response);
//         resolve(response);
//       } else {
//         reject('Error');
//       }
//     };

//     request.onerror = () => {
//       reject('Error');
//     };

//     request.send();
//   });
// };

fetch('../data/users.json')
  .then(response => response.json())
  .then(asd => console.log(asd))
  .catch(error => console.log(error));

const fetchData = async url => {
  try {
    const response = await fetch('../data/users.json');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
