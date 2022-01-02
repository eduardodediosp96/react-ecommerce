import { Button, InputNumber, Typography } from 'antd'
import Paragraph from 'antd/lib/typography/Paragraph'
import Title from 'antd/lib/typography/Title'
import { ProductType } from '../../types/product'

interface ProductDetailsProps {
  product: ProductType
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      <Typography>
        <Title>{product.name}</Title>
        <Paragraph>{product.description}</Paragraph>
        <Paragraph strong>
          {product.currency} {product.price}
        </Paragraph>
      </Typography>
      <InputNumber></InputNumber>
      <Button type="primary">Add to cart</Button>
      <Typography>
        <Title>Features</Title>
        <Paragraph>{product.features}</Paragraph>
      </Typography>
      <Typography>
        <Title>In the box</Title>
        {product.items.map((item, index) =>
          <Paragraph key={index}>
            {item.quantity}x {item.name}
          </Paragraph>
        )}
      </Typography>
    </>
  )
}

export default ProductDetails
