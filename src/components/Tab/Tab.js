import React, { useState, useEffect } from 'react';
import './Tab.scss';
import MenuButton from './MenuButton.js';
import Modal from './Modal.js';
import TabsPagination from './TabsPagination.js'


const Content = (props) => {
  const { content } = props
  return (
    <>
      {content &&
        <div className='content'>
          {content}
        </div>
      }
    </>
  )
}

const ListTabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.activeTab || 0);
  const [content, setContent] = useState(props.tabs[props.activeTab].content);
  const [modalOpen, setModalOpen] = useState(false);

  const ref = React.createRef();

  const tabTitles = props.tabs.map((tab, index) => (
    <div
      key={index}
      className={index === activeTab ? "title active-tab" : "title"}
      onClick={() => {
        setContent(props.tabs[index].content)
        setActiveTab(index)
      }}>{tab.title}</div>
  ))

  useEffect(() => {
    setActiveTab(props.activeTab);
    setContent(props.tabs[props.activeTab].content)
  }, [props.activeTab, props.tabs]);

  const prev = () => {
    let prev = activeTab - 1;
    if (prev < 0) {
      return setActiveTab(0);
    }
    setActiveTab(prev);
    setContent(props.tabs[prev].content)
    sideScroll(ref.current, 'left', 25, 100, 10);
  }

  const next = () => {
    let next = activeTab + 1;
    if (next > props.tabs.length - 1) {
      return setActiveTab(props.tabs.length - 1);
    }
    setActiveTab(next);
    setContent(props.tabs[next].content)
    sideScroll(ref.current, 'right', 25, 100, 10);
  }

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  const sideScroll = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      if (direction === 'left') {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <>
      <div className='tabs-container'>
        <div className='title-container'>
          <Modal open={modalOpen} close={closeModal}>
            <div className='vertical-name-container'>{tabTitles}</div>
          </Modal>
          <MenuButton onClick={openModal} />
          <div
            className='arrow-prev'
            onClick={prev}
          >
          </div>
          <div className='title-section' ref={ref}>
          {tabTitles}
          </div>
          <div
            className='arrow-next'
            onClick={next}
          >
          </div>
        </div>
        <Content content={content} />
      </div>
    </>
  )
}


const Tabs = (props) => {
  return (
    <ListTabs tabs={props.tabs} activeTab={props.activeTab} />
  )
}

export default Tabs;
