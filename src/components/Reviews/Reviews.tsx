import { motion } from 'framer-motion'
import React from 'react'
import { fadeVariants } from '../../variants/fadeVariants'
import './Reviews.scss'
import ReviewsItem from './ReviewsItem'

const reviews = [
  {
    id: 0,
    title: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right',
    author: {
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'JAMES YOUNG',
      job: 'MARKETING HEAD AT ROM.',
    } 
  },
  {
    id: 1,
    title: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right',
    author: {
      img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'MARK SCOTT',
      job: 'MARKETING HEAD AT ROM.',
    } 
  },
  {
    id: 2,
    title: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right',
    author: {
      img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'STEVEN FLORES',
      job: 'MARKETING HEAD AT ROM.',
    } 
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right',
    author: {
      img: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'GARY NELSON',
      job: 'MARKETING HEAD AT ROM.',
    } 
  },
]

export default function Reviews() {
  return (
    <div className='reviews'>
      <div className="container">
        <motion.div className="reviews__title"
          variants={fadeVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="title">People’s thoughts</h2>
          <h6 className="reviews__subh">SEE WHAT ARE OTHERS SAYING</h6>
        </motion.div>
        <div className="reviews__list">
          {reviews.map((review, i) => (
            <ReviewsItem key={review.id} content={review} i={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
