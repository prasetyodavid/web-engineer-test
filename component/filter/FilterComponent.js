import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const FilterComponent = ({
  filterText,
  onFilter,
  searchUser,
  selectGender,
  onClear,
  valueGender,
  handleSubmit
}) => (
  <>
    <Container fluid className="searchbar">
      <Row>
        <Col md="8" xs="12">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="3" xs="12">
                <InputGroup>
                  <Form.Select
                    aria-label="Gender"
                    value={valueGender}
                    selected={valueGender}
                    onChange={selectGender}
                  >
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </InputGroup>
              </Col>
              <Col md="4" xs="12">
                <Form.Control
                  placeholder="Search User"
                  value={filterText}
                  onChange={onFilter}
                />
              </Col>
              <Col md="2" xs="6">
                <Button className="btn btn-primary" onClick={searchUser}>
                  <svg
                    className="svg-icon search-icon"
                    aria-labelledby="title desc"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19.9 19.7"
                  >
                    <g className="search-path" fill="none" stroke="#ffffff">
                      <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
                      <circle cx="8" cy="8" r="7" />
                    </g>
                  </svg>
                </Button>
              </Col>
              <Col md="3" xs="6">
                <Button className="btn btn-primary" onClick={onClear}>
                  RESET
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </>
);

export default FilterComponent;
