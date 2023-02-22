import './App.css'

function App() {

  return (
    <main>
      <div className='catCanvas'>
        <div className='catContainer'>
          <section className='headCon'>
            <div className='head'></div>
            <div className='ears'></div>
            <div className='earsIn'></div>
            <div className='eyes'></div>
            <div className='eyesIn'></div>
            <div className='nose'></div>
          </section>
          <section className='bodyCon'>
            <div className='chest'></div>
            <div className='back'></div>
            <div className='bottom'></div>
            <div className='rgShould'></div>
            <div className='lfShould'></div>
            <div className='rgArm'></div>
            <div className='rpat'></div>
            <div className='lpat'></div>
            <div className='tail'></div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
