import React, { useCallback, useContext, useEffect, useState } from 'react';
import styles from "./UploadSound.module.scss"
import Dropzone, { useDropzone } from "react-dropzone"
import { WithContext as ReactTags } from 'react-tag-input';
import { AppContext } from '@/AppContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { style } from '@mui/system';
import axios from 'axios';
import { BACKEND_APP_API, CDN_API } from '@/App';

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

interface Sound_t {
  title: string;
  original_name: string;
  thumbnail: string;
  cdn_id: string;
  stream_id: string;
  collection_id: string;
  email: string;
  tag_ids: string[];
}

const UploadSound = () => {
  const [appState, dispatch] = useContext(AppContext)
  const [soundFile, setSoundFile] = useState<File>(null)
  const [soundTitle, setSoundTitle] = useState<string>(undefined)

  const [sound, setSound] = useState<Sound_t>({
    title: "",
    original_name: "",
    thumbnail: "",
    cdn_id: "",
    stream_id: "",
    collection_id: "",
    email: "",
    tag_ids: []
  })

  const onSoundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSoundFile(e.currentTarget.files[0])
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSoundTitle(e.currentTarget.value)
  }

  const [tags, setTags] = React.useState<{
    label: string; id: string
  }[]>([]);

  const onDeleteTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTags(tags.filter((tag, index) => tag.id != e.currentTarget.parentElement.id));
  }

  const onSelectGenre = (e, newValue) => {
    if (tags.findIndex(x => x.id == newValue.id) != -1) {
      return
    }
    setTags([...tags, newValue]);
  }

  const onSubmit = (e) => {
    const formData = new FormData();
    formData.append("file", soundFile);

    axios.post(`${CDN_API}/upload-file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(res => {
      const cdn_id = res.data["filename"];

      axios.get(`${CDN_API}/extract-wav-img?sound-id=${cdn_id}`)
        .then(res_1 => {
          const thumbnail = `${CDN_API}/serve?file-id=${res_1.data["filename"]}`

          axios.get(`${CDN_API}/create-stream?file-id=${cdn_id}`)
            .then(res_2 => {
              const stream_id = res_2.data["stream-id-2"];

              setSound({
                title: soundTitle,
                original_name: soundFile.name.replace(/\s+/g, ''),
                thumbnail, cdn_id, stream_id, collection_id: "", 
                email: appState.email,
                tag_ids: tags.map(x => x.id)
              })
            })
        })
    })
  }

  useEffect(() => {
    if (sound.stream_id != "") {
      axios.post(`${BACKEND_APP_API}/sound/submit`, sound)
        .then(res => {
          console.log(res.data)
          alert("Submitted successfully")

          setTags([])
        })
    }
  }, [sound])

  const suggestions = appState.listTags.map(x => {
    return {
      label: x.name,
      id: x.id,
    }
  })

  return (
    <div className={styles.mainPanel}>
      <div className={styles.header}>Upload Sounds</div>
      {[...Array(3)].map((x, _) => (
        <div style={{ height: "10px" }}></div>
      ))}

      <div className={styles.dropZone}>
        <input id="filePicker" onChange={onSoundChange} type="file"></input>
      </div>

      {[...Array(3)].map((x, _) => (
        <div style={{ height: "10px" }}></div>
      ))}

      <label className={styles.header2}>Title</label>
      <input className={styles.title} type="text" onChange={onTitleChange} />

      {[...Array(3)].map((x, _) => (
        <div style={{ height: "5px" }}></div>
      ))}

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={onSelectGenre}
        options={suggestions}
        sx={{ width: "97%" }}
        renderInput={(params) => <TextField {...params} label="Genre"
        />}
      />

      {[...Array(3)].map((x, _) => (
        <div style={{ height: "5px" }}></div>
      ))}
      <div className={styles.tagZone}>
        {tags.map((x, _) => (
          <div className={styles.tag} id={x.id}>
            {x.label}

            <button onClick={onDeleteTag}>
              <i className={styles.deleteTag + " fas fa-times"}></i>
            </button>
          </div>
        ))}
      </div>
      {[...Array(3)].map((x, _) => (
        <div style={{ height: "5px" }}></div>
      ))}
      <div className={styles.endDiv}>
        <button className={styles.submitBtn} onClick={onSubmit}>Submit</button>
      </div>

    </div>
  )
};

export default UploadSound;