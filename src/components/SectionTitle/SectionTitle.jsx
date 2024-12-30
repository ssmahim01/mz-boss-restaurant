const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-2/5 mx-auto lg:w-4/12 text-center space-y-2 my-8">
            <p className="text-lg italic font-medium text-yellow-400">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase font-semibold border-y-4 py-4 border-[#E8E8E8]">{heading}</h3>
        </div>
    );
};

export default SectionTitle;