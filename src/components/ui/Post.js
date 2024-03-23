const Post = ({ item }) => {
    return (
      <div className="flex justify-center">
        <div className="card w-full max-w-md text-center my-6 bg-base-100 shadow-xl mx-4">
          <figure>
            <img src={item?.image} alt="Shoes" className="w-full object-cover h-48" />
          </figure>
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
  