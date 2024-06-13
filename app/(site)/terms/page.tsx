import Container from "@/components/layout/Container";

export default function TermsPage() {
  return (
    <Container className="textual-page">
      <div className="mx-auto mb-20 max-w-[500px] text-center">
        <h1 className="mb-7 text-4xl font-bold">Terms of service</h1>
      </div>

      <div className="mb-20">
        <p>
          By accessing and using this website, you accept and agree to be bound
          by these Terms of Service (the "Terms"). If you do not agree to these
          Terms, do not use the service. These Terms constitute a legally
          binding agreement
        </p>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 1</small>
          <br />
          Changes to Terms
        </h2>

        <p>
          We reserve the right to modify or replace these Terms at any time. We
          will notify you of any changes by posting the new Terms on this page.
          You are advised to review these Terms periodically for any changes.
          Your continued use of the service following the posting of any changes
          constitutes acceptance of those changes.
        </p>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 2</small>
          <br />
          Account Registration
        </h2>
        <p>
          To access certain features of the service, you may be required to
          create an account. You agree to:
        </p>
        <ul className="terms">
          <li>
            Provide accurate, current, and complete information during the
            registration process;
          </li>
          <li>
            Maintain and promptly update your account information to keep it
            accurate, current, and complete;
          </li>
          <li>
            Maintain the security of your password and accept all risks of
            unauthorized access to your account and the information you provide
            to us;
          </li>
          <li>
            Notify us immediately if you discover or otherwise suspect any
            security breaches related to the service or your account.
          </li>
        </ul>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 3</small>
          <br />
          Subscription and Payment
        </h2>
        <p>
          Certain features of the service may require a subscription. By
          subscribing, you agree to:
        </p>
        <ul className="terms">
          <li>
            Pay all applicable fees for your subscription plan, plus any
            applicable taxes;
          </li>
          <li>
            Provide valid payment information and authorize us to charge such
            payment methods;
          </li>
          <li>
            Acknowledge that your subscription will automatically renew at the
            end of each billing cycle unless you cancel it.
          </li>
        </ul>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 4</small>
          <br />
          Cancellation and Termination
        </h2>

        <p>
          You may cancel your subscription at any time through your account
          settings. Upon cancellation, you will continue to have access to the
          App until the end of your billing period. We reserve the right to
          suspend or terminate your account and access to the service at any
          time, with or without cause, and with or without notice.
        </p>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 5</small>
          <br />
          Intellectual Property
        </h2>

        <p>
          All content and materials available on the service, including but not
          limited to text, graphics, website name, code, images, and logos are
          protected by applicable copyright and trademark law. Any inappropriate
          use, including but not limited to the reproduction, distribution,
          display, or transmission of any content on this site is strictly
          prohibited, unless specifically authorized.
        </p>
      </div>

      <div className="mb-20">
        <h2>
          <small>Section 6</small>
          <br />
          Disclaimer of Warranties
        </h2>

        <p>
          The service is provided on an "as-is" and "as available" basis. We
          make no warranties, express or implied, regarding the operation or
          availability of the service, or the information, content, materials,
          or products included on the service.
        </p>
      </div>

      <p>Last change - July 2024</p>
    </Container>
  );
}
