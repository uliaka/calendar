import React, { useState } from 'react';
import './Tab.scss'


const Tab = (props) => {
  const { title, onClick, content, className } = props
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
  const [activeTab, setActiveTab] = useState(0);
  const onClick = index => setActiveTab(index)
  const className = index => index === activeTab ? 'active-tab' : ''
  
  const [content, setContent] = useState(props.tabs.activeTab);
  
  const tabTitles = props.tabs.map((tab, index) => (
    <div
      className={index === activeTab ? "title active-tab" : "title"}
      onClick={() => {
        setContent(props.tabs[index].content)
        setActiveTab(index)
      }}>{tab.title}</div>
  ))
  
  return (
    <>
      {tabTitles}
      {content}
    </>
  )
}

const tabs = [
  {
    title: 'title 1',
    content: () => <div>Content here</div>
  },
  {
    title: 'title 2',
    content: () => <Tab content="content 2" />
  },
  {
    title: 'title 3',
    content: () => <div>Content here3</div>
  },
]

const Tabs = () => {
  return (
    <ListTabs tabs={tabs} />
  )
}

export default Tabs;
