function SidebarIcons({ icons, classes }) {
  return (
    <>
      {icons.length &&
        icons.map((IconName,idx) => <IconName className={classes} key={idx} />)}
    </>
  );
}

export default SidebarIcons;
