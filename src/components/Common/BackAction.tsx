import { useNavigate } from 'react-router-dom';
import Icons from './Icons';

interface Props {
  id?: string
  title?: string
  className?: string
  onClick?(): void | undefined
}

const BackAction = (props: Props) => {
  const {
    id, title, className, onClick
  } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <span aria-hidden id={id} className={`btn-back-page ${className}`} onClick={handleClick}>
      <span className="f-icon"><Icons type="Back" /></span>
      {title}
    </span>
  );
};

BackAction.defaultProps = {
  id: '',
  title: 'Back',
  onClick: null,
  className: ''
};

export default BackAction;
