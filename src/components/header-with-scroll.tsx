"use client"
import { useEffect, useState } from 'react'
import { EcommerceHeader } from './ecommerce-header'
import { SmallHeader } from './small-header'

function HeaderWithScroll() {
  const [showSmall, setShowSmall] = useState(false)

  useEffect(() => {
    function onScroll() {
      setShowSmall(window.scrollY > 120)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-[60] transition-transform duration-500 ease-in-out ${showSmall ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ willChange: 'transform' }}
      >
        <SmallHeader />
      </div>
      {!showSmall && <EcommerceHeader />}
    </>
  )
}

export default HeaderWithScroll 