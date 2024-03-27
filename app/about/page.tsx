import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="معلومات عنا"
        description="في هذة الصفحة سوف نتحدث عن بعض المعلومات عن شركتنا و الشهدات التي حصلنا عليها و شهدات الضمان و تشكيلة واسعة من السيارات التي تنيزنا"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
