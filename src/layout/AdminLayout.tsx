type LayoutProps = {
    children: React.ReactNode,
  };
  
const AdminLayout = ({children} : LayoutProps)=> {
  return (
    <>
      <div className="navbar">
          nav
      </div>
      <div>{children}</div>
      <div className="footer">
          footer
      </div>
    </>
  );
}
  
export default AdminLayout;
    