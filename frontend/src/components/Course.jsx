import React from 'react';
import list from "../../public/list.json";
import Cards from "../components/Cards";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-20 item-center justify-center text-center'>
          <h1 className='text-3xl font-bold md:text-4xl'>We're delighted to have you <span className="text-pink-500">Here! :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet explicabo unde nisi, veniam numquam. Nulla repudiandae itaque eos consequuntur numquam hic maiores et earum provident. Mollitia voluptate numquam nobis?</p>
          <Link to="/">
          <button className="btn btn-secondary mt-7 w-20 px-4 py-4">Back</button>
          </Link>
          
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 '>
          
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
