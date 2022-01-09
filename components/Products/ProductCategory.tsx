interface ProductCategoryProps {
  key: number
  category: string
}

function ProductCategory(props: ProductCategoryProps) {
  return <p>{props.category}</p>
}

export default ProductCategory
