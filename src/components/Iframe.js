import React from "react"
import styled from "styled-components"

const IframeContainer = styled.div`

display: flex;
justify-content: center;
`

const Iframe = ({src, height, width, title}) => (
    
    <IframeContainer>          
        <iframe 
            style={{borderRadius: "12px"}}
            title={title}
            src={src} 
            height={height} 
            width={width}
        />         
    </IframeContainer>
)
export default Iframe