
const Post = ({item}) => {
    return (
        <div>
            <div className="card max-w-72 text-center my-6 max-h-72 bg-base-100 shadow-xl">
                <figure><img src={item?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-bold">
                                {item?.title}
                    </h2>
                    <p>{item?.description}</p>

                </div>
            </div>
        </div>
    );
};

export default Post;