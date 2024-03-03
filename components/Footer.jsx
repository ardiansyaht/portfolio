import Socials from "./Socials";

const Footer = () => {
  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px]"
          ></Socials>
          {/*copyright*/}
          <div className="text-muted-foreground">
            Copyright &copy; Ardhiansyah Tanjung. All right reserved
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
