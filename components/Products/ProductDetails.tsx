import { ProductType } from '../../types/product'

interface ProductDetailsProps {
  product: ProductType
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <>
      {product.name}
      {/* <Typography>
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
      </Typography> */}
      {/* <Typography>
        <Title>In the box</Title>
        {product.items.map((item, index) => (
          <Paragraph key={index}>
            {item.quantity}x {item.name}
          </Paragraph>
        ))}
      </Typography> */}
    </>
  )
}

export default ProductDetails
