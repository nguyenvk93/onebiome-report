import 'loaders.css/loaders.css';

interface Props {
  styles?: any
  className?: string // type-full
  text: string
}

const LoaderWithText = (props: Props) => {
  const { styles, className, text } = props;

  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center ${className}`}
      style={{
        ...styles
      }}
    >
      <div
        className="line-scale loader-line"
      >
        <div className="f-line" />
        <div className="f-line" />
        <div className="f-line" />
        <div className="f-line" />
        <div className="f-line" />
      </div>
      <div>{text}</div>
    </div>
  );
};

LoaderWithText.defaultProps = {
  styles: {},
  className: ''
};

export default LoaderWithText;
