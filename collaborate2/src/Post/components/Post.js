import React from 'react';


const Post= (props) => (
        <div className="post">
          <div className="panel-body">
            { props.postBody }
          </div>
        </div>
)

export default Post;