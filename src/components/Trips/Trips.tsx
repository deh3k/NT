import React, { useState } from 'react'
import './Trips.scss'
import { motion } from 'framer-motion'
import Tabs from '../Common/Tabs/Tabs'
import Share from '../Common/Share/Share'
import TripsInfo from './TripsInfo'
import TabContent from '../Common/Tabs/TabContent'


const tabs = [
  { id: 0, tab: 'Chill Adventure' },
  { id: 1, tab: 'Spooky Times' },
  { id: 2, tab: 'Desert Madness' },
  { id: 3, tab: 'Out in the wild' }
]

const tabsContent = [
  {
    id: 0,
    title: 'Chill Adventure',
    describe: [
      'Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa'
    ],
    img: 'https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072_960_720.jpg'
  },
  {
    id: 1,
    title: 'Spooky Times',
    describe: [
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm',
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary',
    ],
    img: 'https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_960_720.jpg'
  },
  {
    id: 2,
    title: 'Desert Madness',
    describe: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the',
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.',
    ],
    img: 'https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_960_720.jpg'
  },
  {
    id: 3,
    title: 'Out in the wild ',
    describe: [
      'Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames.',
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
    ],
    img: 'https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png'
  },
]


export default function Trips() {

  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className='trips'>
      <div className='container'>
        <motion.div className="title__wrapper"
          initial={{ opacity: 0, x: '-50%' }}
          whileInView={{ opacity: 1, x: 0, }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className='title trips__title'>Pick your trip</h2>
          <div className='trips__title__x'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#41EAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="#41EAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p>
            Our team put together some trips to you to discover, <br />
            feel free to discover each of them.
          </p>
        </motion.div>
        <Tabs tabs={tabs} setActive={setActiveTab} active={activeTab} />
        {tabsContent.map((tabContent) =>
          <TabContent key={tabContent.id} active={activeTab === tabContent.id}>
            <TripsInfo content={tabContent} />
          </TabContent>
        )}
        <Share />
      </div>
    </div>)
}
