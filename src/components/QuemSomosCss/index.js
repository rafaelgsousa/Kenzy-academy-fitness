import styled from "styled-components";

export const QuemSomosCss = styled.div`

        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;

    .container{
        background-color: #007aff;
        width: 100%;
        height: 95vh;
        
    }

    header{
        background-color: white;
        width: 100%;
        height: 150px;
        position: fixed;
        top: 0px;
    }
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
    footer{
        background-color: white;
        width: 100%;
        height: 150px;
        position: fixed;
        bottom: 0px;
    }
    .copyright{
        position: fixed;
        bottom: 0px;
        right: 37%;
        font-size: 13px;
    }
    .infoFooter{
        display: flex;
        flex-direction:row;
        justify-content: center;
    }
    .infoFooter p{
        margin: 30px 70px 0 70px;
    }
    
    img{
        position: fixed;

    }
    .logo{
        position: fixed;
        left: 70px;
        width:140px;
        height: 140px;
        display: flex;
        justify-content: center;
        -webkit-box-shadow: 0px 3px 15px -5px rgba(0,0,0,0.66); 
        box-shadow: 0px 3px 15px -5px rgba(0,0,0,0.66);
    }
    .logo p{
        position: fixed;
        
        top:105px;
    }
    .training p{
        transform: rotate(350deg);
        font-size: 50px;
        font-weight: bold;
        position: fixed;
        left: 300px;
        top:5;
        margin: 0;
    }
    button{
        border: none;
        background-color: #007aff;
        margin: 34px;
        color: white;
    }
    .buttons{
        position: fixed;
        right: 100px;
        top:60px;
    }
    .QuemSomos{
        display: flex;
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;
        top:300px;
        left:23%;
    }
    li{
        margin: 0 25px 10px 25px;
        font-size: 20px;
        font-weight: bold;
        color:white;
        display: flex;
        
    }
    

`