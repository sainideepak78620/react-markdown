import React, {useState} from 'react'
import {marked} from 'marked'
// import ReactMarkdown from 'react-markdown';
import './App.css';
import Navbar from './Navbar';
function App() {
  const [markdown, setMarkdown] = useState('# Write your markdown here...')
  function handleChange(e) {
    setMarkdown(e.target.value)
  }
  
  return (
    <>
      <Navbar />
      <div className='app'>
        <textarea value={markdown} onChange={handleChange}/>
        <div className='preview' dangerouslySetInnerHTML={{__html: marked.parse(markdown)}}></div>
        {/* <ReactMarkdown className='preview' children={markdown} /> */}
      </div>
    </>
  )
}

export default App