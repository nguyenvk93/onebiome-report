interface Props {
  type: 'Back' | 'Next' | 'Filter'
  size?: number
  setColor?: string
}

const Icons = ({ type, size, setColor }: Props) => {
  let color = '';
  if (setColor) {
    color = setColor;
  } else {
    color = '#009fe3';
  }

  if (type === 'Back') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 34 34">
        <g fill="none" fillRule="evenodd">
          <g stroke={color}>
            <g transform="translate(-227 -160) translate(228 161)">
              <circle cx="16" cy="16" r="16" fill="#FFF" />
              <g strokeLinecap="round" strokeWidth="2">
                <g>
                  <g>
                    <path d="M0 4L4.5 0 9 4M4.5 1L4.5 14" transform="rotate(-90 15 6.5) translate(.5 .5) translate(.5 .5)" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }

  if (type === 'Next') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z" />
          <path
            d="m17.543 13.36-8.034 4.748A1 1 0 0 1 8 17.248V7.752a1 1 0 0 1 1.509-.86l8.034 4.747a1 1 0 0 1 0 1.722z"
            fill={color}
          />
        </g>
      </svg>
    );
  }

  if (type === 'Filter') {
    return (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.666 10.6665L26.666 10.6665" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M5.33398 21.3335L18.6673 21.3335" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="9.33398" cy="10.6665" rx="4" ry="4" transform="rotate(90 9.33398 10.6665)" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="22.666" cy="21.3335" rx="4" ry="4" transform="rotate(90 22.666 21.3335)" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <></>
  );
};

Icons.defaultProps = {
  size: 34,
  setColor: ''
};

export default Icons;
