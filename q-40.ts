
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };

 // Add tracks to the album object if the parameter is provided
if (tracks !== undefined) {
    album['tracks'] = tracks;
}
return album;
}
// Function call 1 without tracks
let album1 = make_album('Ali',' light',1);
console.log(album1);

// Function call 2 with tracks
let album2 = make_album('Bilal', 'Red wave', 12);
console.log(album2);

// Function call 3 without tracks
let album3 = make_album('Hamza', 'seenbreez',3);
console.log(album3);

