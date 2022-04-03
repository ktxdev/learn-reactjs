import React from 'react'
import Content from './Content'
import About from './Content'
import Info from './Info'

const Card = () => {
  return (
    <div className='card'>
        <Info/>
        <Content title="About" text="I am a full-stack software engineer with a particular interest in making things simple and automating daily tasks, I try to keep up with security and best practises, and am always looking for new things to learn." />
        <Content title="Interests" text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic." />
    </div>
  )
}

export default Card