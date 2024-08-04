import { Separator } from "@/components/ui/separator";

export default function TermsAndConditions() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Terms and Conditions
        </h1>
      </div>
      <main className="container mx-auto space-y-8 px-4 pb-16 sm:px-6 lg:px-8">
        <section>
          <p className="text-muted-foreground">
            Welcome to our platform. By accessing or using our services, you
            agree to be bound by these terms and conditions. Please read them
            carefully.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            1. Definitions
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                &quot;Company&quot;
              </h3>
              <p className="text-muted-foreground">
                Refers to Acme Inc., the owner and operator of this platform.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                &quot;User&quot;
              </h3>
              <p className="text-muted-foreground">
                Refers to any individual or entity that accesses or uses our
                services.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                &quot;Services&quot;
              </h3>
              <p className="text-muted-foreground">
                Refers to all the features, functionalities, and content
                provided by the Company on this platform.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                &quot;Content&quot;
              </h3>
              <p className="text-muted-foreground">
                Refers to all the text, images, videos, and other materials
                available on this platform.
              </p>
            </div>
          </div>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            2. Acceptance of Terms
          </h2>
          <p className="text-muted-foreground">
            By accessing or using our Services, you agree to be bound by these
            Terms and Conditions, our Privacy Policy, and any additional terms
            and conditions that may apply to specific features or services. If
            you do not agree with any part of these terms, please do not use our
            Services.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            3. User Accounts
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                Account Creation
              </h3>
              <p className="text-muted-foreground">
                To access certain features of our Services, you may be required
                to create an account. You agree to provide accurate and complete
                information when creating your account.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                Account Security
              </h3>
              <p className="text-muted-foreground">
                You are responsible for maintaining the confidentiality of your
                account credentials and for any activity that occurs under your
                account. The Company is not liable for any unauthorized access
                to your account.
              </p>
            </div>
          </div>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            4. Intellectual Property
          </h2>
          <p className="text-muted-foreground">
            The Company owns or licenses all intellectual property rights,
            including copyrights, trademarks, and patents, related to the
            Services and Content. You may not modify, copy, distribute,
            transmit, display, reproduce, or create derivative works from the
            Services or Content without the Company&apos;s prior written
            consent.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            5. Termination
          </h2>
          <p className="text-muted-foreground">
            The Company reserves the right to suspend, terminate, or restrict
            access to your account or the Services at any time for any reason,
            including if the Company reasonably believes that you have violated
            these Terms and Conditions.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            6. Limitation of Liability
          </h2>
          <p className="text-muted-foreground">
            The Company shall not be liable for any indirect, special,
            incidental, or consequential damages arising out of or related to
            your use of the Services. The Company&apos;s total liability shall
            not exceed $100.
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            7. Governing Law and Jurisdiction
          </h2>
          <p className="text-muted-foreground">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of [Jurisdiction]. Any disputes arising out
            of or related to these Terms and Conditions shall be resolved
            exclusively in the courts of [Jurisdiction].
          </p>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
            8. Modifications
          </h2>
          <p className="text-muted-foreground">
            The Company reserves the right to modify these Terms and Conditions
            at any time. Any changes will be effective upon posting the revised
            terms on the platform. Your continued use of the Services after the
            changes have been posted will constitute your acceptance of the
            revised Terms and Conditions.
          </p>
        </section>
      </main>
    </div>
  );
}
