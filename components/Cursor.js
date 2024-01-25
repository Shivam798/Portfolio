import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
    return (
        <div  >
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'white'
                }}
                outerStyle={{
                    border: '3px solid white'
                }}
            />
        </div>
    )
}

export default Cursor