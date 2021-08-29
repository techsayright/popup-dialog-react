import React from "react";
import styles from 'Components/CSS/UserList.module.scss'
import { Card } from "Components/UI/Card";

export const UserList = ({valArray}) => {
  return (
    <React.Fragment>
      {valArray.map((v,k) => {
        return (
          <Card className={styles.userList} key={k}>
            <div><strong>Name:</strong> {v.name}</div>
            <div><strong>Age (in Years):</strong> {v.age}</div>
          </Card>
        );
      })}
    </React.Fragment>
  );
};
