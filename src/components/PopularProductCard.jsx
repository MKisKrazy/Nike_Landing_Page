import { star } from "../assets/icons"


const PopularProductCard = ({imgURL,name,price,rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] rounded-3xl  transition-all ease-in-out delay-100 hover:shadow-xl  hover:translate-y-1 hover:shadow-gray-400 hover:scale-105"  />

        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="rating" height={24} width={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>
        </div>
            <h3 className="mt-2 text-2xl font-palanquin font-semibold leading-normal">{name}</h3>
            <p className="font-montserrat text-xl leading-normal font-semibold text-coral-red">{price}</p>
        
    </div>
    
  )
}

export default PopularProductCard