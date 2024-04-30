import { ConfigProvider as AntdProvider, App } from "antd"

const ConfigProvider = ({children}) => {
  return (
    <AntdProvider>
        <App>{children}</App>
    </AntdProvider>

  )
}

export default ConfigProvider
