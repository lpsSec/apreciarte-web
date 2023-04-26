import { Button, Card } from "react-bootstrap"
import { FaCoins } from 'react-icons/fa';


type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span className="fs-3">{name}</span>
          <FaCoins/>
          <span className="ms-1 text-muted">{price}</span>
         
        </Card.Title>
        <div className="mt-auto">
          <Button className="w-100">
            Resgatar recompensa
          </Button>
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
