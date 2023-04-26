import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../../data/itens.json"
import Header from '../../view/components/Header'

export default function Store() {
  return (
    <>
      <Header/>
      <Row md={1} xs={1} lg={4} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
