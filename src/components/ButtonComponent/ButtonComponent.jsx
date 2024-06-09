import React from 'react'
import{Button} from 'antd'

const ButtonComponent = ({ size, styleButton, styleTextButton, textButton, disabled, ...rests }) => {
  const buttonStyle = {
    ...styleButton,
    background: disabled ? 'gray' : (styleButton && styleButton.background)
  };

  return (
    <Button
      size={size}
      style={buttonStyle}
      disabled={disabled}
      {...rests}
    >
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
};

ButtonComponent.defaultProps = {
  styleButton: {} // Provide an empty object as the default value for styleButton
};


export default ButtonComponent
