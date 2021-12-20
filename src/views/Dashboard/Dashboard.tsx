import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Dashboard.module.scss";
import img_1 from "@/Resource/Img/music-hero4.png";
import SoundCard, { SoundCardData } from "@/components/SoundCard/SoundCard";
import axios from "axios";
import { BACKEND_APP_API } from "@/App";
import { AppContext } from "@/AppContext";

const Dashboard = () => {
  const [offset, setOffset] = useState<number>(0);
  const [sounds, setSounds] = useState<SoundCardData[]>([]);
  const [moreSounds, setMoreSounds] = useState<boolean>(false);

  const [appState, dispatch] = useContext(AppContext);

  const currentDbSize = useRef<number>(0);

  useEffect(() => {
    axios.get(`${BACKEND_APP_API}/sound/get?offset=${0}`)
      .then(res => {
        currentDbSize.current = Number.parseInt(res.data["dbSize"])
        const res_sounds: SoundCardData[] = res.data["sounds"].map(x => {
          return {
            id: x.id,
            title: x.title,
            thumbnail: x.thumbnail,
            cdn_id: x.cdn_id,
            stream_id: x.stream_id,
            email: x.account.email,
            tags: x.tags.map(x2 => {
              return {
                name: x2.name,
                id: x2.id
              }
            })
          }
        })
        setSounds([...res_sounds]);
      })
  }, [])

  useEffect(() => {
    if (appState.search_key != "") {
      axios.get(`${BACKEND_APP_API}/sound/search?offset=${0}&search=${appState.search_key}`)
      .then(res => {
        currentDbSize.current = Number.parseInt(res.data["dbSize"])
        const res_sounds: SoundCardData[] = res.data["sounds"].map(x => {
          return {
            id: x.id,
            title: x.title,
            thumbnail: x.thumbnail,
            cdn_id: x.cdn_id,
            stream_id: x.stream_id,
            email: x.account.email,
            tags: x.tags.map(x2 => {
              return {
                name: x2.name,
                id: x2.id
              }
            })
          }
        })
        setSounds([...res_sounds]);
      })
    } else {
      axios.get(`${BACKEND_APP_API}/sound/get?offset=${0}`)
        .then(res => {
          currentDbSize.current = Number.parseInt(res.data["dbSize"])
          const res_sounds: SoundCardData[] = res.data["sounds"].map(x => {
            return {
              id: x.id,
              title: x.title,
              thumbnail: x.thumbnail,
              cdn_id: x.cdn_id,
              stream_id: x.stream_id,
              email: x.account.email,
              tags: x.tags.map(x2 => {
                return {
                  name: x2.name,
                  id: x2.id
                }
              })
            }
          })
          setSounds([...res_sounds]);
        })
    }
  }, [appState])

  useEffect(() => {
    setOffset(sounds.length);
  }, [sounds])

  useEffect(() => {
    if (offset < currentDbSize.current)
      setMoreSounds(true);
    else setMoreSounds(false);
  }, [offset])

  const loadMore = (e) => {
    axios.get(`${BACKEND_APP_API}/sound/get?offset=${offset}`)
      .then(res => {
        currentDbSize.current = Number.parseInt(res.data["dbSize"])
        const res_sounds: SoundCardData[] = res.data["sounds"].map(x => {
          return {
            title: x.title,
            thumbnail: x.thumbnail,
            cdn_id: x.cdn_id,
            stream_id: x.stream_id,
            email: x.account.email,
            tags: x.tags.map(x2 => {
              return {
                name: x2.name,
                id: x2.id
              }
            })
          }
        })
        setSounds([...sounds, ...res_sounds]);
      })
  }

  return (
    <div className={styles.topParentDiv}>
      <div className={styles.topPanelWrapper}>
        <div
          className={styles.topPanel}
          style={{ backgroundImage: `url(${img_1})` }}
        >
          <div className={styles.txtBlock}>
            <h1>The easiest way to find the</h1>
            <h1>perfect audio sample</h1>
          </div>
          {[...Array(7)].map((x, _) => (
            <br />
          ))}
          <h2>Become a better creator. Find your materials</h2>
        </div>
      </div>
      {[...Array(3)].map((x, _) => (
        <div style={{ height: "5px" }}></div>
      ))}\

      <div className={styles.titleDiv}>
        <h1>Latest Sound</h1>
      </div>

      <div className={styles.flexDiv}>
        <div className={styles.container}>
          {sounds.map((x, _) => (
            <div className={styles.item}>
              <SoundCard {...x} />
            </div>
          ))}
        </div>

      </div>

      {
        moreSounds ?
          <div style={{width: "90%"}}>
            {[...Array(3)].map((x, _) => (
              <div style={{ height: "2px" }}></div>
            ))}

            <div className={styles.loadMoreDiv}>
              <button onClick={loadMore}>Load More</button>
            </div>
          </div> : <div />
      }


      {[...Array(3)].map((x, _) => (
        <div style={{ height: "10px" }}></div>
      ))}
      {[...Array(3)].map((x, _) => (
        <div style={{ height: "10px" }}></div>
      ))}
    </div>
  );
};

export default Dashboard;
