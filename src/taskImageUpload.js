import React from 'react';

const TaskImageUpload = (props) => (
  <div className="image-upload">
    <form action={props.api + "/tasks/" + props.id + "/images"} method="post" encType="multipart/form-data">
      <label>
        <span>Upload Image</span>
        <input name="file" type="file" />
      </label>
      <button>Submit</button>
    </form>
  </div>
)

export default TaskImageUpload;
