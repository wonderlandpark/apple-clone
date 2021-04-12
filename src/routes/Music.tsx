import React from 'react'
import { Button, Container } from 'reactstrap'

export default function Home () {
  return (
  	<div style={{ position: 'absolute', width: '100%', height: '100%' }}>
  		<img src="/airpodspro.jpg" style={{ position: 'absolute', minWidth: '100%', minHeight: '100%', objectFit: 'cover', width: 'auto', height: 'auto'}}></img>
  		<div style={{ textAlign: 'center', position: 'absolute', width: '100%', left: 0, color: "white", paddingTop: '30vh' }}>
  			<h1 style={{ fontSize: '7em', fontWeight: 600 }}>Airpods Pro</h1>
  			<h2 style={{ fontSize: '2em', fontWeight: 600 }}>전문가용 콩나물, 새롭게.</h2>
  			<p><Button color="primary" style={{ color: '#fff', background: '#2997ff !Important', fontSize: '15px', fontWeight: 400, borderRadius: 22, padding: '10px 20px' }}>구입하기</Button></p>
  		</div>
  	</div>  
  )
}