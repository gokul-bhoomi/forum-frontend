import React, { Fragment } from 'react';

const Postbody = (
  props,
  { isedit, onChange, setedit, updatePost, current, post, loading }
) => {
  return (
    <div>
      {isedit ? (
        <Fragment>
          <textarea value={post} onChange={onChange}></textarea>
          <input
            className='btn'
            type='submit'
            value='Update'
            onClick={() => {
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);
              updatePost(post, props.match.params.id);

              setedit(false);
            }}
          ></input>
          <input
            className='btn'
            type='submit'
            value='Cancel'
            onClick={() => setedit(false)}
          ></input>
        </Fragment>
      ) : (
        <h4>
          {current ? (loading ? 'Loading...' : current.body) : 'not found'}
        </h4>
      )}
    </div>
  );
};

export default Postbody;
