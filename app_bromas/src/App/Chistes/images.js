const images = [
  {
    id: 1,
    url: 'https://c.tenor.com/qX0DD_wmplEAAAAC/haha-nelson.gif',
  },
  {
    id: 2,
    url: 'https://c.tenor.com/NL8CCsUzEwIAAAAC/la-vida-moderna-todo-mal.gif',
  },
  {
    id: 3,
    url: 'https://i.kym-cdn.com/entries/icons/original/000/030/329/cover1.jpg',
  },
  {
    id: 4,
    url: 'https://i.pinimg.com/236x/dd/20/0c/dd200c45b6d3e374834ec013e5864864--smiling-animals-smiling-dogs.jpg',
  },
  {
    id: 5,
    url: 'https://i.gifer.com/ErIP.gif',
  },
  {
    id: 6,
    url: 'https://www.latercera.com/resizer/a-D988BHPoI7uZP2gbPEeyhlePg=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/V22TFHDDIJELZC2J5OSQFHM4A4.gif',
  },
  {
    id: 7,
    url: 'https://c.tenor.com/JHThEGS6TcoAAAAC/funny-joke-yoda-doll-star-wars.gif',
  },
  {
    id: 8,
    url: 'https://media.discordapp.net/attachments/268765387061985280/799811629713588274/image0.gif',
  },
  {
    id: 9,
    url: 'https://c.tenor.com/CN38-tGBFh4AAAAM/feo-sonrojada.gif',
  },
  {
    id: 10,
    url: 'https://i.imgur.com/xPHwetB.gif',
  },
  {
    id: 11,
    url: 'https://i.pinimg.com/originals/19/a6/06/19a6064c7ce7b413e46e1a2c614d3737.gif',
  },
  {
    id: 12,
    url: 'https://c.tenor.com/u-ptmliTb0kAAAAM/joaquin-betis.gif',
  },
  {
    id: 13,
    url: 'https://i.giphy.com/media/13B4SHzq0P06rK/giphy.gif',
  },
  {
    id: 14,
    url: 'https://c.tenor.com/JwUFsKGXHKYAAAAd/fallas-en.gif',
  },
  {
    id: 15,
    url: 'https://c.tenor.com/9ztlI-rJWisAAAAC/mirada-pervertida.gif',
  },
  {
    id: 16,
    url: 'https://c.tenor.com/m3SBhmatvbMAAAAd/seriously-seriously-cat.gif',
  },
  {
    id: 17,
    url: 'https://64.media.tumblr.com/4fa9018174eab02d57d5bee0bbfb7425/tumblr_n3x1bgkGz61qlj8o6o1_400.gifv',
  },
  {
    id: 18,
    url: 'https://c.tenor.com/Gst-oJep2vkAAAAS/perro-con-ojos-mr-bubz.gif',
  },
  {
    id: 19,
    url: 'https://i.gifer.com/M0sA.gif',
  },
  {
    id: 20,
    url: 'https://i.gifer.com/Hp3s.gif',
  },
  {
    id: 22,
    url: 'https://i1.wp.com/www.talentoteca.es/blog/wp-content/uploads/2019/10/Bob-esponja.gif?resize=400%2C309&ssl=1',
  },
  {
    id: 23,
    url: 'https://c.tenor.com/GRFNVdnrVrgAAAAC/win-error-error.gif',
  },
  {
    id: 24,
    url: 'https://c.tenor.com/IvBIKwbv6VIAAAAC/orange-juice-meme-orange-juice.gif',
  },
  {
    id: 25,
    url: 'https://i.pinimg.com/originals/f4/97/d5/f497d55088aba26d78c26958a636b97a.gif',
  },
  {
    id: 26,
    url: 'https://c.tenor.com/xiynynvVyMQAAAAC/thanos-twerk-thanos-cheek-clap.gif',
  },
  {
    id: 27,
    url: 'https://c.tenor.com/HriJ9iilg1QAAAAd/cat-vibe.gif',
  },
  {
    id: 28,
    url: 'https://c.tenor.com/mUXqG0h_G70AAAAC/spongebob-patrick-star.gif',
  },
  {
    id: 29,
    url: 'https://c.tenor.com/2aovDqg4aQcAAAAC/reaction-black.gif',
  },
  {
    id: 30,
    url: 'https://c.tenor.com/eZQKNLIfXxEAAAAC/pepe-peepo.gif',
  },
  {
    id: 31,
    url: 'https://raw.githubusercontent.com/gist/rwxd/9427ecfbf9a35d4903cdd4ab1606c4d7/raw/382cc62d0e1f186648464291f8221deacb1eb58d/peepo.gif',
  },
  {
    id: 32,
    url: 'http://pa1.narvii.com/7219/763d4915dc262257435204814d9aa311b6a1b1cfr1-259-265_00.gif',
  },
  {
    id: 33,
    url: 'https://www.gifmaniacos.es/wp-content/uploads/2020/11/gifmaniacos.es-5.gif',
  },
  {
    id: 34,
    url: 'https://j.gifs.com/wjXwrr.gif',
  },
  {
    id: 35,
    url: 'https://media1.giphy.com/media/l1J9NEylZq7azh2s8/giphy.gif',
  },
  {
    id: 36,
    url: 'https://c.tenor.com/Rx7qhnyNoOwAAAAC/belle-delphine-belle.gif',
  },
];

export default function getImagesUrl(id) {
  let url;
  images.forEach((image) => {
    if (image.id === id) {
      console.log(id);
      url = image.url;
    }
  });
  return url;
}
