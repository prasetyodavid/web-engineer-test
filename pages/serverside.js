import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import UsersTableServerSide from '../component/table/UsersTableServerSide';
import Header from '../component/header/header';
import Footer from '../component/footer/footer';

export default function Serverside() {
  return (
    <>
      <Header></Header>
      <Container className="tablecontainer">
        <UsersTableServerSide />
      </Container>
      <Footer></Footer>
    </>
  );
}
