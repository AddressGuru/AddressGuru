import Category from "../../Molecule/Category/Category"
import CategoryListing from "../../Molecule/CategoryListing/CategoryListing"
import listtop from "../../Asset/Image/lsittop.png";
const ListingSection = () => {
        return (
                <div>
                <div className="px-80 mb-4">
                <img src={listtop} className="w-full "/>
                </div>
                        

                        <CategoryListing />

                </div>


        )
}


export default ListingSection