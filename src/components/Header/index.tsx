import { Timer, Scroll } from 'phosphor-react'

import { HeaderContainer } from './styles'
import IgniteLogo from '../../assets/ignite-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={IgniteLogo} alt="" />
        <nav>
          <NavLink to="/" title="Timer">
            <Timer size={22} />
          </NavLink>
          <NavLink to="/history" title="Histórico">
            <Scroll size={22} />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
