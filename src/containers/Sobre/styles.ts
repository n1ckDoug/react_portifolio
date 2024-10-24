import styled from 'styled-components';

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
    width: 400px;
    margin-left: 8px;

    @media (max-width: 768px) {
      height: auto;
      width: 100%;
      margin: 0;
    }
  }
`;
