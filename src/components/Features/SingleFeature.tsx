import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title,buttontext, paragraph } = feature;
  return (
    <div className=" rounded-lg p-8 overflow-auto bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl" style={{ height: '400px', width: '350px' }}>
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary border-radius">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color dark:text-gray-300 sm:text-lg lg:text-base xl:text-lg" style={{ maxHeight: '300px', overflow: 'auto' }}>
          {paragraph}
        </p>

        <a href="#" className="btn-text gradi_border">
         <span> {buttontext} </span></a>
      </div>
    </div>
  );
};

export default SingleFeature;
