import { CDN_API, HLS_API } from "@/App";
import Hls from "hls.js";
import React, { useRef } from "react";
import ReactPlayer from "react-player";
import styles from "./SoundCard.module.scss";

export interface SoundCardData {
  id: string;
  title: string;
  // original_name: string;
  thumbnail: string;
  cdn_id: string;
  stream_id: string;
  // collection_id: string;
  email: string;
  tags: { name: string, id: string }[];
}

const SoundCard = (prop: SoundCardData) => {
  const vid = useRef<HTMLVideoElement>();

  const playMedia = (e) => {
    if (Hls.isSupported()) {
      let hls = new Hls();
      hls.loadSource(`${HLS_API}/${prop.stream_id}`)
      hls.attachMedia(vid.current)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        vid.current.play();
      })
    } else if (vid.current.canPlayType('application/vnd.apple.mpegurl')) {
      vid.current.src = `${HLS_API}/${prop.stream_id}`
      vid.current.addEventListener('canplay',function() {
        vid.current.play();
      });
    }
  }

  const downloadMedia = (e) => {
    window.open(`${CDN_API}/serve?file-id=${prop.cdn_id}`);
    // window.location.href = ``;
  }

  return (
    <div>
      <div className={styles.mainPanel}>
        <div className={styles.wave}>
            <img src={`${prop.thumbnail}`}></img>
            <div className={styles.title}>{prop.title}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.tagZone}>

            {prop.tags.map((x, _) => (
              <div className={styles.tag}>
                {x.name}
              </div>
            ))}
            
          </div>
        </div>
        <div className={styles.playNDownload}>
          <div className={styles.container}>
            <button onClick={playMedia}>Play &nbsp;&nbsp;
              <i className="fas fa-play"></i>
            </button>
            <button onClick={downloadMedia}>Download &nbsp;&nbsp;
              <i className="fas fa-download"></i>
            </button>
          </div>
        </div>

        <video id="video" width="320" height="240" ref={vid} style={{display: "none"}}></video>
      </div>
    </div>
  );
};

export default SoundCard;
