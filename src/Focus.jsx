import {useState} from 'react'

function Focus ({setFocus, focus}) {

    const [buttonData,setButtonData] = useState({
        upperBody:false,
        lowerBody: false,
        core: false,
        back: false
    })


    function handleFocus (e) {
        if (e.target.value===focus) {
            setFocus("")
            setButtonData({
                upperBody:false,
                lowerBody: false,
                core: false,
                back: false
            })
        }
        else {
            setFocus(e.target.value)
            setButtonData(prev=>{
                
                const freshData={
                    upperBody:false,
                    lowerBody: false,
                    core: false,
                    back: false
                }
            
                return {...freshData,[e.target.value]:true}
            })
        }
        
        
    }

    return (
        <div className="focusDiv">
            <h2>What part of your body do you want to work on?</h2>
            <div className='buttonHolder'>
                <button className="button-33" style={buttonData.upperBody?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleFocus} value="upperBody" role="button">Upper Body</button>
                <button className="button-33" style={buttonData.core?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleFocus} value="core" role="button">Core</button>
                <button className="button-33" style={buttonData.lowerBody?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleFocus} value="lowerBody" role="button">Lower Body</button>
                <button className="button-33" style={buttonData.back?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleFocus} value="back" role="button">Back</button>
            </div>           


        </div>
    )
}

export default Focus