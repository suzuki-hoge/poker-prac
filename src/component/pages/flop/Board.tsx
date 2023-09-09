import React, { type FC } from 'react'
import styles from './Board.module.scss'
import { Card } from '../../parts/card/Card'

interface Props {
  c3: [string, 's' | 'h' | 'c' | 'd']
  c4: [string, 's' | 'h' | 'c' | 'd']
  c5: [string, 's' | 'h' | 'c' | 'd']
  c6?: [string, 's' | 'h' | 'c' | 'd']
  c7?: [string, 's' | 'h' | 'c' | 'd']
}

export const Board: FC<Props> = (props) => {
  return (
    <div className={styles.component}>
      <div className={styles.cards}>
        <Card c={props.c3} />
        <Card c={props.c4} />
        <Card c={props.c5} />
        {props.c6 !== undefined && <Card c={props.c6} />}
        {props.c7 !== undefined && <Card c={props.c7} />}
      </div>
    </div>
  )
}
