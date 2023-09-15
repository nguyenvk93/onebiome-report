interface Props {
  normalSentence: string
  linkSentence: string
  onLinkClick: (() => void) | any
  className?: string
}

const LabelLink = (props: Props) => {
  const {
    normalSentence, linkSentence, onLinkClick, className
  } = props;
  return (
    <div className={className} style={{ color: '#9da6b4' }}>
      {normalSentence}&nbsp;
      <span
        aria-hidden
        className="type-link"
        onClick={() => { return onLinkClick(); }}
      >
        <strong>{linkSentence}</strong>
      </span>
    </div>
  );
};

LabelLink.defaultProps = {
  className: ''
};

export default LabelLink;
