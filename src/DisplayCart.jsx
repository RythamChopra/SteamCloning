import Checkout from './Checkout';

const DisplayCart = ({ cartItems, onRemove }) => {

  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    return total + itemPrice;
  }, 0);

  return (
    <div className="bg-gray-400 p-4 rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4">Games added</h2>

      <div>
        {cartItems.length === 0 ? (
          <p>The cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-2 rounded-lg shadow-md mb-4"
            >
              <img
                className="w-16 h-16 object-cover rounded-lg"
                src={item.imageSrc}
                alt={item.title}
              />

              <div className="ml-4">
                <h3 className="font-bold">{item.title}</h3>
                <p>{isNaN(item.price) ? item.price : `Rs. ${item.price}`}</p>
              </div>

              <button
                className="ml-auto bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400"
                onClick={() => onRemove(item)}
              >
                Remove
              </button>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Amount: Rs. {totalAmount.toFixed(2)}</h3>
            {/* Checkout Button */}
            <Checkout totalAmount={totalAmount} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayCart;
