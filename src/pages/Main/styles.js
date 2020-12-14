import styled from "styled-components";

export const Container = styled.main`
  width: 993px;
  height: 312px;
  border: 1px solid #d3d3d3;
  background-color: #f4f4f4;
  padding: 8px;
  margin: 0 auto;

  img.logo {
    margin: 10px;
    margin-right: auto;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    width: 360px;
    height: auto;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    img.logo {
      margin: 0 auto;
      width: 100%;
      padding: 20px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  background: #fff;

  @media (max-width: 760px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    img.logo {
      margin: 0;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    display: flex;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 5px 20px;
    border: none;
    color: #888;
    width: 300px;
    background: #f4f4f4;

    svg {
      color: #888;
      margin-right: 20px;
    }

    .buy{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }

    span {
      color: #b2b2b2;
      font-size: 14px;

      &.btnType {
        color: #888;
        font-size: 24px;
      }
    }

    &.actived {
      border-bottom: 2px solid #ca2430;
      color: #ca2430;
      svg {
        color: #ca2430;
        margin-right: 20px;
      }

      .btnType {
        color: #ca2430;
        font-size: 22px;
      }
    }
  }

  button.sellMyCar {
    color: #f1a908;
    border: 3px solid;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    align-self: center;
    transition: .2s;

    &:hover{
      color: #ff0012;
      border: 3px solid #ff0012;
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    button {
      margin: 0;
      padding: 0;
      width: 200px;
    }

    button.sellMyCar {
      width: 100%;
      margin-top: 10px;
    }
  }
`;

export const Checks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  margin-bottom: 10px;
  margin-top: 10px;

  label {
    margin-right: 20px;

    input {
      margin-right: 5px;
    }
  }

  @media (max-width: 760px) {
    margin: 10px auto;
  }
`;

export const BodyForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: flex-start;
  flex-flow: wrap;

  select {
    width: 282px;
    height: 30px;
    border: 1px solid #dedede;
    margin: 2px 0px;
  }

  .region{
    display: flex;
    width: 290px;
  }

  .yearPrice{
    display: flex;
    width: 300px;

    select{
      margin-right: 10px;
    }
  }
  .version{
    flex: 1;
  }
`;

export const Buttons = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px 0;

  button.btnSearch {
    margin-right: auto;
    background: none;
    border: none;
    color: #ca2430;
    font-size: 18px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    transform: transition 0.2s;

    &:hover {
      color: #ff0012;
    }
  }

  button.btnFilters {
    background: none;
    border: none;
    color: #b2b2b2;
    font-size: 18px;
    margin-left: auto;

    transform: transition 0.2s;

    &:hover {
      color: #0a0a0a;
    }
  }

  button.btnOffers {
    width: 330px;
    height: 45px;
    background: #ca2430;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: bolder;
    font-size: 22px;
    margin-left: 30px;
    transform: transition 0.2s;

    &:hover {
      background: #ff0012;
    }
  }

  @media (max-width: 760px) {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;

    button{
      margin: 5px 0 !important;
    }
  }
`;
