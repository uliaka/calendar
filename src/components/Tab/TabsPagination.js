import React, { useState, useEffect } from 'react';
import './TabsPagination.scss'

const List = (props) => {
  const [active, setActive] = useState(props.active || 0);
  const ref = React.createRef();
  const titles = props.title.map((title, index) => (
    <div
      key={index}
      className={index === active ? "name active" : "name"}
      onClick={() => {
        setActive(index)
      }}>{title}</div>
  ))

  const prevPage = () => {
    let prevPage = active - 1;
    if (prevPage < 0) {
      return setActive(0);
    }
    setActive(prevPage);
    sideScroll(ref.current,'left', 25, 100, 10);
  }

  const nextPage = () => {
    let nextPage = active + 1;
    if (nextPage > props.title.length - 1) {
      return setActive(props.title.length - 1);
    }
    setActive(nextPage);
    sideScroll(ref.current,'right', 25, 100, 10);
  }

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  const sideScroll = (element,direction,speed,distance,step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(function(){
        if(direction === 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

  return (
    <>
      <div className='container'>
        <div
          className='arrow-prev'
          onClick={prevPage}
        >
        </div>
        <div className='name-container' ref={ref}>
          {titles}
        </div>
        <div
          className='arrow-next'
          onClick={nextPage}
        >
        </div>
      </div>
    </>
  )
}


const TabsPagination = (props) => {
  return (
    <List title={props.title} active={props.active} maxNumber={props.maxNumber} />
  )
}

export default TabsPagination;
