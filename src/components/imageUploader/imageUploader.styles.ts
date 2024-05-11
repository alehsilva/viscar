/* eslint-disable import/prefer-default-export */
import styled from 'vue-styled-components';

export const DropzoneContent = styled.div`
  max-width: 800px;
  min-width: 500px;
  width: 100%;
  min-height: 250px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 1px dashed #ccc;
  border-radius: 8px;

  @media screen and (max-width: 1000px) {
    min-width: 300px;
  }
`;
