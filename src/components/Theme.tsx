import ProfileDropdown from "./ProfileDropdown";
import BrandLabel from "./BrandLabel";

interface ThemeProps {
  children: React.ReactNode;
  viewTitle: string;
  inputs?: React.ReactNode;
}

const Theme = (props: ThemeProps) => {
  const { children, viewTitle, inputs } = props;
  return (
    <div className="flex flex-col">
      <BrandLabel />
      <div className="m-3 flex justify-around align-middle items-center">
        <div className="text-xl">{viewTitle}</div>
        <div className="flex items-center justify-around align-middle h-[40px]">
          <div className="mr-2">{inputs}</div>
          <ProfileDropdown />
        </div>
      </div>
      <hr />
      {children}
    </div>
  );
};

export default Theme;
