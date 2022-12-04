import { motion } from 'framer-motion'
import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import './Tabs.scss'

interface ITab {
  id: number
  tab: string
}

interface IProps {
  tabs: ITab[]
  setActive: React.Dispatch<SetStateAction<number>>
  active: number
}

export default function Tabs(props: IProps) {

  const blockRef = useRef<HTMLDivElement | null>(null)

  const [blockWidth, setBlockWidth] = useState<number>(0)

  useEffect(() => {
    if (blockRef.current) {
      setBlockWidth(blockRef.current.getBoundingClientRect().width)
    }
  }, [blockRef])


  return (
    <div className="tabs__wrapper">
      <motion.div ref={blockRef} className="tabs"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '180px' }}
        transition={{ duration: 1, type: 'spring' }}
      >
        {props.tabs.map((tab) => (
          <motion.div key={tab.id} className={`tabs__item ${tab.id === props.active ? 'active' : ''}`}
            onTap={() => props.setActive(tab.id)}
            animate={{
              color: tab.id === props.active ? '#41EAD4' : 'rgba(255, 255, 255, 0.6)',
              textShadow: tab.id === props.active ? '0px 0px 16px #41EAD4' : 'none',
              borderBottom: '2px solid rgba(65, 234, 212, 0.4)',
            }}
            whileHover={{
              color: '#41EAD4',
              textShadow: '0px 0px 16px #41EAD4'
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {tab.tab}
          </motion.div>
        ))}
      </motion.div>
      <ActiveUnderline width={blockWidth} tabCount={props.tabs.length} active={props.active}/>
    </div>

  )
}

interface IAcitveBorederProps {
  width: number
  tabCount: number
  active: number
}

const ActiveUnderline = (props: IAcitveBorederProps) => {
  return (
    <motion.div 
      className='tabs__underline'
      style={{ height: '4px', width: props.width / props.tabCount }}
      animate={{y: -5, x: props.width / props.tabCount * props.active}}
    >
    </motion.div>
  )
}