
import { ProductCard } from "..";
import { useWishListContext } from "../../utils/hooks/WishListProvider";
import "../products/allProducts/allProducts.css";


export const WishList = () => {

    const { wishList } = useWishListContext();


    return (
        <div className="product-card-container">
            {wishList?.map(({ ...props }) => (
                <ProductCard {...props} key={props.id} />
            ))}
        </div>
    )
}