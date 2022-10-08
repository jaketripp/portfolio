import type {NextPage} from 'next'
import About from 'src/components/Home/About'
import Bio from 'src/components/Home/Bio'
import CardList from 'src/components/Home/CardList'
import Skills from 'src/components/Home/Skills'

const HomePage: NextPage = () => (
  <>
    <Bio />
    <About />
    <Skills />
    <CardList />
  </>
)

export default HomePage
