import { useContext } from "react";

import { AppContext } from "../store/GlobalStore";
import ReactImage from '../assets/react.svg'
import ViteImage from '../assets/vite.svg'



const Home = () => {
  const [state, dispatch] = useContext(AppContext);
  const { messages } = state;
  return (
    <div className="row">
        <div className="col-12">
            <div className="vh-100 overflow-auto">
                {
                    messages.length == 0 ? ( <div className="d-flex align-middle p-3 my-3 msg-background-user">
                          <div className='p-2 mx-3'>
                                        <span>Please enter your query in the textbox below</span>
                                    </div>  
                    </div> ) : (
                        
                            messages.map(message => {
                                 return <div key={message.id} className={`d-flex align-middle p-3 my-3 msg-background-${message.role}`}>
                                    <img src={ message.role == "user" ? ReactImage :  ViteImage} alt="."  />
                                    <div className='p-2 mx-3'>
                                        <span>{message.content}</span>
                                    </div>
                                </div>
                            })
                        
                    )
                }
            </div>
        </div>  
    </div>
  )
}

export default Home