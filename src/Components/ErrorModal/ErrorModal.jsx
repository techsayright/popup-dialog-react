import React from "react";
import Styles from "Components/CSS/ErrorModal.module.scss";
import { Button } from "Components/UI/Button";
import { Card } from "Components/UI/Card";

export default function ErrorModal({ caption, onClick }) {
  return (
      <div className={Styles.backDrop} onClick={onClick}>
        <Card className={Styles.ErrModal} >
          <header className={Styles.header}>Ooops!</header>
          <section className={Styles.caption}>{caption}</section>
          <footer className={Styles.footer}>
            <Button fontSize="1.5rem" color="white" onClick={onClick}>OK</Button>
          </footer>
        </Card>
      </div>
  );
}
