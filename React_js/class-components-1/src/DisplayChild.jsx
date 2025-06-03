const DisplayChild = ({ handleChange }) => {
    return (
        <input
            type="text"
            placeholder="Type something..."
            onChange={handleChange}
        />
    );
};

export default DisplayChild;