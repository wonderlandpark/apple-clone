import React from 'react'
import { Button, Container } from 'reactstrap'

export default function Home () {
  return (
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <video autoPlay muted loop style={{ position: 'absolute', minWidth: '100%', minHeight: '100%', objectFit: 'cover', width: 'auto', height: 'auto' }} id="airpodsMax" src="https://www.apple.com/105/media/us/homepage/2020/ee22f441-0fc6-4294-b7b0-1525874a8f8b/anim/hero/large.mp4" playsInline>
        </video>
        <div style={{ textAlign: 'center', position: 'absolute', width: '100%', left: 0, color: "white", paddingTop: '30vh' }}>
          <h1 style={{ fontSize: '7em', fontWeight: 600 }}>Airpods Max</h1>
          <h2 style={{ fontSize: '2em', fontWeight: 600 }}>프리미엄 귀마개.</h2>
          <br/>
          <Button color="light" style={{ borderRadius: 28, color: 'black', padding: '18px 31px' }}>동영상 보기</Button>
          <Button color="light" style={{ borderRadius: 28, marginLeft: '20px', backgroundColor: 'transparent', color: 'white', padding: '18px 31px' }}>더 알아보기</Button>
        </div>
      </div>
  )
}
