---
id: RC-field-form
title: 实现RCForm
---

实现目标

- Form
- Field(Form.Item)
- 提交检验
- 表单相关函数如： getFieldsValue, setFieldValues 等等
- 使用 hooks 对外暴露 ref，和 context 存储变量

```jsx title="/src/index.js"
import React from "react";
import _Form from "./Form";
import useForm from "./useForm";
import Field from "./Field";

// 转发Ref
const Form = React.forwardRef(_Form);
Form.useForm = useForm;
export { Form, Field };
```

```jsx title="/src/components/Form.js"
import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export default ({ children, form, onFinish, onFinishFailed }, ref) => {
  const [formInstance] = useForm(form);
  console.log(formInstance, "formInstance");
  React.useImperativeHandle(ref, () => formInstance);
  formInstance.setCallBack({
    onFinish,
    onFinishFailed,
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};
```

```jsx title="/src/components/Field.js"
import React from "react";
import FieldContext from "./FieldContext";

export default class Field extends React.Component {
  static contextType = FieldContext;
  componentDidMount() {
    const { registerField } = this.context;
    this.unregisterField = registerField(this);
  }
  componentWillUnmount() {
    if (this.unregisterField) {
      this.unregisterField();
    }
  }
  onStoreChange = () => {
    this.forceUpdate();
  };

  getControlled = () => {
    const { name } = this.props;
    const { getFieldValue, setFieldValues } = this.context;
    return {
      value: getFieldValue(name),
      onChange: (event) => {
        const newValue = event.target.value;
        setFieldValues({ [name]: newValue });
      },
    };
  };
  render() {
    const { children } = this.props;
    const returnChildrenNode = React.cloneElement(
      children,
      this.getControlled()
    );
    return returnChildrenNode;
  }
}
```

```jsx title="/src/components/useForm.js"
import React from "react";
// 创建一个仓库
class FormStore {
  constructor(props) {
    // 表单数据
    this.store = {};
    // 回调函数
    this.callbacks = [];
    // 注册表单
    this.fieldEntities = [];
  }
  getForm() {
    return {
      getFieldValue: this.getFieldValue,
      setFieldValues: this.setFieldValues,
      registerField: this.registerField,
      submit: this.submit,
      setCallBack: this.setCallBack,
      getFieldValues: this.getFieldValues,
    };
  }
  registerField = (entity) => {
    this.fieldEntities.push(entity);
    return () => {
      // 取消
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      delete this.store[entity.props.name];
    };
  };
  setCallBack = (callback) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    };
  };
  getFieldValues = () => {
    return this.store;
  };
  getFieldValue = (name) => {
    /**
     * 不推荐这种写法，store是一个引用变量，可以在其他地方
     * 随意修改数据
     * return this.store[name]
     */
    const result = this.store[name];
    return result;
  };
  setFieldValues = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore,
    };
    // 这里是获取组件当中的方法，遍历查看是否有变化，需要优化
    this.fieldEntities.forEach((entity) => {
      const { name } = entity.props;
      Object.keys(newStore).forEach((key) => {
        if (name === key) {
          entity.onStoreChange();
        }
      });
    });
  };
  submit = () => {
    // 校验，
    // 根据校验结果，如果成功调用onFinish,失败调用onFinishFailed
    console.log("提交数据");
    let err = this.validate();
    // 在这里校验 成功的话 执行onFinish ，失败执行onFinishFailed
    const { onFinish, onFinishFailed } = this.callbacks;
    if (err.length === 0) {
      // 成功的话 执行onFinish
      onFinish(this.store);
    } else if (err.length > 0) {
      // ，失败执行onFinishFailed
      onFinishFailed(err);
    }
  };
  // 可以替换成async-validate
  validate = () => {
    let err = [];
    this.fieldEntities.forEach((entity) => {
      const { name, rules } = entity.props;
      let value = this.getFieldValue(name);
      let rule = rules && rules[0];
      console.log(rule);
      if (rule && rule.required && (value === undefined || value === "")) {
        err.push({
          [name]: rule.message,
          value,
        });
      }
    });
    return err;
  };
}
// 自定义hook
export default function useForm() {
  const formRef = React.useRef();
  if (!formRef.current) {
    const formStore = new FormStore();
    formRef.current = formStore.getForm();
  }
  return [formRef.current];
}
```

```jsx title='/src/component/FormContext'
import React from "react";
const FieldContext = React.createContext();

export default FieldContext;
```

## 效果预览

[![Edit React-RCForm](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-rcform-4t7qq?fontsize=14&hidenavigation=1&theme=dark)

import Iframe from '../Iframe.js'

<Iframe url={'https://codesandbox.io/embed/react-rcform-4t7qq?fontsize=14&hidenavigation=1&theme=dark'}></Iframe>
