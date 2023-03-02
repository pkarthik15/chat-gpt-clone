import { useState } from "react";

const Footer = () => {

  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrompt('');
  }

  return (
    <footer className="footer fixed-bottom">
      <div className="container p-5">
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Please Enter"
              value = {prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button type="submit" className="btn btn-dark mx-2">
              Send
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer