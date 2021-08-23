import React, { useState } from "react";
import {
  removeContact,
  addFavorite,
  removeFavorite,
  editContact,
} from "../redux/contacts/actions";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/ContactList.module.css";

export default function ContactList({ id, name, number, email, favorite }) {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactReducer);
  console.log(contacts);

  const [editID, setEditID] = useState(id);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const [editEmail, setEditEmail] = useState(email);

  const [isEditing, setIsEditing] = useState(false);

  const local_item = [];

  if (typeof window !== "undefined") {
    if (window.localStorage.getItem("contact")) {
      const temp_data = JSON.parse(window.localStorage.getItem("contact"));
      local_item.push(...temp_data);
    }
  }

  const handleFavorite = () => {
    const res = dispatch(
      addFavorite({
        id: id,
      })
    );
    if (res) {
      console.log(res);
      local_item[id - 1].favorite = true;
      localStorage.setItem("contact", JSON.stringify(local_item));
    }
    console.log("test");
  };

  const handleRemove = () => {
    const res = dispatch(
      removeContact({
        id: id,
      })
    );
    if (res) {
      console.log(res);
      for (let ia = 0; ia < local_item.length; ia++) {
        if (local_item[ia].id === res.id) {
          local_item.splice(ia, 1);
        }
      }
      localStorage.setItem("contact", JSON.stringify(local_item));
    }
  };

  const handleRemoveFavorite = () => {
    const res = dispatch(
      removeFavorite({
        id: id,
      })
    );
    if (res) {
      console.log(res);
      local_item[id - 1].favorite = false;
      localStorage.setItem("contact", JSON.stringify(local_item));
    }
    console.log("test");
  };

  const handleEditName = (e) => {
    setEditName(e.target.value);
  };

  const handleEditNumber = (e) => {
    setEditNumber(e.target.value);
  };

  const handleEditEmail = (e) => {
    setEditEmail(e.target.value);
  };

  const handleChangeContact = () => {
    const res = dispatch(
      editContact({
        id: editID,
        name: editName,
        number: editNumber,
        email: editEmail,
        favorite: favorite,
      })
    );
    if (res) {
      console.log(res);
      for (let ib = 0; ib < local_item.length; ib++) {
        if (local_item[ib].id === res.id) {
          local_item[ib].name = res.name;
          local_item[ib].email = res.email;
          local_item[ib].number = res.number;
          local_item[ib].favorite = res.favorite;
          local_item[ib].id = res.id;
        }
      }
      localStorage.setItem("contact", JSON.stringify(local_item));
    } else {
      console.log("fail");
    }
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {isEditing ? (
          <div>
            <input
              className={styles.container_input}
              value={editName}
              type="text"
              onChange={handleEditName}
            />
          </div>
        ) : (
          <div>
            <p>{name}</p>
          </div>
        )}
      </div>
      <div className={styles.number}>
        {isEditing ? (
          <div>
            <input
              className={styles.container_input}
              value={editNumber}
              type="text"
              onChange={handleEditNumber}
            />
          </div>
        ) : (
          <div>
            <p>{number}</p>
          </div>
        )}
      </div>
      <div className={styles.email}>
        {isEditing ? (
          <div>
            <input
              className={styles.container_input}
              value={editEmail}
              type="text"
              onChange={handleEditEmail}
            />
          </div>
        ) : (
          <div>
            <p>{email}</p>
          </div>
        )}
      </div>
      <div className={styles.action}>
        <p>
          {!favorite ? (
            <span onClick={handleFavorite}>
              <FavoriteBorderIcon className={styles.action_button} />
            </span>
          ) : (
            <span onClick={handleRemoveFavorite}>
              <FavoriteIcon className={styles.action_button} />
            </span>
          )}
        </p>
        <p onClick={handleRemove}>
          <DeleteForeverIcon className={styles.action_button} />
        </p>
        {isEditing ? (
          <div>
            <p onClick={handleChangeContact}>
              <SaveIcon className={styles.action_button} />
            </p>
          </div>
        ) : (
          <div>
            <p
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <EditIcon className={styles.action_button} />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
