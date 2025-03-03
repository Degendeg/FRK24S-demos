import './App.css'

function App() {
  const imgSrcs = {
    obiWan: "https://i.gifer.com/origin/29/29d90981e2515fd1422a5ca295f8bb73_w200.gif",
    anakin: "https://i.pinimg.com/originals/32/09/c9/3209c9d99ec3386f4300a2616436f6b3.gif"
  }
  return (
    <>
      <div className="card bg-gray-700 w-100 shadow-xl">
        <div className="card-body">
          {/* Obi-Wan: First Message */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Obi-Wan" src={imgSrcs.obiWan} />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:44</time>
            </div>
            <div className="chat-bubble text-left m-1">It’s over, Anakin! I have the high ground!</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>

          {/* Anakin: First Response */}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Anakin" src={imgSrcs.anakin} />
              </div>
            </div>
            <div className="chat-header">
              Anakin Skywalker
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble text-left m-1">You underestimate my power!</div>
            <div className="chat-footer opacity-50">Seen at {new Date().toLocaleTimeString("sv-SE",
              { hour: "2-digit", minute: "2-digit" })}</div>
          </div>

          {/* Obi-Wan: Second Message */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Obi-Wan" src={imgSrcs.obiWan} />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble text-left m-1">Don't try it.</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>

          {/* Anakin: Third Response */}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Anakin" src={imgSrcs.anakin} />
              </div>
            </div>
            <div className="chat-header">
              Anakin Skywalker
              <time className="text-xs opacity-50">12:47</time>
            </div>
            <div className="chat-bubble text-left m-1">Aaarghhh!!</div>
            <div className="chat-footer opacity-50">Seen at {new Date().toLocaleTimeString("sv-SE",
              { hour: "2-digit", minute: "2-digit" })}</div>
          </div>

          {/* Obi-Wan: Final Words */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Obi-Wan" src={imgSrcs.obiWan} />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:48</time>
            </div>
            <div className="chat-bubble text-left max-w-sm m-1">
              You were the Chosen One! It was said that you would destroy the Sith, not join them!
              Bring balance to the Force, not leave it in darkness!
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>

          {/* Anakin: Final Response */}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Anakin" src={imgSrcs.anakin} />
              </div>
            </div>
            <div className="chat-header">
              Anakin Skywalker
              <time className="text-xs opacity-50">12:49</time>
            </div>
            <div className="chat-bubble text-left m-1">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at {new Date().toLocaleTimeString("sv-SE",
              { hour: "2-digit", minute: "2-digit" })}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
