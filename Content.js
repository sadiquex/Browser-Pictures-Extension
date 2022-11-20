// an array of image links
let drakeimages = [
  'https://www.nme.com/wp-content/uploads/2020/05/drake-2020-getty--696x442.jpg',
  'https://townsquare.media/site/812/files/2020/04/drake-rap-quotes.jpg?w=980&q=75',
  'https://cdn.justjared.com/wp-content/uploads/headlines/2020/01/drake-parties-with-friends-in-nyc.jpg',
  'https://wallpapercave.com/wp/wp2742425.jpg',
  'https://wallpapercave.com/wp/wp5424227.jpg',
  'https://cutewallpaper.org/21/drake-hd-pics/Drake-wallpapers-Music-HQ-Drake-pictures-4K-Wallpapers-2019.jpg',
  'https://i.pinimg.com/originals/e1/a4/53/e1a453cba0b12f78b5ae8307bba7b286.jpg',
  'https://swall.teahub.io/photos/small/204-2042355_drake-wallpaper-iphone-x.png',
  'https://yardhype.com/wp-content/uploads/2020/03/Screenshot-2020-03-01-at-10.02.16-AM.jpg',
  'https://www.nme.com/wp-content/uploads/2021/11/drake-statement-astroworld-festival-tragedy-travis-scott@2000x1270-696x442.jpg',
  'https://www.enwallpaper.com/wp-content/uploads/tumblr-p4a2pcJ6Hw1w2d5bpo3-1280.jpg',
  'https://lastfm.freetls.fastly.net/i/u/ar0/1f3367f2531ed9eaa1fccb14fdc74063',
  'https://i.pinimg.com/474x/91/b4/3a/91b43a08dccaed4741b08119f6ca8744.jpg',
  'https://media.pitchfork.com/photos/5dc96f7eddb62f0008c2dd8c/16:9/w_2672,h_1503,c_limit/drake%20booed%20off%20camp%20flog%20gnaw%20frank%20ocean%20.jpg',
  'https://e0.pxfuel.com/wallpapers/505/260/desktop-wallpaper-drake-luxury-drake-singer-laptop-full-thumbnail.jpg',
];

const images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
  const randomImg = Math.floor(Math.random() * drakeimages.length); //get a random value from array
  images[i].src = drakeimages[randomImg]; //change image's src to random value in array
}

const headers = document.getElementsByTagName('h2');
for (let i = 0; i < headers.length; i++) {
  headers[1].innerText = 'Saddik is a boy';
}
