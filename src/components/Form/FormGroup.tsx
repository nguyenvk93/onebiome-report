interface Props {
  className?: string;
  children: any;
}

const FormGroup = (props: Props) => {
  const { className, children } = props;
  return (
    <div className={`form-group ${className}`}>{children}</div>
  );
};

FormGroup.defaultProps = {
  className: ''
};

export default FormGroup;
