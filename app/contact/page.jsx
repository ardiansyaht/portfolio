import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { MailIcon, HomeIcon, PhoneCall, Mail, Github } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        {/* text & illustration*/}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/*text*/}

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Lets Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor, sit amet constectur
            </p>
          </div>
          {/*illustration*/}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/*info text & form*/}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text*/}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary"></MailIcon>
              <div>ardiansyah3151@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary"></PhoneCall>
              <div>+6281912388170</div>
            </div>
            <div className="flex items-center gap-x-8">
              <InstagramLogoIcon
                size={18}
                className="text-primary"
              ></InstagramLogoIcon>
              <div>ardiansyah_1106</div>
            </div>
          </div>
          <form>
            <Form />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
