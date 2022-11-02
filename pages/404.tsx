import type {NextPage} from 'next'

const NotFoundPage: NextPage = () => (
  <div className="content-container-fluid not-found-page">
    <div className="backdrop"></div>
    <div className="app-info">
      <h1 data-shadow="404!">404!</h1>
    </div>
  </div>
)

export default NotFoundPage
