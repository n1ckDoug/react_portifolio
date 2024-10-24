import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import { GithubSecao } from './styles';

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum assumenda,
      iusto facere excepturi sit unde quas, tempora tempore odio, asperiores
      enim mollitia! Obcaecati vel perspiciatis, deserunt repudiandae maxime quo
      a.
    </Paragrafo>
    <GithubSecao>
      <img src="https://via.placeholder.com/200x200" alt="" />
      <img src="https://via.placeholder.com/200x200" alt="" />
    </GithubSecao>
  </section>
);

export default Sobre;
