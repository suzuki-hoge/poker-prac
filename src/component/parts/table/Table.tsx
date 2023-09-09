import { type FC } from 'react'
import styles from './Table.module.scss'

const cs = { 6: styles.v6, 5: styles.v5, 4: styles.v4, 3: styles.v3, 2: styles.v2, 1: styles.v1, 0: styles.v0 }

interface Props {
  v1?: [string, 's' | 'h' | 'c' | 'd']
  v2?: [string, 's' | 'h' | 'c' | 'd']
}

export const Table: FC<Props> = (props) => {
  const status: (n1: string, n2: string, s: 'o' | 's') => string = (n1, n2, s) => {
    if (props.v1 !== undefined && props.v2 !== undefined) {
      if ((props.v1[0] === n1 && props.v2[0] === n2) || (props.v1[0] === n2 && props.v2[0] === n1)) {
        if (s === 'o' && props.v1[1] !== props.v2[1]) {
          return styles.act
        }
        if (s === 's' && props.v1[1] === props.v2[1]) {
          return styles.act
        }
        return styles.stb
      } else {
        return styles.stb
      }
    } else {
      return styles.act
    }
  }

  return (
    <table className={styles.component}>
      <tbody>
        <tr>
          <th></th>
          <th>A</th>
          <th>K</th>
          <th>Q</th>
          <th>J</th>
          <th>T</th>
          <th>9</th>
          <th>8</th>
          <th>7</th>
          <th>6</th>
          <th>5</th>
          <th>4</th>
          <th>3</th>
          <th>2</th>
        </tr>
        <tr>
          <th>A</th>
          <td className={[styles.cell, cs[6], status('A', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[6], status('A', 'K', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[5], status('A', 'Q', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[5], status('A', 'J', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[5], status('A', 'T', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('A', '9', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('A', '8', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('A', '7', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('A', '6', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('A', '5', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('A', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('A', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('A', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>K</th>
          <td className={[styles.cell, cs[6], status('K', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[6], status('K', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[5], status('K', 'Q', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[4], status('K', 'J', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('K', 'T', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('K', '9', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('K', '8', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('K', '7', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('K', '6', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('K', '5', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('K', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('K', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('K', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>Q</th>
          <td className={[styles.cell, cs[5], status('Q', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[4], status('Q', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[6], status('Q', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[4], status('Q', 'J', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('Q', 'T', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('Q', '9', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('Q', '8', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('Q', '7', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('Q', '6', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('Q', '5', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('Q', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('Q', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('Q', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>J</th>
          <td className={[styles.cell, cs[4], status('J', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('J', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('J', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[5], status('J', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[4], status('J', 'T', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('J', '9', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('J', '8', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('J', '7', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('J', '6', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('J', '5', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('J', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('J', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('J', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>T</th>
          <td className={[styles.cell, cs[3], status('T', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('T', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('T', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('T', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[5], status('T', 'T', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('T', '9', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('T', '8', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('T', '7', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('T', '6', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('T', '5', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('T', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('T', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('T', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>9</th>
          <td className={[styles.cell, cs[2], status('9', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('9', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('9', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('9', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('9', 'T', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[5], status('9', '9', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('9', '8', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('9', '7', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('9', '6', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('9', '5', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('9', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('9', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('9', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>8</th>
          <td className={[styles.cell, cs[1], status('8', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', 'T', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', '9', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[4], status('8', '8', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('8', '7', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', '6', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', '5', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('8', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>7</th>
          <td className={[styles.cell, cs[1], status('7', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', 'T', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', '9', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', '8', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[4], status('7', '7', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('7', '6', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', '5', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('7', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>6</th>
          <td className={[styles.cell, cs[0], status('6', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', 'T', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', '9', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', '8', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', '7', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('6', '6', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[1], status('6', '5', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('6', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>5</th>
          <td className={[styles.cell, cs[0], status('5', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', 'T', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', '9', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', '8', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', '7', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', '6', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[3], status('5', '5', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', '4', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('5', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>4</th>
          <td className={[styles.cell, cs[0], status('4', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', 'T', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', '9', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', '8', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', '7', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', '6', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', '5', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('4', '4', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', '3', 's')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('4', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>3</th>
          <td className={[styles.cell, cs[0], status('3', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', 'T', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', '9', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', '8', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', '7', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', '6', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', '5', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', '4', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('3', '3', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('3', '2', 's')].join(' ')}></td>
        </tr>
        <tr>
          <th>2</th>
          <td className={[styles.cell, cs[0], status('2', 'A', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', 'K', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', 'Q', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', 'J', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', 'T', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', '9', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', '8', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', '7', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', '6', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', '5', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', '4', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[0], status('2', '3', 'o')].join(' ')}></td>
          <td className={[styles.cell, cs[2], status('2', '2', 'o')].join(' ')}></td>
        </tr>
      </tbody>
    </table>
  )
}
