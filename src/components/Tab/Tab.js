import React, { useState } from 'react';
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
      className={index === activeTab ? "title active-tab" : "title"}
      onClick={() => {
        setContent(props.tabs[index].content)
        setActiveTab(index)
      }}>{tab.title}</div>
  ))

  return (
    <>
      <div className='tabs-container'>
        {tabTitles}
        {content}
      </div>
    </>
  )
}

const tabs = [
  {
    title: 'title 1',
    content: () => <Tab content="content 1" />
  },
  {
    title: 'title 2',
    content: () => <Tab content="content 2" />
  },
  {
    title: 'title 3',
    content: () => <Tab content="content 3" />
  },
]

const Tabs = () => {
  return (
    <ListTabs tabs={tabs} activeTab={0} />
  )
}

export default Tabs;
