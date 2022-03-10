const images = [
  {
    id: 1,
    url: 'https://c.tenor.com/qX0DD_wmplEAAAAC/haha-nelson.gif',
  },
  {
    id: 2,
    url: 'https://www.tuexperto.com/wp-content/uploads/2021/02/meme-coronavirus-vacuna-simon-1.jpeg',
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
    id: 21,
    url: 'https://i.gifer.com/1vcd.gif',
  },
];

export default function getImagesUrl(id) {
  let url;
  images.forEach((image) => {
    if (image.id === id) {
      url = image.url;
    }
  });
  return url;
}
