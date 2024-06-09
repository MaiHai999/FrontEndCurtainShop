import React from 'react'
import{Button} from 'antd'

const ButtonClickComponent = ({ size, styleButton, styleTextButton, textButton, disabled, onClick, ...rests }) => {
  const buttonStyle = {
    ...styleButton,
    background: disabled ? 'gray' : (styleButton && styleButton.background)
  };

  return (
    <Button
      size={size}
      style={buttonStyle}
      disabled={disabled}
      onClick={onClick}
      {...rests}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

ButtonClickComponent.defaultProps = {
  styleButton: {} // Provide an empty object as the default value for styleButton
};


export default ButtonClickComponent
