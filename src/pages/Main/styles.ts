import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;

  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.875rem;

    img {
      width: 10rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;

      img {
        align-self: center;
      }
    }
  }
`
