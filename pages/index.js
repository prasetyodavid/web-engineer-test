import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header></Header>
      <Container>
        <h1 className="hero">Welcome</h1>
        <Row>
          <Col md="6">
            <Button
              className="btn btn-primary"
              onClick={() => router.push('/example')}
            >
              Go To Example 1
            </Button>
            <p>*Client Side Example</p>
          </Col>
          <Col md="6">
            <Button
              className="btn btn-primary"
              onClick={() => router.push('/serverside')}
            >
              Go To Example 2
            </Button>
            <p>*Server Side Pagination Example</p>
          </Col>
        </Row>
        <h1 className="hero">
          <a
            target="_blank"
            href="https://github.com/prasetyodavid/web-engineer-test"
          >
            Github
          </a>
        </h1>
      </Container>
      <Footer></Footer>
    </div>
  );
}
