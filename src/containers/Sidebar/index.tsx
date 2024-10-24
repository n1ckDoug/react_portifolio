import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import Titulo from '../../components/Titulo';

import { Descricao, BotaoDescricao, SidebarContainer } from './styles';

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={18}>Douglas Vieira</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        n1ckDoug
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev. Full-Stack
      </Descricao>
      <BotaoDescricao>Trocar tema</BotaoDescricao>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
