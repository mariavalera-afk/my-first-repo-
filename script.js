// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let images =[
  "https://variety.com/wp-content/uploads/2024/11/albumcovertreatment-10.jpg?w=1000&h=562&crop=1","https://upload.wikimedia.org/wikipedia/en/4/4f/H.E.R._%282017%29_album_cover.jpg"
, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f7b4681-7e34-44c8-9d06-0da22bbef018/difr7xo-6f8b00dc-2cd6-4dec-95a4-1cbcb617ac93.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmN2I0NjgxLTdlMzQtNDRjOC05ZDA2LTBkYTIyYmJlZjAxOFwvZGlmcjd4by02ZjhiMDBkYy0yY2Q2LTRkZWMtOTVhNC0xY2JjYjYxN2FjOTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WOerIhhFQXNy_NpIlPOMuc_QYJ-G0KKaaRCdotuzik4" , "https://variety.com/wp-content/uploads/2024/11/albumcovertreatment-10.jpg?w=1000&h=562&crop=1" , "https://variety.com/wp-content/uploads/2024/11/albumcovertreatment-10.jpg?w=1000&h=562&crop=1"
]
let songname =[
  "luther" , "best part" , "better" , "tv off" , "peekaboo"
]
let artists =[
  "kendrick lamar" , "H.E.R" , "khalid" , "kendrick lamar" , "kendrick lamar"
]
let songlink =[
  "https://www.youtube.com/watch?v=HfWLgELllZs" , "https://www.youtube.com/watch?v=vBy7FaapGRo" , "https://www.youtube.com/watch?v=x3bfa3DZ8JM" , "https://www.youtube.com/watch?v=U8F5G5wR1mk" , "https://www.youtube.com/watch?v=cbHkzwa0QmM"
]
//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}



/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

for(let i = 0; i<images.length;i++){
  displayImage.insertAdjacentHTML(`beforeend`,`<img src = ${images[i]}>`)
}
  
for(let i = 0; i<songname.length;i++){ 
  displaySong.insertAdjacentHTML(`beforeend`, `<p> ${songname[i]} </p>`)
}
for (let i = 0; i<artists.length;i++){
  displayArtist.insertAdjacentHTML(`beforeend`, `<p> ${artists[i]}</p>`)
}
for (let i = 0; i<songlink.length;i++){  
  displayLink.insertAdjacentHTML(`beforeend`, `<p><a href =${songlink[i]}> ${songname[i]} </a></p>`)
                                 
}
}



// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
