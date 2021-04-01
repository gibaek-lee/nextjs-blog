import style from './mode.module.css'
import { useState } from 'react'

export default function mode() {
  const [isModeNight, setIsModeNight] = useState(false)
  const onToggleMode = () => {
    setIsModeNight(!isModeNight)
  }

  return (
    <>
      <span 
        className={style.wrapper}
        onClick={onToggleMode}
      >
        <div className={style.itemSquare}>
        </div>
        <div className={style.itemRound}>
        </div>
      </span>
    </>
  )
}