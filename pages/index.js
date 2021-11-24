import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Animefest 2022</title>
        <meta name="description" content="February 12 at UC San Diego's Price Center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="p-5 text-center landing">
        <h1 className="display-4">Fluid jumbotron</h1>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </Container>

      <Container fluid className="w-100 p-5 mt-4 section" id="about">
        <h1 className="text-left mb-4">About</h1>
        Welcome to Animefest 2022! For a taste of the con, take a look at our promo video of Animefest 2019:
      </Container>

      <main className="main">
        <h1 className="title">
          Home
        </h1>

        {/* <p className="description">
          Get started by editing{' '}
          <code className="code">pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

        <Button variant="outline-primary">Vote for the winners here!</Button> */}
      </main>

      {/* <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            <img src="images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
