import React from 'react';
import UseFetch from '.';

function CustomHookHandler()
{
    const {data}=UseFetch('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    return <div></div>
}

export default CustomHookHandler;