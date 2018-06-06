//Write a function to retrieve a blob of json - make ajax request.
//Use the fetch function.
// https://rallycoding.herokuapp.com/api/music_albums
//when you make a request with fetch, fetch returns a promise. To get the callback that the promise has
//been resolved chain on .then
//Async/Await is specifically for handling any type of async code inside of a function.


function fetchAlbums() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchAlbums()


async function fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()

  console.log(json);
}

fetchAlbums()
