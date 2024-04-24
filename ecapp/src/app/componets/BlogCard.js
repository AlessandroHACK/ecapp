import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* Overlay con sombra negra que cubre toda la imagen */}
      <div className="relative">
        {/* Asegurarse de que la imagen cubra el contenedor y se centre correctamente */}
        <img className="w-full h-48 object-cover object-center" src={blog.acf.image} alt={blog.title.rendered} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between">
          {/* Categorías del blog en la parte superior */}
          <div className="px-6 py-2">
            {blog.acf.category.map(category => (
              <span key={category.term_id} className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">{category.name}</span>
            ))}
          </div>
          {/* Título del blog en la parte inferior */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{blog.title.rendered}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
