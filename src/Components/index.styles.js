import styled from 'styled-components';
const Wrap = styled.div`
p {
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
}
/* width: 100vw;
height: 100vh;
    .wrap-container {
        padding: 60px;
        width: calc(100% - 120px);
        height: calc(100% - 120px);
        .content {
            display:flex;
            align-items: center;
            height: 100%;
            .box-content {
                
                width: 48%;
                height: 100%;
                border: none;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
                :focus {
                    border: 2px solid #000;
                }
            }
            .preview-content {
                margin-left: 4%;
                width: 47.5%;
                height: 100%;
                .text-style {
                    font-size: 18px;
                    color:  "#000";
                    line-height: 24px;
                }
            }
            #text-content {
                padding: 20px 0 0 20px;
                font-size: 18px;
            }
        }
        
    } */
    
    @media only screen and (min-width: 50px) {
        width: 100vw;
        height: 100vh;
        
            /* height: calc (100% - 128px); */
            
        .wrap-container {
            padding: 60px;
            width: calc(100% - 120px);
            height: calc(100% - 120px);
        }
        .wrap-content {
            width: 100% ;
        }
        .content {
            
            /* width: calc(100% - 120px); */
            display: grid;
            grid-template-rows: minmax(90px 1fr) minmax(450px 1fr);
            grid-row-gap: 4rem;
            textarea {
                /* min-width: 232px; */
                height: 90px;
                border: none;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
                :focus {
                    border: 2px solid #000;
                }
            }
            .preview-content {
                padding: 1rem 2rem;
            }
        }
    }
    @media only screen and (min-width: 992px) {
        width: 100vw;
        height: 100vh;
            .wrap-container {
                padding: 60px;
                width: calc(100% - 120px);
                height: calc(100% - 120px);
                .wrap-content {
                    width: 100%;
                    height: 100%;
                }
                .content {
                    display:flex;
                    align-items: center;
                    height: 100%;
                    .box-content {
                        width: 48%;
                        height: 100%;
                        border: none;
                        background-color: #fff;
                        border-radius: 5px;
                        box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
                        :focus {
                            border: 2px solid #000;
                        }
                    }
                    .preview-content {
                        margin-left: 4%;
                        width: 47.5%;
                        height: 100%;
                        .text-style {
                            font-size: 18px;
                            color:  "#000";
                            line-height: 24px;
                            margin-bottom: 20px;
                        }
                    }
                    #text-content {
                        padding: 20px 0 0 20px;
                        font-size: 18px;
                    }
                }
                
            }
    }
`;

export {Wrap}
 /* ${(props) => props.isHashtag === true ? "48px": */
                    /* ${(props) => props.isHashtag === true ? "#102A42": */