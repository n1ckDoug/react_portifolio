import Paragrafo from '../Paragrafo';
import Titulo from '../Titulo';
import { Card, LinkBotao } from './styles';

const Projeto = () => (
  <Card>
    <Titulo>Projeto de Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefa feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
);

export default Projeto;
