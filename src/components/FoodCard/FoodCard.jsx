const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Card Image"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 py-1 rounded-full bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="mt-3 bg-slate-100 btn border-0 border-b-4 btn-outline border-amber-500 uppercase text-amber-500 block mx-auto">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
