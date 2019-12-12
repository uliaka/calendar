import React, { useState, useEffect } from 'react';
import './Tab.scss'


const Tab = (props) => {
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

  return (
    <>
      <div className='tabs-container'>
        <div className='title-container'>
          <div
            className='arrow-prev'
          >
          </div>
          {tabTitles}
          <div
            className='arrow-next'
          >
          </div>
        </div>
        <Tab content={content} />
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
