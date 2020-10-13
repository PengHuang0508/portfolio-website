const chip = {
  express: {
    label: 'Express',
    backgroundColor: '#f1f1f1',
    textColor: '#000',
  },
  firebase: {
    label: 'Firebase',
    backgroundColor: '#059be5',
    textColor: '#F6820D',
  },
  javascript: {
    label: 'JavaScript',
    backgroundColor: '#f0db4f',
    textColor: '#323330',
  },
  materialUI: {
    label: 'Material-UI',
    backgroundColor: '#f1f1f1',
    textColor: '#0b83cc',
  },
  mysql: {
    label: 'MySQL',
    backgroundColor: '#00758f',
    textColor: '#f29111',
  },
  nginx: {
    label: 'Nginx',
    backgroundColor: '#00963a',
    textColor: '#fdfefd',
  },
  node: {
    label: 'Node.js',
    backgroundColor: '	#8ac500',
    textColor: '#303030',
  },
  php: {
    label: 'PHP',
    backgroundColor: '#8993be',
    textColor: '#232531',
  },
  react: {
    label: 'ReactJS',
    backgroundColor: '#61dbfb',
    textColor: '#000',
  },
  redux: {
    label: 'Redux',
    backgroundColor: '#764abc',
    textColor: '#000',
  },
};

module.exports = [
  {
    name: 'Mellon',
    year: '2020',
    repository: 'https://github.com/PengHuang0508/streaming-app-frontend',
    description:
      'Mellon is an AWS powered online video streaming platform. Users can also watch, upload and edit videos. Backend takes care of all the video preparation. Server first transcodes the video to HLS format and creates thumbnails. Output files are then encrypted and stored safely on AWS S3.',
    chips: [
      chip.javascript,
      chip.react,
      chip.redux,
      chip.materialUI,
      chip.node,
      chip.php,
      chip.mysql,
      chip.nginx,
    ],
  },
  {
    name: "Pome'Lona",
    year: '2019',
    repository:
      'https://github.com/PengHuang0508/restaurant-ordering-app-react-client',
    description:
      'Pome\'Lona, or called "Reacto" is a web application for processing customer orders for restaurants. It can process both dine-in and online orders. All the data, including menu, orders and user information is stored on Firebase database.',
    chips: [
      chip.javascript,
      chip.react,
      chip.redux,
      chip.express,
      chip.materialUI,
      chip.node,
      chip.firebase,
    ],
  },
];
