import styled from 'styled-components'

interface ContainerProps {
  menuOpened: boolean
}

export const Container = styled.aside<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ menuOpened }) => (menuOpened ? '16.3rem' : '7.75rem')};
  padding: 2rem 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.red};
  transition: width 0.3s;

  button {
    width: 100%;
    border: none;
    background: none;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    li {
      a {
        display: flex;
        align-items: center;
        gap: 2rem;
        width: fit-content;
        position: relative;
        padding: 0 1.875rem;

        svg {
          width: 4rem;
          height: 4rem;
          fill: ${({ theme }) => theme.colors.white};
          transition: fill 0.3s;
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        &:hover {
          svg,
          span {
            fill: ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.black};
          }
        }

        &.active {
          &::after {
            content: '';
            width: 5px;
            height: calc(100% + 10px);
            position: absolute;
            top: 50%;
            left: 0;
            bottom: 0;
            transform: translateY(-50%);
            border-radius: 0 5px 5px 0;
            background-color: ${({ theme }) => theme.colors.black};
          }

          svg,
          span {
            fill: ${({ theme }) => theme.colors.black};
            color: ${({ theme }) => theme.colors.black};
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 5rem;
    padding: 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    overflow-y: auto;

    button {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        flex-direction: row;
        align-items: center;
      }

      li {
        a {
          flex-direction: column;
          padding: 0;

          svg {
            width: 3.25rem;
            height: 3.25rem;
          }

          span {
            display: none;
          }

          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
`
