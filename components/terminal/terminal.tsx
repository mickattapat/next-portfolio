import classNames from "classnames"

import styles from "./terminal.module.css"

type Props = {
  detail:any
}

const Terminal = (props: Props) => {
  const { detail } = props

  return (
    <div className={styles.terminal}>
      <div className={styles.terminal_detail_container}>
        <div className={styles.fakeMenu}>
          <div
            className={classNames(styles.fakeButtons, styles.fakeClose)}
          ></div>
          <div
            className={classNames(styles.fakeButtons, styles.fakeMinimize)}
          ></div>
          <div
            className={classNames(styles.fakeButtons, styles.fakeZoom)}
          ></div>
        </div>
        <div className={styles.fakeScreen}>{detail}</div>
      </div>
    </div>
  )
}

export default Terminal
