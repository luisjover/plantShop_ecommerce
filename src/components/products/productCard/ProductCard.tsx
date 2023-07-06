import { useNavigate } from "react-router-dom"
import { Product, User } from "../../../types/types"
import { MdFavorite } from "react-icons/md";
import { useWishListContext } from "../../../utils/hooks/WishListProvider";
import { useProductContext } from "../../../utils/hooks/ProductsProvider";
import { getData, updateUserWishlist } from "../../../api/functions/apiFetch";
import "./productCard.css"
import { useEffect } from "react";
import { updateStorageList } from "../../../utils/functions/manageWishList";
import { checkLoggedUser } from "../../../utils/functions/handleLocalStorage";


export const ProductCard = (props: Product) => {

    const navigate = useNavigate()
    const { products, updateProducts } = useProductContext()
    const { wishList, updateWishList } = useWishListContext()

    if (products === null) {

        const getFetch = async () => {
            const newProducts = await getData("products") as Product[];
            updateProducts(newProducts)
        }
        getFetch()
    }

    const currentProduct = products?.find((product) => product.id === props.id) as Product;


    useEffect(() => {



    }, [])



    const handleWishList = (event: React.TouchEvent) => {

        event.stopPropagation()

        const currentUser = checkLoggedUser() as User

        const newWishList = [...wishList]
        const productIndex = wishList.findIndex((product) => product.id === props.id)

        if (productIndex === -1) {
            newWishList.push(currentProduct)


        }
        else {
            newWishList.splice(productIndex, 1)



        }

        updateWishList(newWishList)
        updateUserWishlist(currentUser.id.toString(), newWishList)
        updateStorageList(newWishList)

    }


    return (

        <div className="product-card" onClick={() => navigate(`/products/${props.id}`)}>
            <figure className="product-card-figure">
                <img className="product-card-img" src={props.image[0]} alt={`Image of a ${props.name} plant`} />
                <MdFavorite role="button" onClick={handleWishList} className={`fav-icon ${wishList.includes(currentProduct) ? "active-icon" : ""}`} />
            </figure>
            <h4>{props.name}</h4>
            <p>{props.price} €</p>
        </div>


    )
}
