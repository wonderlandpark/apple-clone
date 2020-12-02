import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

export default function Mac () {
  return (
    <div className="main" style={{ background: '#000', minHeight: '100%', paddingTop: '88px' }}>
      <div className="items" style={{ background: 'rgba(29,29,31,0.6)' }}>

      </div>
      <Container style={{ color: '#f5f5f7' }}>
        <h1 style={{ background: 'radial-gradient(ellipse at center, #eff1ff 10%, #000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: 70, letterSpacing: 0, textAlign: 'center' }}>이미 도래한<br/>Mac의 미래.</h1>
        <Row style={{ marginTop: '100px', paddingBottom: '80px', backgroundImage: 'url("https://www.apple.com/v/mac/home/aw/images/overview/hero/dark/macbook_air__bfz9o93hnyuq_large.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: '168px -100px', backgroundSize: '1025px 556px' }}>
          <Col xs="6">
            <span style={{ color: '#f56300', textAlign: 'left' }}>New</span>
            <h2 style={{ fontWeight: 600, fontSize: 56 }}>MacBook English</h2>
            <p style={{ fontSize: 25, fontWeight: 600 }}>English의 흐름을 바꾸다.</p>
            <p style={{ fontSize: 17, fontWeight: 400 }}>₩1,290,000부터</p>
            <p style={{ fontSize: 14, fontWeight: 400, color: '#a1a1a6' }}>출시일은 추후 공개됩니다.</p>
            <p><Button color="primary" style={{ color: '#fff', background: '#2997ff !Important', fontSize: '15px', fontWeight: 400, borderRadius: 22, padding: '10px 20px' }}>가격 보기</Button></p>
          </Col>
        </Row>

        <Row style={{ paddingBottom: '80px', backgroundImage: 'url("https://www.apple.com//v/mac/home/aw/images/overview/hero/dark/macbook_pro_13__ft1pc3lqwd6y_large.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: '-50px 70px', backgroundSize: '660px 309px' }}>
          <Col xs="6">

          </Col>
          <Col xs="6">
            <span style={{ color: '#f56300', textAlign: 'left' }}>New</span>
            <h2 style={{ fontWeight: 600, fontSize: 56 }}><span style={{ fontSize: 21, fontWeight: 700 }}>13형 모델</span><br/>MacBook Math</h2>
            <p style={{ fontSize: 25, fontWeight: 600 }}>Math중에 수학.</p>
            <p style={{ fontSize: 17, fontWeight: 400 }}>₩1,690,000부터</p>
            <p style={{ fontSize: 14, fontWeight: 400, color: '#a1a1a6' }}>M1 칩 탑재 모델의 출시일은<br/>추후 공개됩니다.</p>
            <p><Button color="primary" style={{ color: '#fff', background: '#2997ff !Important', fontSize: '15px', fontWeight: 400, borderRadius: 22, padding: '10px 20px' }}>구입하기</Button></p>
          </Col>
        </Row>

        <Row style={{ paddingBottom: '80px', backgroundImage: 'url("https://www.apple.com/v/mac/home/aw/images/overview/hero/dark/mac_mini__gc148mlvnziq_large_2x.jpg")', backgroundRepeat: 'no-repeat', backgroundPosition: '500px 51px', backgroundSize: '666px 422px' }}>
          <Col xs="6" >
            <span style={{ color: '#f56300', textAlign: 'left' }}>New</span>
            <h2 style={{ fontWeight: 600, fontSize: 56 }}>MacBook Science</h2>
            <p style={{ fontSize: 25, fontWeight: 600 }}>새로운 원소. 어마무시한 가능성.</p>
            <p style={{ fontSize: 17, fontWeight: 400 }}>₩890,000부터</p>
            <p style={{ fontSize: 14, fontWeight: 400, color: '#a1a1a6' }}>M1 칩 탑재 모델의 출시일은<br/>추후 공개됩니다.</p>
            <p><Button color="primary" style={{ color: '#fff', background: '#2997ff !Important', fontSize: '14px', fontWeight: 400, borderRadius: 22, padding: '10px 20px' }}>구입하기</Button></p>
          </Col>
          <Col xs="6">

          </Col>
          
        </Row>
      </Container>
    </div>
  )
}
