import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: #d9edff;
`;

export const LoginBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    max-width: 1000px;
    background-color: white;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    margin: 0 auto;
    border-radius: 12px;

    @media screen and (max-width: 1023px) {
          flex-direction: column;
          box-shadow: none;
    }

`;

export const IllustrationWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    max-width: 800px;
    min-height: 100%;
    background-color: #fffdf2;

    @media screen and (max-width: 1023px) {
        max-width: 100%;
        min-height: auto;
    }

`;
export const ImageLogin = styled.img`
    display: block;
    width: 100%;
`;
export const FormTitle = styled.p`
    padding-bottom: 30px;
    color: #333333;
    font-size: 42px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 0;
`;
export const FormContainer = styled.div`
    flex: 1 0 100%;
    max-width: 480px;
    width: 100%;
    padding: 60px;
`;

