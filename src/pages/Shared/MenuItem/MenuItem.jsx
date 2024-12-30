const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div className="flex md:flex-row flex-col gap-8 justify-center items-center">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="md:w-28 w-52 rounded-lg" src={image} alt="Image of item" />
           <div>
                <div className="flex justify-between items-center">
                <h3 className="text-lg uppercase text-gray-700 font-bold">{name} ------ </h3>
                <p className="text-[#BB8506] font-semibold">${price}</p>
                </div>
                <p className="text-gray-600 font-medium md:w-11/12">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;