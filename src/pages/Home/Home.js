import React from 'react'
import HomeHero from './components/HomeHero/HomeHero'
import WordBreak from './components/WordBreak/WordBreak'
import InfoGrid from './components/InfoGrid/InfoGrid'
import QuoteBreak from './components/QuoteBreak/QuoteBreak'
import ContactBreak from './components/ContactBreak/ContactBreak'

export default function Home() {
  return (
    <>
    <HomeHero/>
    <WordBreak/>
    <InfoGrid/>
    <QuoteBreak/>
    <ContactBreak/>
    </>
  )
}
