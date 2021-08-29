import React from 'react'
import styles from 'Components/CSS/Card.module.scss'

export const Card = (props) => {
    return (
        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>
    )
}
