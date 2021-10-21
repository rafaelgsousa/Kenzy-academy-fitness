import styled from "styled-components";

export const HomeCss = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    
    background-color: #007aff;
    width: 100%;
    height: 100vh;
    

    .nav{
        display: flex;
        flex-direction: row;
        position: absolute;
        right: 20px;
        top:10px;
        font-weight: bold;
        cursor: pointer;
    }
    
    .nav nav{
        margin: 10px;
    }
    > button{
      border:none;
      background-color: #007aff;
  
    }
    header{
        background-color: white;
        width: 100%;
        height: 150px;
        position: fixed;
        top: 0px;
    }
    footer{
        background-color: white;
        width: 100%;
        height: 150px;
        position: fixed;
        bottom: 0px;
    }
    footer p{
        position: fixed;
        bottom: 0px;
        right: 33%;
    }
    
`