const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    
  return (
    <div className="relative card bg-base-100 border border-gray-300 shadow-md">
      <figure>
        <img
        className="w-full"
          src={image}
          alt="Card Image"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 py-1 rounded-full bg-slate-900 text-white font-medium">${price}</p>
      <div className="card-body w-full flex flex-col text-center items-center">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 font-medium">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="mt-3 bg-slate-100 btn border-0 border-b-4 btn-outline border-amber-500 uppercase text-amber-500 block mx-auto px-8">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
