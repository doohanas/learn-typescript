const getSong = () => 'song';
const whoSangThis: string = getSong();

const singles = [
  {song: 'touch of grey', artist: 'grateful dead'},
  {song: 'paint it black', artist: 'rolling stones'},
];

export const findSong = singles.find(single => single.song === whoSangThis);
