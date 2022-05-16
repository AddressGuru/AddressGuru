import Category from "../../Molecule/Category/Category"
import CategoryListing from "../../Molecule/CategoryListing/CategoryListing"
import listtop from "../../Asset/Image/lsittop.png";
const ListingSection = () => {
        return (
                <div className="container">  
                <div className="px-40 mb-4 py-2">
                <img src={listtop} className="w-full "/>
                </div>
                        

                        <CategoryListing />

                </div>


        )
}


export default ListingSection