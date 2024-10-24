import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 50px;
    width: 70%;
    margin: 20px;

    input {
        background: transparent;
        border: 0;
        width: 70%;
        height: 50px;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 20px;
    }
    
    textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`