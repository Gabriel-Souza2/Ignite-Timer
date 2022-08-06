import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 0 2.5rem;
  margin-top: 2.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      color: ${({ theme }) => theme.white};

      display: flex;
      justify-content: center;
      align-items: center;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme['green-500']};
      }

      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`
