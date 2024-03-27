import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="الدعم الفني"
        description="من خلال هذة الصفحة يمكنك ان تتواصل مع الدعم الفني الخاص بنا عن طريق الاميل الخاص بنا و الاميل الخاص بك فلا تتردد في ان تتواصل معنا نحن في انتظارك طول الوقت"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
