import React, { useState } from 'react';
import './AddTag.scss'

const AddTag = (props) => {
  const [tags, setTags] = useState(props.tags);
  const addTags = (e) => {
    if (e.target.value !== "") {
      setTags(tags.concat(e.target.value));
      e.target.value = "";
    }
  };

  const deleteTags = (tag)=> {
    setTags(tags.filter((t) => t !== tag));
  };
  return (
    <div className='container'>
      <div className='tags'>
        {tags.map(tag =>
          <div className='tag'>
            <div className='tag-title'>{tag}</div>
            <div className='tag-delete-icon'
              onClick={() => deleteTags(tag)}
            ></div>
          </div>
        )}
      </div>
      <input
        type='text'
        placeholder='Add tag'
        onKeyDown={(e) => e.keyCode === 13 ? addTags(e) : null}
      />
    </div>
  )

}

export default AddTag;
