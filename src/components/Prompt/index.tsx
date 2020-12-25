import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'antd-mobile/lib/modal/index';
import { Action } from 'antd-mobile/lib/modal/PropsType';

export default function prompt(
  title: React.ReactNode,
  message: React.ReactNode,
  actions = [{text: '取消'}, {text: '确定'}]
) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  function stopScroll(e: TouchEvent) {
    e.preventDefault();
  }

  function close() {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    document.body.removeEventListener('touchmove', stopScroll);
  }

  const footer = actions.map((button: Action<React.CSSProperties>) => {
    const oldOnPress = button.onPress || (() => {});
    button.onPress = () => {
      const res = oldOnPress();
      if ( res && res.then ) {
        res.then(close).catch(() => {});
      }
      else {
        close();
      }
    }
    return button;
  })

  document.body.addEventListener('touchmove', stopScroll, {passive: false});

  function focusInput(inputDom: HTMLInputElement) {
    setTimeout(() => {
      inputDom.focus();
    }, 200);
  }

  ReactDOM.render(<Modal
    visible={true}
    transparent={true}
    title={title}
    closable={false}
    maskClosable={false}
    footer={footer}
  >
    <div>{message}</div>
    <div className="am-modal-input-container">
      <div className="am-modal-input">
        <input ref={node => focusInput(node as HTMLInputElement)} type="text" />
      </div>
    </div>
  </Modal>, div);
}