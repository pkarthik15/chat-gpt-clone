import { useState, useContext } from "react";
import { Configuration, OpenAIApi } from "openai";


import { AppContext } from "../store/GlobalStore";
import { Actions } from "../store/GlobalActions";


const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);



const Footer = () => {

  const [state, dispatch] = useContext(AppContext);
  const [prompt, setPrompt] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({
          type:Actions.SET_MESSAGE, 
          payload:{
            'id': Math.floor((Math.random() * 100000000) + 1),
            'role': 'user',
            'content': prompt
          } 
      });
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
      });
      const response = completion.data.choices[0].message;
      dispatch({
        type:Actions.SET_MESSAGE, 
        payload:{
          'id': Math.floor((Math.random() * 100000000) + 1),
          'role': response.role,
          'content': response.content
        } 
    });
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