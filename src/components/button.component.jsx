const Button = ({ children, additionalClasses, ...otherProps }) => {
    return (
        <button className={`custom-button ${additionalClasses}`} {...otherProps}>
        {children}
        </button>
    );
};

export default Button;