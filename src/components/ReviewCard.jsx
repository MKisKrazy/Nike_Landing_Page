import { star } from "../assets/icons"


const ReviewCard = ({imgUrl,feedback,customerName,rating}) => {
  return (
    <section className="flex flex-col justify-center items-center ">
        <img 
            src={imgUrl}
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px] hover:border-2 hover:border-coral-red"
        />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5 ">
            <img src={star} width={24} height={24} className="object-contain m-0" />
            <p className="text-xl font-monsterrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-bold text-center">{customerName}</h3>

    </section>
  )
}

export default ReviewCard