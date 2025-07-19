import type {NextPage} from 'next'
import About from '@/components/Home/About'
import Bio from '@/components/Home/Bio'
import CardList from '@/components/Home/CardList'
import Skills from '@/components/Home/Skills'

const HomePage: NextPage = () => (
  <>
    <Bio />
    <About />
    <Skills />
    <CardList />
  </>
)

export default HomePage
