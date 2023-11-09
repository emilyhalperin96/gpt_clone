const App = () => {

  return (
    <div className="app">
      <section className='side-bar'>
        
        <button> + New chat</button>
        <ul className='history'>
          <li>test</li>
        </ul>
        <nav>
          <p>made by Emily</p>
        </nav>
      </section>
      <section className='main'>
        <h1>GPT Clone</h1>
        <ul className='feed'>
        
        </ul>
        <div className='bottom-section'>
          <div className='input-container'>
            <input></input>
            <div id='submit'></div>
          </div>
          <p className='info'>
            Chat GPT Mar 14 Version. Free Research Preview. 
            Our goal is to make AI systems more natural and safe to interact with.
            Your feedback will help us improve.
          </p>

        </div>
      </section>
    </div>
  );
}

export default App;
