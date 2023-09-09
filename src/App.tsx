import React, { type FC, useState } from 'react'
import _ from 'lodash'
import styles from './App.module.scss'
import { Card } from './component/parts/card/Card'
import { TfiReload } from 'react-icons/tfi'
import { GrLinkNext } from 'react-icons/gr'
import { Preflop } from './component/pages/preflop/Preflop'
import { Board } from './component/pages/flop/Board'

export const App: FC = () => {
  const [mode, setMode] = useState(0)
  const [cs, setCs] = useState<Array<[string, 's' | 'h' | 'c' | 'd']>>(shuffle())
  const [fixed, setFixed] = useState(false)

  return (
    <div className={styles.component}>
      <div className={styles.cards}>
        <Card c={cs[0]} />
        <Card c={cs[1]} />
        <div className={styles.icon}>
          <TfiReload
            onClick={() => {
              setMode(0)
              setCs(shuffle())
              setFixed(false)
            }}
          />
        </div>
        <div className={styles.icon}>
          {mode !== 3 && (
            <GrLinkNext
              onClick={() => {
                setMode((mode + 1) % 4)
              }}
            />
          )}
        </div>
      </div>
      {mode === 0 ? (
        <Preflop c1={cs[0]} c2={cs[1]} fixed={fixed} setFixed={setFixed} />
      ) : (
        <Board c3={cs[2]} c4={cs[3]} c5={cs[4]} c6={mode >= 2 ? cs[5] : undefined} c7={mode >= 3 ? cs[6] : undefined} />
      )}
    </div>
  )
}

function shuffle(): Array<[string, 's' | 'h' | 'c' | 'd']> {
  return _.shuffle(
    ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'].flatMap((n) =>
      ['s', 'h', 'c', 'd'].map((s) => [n, s] as [string, 's' | 'h' | 'c' | 'd'])
    )
  )
}
