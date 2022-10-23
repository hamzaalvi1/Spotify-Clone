import styles from "./Songlist.module.scss";
import SongDetails from "../SongDetail/SongDetail";
export default function Songlist({songs}) {
  
  return (
      <>
      {
        songs.map(({songName,artistName},idx)=> <SongDetails songName={songName} artistName={artistName} key={idx} />)
      }
      </>
  
  );
}
