
const LandingThirdRight = () => {
 
        return (
          <div>
      <div className="grid grid-cols-1 bg-white px-4 py-4 ">
      <div className="bg-gray-100 border-2 border-white shadow-2xl py-12 px-4">
        <h2>Send Enquery</h2>
        <hr/>
        <div>
        <input type={`text`} placeholder={`Full Name`} className="border-2 mb-4 border-gray-300 w-full px-3 py-1"/>
        </div>
        <div>
        <input type={`email`} placeholder={`Email`}  className="border-2 mb-4  border-gray-300 w-full px-3 py-1" />
        </div>
        <div>
        <input type={`text`} placeholder={`Mobile Number`}  className="border-2 mb-4  border-gray-300 w-full px-3 py-1" />
        </div>
        <div>
        <input type={`message`} placeholder={`Type Message`}  className="border-2 mb-4  border-gray-300 w-full px-3 pb-5 pt-1" /> 
        </div>
        <div className="justify-center flex">
          <button className="btn btn-danger">Submit</button>
        </div>
      </div>
                                    
                                   
                                    
                                  
                              </div>
          
          </div>
      
      
        )
      }
      
      
      export default LandingThirdRight