import styled from "styled-components";

export const CadastroCss = styled.div `

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
    .form{
        display: flex;
        justify-content: center;
        align-content: center;
        position: relative;
        top:250px;
    }
    .form input{
        display: flex;
        justify-content: center;
        border: 1px solid black;
        
    }
    .preenchimento{
        position: relative;
        bottom:60px;
        left: 400px;
        width: 500px;
    }
    .nonMvp1{
        position: absolute;
        right: 650px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .nonMvp1 input{
        margin: 10px;
        text-align: start;
    }

    .nonMvp2{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        right: 350px;
    }
    .nonMvp2 input{
        margin: 10px;
    }
    .Mvp{
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 350px;
    }
    .Mvp input{
        margin: 10px;
    }

    .dados{
        color: black;
        display: flex;
        position: absolute;
        top: 155px;
        left:360px;
        flex-direction: column;
        width: 200px;
        color: white;
    }
    .dados h2{
        margin: 2px 0 2px 0;
        padding: 0px;
    }
    .dados h5{
        margin: 2px 0 2px 0;
        padding: 0px;
    }
    .dados p{
        margin: 13px 0 0 0;
        padding: 0px;
        font-size: 13px;
    }
    
    .Login{
        position: absolute;
        right: 10%;
        top:50%;
        color: black;
        background-color: white;
        cursor: pointer;
    }
    .Register{
        position: absolute;
        right: 10%;
        top:50px;
        color: black;
        background-color: white;
        cursor: pointer;
    }
    .genero{
        display: flex;
        align-items: center;
        color: white;
    }

    `