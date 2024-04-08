import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="cols-span-3">
      <h2 className="text-2xl">News Details</h2>
        </div>
        <div>
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
