import React, {useState, useEffect} from 'react'

import {setStatus} from "../../../redux/profile-reducer";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);
  const activateEditMod = () => {
    setEditMode(true);
  }
  const disactivateEditMod = () => {
    setEditMode(false);
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }
  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  return (
    <div>
      {!editMode && <div>
        <span onDoubleClick={activateEditMod}>{props.status || "-----"}</span>
      </div>
      }

      {editMode && <div>
        <input autoFocus={true}
               onChange={onStatusChange}
               onBlur={disactivateEditMod}
               value={status}
        />
      </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks