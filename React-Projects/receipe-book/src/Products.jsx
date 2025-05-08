import React from "react";

const Products = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                {/* Recipe Image */}
                <img
                  src={item.recipe.image || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={item.recipe.label || "Recipe Image"}
                />
                <div className="card-body">
                  {/* Recipe Title */}
                  <h5 className="card-title">{item.recipe.label}</h5>

                  {/* Recipe Source (You can change this field as needed) */}
                  <p className="card-text">{item.recipe.source}</p>

                
                  <p className="card-text">
                    <strong>Calories: {Math.round(item.recipe.calories)}</strong>
                  </p>

                
                  <p>
                    <a
                      href={item.recipe.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Full Recipe
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;