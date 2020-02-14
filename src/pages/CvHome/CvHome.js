import React, { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'rx/store'
import { Container, Row, Col } from 'reactstrap';

import LoaddingScreen from 'shared/LoaddingScreen/LoaddingScreen'
import 'sass/main.scss'

const CvMap = lazy(() => import('components/CvMap/CvMap'))

const CvMapContent = () => (
  <>
    <div className="l-grid is-hidden">
      <div className="l-grid__item l-grid__item--col-3">
        Total Death
      </div>
      <div className="l-grid__item">
        <div className="cv-map-content__block">
          350
        </div>
      </div>
    </div>
    <div className="l-grid">
      <div className="l-grid__item l-grid__item--col-3">
        Total infected
      </div>
      <div className="l-grid__item">
        <div className="cv-map-content__block cv-map-content__block--s">
          15
        </div>
      </div>
    </div>
    <div className="l-grid">
      <div className="l-grid__item l-grid__item--col-3">
        Total dischared
      </div>
      <div className="l-grid__item">
        <div className="cv-map-content__block cv-map-content__block--s">
          2
        </div>
      </div>
    </div>
    <div className="l-grid">
      <div className="l-grid__item l-grid__item--col-3">
        NSW
      </div>
      <div className="l-grid__item">
        <div className="cv-map-content__block cv-map-content__block--s">
          4
        </div>
      </div>
    </div>
    <div className="l-grid">
      <div className="l-grid__item l-grid__item--col-3">
        QLD
      </div>
      <div className="l-grid__item">
        <div className="cv-map-content__block cv-map-content__block--s">
          4
        </div>
      </div>
    </div>
    <div className="l-grid">
      <div className="l-grid__item l-grid__item--col-3">
        VIC
      </div>
      <div className="l-grid__item">
        <div className="cv-map-content__block cv-map-content__block--s">
          4
        </div>
      </div>
    </div>
    <div className="l-grid">
      <div className="l-grid__item l-grid__item--col-3">
        SA
      </div>
      <div className="l-grid__item">
        <div className="cv-map-content__block cv-map-content__block--s">
          2
        </div>
      </div>
    </div>   
    <div className="l-grid">
      <div className="l-grid__item l-grid__item--col-3">
        WA
      </div>
      <div className="l-grid__item">
        <div className="cv-map-content__block cv-map-content__block--s">
          2
        </div>
      </div>
    </div>
  </>
)

const Layout = () => {
  return (
    <>
      <header className="l-header">
        <h1 className="cv-header__title">
          Novel CoronaVirus 2019-nCoV Map AUS
        </h1>
      </header>
      <main className="l-main">
        <div className="cv-map">
          <div className="cv-map__content cv-map__content--left">
            <CvMapContent />
          </div>
          <div className="cv-map__content cv-map__content--right">
            <Suspense fallback={LoaddingScreen}>
              <CvMap />
            </Suspense>
          </div>
        </div>
        <div className="">
          <Container>
            <Row>
              <Col>
                <p>
                  As of this morning, 6 February 2020, 14 cases of 2019-nCoV have been confirmed in Australia:
                  4 in New South Wales, 4 in Victoria, 4 in Queensland, and 2 in South Australia.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <footer className="l-footer" />
      </main>
    </>
  )
}

const App = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  )
}

export default App

