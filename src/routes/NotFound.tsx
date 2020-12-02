import React from 'react'
import { Container, Input } from 'reactstrap'

export default function NotFound () {
  return (
    <Container className='text-center' style={{ paddingTop: '50px' }}>
      <h1 style={{ fontSize: 48, fontWeight: 600 }}>영어할 줄 아세요?</h1>
      <h3>찾으시는 페이지가 없는 듯하네요.</h3>
      <div className='search' style={{ padding: '50px 380px' }}>
        <Input style={{ padding: '18px' }} placeholder='영어로만 찾아볼 수 있어요' bsSize='lg'/>
      </div>
    </Container>
  )
}
