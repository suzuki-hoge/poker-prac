import { type FC } from 'react'
import styles from './Button.module.scss'

interface Props {
  v: 6 | 5 | 4 | 3 | 2 | 1 | 0
  onClick: () => void
}

const vs = { 6: styles.v6, 5: styles.v5, 4: styles.v4, 3: styles.v3, 2: styles.v2, 1: styles.v1, 0: styles.v0 }

export const Button: FC<Props> = (props) => {
  return (
    <button className={[styles.component, vs[props.v]].join(' ')} onClick={props.onClick}>
      {props.v}
    </button>
  )
}
