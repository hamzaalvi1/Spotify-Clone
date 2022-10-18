import styles from "./Layout.module.scss"
function Layout({children}) {
  return (
    <div className="layout">
       <h2>Hello World</h2>
      {children}
    </div>
  )
}

export default Layout