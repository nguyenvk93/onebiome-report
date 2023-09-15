import { Input, Label } from 'reactstrap';
import FormGroup from './FormGroup';

interface Props {
  options?: any
  className?: string
  name?: string
  label?: string
  labelClassName?: string
  description?: string
  error?: any
  isDisableLabel?: boolean
  [x: string]: any
}

const RadioGroup = (props: Props) => {
  const {
    options,
    className,
    name,
    label,
    labelClassName,
    description,
    error,
    isDisableLabel,
    ...rest
  } = props;

  return (
    <FormGroup className={`radio-custom-group ${className}`}>
      {label && <Label className={`d-block ${labelClassName} ${isDisableLabel ? 'text-muted' : ''}`}>{label}</Label>}
      {description && <p className="mb-1">{description}</p>}
      {options.map((option: any) => {
        return (
          <span className="radio-item" key={option.value}>
            <Input
              {...rest}
              name={name}
              type="radio"
              id={`${name}-${option.value}`}
              value={option.value}
              checked={rest.value === option.value}
            />
            <Label for={`${name}-${option.value}`} className="me-5">
              {option.name || option.label}
            </Label>
          </span>
        );
      })}
      {error && (
        <div className="invalid-feedback d-block">{error.message}</div>
      )}
    </FormGroup>
  );
};

RadioGroup.defaultProps = {
  options: [],
  className: '',
  name: '',
  label: '',
  labelClassName: '',
  description: '',
  error: '',
  isDisableLabel: false
};

export default RadioGroup;
