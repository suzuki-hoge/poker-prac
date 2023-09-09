import React, { type FC } from 'react'
import { Table } from '../../parts/table/Table'
import { Button } from '../../parts/button/Button'
import styles from './Preflop.module.scss'

interface Props {
  c1: [string, 's' | 'h' | 'c' | 'd']
  c2: [string, 's' | 'h' | 'c' | 'd']
  fixed: boolean
  setFixed: (b: boolean) => void
}

export const Preflop: FC<Props> = (props) => {
  const fix: () => void = () => {
    props.setFixed(true)
  }

  return (
    <div className={styles.component}>
      <div className={styles.buttons}>
        <Button v={6} onClick={fix} />
        <Button v={5} onClick={fix} />
        <Button v={4} onClick={fix} />
        <Button v={3} onClick={fix} />
        <Button v={2} onClick={fix} />
        <Button v={1} onClick={fix} />
        <Button v={0} onClick={fix} />
      </div>
      {props.fixed && <Table v1={props.c1} v2={props.c2} />}
    </div>
  )
}
