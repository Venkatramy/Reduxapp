import React from 'react';

const styles={
    borderBottom:'2px solid #eee',
    background:'#fafafa',
    margin:'0.75em auto',
    padding:'0.6em 1em',
    maxWidth:'500px',
    borderRadius:'7px'
};
export default ({bookmark:{title,url,id},onDelete})=>{
    return(
        <div style={styles}>
            <h2>Title: {title}</h2>
            <p>URL: {url}</p>
            <button type="button" onClick={()=>onDelete(id)}>Remove</button>
        </div>
    );
};