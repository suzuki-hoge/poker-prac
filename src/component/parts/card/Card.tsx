import { type FC } from 'react'
import styles from './Card.module.scss'

interface Props {
  c: [string, 's' | 'h' | 'c' | 'd']
}

const colors = { s: styles.black, h: styles.red, c: styles.black, d: styles.red }
const marks = { s: '♠︎', h: '♥︎', c: '♣︎', d: '♦︎' }

export const Card: FC<Props> = (props) => {
  return (
    <div className={[styles.component, colors[props.c[1]]].join(' ')}>
      <span>{props.c[0]}</span>
      <span>{marks[props.c[1]]}</span>
    </div>
  )
}
