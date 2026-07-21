const DashboardHeading = ({title,des}) => {
    return (
        <div className="ml-10 my-5">
            <h2 className="text-3xl font-bold text-green-400">{title}</h2>

            <p className="text-default-500 mt-2 text-gray-600">
               {des}
            </p>
        </div>
    );
};

export default DashboardHeading;
