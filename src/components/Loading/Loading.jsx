import LoadingSpinner from "../../assets/others/loader3.gif";

const Loading = () => {
    return (
        <div className="flex justify-center items-center lg:pt-40 pt-24">
            <img className="w-80" src={LoadingSpinner} alt="Loading Spinner" />
        </div>
    );
};

export default Loading;