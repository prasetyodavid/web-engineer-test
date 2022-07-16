import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import UsersTableClientSide from '../component/table/UsersTableClientSide';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';

export default function Example() {
  return (
    <>
      <Header></Header>
      <Container className="tablecontainer">
        <UsersTableClientSide />
      </Container>
      <Footer></Footer>
    </>
  );
}
