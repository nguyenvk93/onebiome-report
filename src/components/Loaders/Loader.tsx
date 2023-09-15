import 'loaders.css/loaders.css';

interface Props {
  styles?: any
  className?: string // type-full
}

const Loader = (props: Props) => {
  const { styles, className } = props;

  return (
    <div
      className={`line-scale loader-line ${className}`}
      style={{
        ...styles
      }}
    >
      <div className="f-line" />
      <div className="f-line" />
      <div className="f-line" />
      <div className="f-line" />
      <div className="f-line" />
    </div>
  );
};

Loader.defaultProps = {
  styles: {},
  className: ''
};

export default Loader;
