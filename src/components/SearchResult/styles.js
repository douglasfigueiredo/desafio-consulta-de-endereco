import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3px;
  padding: 20px;
  color: #000;
  background: #FFF;
  border: 2px solid #ededed;

  }

  .content-result {
    display: flex;
    flex-direction: column;
  }

  .result-header {
    display: flex;
    flex-direction: row-reverse;
  }
  .result-header .controls {

  }
  .result-header .controls .btn-close {
  font-size: 17px;
  cursor: pointer;
  }
  .result-header .result-text {
    width: 100%;
  }
  .result-header .result-text h2 {
    font-size: 16px;
  }
  .result-header .result-text p {
    font-size: 14px;
    margin: 2px 0;
  }

  .map-image-wrapper {
    margin-top: 20px;
  }
`;
